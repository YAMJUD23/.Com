import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Repeat,
  SkipBack,
  SkipForward,
  Search,
  BookOpen,
  Headphones,
  Eye,
  EyeOff,
  Download,
  FileText,
  Sparkles,
  AlignJustify,
  ListOrdered
} from 'lucide-react';
import {
  QURAN_25_SURAHS,
  QURAN_RECITERS,
  QuranSurah25Item,
  QuranReciter
} from '../data/quran25SurahsData';
import {
  QURAN_LARGE_PDF_PACKS,
  QuranLargePdfPackId,
  downloadQuranLargePdfPack,
  downloadSingleSurahLargePdf
} from '../utils/pdfGenerator';

export const Quran25ReaderView: React.FC = () => {
  const [selectedSurahNum, setSelectedSurahNum] = useState<number>(1);
  const [selectedReciterId, setSelectedReciterId] = useState<string>('dossari');
  const [searchFilter, setSearchFilter] = useState<string>('');

  // Audio playback mode:
  // 'continuous' = Lire toute la sourate d'un coup avec suivi automatique du curseur verset par verset
  // 'single-ayah' = Mode verset par verset (s'arrête après le verset ou après N répétitions)
  const [playMode, setPlayMode] = useState<'continuous' | 'single-ayah'>('continuous');

  // Visual reading layout mode:
  // 'verses' = Cartes interactives verset par verset avec curseur mot à mot
  // 'full-text' = Lire toute la sourate d'un coup (texte continu d'un seul bloc avec surlignage en direct)
  const [readingLayout, setReadingLayout] = useState<'verses' | 'full-text'>('verses');

  const [activeAyahNumber, setActiveAyahNumber] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [verseProgress, setVerseProgress] = useState<number>(0); // 0 to 1 within current verse
  const [repeatCountPerAyah, setRepeatCountPerAyah] = useState<1 | 3 | 5>(1);
  const [currentRepeatIteration, setCurrentRepeatIteration] = useState<number>(1);
  const [playbackRate, setPlaybackRate] = useState<number>(0.8);
  const [autoScrollCursor, setAutoScrollCursor] = useState<boolean>(true);
  const [audioStatusMsg, setAudioStatusMsg] = useState<string>('');
  const [hidePhonetic, setHidePhonetic] = useState<boolean>(false);
  const [hideFrench, setHideFrench] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const preloadAudioRef = useRef<HTMLAudioElement | null>(null);
  const verseRefs = useRef<Record<number, HTMLElement | null>>({});
  const pdfSectionRef = useRef<HTMLDivElement | null>(null);

  // Refs to avoid stale closures in audio event handlers
  const activeAyahRef = useRef<number>(activeAyahNumber);
  const playModeRef = useRef<'continuous' | 'single-ayah'>(playMode);
  const repeatCountRef = useRef<1 | 3 | 5>(repeatCountPerAyah);
  const repeatIterRef = useRef<number>(currentRepeatIteration);
  const playbackRateRef = useRef<number>(playbackRate);
  const selectedSurahNumRef = useRef<number>(selectedSurahNum);
  const selectedReciterIdRef = useRef<string>(selectedReciterId);

  const currentSurah: QuranSurah25Item =
    QURAN_25_SURAHS.find((s) => s.number === selectedSurahNum) || QURAN_25_SURAHS[0];

  const currentReciter: QuranReciter =
    QURAN_RECITERS.find((r) => r.id === selectedReciterId) || QURAN_RECITERS[0];

  const matchingPdfPack =
    QURAN_LARGE_PDF_PACKS.find((p) => p.surahNumbers.includes(currentSurah.number)) ||
    QURAN_LARGE_PDF_PACKS[0];

  useEffect(() => {
    activeAyahRef.current = activeAyahNumber;
  }, [activeAyahNumber]);

  useEffect(() => {
    playModeRef.current = playMode;
  }, [playMode]);

  useEffect(() => {
    repeatCountRef.current = repeatCountPerAyah;
  }, [repeatCountPerAyah]);

  useEffect(() => {
    repeatIterRef.current = currentRepeatIteration;
  }, [currentRepeatIteration]);

  useEffect(() => {
    playbackRateRef.current = playbackRate;
    const audioEl = audioRef.current;
    if (audioEl) {
      audioEl.defaultPlaybackRate = playbackRate;
      audioEl.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    selectedSurahNumRef.current = selectedSurahNum;
  }, [selectedSurahNum]);

  useEffect(() => {
    selectedReciterIdRef.current = selectedReciterId;
  }, [selectedReciterId]);

  // Smoothly scroll the active verse into view when the cursor advances during playback
  useEffect(() => {
    if (!isPlaying || !autoScrollCursor) return;
    const el = verseRefs.current[activeAyahNumber];
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeAyahNumber, isPlaying, autoScrollCursor]);

  const filteredSurahs = QURAN_25_SURAHS.filter((s) => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      String(s.number).includes(q) ||
      s.namePhonetic.toLowerCase().includes(q) ||
      s.nameFrench.toLowerCase().includes(q) ||
      s.nameArabic.includes(searchFilter)
    );
  });

  const preloadNextAyahAudio = (
    surahNum: number,
    nextAyahNum: number,
    reciter: QuranReciter,
    maxVerses: number
  ) => {
    if (nextAyahNum > maxVerses) return;
    if (!preloadAudioRef.current) {
      preloadAudioRef.current = new Audio();
    }
    preloadAudioRef.current.preload = 'auto';
    preloadAudioRef.current.src = reciter.getAyahAudioUrl(surahNum, nextAyahNum);
  };

  const playAyahWithCursor = (
    surahNum: number,
    ayahNum: number,
    reciter: QuranReciter,
    modeOverride?: 'continuous' | 'single-ayah'
  ) => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    const targetSurah =
      QURAN_25_SURAHS.find((s) => s.number === surahNum) || currentSurah;
    const effectiveMode = modeOverride || playModeRef.current;

    activeAyahRef.current = ayahNum;
    setActiveAyahNumber(ayahNum);
    setVerseProgress(0);

    const url = reciter.getAyahAudioUrl(surahNum, ayahNum);
    audioEl.src = url;
    audioEl.defaultPlaybackRate = playbackRateRef.current;
    audioEl.playbackRate = playbackRateRef.current;

    const currentVerseObj = targetSurah.verses.find((v) => v.number === ayahNum);
    setAudioStatusMsg(
      effectiveMode === 'continuous'
        ? `Lecture continue · Partie ${ayahNum}/${targetSurah.versesCount} : ${
            currentVerseObj ? currentVerseObj.phonetic : ''
          }`
        : `Verset ${ayahNum}/${targetSurah.versesCount} · ${reciter.nameFr}`
    );

    // Preload next verse immediately for instant transition
    preloadNextAyahAudio(surahNum, ayahNum + 1, reciter, targetSurah.versesCount);

    audioEl
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
        setAudioStatusMsg(
          'Cliquez sur Lecture pour lancer la récitation de ' + reciter.nameFr
        );
      });
  };

  const handleTogglePlay = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    if (isPlaying) {
      audioEl.pause();
      setIsPlaying(false);
    } else {
      playAyahWithCursor(
        currentSurah.number,
        activeAyahNumber,
        currentReciter,
        playMode
      );
    }
  };

  const handleStartFullSurahContinuous = () => {
    setPlayMode('continuous');
    playModeRef.current = 'continuous';
    setCurrentRepeatIteration(1);
    repeatIterRef.current = 1;
    playAyahWithCursor(currentSurah.number, 1, currentReciter, 'continuous');
  };

  const handleSelectSurah = (surahNum: number) => {
    const audioEl = audioRef.current;
    if (audioEl) {
      audioEl.pause();
    }
    setIsPlaying(false);
    setVerseProgress(0);
    setSelectedSurahNum(surahNum);
    selectedSurahNumRef.current = surahNum;
    setActiveAyahNumber(1);
    activeAyahRef.current = 1;
    setCurrentRepeatIteration(1);
    repeatIterRef.current = 1;
    setAudioStatusMsg('');
  };

  const handleClickVerse = (ayahNumber: number) => {
    setCurrentRepeatIteration(1);
    repeatIterRef.current = 1;
    playAyahWithCursor(currentSurah.number, ayahNumber, currentReciter, playMode);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const el = e.currentTarget;
    if (el.duration && Number.isFinite(el.duration) && el.duration > 0) {
      const ratio = Math.min(1, Math.max(0, el.currentTime / el.duration));
      setVerseProgress(ratio);
    }
  };

  const handleAudioEnded = () => {
    const surahObj =
      QURAN_25_SURAHS.find((s) => s.number === selectedSurahNumRef.current) ||
      currentSurah;
    const reciterObj =
      QURAN_RECITERS.find((r) => r.id === selectedReciterIdRef.current) ||
      currentReciter;
    const currentAyah = activeAyahRef.current;
    const currentIter = repeatIterRef.current;
    const targetRepeats = repeatCountRef.current;
    const currentMode = playModeRef.current;

    setVerseProgress(1);

    // 1. Check if current verse needs another repeat iteration
    if (currentIter < targetRepeats) {
      const nextIter = currentIter + 1;
      repeatIterRef.current = nextIter;
      setCurrentRepeatIteration(nextIter);
      playAyahWithCursor(surahObj.number, currentAyah, reciterObj, currentMode);
      return;
    }

    // 2. If in 'single-ayah' mode, stop after finishing the selected verse (and its repeats)
    if (currentMode === 'single-ayah') {
      setIsPlaying(false);
      repeatIterRef.current = 1;
      setCurrentRepeatIteration(1);
      setVerseProgress(0);
      return;
    }

    // 3. In 'continuous' mode ("Lire toute la sourate d'un coup"), automatically advance cursor to next verse!
    if (currentAyah < surahObj.versesCount) {
      const nextAyah = currentAyah + 1;
      repeatIterRef.current = 1;
      setCurrentRepeatIteration(1);
      playAyahWithCursor(surahObj.number, nextAyah, reciterObj, 'continuous');
    } else {
      setIsPlaying(false);
      repeatIterRef.current = 1;
      setCurrentRepeatIteration(1);
      setVerseProgress(0);
      setAudioStatusMsg(
        `Fin de la récitation de Sourate ${surahObj.namePhonetic}`
      );
    }
  };

  // Helper to render word-by-word interactive cursor highlight inside the active verse
  const renderInteractiveWords = (
    text: string,
    isActive: boolean,
    isArabic: boolean
  ) => {
    const words = text.trim().split(/\s+/);
    if (!isActive || !isPlaying || words.length === 0) {
      return text;
    }

    const activeIdx = Math.min(
      words.length - 1,
      Math.floor(verseProgress * words.length)
    );

    return words.map((word, idx) => {
      const isCurrentSpokenWord = idx === activeIdx;
      const isAlreadySpokenWord = idx < activeIdx;

      return (
        <React.Fragment key={idx}>
          <span
            className={`inline-block rounded px-1 transition-all duration-150 ${
              isCurrentSpokenWord
                ? isArabic
                  ? 'bg-sky-700 text-white shadow-2xs scale-105'
                  : 'bg-sky-700 text-white font-extrabold shadow-2xs'
                : isAlreadySpokenWord
                ? 'text-sky-900 bg-sky-100/80'
                : ''
            }`}
          >
            {word}
          </span>{' '}
        </React.Fragment>
      );
    });
  };

  const activeVerseObj =
    currentSurah.verses.find((v) => v.number === activeAyahNumber) ||
    currentSurah.verses[0];
  const nextVerseObj = currentSurah.verses.find(
    (v) => v.number === activeAyahNumber + 1
  );

  return (
    <div className="space-y-6">
      <audio
        ref={audioRef}
        onLoadedMetadata={(e) => {
          e.currentTarget.defaultPlaybackRate = playbackRate;
          e.currentTarget.playbackRate = playbackRate;
        }}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnded}
        onPause={() => setIsPlaying(false)}
        onPlay={(e) => {
          e.currentTarget.defaultPlaybackRate = playbackRate;
          e.currentTarget.playbackRate = playbackRate;
          setIsPlaying(true);
        }}
        preload="auto"
      />

      {/* Top Header Banner with Reciter, Memorization Controls & Quick Link to 10 Large PDFs */}
      <div className="bg-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-800 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-sky-200">
              CORAN &amp; MÉMORISATION · CURSEUR AUTOMATIQUE EN DIRECT · AUDIO LENT (0.8×)
            </div>
            <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Récitation Interactive &amp; 25 Sourates en Très Grands Caractères
            </h1>
            <p className="text-xs sm:text-sm text-sky-100">
              Le curseur suit automatiquement la voix du récitateur d’un verset à l’autre et mot par mot. Lisez toute la sourate d’un coup ou verset par verset, et téléchargez les 10 livrets PDF en très grands caractères.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setHidePhonetic((v) => !v)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                hidePhonetic
                  ? 'bg-white text-sky-950 border-white'
                  : 'bg-sky-800/80 text-sky-100 border-sky-700 hover:bg-sky-800'
              }`}
            >
              {hidePhonetic ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{hidePhonetic ? 'Phonétique masquée' : 'Masquer phonétique'}</span>
            </button>

            <button
              type="button"
              onClick={() => setHideFrench((v) => !v)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                hideFrench
                  ? 'bg-white text-sky-950 border-white'
                  : 'bg-sky-800/80 text-sky-100 border-sky-700 hover:bg-sky-800'
              }`}
            >
              {hideFrench ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{hideFrench ? 'Traduction masquée' : 'Masquer traduction'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                pdfSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-extrabold bg-white hover:bg-sky-50 text-sky-950 shadow-2xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-sky-800" />
              <span>Les 10 Livrets PDF Coran (Très Grands Caractères)</span>
            </button>
          </div>
        </div>

        <div className="pt-3.5 border-t border-sky-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-3.5 h-3.5 text-sky-300 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Rechercher une sourate (ex : Fātiḥa, Ikhlāṣ, Chams, Falaq...)"
              aria-label="Rechercher une sourate parmi les 25"
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-sky-950/60 border border-sky-700 rounded-lg text-white placeholder:text-sky-300 focus:outline-none focus:border-white"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <label htmlFor="reciter-select" className="text-xs font-semibold text-sky-200">
                Récitateur :
              </label>
              <select
                id="reciter-select"
                value={selectedReciterId}
                onChange={(e) => {
                  const newId = e.target.value;
                  setSelectedReciterId(newId);
                  selectedReciterIdRef.current = newId;
                  const found = QURAN_RECITERS.find((r) => r.id === newId);
                  if (found && isPlaying) {
                    playAyahWithCursor(
                      currentSurah.number,
                      activeAyahNumber,
                      found,
                      playMode
                    );
                  }
                }}
                className="bg-sky-950 text-white font-semibold text-xs rounded-lg px-3 py-1.5 border border-sky-700 focus:outline-none focus:border-white"
              >
                {QURAN_RECITERS.map((rec) => (
                  <option key={rec.id} value={rec.id}>
                    {rec.nameFr}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Top Horizontal Surah Selector Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-sky-700" />
            <span>Sélectionnez une sourate ({filteredSurahs.length} sourates disponibles) :</span>
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {filteredSurahs.map((s) => {
            const isSelected = s.number === selectedSurahNum;
            return (
              <button
                key={s.number}
                type="button"
                onClick={() => handleSelectSurah(s.number)}
                className={`px-3 py-1.5 rounded-lg border text-xs transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-sky-800 text-white border-sky-800 font-bold shadow-2xs'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-sky-400 hover:bg-white font-semibold'
                }`}
              >
                <span>{s.namePhonetic}</span>
                <span
                  dir="rtl"
                  className={`font-arabic font-bold text-sm ${
                    isSelected ? 'text-sky-200' : 'text-sky-900'
                  }`}
                >
                  {s.nameArabic}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Surah Audio Player, Live Cursor & Verses */}
      <div className="space-y-4">
        <section className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-2xs space-y-4">
            {/* Surah Header + Direct Large-Print PDF Download Buttons */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-sky-100">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-tabular font-bold text-sky-700">
                  <span>SOURATE N°{currentSurah.number}</span>
                  <span>·</span>
                  <span>{currentSurah.revelationType.toUpperCase()}</span>
                  <span>·</span>
                  <span>{currentSurah.versesCount} VERSETS</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-950 mt-0.5">
                  {currentSurah.namePhonetic} — {currentSurah.nameFrench}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => downloadSingleSurahLargePdf(currentSurah.number)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-extrabold bg-sky-800 hover:bg-sky-900 text-white shadow-2xs transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF Très Grand Format : {currentSurah.namePhonetic} seule</span>
                </button>

                <button
                  type="button"
                  onClick={() => downloadQuranLargePdfPack(matchingPdfPack.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-extrabold bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-300 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-sky-800" />
                  <span>Livret PDF : {matchingPdfPack.title}</span>
                </button>

                <div
                  dir="rtl"
                  className="font-arabic font-bold text-2xl sm:text-3xl text-sky-950 bg-sky-50 px-4 py-1.5 rounded-xl border border-sky-200"
                >
                  {currentSurah.nameArabic}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 bg-sky-50/70 p-3 rounded-lg border border-sky-200/80">
              <strong className="text-sky-950">Thème &amp; Sagesse :</strong>{' '}
              {currentSurah.summaryFr}
            </p>

            {/* Audio Controls Bar + Mode Selectors (Toute la sourate d'un coup vs Verset par verset) */}
            <div className="bg-slate-900 text-white rounded-xl p-4 space-y-3.5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Headphones className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">
                      {currentReciter.nameFr}{' '}
                      <span className="font-arabic text-sky-200 ml-1">
                        ({currentReciter.nameAr})
                      </span>
                    </div>
                    <div className="text-[11px] text-sky-300 font-mono-tabular">
                      {audioStatusMsg ||
                        `Curseur prêt sur la partie ${activeAyahNumber}/${currentSurah.versesCount} : [${activeVerseObj.phonetic}]`}
                    </div>
                  </div>
                </div>

                {/* Speed & Repeat Controls */}
                <div className="flex flex-wrap items-center gap-2">
                  <div
                    role="group"
                    aria-label="Cadence de récitation"
                    className="inline-flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-xs font-mono-tabular"
                  >
                    {[
                      { rate: 0.65, label: 'Très lente (0.65×)' },
                      { rate: 0.8, label: 'Lente · Mémorisation (0.8×)' },
                      { rate: 1, label: 'Normale (1.0×)' }
                    ].map((sp) => (
                      <button
                        key={sp.rate}
                        type="button"
                        onClick={() => setPlaybackRate(sp.rate)}
                        className={`px-2.5 py-1 rounded-md font-bold transition-colors cursor-pointer ${
                          playbackRate === sp.rate
                            ? 'bg-sky-500 text-slate-950'
                            : 'text-sky-200 hover:bg-slate-700'
                        }`}
                      >
                        {sp.label}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setRepeatCountPerAyah((prev) =>
                        prev === 1 ? 3 : prev === 3 ? 5 : 1
                      )
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono-tabular font-bold text-sky-200 border border-slate-700 cursor-pointer"
                    title="Nombre de répétitions de chaque verset avant que le curseur ne passe au suivant"
                  >
                    <Repeat className="w-3.5 h-3.5 text-sky-400" />
                    Répéter verset : {repeatCountPerAyah}×
                  </button>
                </div>
              </div>

              {/* Primary Playback & Reading Mode Controls */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800">
                <div className="flex flex-wrap items-center gap-2">
                  {/* Play / Pause Button */}
                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4" />
                        <span>Pause (Partie {activeAyahNumber}/{currentSurah.versesCount})</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span>
                          {playMode === 'continuous'
                            ? `Lire la sourate avec suivi (depuis verset ${activeAyahNumber})`
                            : `Écouter le verset ${activeAyahNumber}`}
                        </span>
                      </>
                    )}
                  </button>

                  {/* Explicit button to start whole surah from verse 1 continuously */}
                  <button
                    type="button"
                    onClick={handleStartFullSurahContinuous}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-bold text-xs sm:text-sm border transition-colors cursor-pointer ${
                      playMode === 'continuous'
                        ? 'bg-sky-800 text-white border-sky-500'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                    }`}
                  >
                    <Volume2 className="w-4 h-4 text-sky-300" />
                    <span>Lire toute la sourate d’un coup (En continu)</span>
                  </button>

                  {/* Mode Verset par verset */}
                  <button
                    type="button"
                    onClick={() => {
                      setPlayMode('single-ayah');
                      playModeRef.current = 'single-ayah';
                    }}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg font-bold text-xs sm:text-sm border transition-colors cursor-pointer ${
                      playMode === 'single-ayah'
                        ? 'bg-sky-800 text-white border-sky-500'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                    }`}
                  >
                    <span>Mode 1 verset à la fois</span>
                  </button>
                </div>

                {/* Verse Step Navigation */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    disabled={activeAyahNumber <= 1}
                    onClick={() =>
                      handleClickVerse(Math.max(1, activeAyahNumber - 1))
                    }
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white cursor-pointer"
                    aria-label="Verset précédent"
                  >
                    <SkipBack className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    disabled={activeAyahNumber >= currentSurah.versesCount}
                    onClick={() =>
                      handleClickVerse(
                        Math.min(currentSurah.versesCount, activeAyahNumber + 1)
                      )
                    }
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white cursor-pointer"
                    aria-label="Verset suivant"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleClickVerse(1)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
                    aria-label="Recommencer au verset 1"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* LIVE INTERACTIVE CURSOR TELEPROMPTER BANNER */}
              <div className="bg-slate-950/90 border border-sky-500/50 rounded-xl p-3.5 sm:p-4 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isPlaying ? 'bg-sky-400 animate-ping' : 'bg-sky-500'
                      }`}
                    />
                    <span className="text-[11px] font-mono-tabular font-extrabold uppercase tracking-wider text-sky-300">
                      CURSEUR DE LECTURE AUTOMATIQUE · PARTIE / VERSET {activeVerseObj.number} SUR{' '}
                      {currentSurah.versesCount}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAutoScrollCursor((v) => !v)}
                      className={`text-[11px] font-mono-tabular font-bold px-2.5 py-0.5 rounded border cursor-pointer ${
                        autoScrollCursor
                          ? 'bg-sky-900/80 text-sky-200 border-sky-600'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      Suivi défilement auto : {autoScrollCursor ? 'Activé' : 'Désactivé'}
                    </button>
                  </div>
                </div>

                {/* Active Verse Live Display with Word-by-Word Highlight */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-1">
                  <div className="space-y-1 flex-1">
                    {!hidePhonetic && (
                      <div className="text-sm sm:text-base font-mono-tabular font-bold text-sky-200">
                        [
                        {renderInteractiveWords(
                          activeVerseObj.phonetic,
                          true,
                          false
                        )}
                        ]
                      </div>
                    )}
                    {!hideFrench && (
                      <div className="text-xs sm:text-sm text-slate-300 font-medium">
                        {activeVerseObj.french}
                      </div>
                    )}
                  </div>

                  <div
                    dir="rtl"
                    lang="ar"
                    className="font-arabic font-bold text-2xl sm:text-3xl text-white text-right leading-relaxed"
                  >
                    {renderInteractiveWords(activeVerseObj.arabic, true, true)}{' '}
                    <span className="text-sky-400 text-xl">
                      ﴿{activeVerseObj.number}﴾
                    </span>
                  </div>
                </div>

                {/* Live Progress Bar + Next Verse Preview */}
                <div className="space-y-1.5 pt-1">
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sky-400 transition-all duration-150"
                      style={{
                        width: `${Math.round(
                          (isPlaying ? verseProgress : 0) * 100
                        )}%`
                      }}
                    />
                  </div>

                  {nextVerseObj && (
                    <div className="flex items-center justify-between gap-2 text-[11px] text-slate-400 font-mono-tabular">
                      <span>
                        Passage automatique suivant →{' '}
                        <strong className="text-sky-300">
                          Verset {nextVerseObj.number} : [{nextVerseObj.phonetic}]
                        </strong>
                      </span>
                      <span dir="rtl" className="font-arabic text-sm text-slate-300">
                        {nextVerseObj.arabic}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Display Layout Switcher: Lire toute la sourate d'un coup (Bloc continu) vs Verset par verset */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3">
              <div className="text-xs font-bold text-slate-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-700" />
                <span>
                  Mode d’affichage de la sourate (cliquez sur n’importe quel verset pour y placer le curseur) :
                </span>
              </div>

              <div className="inline-flex items-center bg-white p-1 rounded-lg border border-slate-200 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setReadingLayout('verses')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-extrabold transition-colors cursor-pointer ${
                    readingLayout === 'verses'
                      ? 'bg-sky-800 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <ListOrdered className="w-3.5 h-3.5" />
                  <span>Verset par verset (Curseur détaillé)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setReadingLayout('full-text')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-extrabold transition-colors cursor-pointer ${
                    readingLayout === 'full-text'
                      ? 'bg-sky-800 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <AlignJustify className="w-3.5 h-3.5" />
                  <span>Lire toute la sourate d’un coup (Texte continu)</span>
                </button>
              </div>
            </div>

            {/* Basmala banner for all surahs except Al-Fatiha (where it's verse 1) */}
            {currentSurah.number !== 1 && (
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 text-center space-y-1">
                <div
                  dir="rtl"
                  className="font-arabic font-bold text-xl sm:text-2xl text-slate-950"
                >
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </div>
                {!hidePhonetic && (
                  <div className="text-xs font-mono-tabular font-semibold text-sky-800">
                    [Bismi Llāhi r-Raḥmāni r-Raḥīm]
                  </div>
                )}
                {!hideFrench && (
                  <div className="text-xs text-slate-700">
                    Au nom d’Allah, le Tout-Miséricordieux, le Très-Miséricordieux
                  </div>
                )}
              </div>
            )}

            {/* LAYOUT 1 : LIRE TOUTE LA SOURATE D'UN COUP (TEXTE CONTINU D'UN SEUL BLOC AVEC CURSEUR ACTIF) */}
            {readingLayout === 'full-text' ? (
              <div className="space-y-4">
                {/* Continuous Arabic Block (Mushaf Style) */}
                <div className="bg-sky-50/40 border-2 border-sky-200 rounded-xl p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-sky-200 pb-2.5">
                    <span className="text-xs font-mono-tabular font-extrabold uppercase tracking-wider text-sky-900">
                      TEXTE ARABE COMPLET D’UN SEUL BLOC (CLIQUEZ SUR UN VERSET POUR L’ÉCOUTER)
                    </span>
                    <span className="text-xs font-semibold text-sky-700">
                      Curseur actif : Verset {activeAyahNumber}/{currentSurah.versesCount}
                    </span>
                  </div>

                  <div
                    dir="rtl"
                    lang="ar"
                    className="font-arabic font-bold text-2xl sm:text-3xl text-slate-950 leading-[2.6] text-right"
                  >
                    {currentSurah.verses.map((verse) => {
                      const isActive = activeAyahNumber === verse.number;
                      return (
                        <span
                          key={verse.number}
                          ref={(el) => {
                            verseRefs.current[verse.number] = el;
                          }}
                          onClick={() => handleClickVerse(verse.number)}
                          className={`inline rounded-lg px-2 py-0.5 mx-0.5 cursor-pointer transition-all ${
                            isActive
                              ? 'bg-sky-200 text-sky-950 ring-2 ring-sky-600 shadow-2xs'
                              : 'hover:bg-sky-100/70'
                          }`}
                        >
                          {renderInteractiveWords(verse.arabic, isActive, true)}{' '}
                          <span className="text-sky-800 text-xl font-extrabold">
                            ﴿{verse.number}﴾
                          </span>{' '}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Continuous Phonetic Block */}
                {!hidePhonetic && (
                  <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2.5">
                    <div className="text-xs font-mono-tabular font-extrabold uppercase tracking-wider text-sky-900 border-b border-slate-100 pb-2">
                      LECTURE PHONÉTIQUE CONTINUE DE TOUTE LA SOURATE
                    </div>
                    <div className="text-sm sm:text-base font-mono-tabular leading-relaxed text-slate-800">
                      {currentSurah.verses.map((verse) => {
                        const isActive = activeAyahNumber === verse.number;
                        return (
                          <span
                            key={verse.number}
                            onClick={() => handleClickVerse(verse.number)}
                            className={`inline rounded-md px-1.5 py-0.5 mr-1.5 cursor-pointer transition-all ${
                              isActive
                                ? 'bg-sky-100 text-sky-950 font-extrabold ring-2 ring-sky-500'
                                : 'hover:bg-slate-100 text-sky-900 font-semibold'
                            }`}
                          >
                            <span className="text-xs font-extrabold text-sky-700 mr-1">
                              ({verse.number})
                            </span>
                            {renderInteractiveWords(
                              verse.phonetic,
                              isActive,
                              false
                            )}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Continuous French Translation Block */}
                {!hideFrench && (
                  <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2.5">
                    <div className="text-xs font-mono-tabular font-extrabold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
                      TRADUCTION FRANÇAISE CONTINUE DE TOUTE LA SOURATE
                    </div>
                    <div className="text-sm sm:text-base leading-relaxed text-slate-800">
                      {currentSurah.verses.map((verse) => {
                        const isActive = activeAyahNumber === verse.number;
                        return (
                          <span
                            key={verse.number}
                            onClick={() => handleClickVerse(verse.number)}
                            className={`inline rounded-md px-1.5 py-0.5 mr-1.5 cursor-pointer transition-all ${
                              isActive
                                ? 'bg-sky-100 text-slate-950 font-bold ring-1 ring-sky-500'
                                : 'hover:bg-slate-100 font-medium'
                            }`}
                          >
                            <strong className="text-sky-800 text-xs mr-1">
                              [{verse.number}]
                            </strong>
                            {verse.french}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* LAYOUT 2 : VUE INTERACTIVE VERSET PAR VERSET AVEC CURSEUR AUTOMATIQUE */
              <div className="space-y-3">
                {currentSurah.verses.map((verse) => {
                  const isActiveVerse = activeAyahNumber === verse.number;

                  return (
                    <div
                      key={verse.number}
                      ref={(el) => {
                        verseRefs.current[verse.number] = el;
                      }}
                      onClick={() => handleClickVerse(verse.number)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleClickVerse(verse.number);
                        }
                      }}
                      className={`rounded-xl border p-4 transition-all cursor-pointer ${
                        isActiveVerse
                          ? 'bg-sky-50 border-sky-600 ring-2 ring-sky-500/30 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-sky-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2 shrink-0">
                          <span
                            className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-mono-tabular font-extrabold text-xs ${
                              isActiveVerse
                                ? 'bg-sky-700 text-white'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {verse.number}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1.5 text-xs font-extrabold px-2.5 py-1 rounded-md border ${
                              isActiveVerse
                                ? 'bg-sky-700 text-white border-sky-700'
                                : 'text-sky-700 bg-sky-50 border-sky-200'
                            }`}
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            {isActiveVerse && isPlaying
                              ? `Curseur actif · Partie ${verse.number}`
                              : isActiveVerse
                              ? `Curseur positionné · Partie ${verse.number}`
                              : 'Écouter d’ici'}
                          </span>
                        </div>

                        <div
                          dir="rtl"
                          lang="ar"
                          className="font-arabic font-bold text-2xl sm:text-3xl text-slate-950 text-right leading-relaxed"
                        >
                          {renderInteractiveWords(
                            verse.arabic,
                            isActiveVerse,
                            true
                          )}{' '}
                          <span className="text-sky-700 text-lg">
                            ﴿{verse.number}﴾
                          </span>
                        </div>
                      </div>

                      {(!hidePhonetic || !hideFrench) && (
                        <div className="mt-2.5 pt-2.5 border-t border-slate-200/70 space-y-1">
                          {!hidePhonetic && (
                            <div className="text-sm sm:text-base font-mono-tabular font-bold text-sky-900">
                              [
                              {renderInteractiveWords(
                                verse.phonetic,
                                isActiveVerse,
                                false
                              )}
                              ]
                            </div>
                          )}
                          {!hideFrench && (
                            <div className="text-xs sm:text-sm font-medium text-slate-800">
                              {verse.french}
                            </div>
                          )}
                        </div>
                      )}

                      {isActiveVerse && isPlaying && (
                        <div className="mt-3 w-full h-1.5 bg-sky-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-sky-700 transition-all duration-150"
                            style={{
                              width: `${Math.round(verseProgress * 100)}%`
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* SECTION DEDICATED TO THE 10 LARGE-PRINT QURAN PDF BOOKLETS */}
        <section
          ref={pdfSectionRef}
          className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
            <div>
              <div className="text-xs font-mono-tabular font-extrabold uppercase tracking-wider text-sky-800">
                IMPRESSION A4 TRÈS GRANDS CARACTÈRES · HAUTE LISIBILITÉ
              </div>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Les 10 Livrets PDF des 25 Sourates (Écriture Très Grande &amp; Aérée)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Les 25 sourates sont réparties en 10 fichiers PDF distincts en très grands caractères (arabe vocalisé géant, phonétique et traduction française) pour une lecture parfaite sur feuille imprimée. Les sourates longues (comme Ach-Chams, Al-Layl ou Al-‘Alaq) disposent chacune de leur propre fichier PDF.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QURAN_LARGE_PDF_PACKS.map((pack) => {
              const containsCurrentSurah = pack.surahNumbers.includes(
                currentSurah.number
              );
              return (
                <div
                  key={pack.id}
                  className={`rounded-xl border p-4 flex flex-col justify-between gap-3 transition-colors ${
                    containsCurrentSurah
                      ? 'border-sky-500 bg-sky-50/60 ring-1 ring-sky-400/30'
                      : 'border-slate-200 bg-slate-50/40 hover:border-sky-300'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-tabular font-extrabold text-sky-900 bg-sky-100 px-2.5 py-0.5 rounded">
                        <FileText className="w-3.5 h-3.5" />
                        LIVRET CORAN GRAND FORMAT · {pack.surahNumbers.length}{' '}
                        {pack.surahNumbers.length > 1 ? 'SOURATES' : 'SOURATE COMPLÈTE'}
                      </span>
                      <span
                        dir="rtl"
                        className="font-arabic font-bold text-base text-sky-950"
                      >
                        {pack.titleArabic}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-extrabold text-slate-950">
                      {pack.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pack.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {pack.surahNumbers.map((sNum) => {
                        const sObj = QURAN_25_SURAHS.find((x) => x.number === sNum);
                        if (!sObj) return null;
                        return (
                          <button
                            key={sNum}
                            type="button"
                            onClick={() => handleSelectSurah(sNum)}
                            className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 hover:border-sky-400 hover:text-sky-900 cursor-pointer"
                          >
                            {sObj.namePhonetic}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      onClick={() => downloadQuranLargePdfPack(pack.id as QuranLargePdfPackId)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-extrabold bg-sky-800 hover:bg-sky-900 text-white shadow-2xs transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Télécharger le PDF Grand Format</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
