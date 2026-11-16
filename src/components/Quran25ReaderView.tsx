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
  Download
} from 'lucide-react';
import {
  QURAN_25_SURAHS,
  QURAN_RECITERS,
  QuranSurah25Item,
  QuranReciter
} from '../data/quran25SurahsData';
import { downloadCompleteMultiPagePdf } from '../utils/pdfGenerator';

export const Quran25ReaderView: React.FC = () => {
  const [selectedSurahNum, setSelectedSurahNum] = useState<number>(1);
  const [selectedReciterId, setSelectedReciterId] = useState<string>('dossari');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [playMode, setPlayMode] = useState<'surah' | 'ayah'>('ayah');
  const [activeAyahNumber, setActiveAyahNumber] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [repeatCountPerAyah, setRepeatCountPerAyah] = useState<1 | 3 | 5>(1);
  const [currentRepeatIteration, setCurrentRepeatIteration] = useState<number>(1);
  const [playbackRate, setPlaybackRate] = useState<number>(0.8);
  const [audioStatusMsg, setAudioStatusMsg] = useState<string>('');
  const [hidePhonetic, setHidePhonetic] = useState<boolean>(false);
  const [hideFrench, setHideFrench] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSurah: QuranSurah25Item =
    QURAN_25_SURAHS.find((s) => s.number === selectedSurahNum) || QURAN_25_SURAHS[0];

  const currentReciter: QuranReciter =
    QURAN_RECITERS.find((r) => r.id === selectedReciterId) || QURAN_RECITERS[0];

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

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    audioEl.defaultPlaybackRate = playbackRate;
    audioEl.playbackRate = playbackRate;
  }, [playbackRate]);

  const loadAndPlayAudio = (
    surahNum: number,
    mode: 'surah' | 'ayah',
    ayahNum: number,
    reciter: QuranReciter
  ) => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    const url =
      mode === 'surah'
        ? reciter.getSurahAudioUrl(surahNum)
        : reciter.getAyahAudioUrl(surahNum, ayahNum);

    audioEl.src = url;
    audioEl.defaultPlaybackRate = playbackRate;
    audioEl.playbackRate = playbackRate;
    setAudioStatusMsg(
      mode === 'surah'
        ? `Sourate ${surahNum} · ${reciter.nameFr}`
        : `Verset ${ayahNum} / ${currentSurah.versesCount} · ${reciter.nameFr}`
    );

    audioEl
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
        setAudioStatusMsg(
          'Sélectionnez Lecture pour écouter la récitation de ' + reciter.nameFr
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
      loadAndPlayAudio(
        currentSurah.number,
        playMode,
        activeAyahNumber,
        currentReciter
      );
    }
  };

  const handleSelectSurah = (surahNum: number) => {
    const audioEl = audioRef.current;
    if (audioEl) {
      audioEl.pause();
    }
    setIsPlaying(false);
    setSelectedSurahNum(surahNum);
    setActiveAyahNumber(1);
    setCurrentRepeatIteration(1);
    setAudioStatusMsg('');
  };

  const handlePlaySpecificAyah = (ayahNumber: number) => {
    setPlayMode('ayah');
    setActiveAyahNumber(ayahNumber);
    setCurrentRepeatIteration(1);
    loadAndPlayAudio(currentSurah.number, 'ayah', ayahNumber, currentReciter);
  };

  const handlePlayFullSurah = () => {
    setPlayMode('surah');
    setActiveAyahNumber(1);
    loadAndPlayAudio(currentSurah.number, 'surah', 1, currentReciter);
  };

  const handleAudioEnded = () => {
    if (playMode === 'surah') {
      setIsPlaying(false);
      return;
    }

    if (currentRepeatIteration < repeatCountPerAyah) {
      const nextIter = currentRepeatIteration + 1;
      setCurrentRepeatIteration(nextIter);
      loadAndPlayAudio(
        currentSurah.number,
        'ayah',
        activeAyahNumber,
        currentReciter
      );
      return;
    }

    if (activeAyahNumber < currentSurah.versesCount) {
      const nextAyah = activeAyahNumber + 1;
      setActiveAyahNumber(nextAyah);
      setCurrentRepeatIteration(1);
      loadAndPlayAudio(currentSurah.number, 'ayah', nextAyah, currentReciter);
    } else {
      setIsPlaying(false);
      setCurrentRepeatIteration(1);
    }
  };

  return (
    <div className="space-y-6">
      <audio
        ref={audioRef}
        onLoadedMetadata={(e) => {
          e.currentTarget.defaultPlaybackRate = playbackRate;
          e.currentTarget.playbackRate = playbackRate;
        }}
        onEnded={handleAudioEnded}
        onPause={() => setIsPlaying(false)}
        onPlay={(e) => {
          e.currentTarget.defaultPlaybackRate = playbackRate;
          e.currentTarget.playbackRate = playbackRate;
          setIsPlaying(true);
        }}
        preload="none"
      />

      {/* Top Header Banner with Reciter, Memorization Controls & PDF Download */}
      <div className="bg-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-800 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-sky-200">
              CORAN & MÉMORISATION · AUDIO LENT PAR DÉFAUT (0.8×)
            </div>
            <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Récitation &amp; Mémorisation des 25 Sourates Courtes
            </h1>
            <p className="text-xs sm:text-sm text-sky-100">
              Texte arabe vocalisé, phonétique et traduction française avec récitation verset par verset.
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
              onClick={() => downloadCompleteMultiPagePdf('pdf-sourates')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-extrabold bg-white hover:bg-sky-50 text-sky-950 shadow-2xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-sky-800" />
              <span>PDF : Livret des Sourates Courtes</span>
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
              placeholder="Rechercher une sourate (ex : Fātiḥa, Ikhlāṣ, Ḍuḥā...)"
              aria-label="Rechercher une sourate parmi les 25"
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-sky-950/60 border border-sky-700 rounded-lg text-white placeholder:text-sky-300 focus:outline-none focus:border-white"
            />
          </div>

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
                const found = QURAN_RECITERS.find((r) => r.id === newId);
                if (found && isPlaying) {
                  loadAndPlayAudio(
                    currentSurah.number,
                    playMode,
                    activeAyahNumber,
                    found
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

      {/* Top Horizontal Surah Selector Bar (No Left Sidebar) */}
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

      {/* Active Surah Audio Player & Verses */}
      <div className="space-y-4">
        <section className="space-y-4">
          {/* Audio Player Control Deck */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-2xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-sky-100">
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

              <div
                dir="rtl"
                className="font-arabic font-bold text-2xl sm:text-3xl text-sky-950 bg-sky-50 px-4 py-1.5 rounded-xl border border-sky-200"
              >
                {currentSurah.nameArabic}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 bg-sky-50/70 p-3 rounded-lg border border-sky-200/80">
              <strong className="text-sky-950">Thème & Sagesse :</strong> {currentSurah.summaryFr}
            </p>

            {/* Audio Controls Bar (Yasser Al-Dosari) */}
            <div className="bg-slate-900 text-white rounded-xl p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Headphones className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">
                      {currentReciter.nameFr}{' '}
                      <span className="font-arabic text-amber-200 ml-1">
                        ({currentReciter.nameAr})
                      </span>
                    </div>
                    <div className="text-[11px] text-sky-300 font-mono-tabular">
                      {audioStatusMsg ||
                        `Prêt à écouter : Sourate ${currentSurah.namePhonetic} (${currentSurah.versesCount} versets)`}
                    </div>
                  </div>
                </div>

                {/* Speed & Repeat Controls (Default = Lecture lente 0.8x) */}
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
                    title="Nombre de répétitions de chaque verset pour mémoriser"
                  >
                    <Repeat className="w-3.5 h-3.5 text-sky-400" />
                    Répéter : {repeatCountPerAyah}×
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>
                        Écouter verset par verset (Verset {activeAyahNumber})
                      </span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handlePlayFullSurah}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-600 cursor-pointer"
                >
                  <Volume2 className="w-4 h-4 text-amber-300" />
                  <span>Sourate complète</span>
                </button>

                <div className="flex items-center gap-1 ml-auto">
                  <button
                    type="button"
                    disabled={activeAyahNumber <= 1}
                    onClick={() =>
                      handlePlaySpecificAyah(Math.max(1, activeAyahNumber - 1))
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
                      handlePlaySpecificAyah(
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
                    onClick={() => handlePlaySpecificAyah(1)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
                    aria-label="Recommencer au verset 1"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
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

            {/* Complete Verses List */}
            <div className="space-y-3">
              {currentSurah.verses.map((verse) => {
                const isActiveVerse =
                  playMode === 'ayah' && activeAyahNumber === verse.number;

                return (
                  <div
                    key={verse.number}
                    onClick={() => handlePlaySpecificAyah(verse.number)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handlePlaySpecificAyah(verse.number);
                      }
                    }}
                    className={`rounded-xl border p-4 transition-all cursor-pointer ${
                      isActiveVerse
                        ? 'bg-sky-50/90 border-sky-600 ring-2 ring-sky-500/20'
                        : 'bg-white border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className={`inline-flex items-center justify-center w-7 h-7 rounded-lg font-mono-tabular font-bold text-xs ${
                            isActiveVerse
                              ? 'bg-sky-600 text-white'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {verse.number}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                          <Volume2 className="w-3.5 h-3.5" />
                          {isActiveVerse && isPlaying ? 'En écoute...' : 'Écouter'}
                        </span>
                      </div>

                      <div
                        dir="rtl"
                        className="font-arabic font-bold text-xl sm:text-2xl text-slate-950 text-right leading-relaxed"
                      >
                        {verse.arabic}{' '}
                        <span className="text-sky-700 text-base">
                          ﴿{verse.number}﴾
                        </span>
                      </div>
                    </div>

                    {(!hidePhonetic || !hideFrench) && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100 space-y-0.5">
                        {!hidePhonetic && (
                          <div className="text-xs sm:text-sm font-mono-tabular font-semibold text-sky-800">
                            [{verse.phonetic}]
                          </div>
                        )}
                        {!hideFrench && (
                          <div className="text-xs sm:text-sm font-medium text-slate-800">
                            {verse.french}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
