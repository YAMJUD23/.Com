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
  Headphones
} from 'lucide-react';
import {
  QURAN_25_SURAHS,
  QURAN_RECITERS,
  QuranSurah25Item,
  QuranReciter
} from '../data/quran25SurahsData';

export const Quran25ReaderView: React.FC = () => {
  const [selectedSurahNum, setSelectedSurahNum] = useState<number>(1);
  const [selectedReciterId, setSelectedReciterId] = useState<string>('dossari');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [playMode, setPlayMode] = useState<'surah' | 'ayah'>('ayah');
  const [activeAyahNumber, setActiveAyahNumber] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [repeatCountPerAyah, setRepeatCountPerAyah] = useState<1 | 3 | 5>(1);
  const [currentRepeatIteration, setCurrentRepeatIteration] = useState<number>(1);
  // Lecture lente par défaut (0.8x) pour faciliter l'apprentissage et le suivi phonétique
  const [playbackRate, setPlaybackRate] = useState<number>(0.8);
  const [audioStatusMsg, setAudioStatusMsg] = useState<string>('');

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

  // Update audio playback rate whenever playbackRate changes
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
        ? `Récitation complète (${playbackRate === 1 ? 'Vitesse normale' : `Lecture lente ${playbackRate}×`}) : Sourate ${surahNum} par ${reciter.nameFr}`
        : `Verset ${ayahNum} / ${currentSurah.versesCount} (${playbackRate === 1 ? 'Vitesse normale' : `Lecture lente ${playbackRate}×`}) — ${reciter.nameFr}`
    );

    audioEl
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
        setAudioStatusMsg(
          'Cliquez sur Lecture pour lancer la récitation audio de ' + reciter.nameFr
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

    // Mode verset par verset (Ayah par Ayah)
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

    // Move to next verse if available
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
      {/* Hidden HTML5 Audio Element */}
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

      {/* Top Banner — 25 Sourates avec Cheikh Yasser Al-Dosari */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-700">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono-tabular font-semibold text-sky-200">
              <span>NOBLE CORAN · 25 SOURATES ESSENTIELLES (JUZ ‘AMMA + AL-FĀTIḤA)</span>
              <span>·</span>
              <span>AUDIO YASSER AL-DOSARI</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white">
              Lecture & Écoute des 25 Sourates (Arabe Vocalisé · Phonétique · Traduction Française)
            </h1>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              Écoutez la récitation de <strong className="text-amber-200">Cheikh Yasser Al-Dosari (الشيخ ياسر الدوسري)</strong>{' '}
              pour la sourate entière ou <strong>verset par verset</strong> avec répétition automatique (1×, 3× ou 5×) pour mémoriser facilement.
            </p>
          </div>

          {/* Reciter Selector */}
          <div className="bg-sky-950/80 border border-sky-600/60 rounded-xl p-3.5 shrink-0 min-w-[270px]">
            <label
              htmlFor="reciter-select"
              className="block text-[11px] font-mono-tabular font-bold text-sky-200 mb-1"
            >
              RÉCITATEUR SÉLECTIONNÉ :
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
              className="w-full bg-white text-slate-950 font-bold text-xs sm:text-sm rounded-lg px-3 py-2 border border-sky-300 focus:outline-none"
            >
              {QURAN_RECITERS.map((rec) => (
                <option key={rec.id} value={rec.id}>
                  {rec.nameFr} ({rec.nameAr})
                </option>
              ))}
            </select>
            <div className="text-[11px] text-sky-200 mt-1.5 truncate">
              {currentReciter.styleFr}
            </div>
          </div>
        </div>
      </div>

      {/* Main Split Layout: Left = 25 Surahs Selector, Right = Active Surah Reader & Audio Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Sidebar: 25 Surahs List */}
        <aside className="lg:col-span-4 bg-white rounded-xl border border-sky-200 p-4 shadow-2xs space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-display font-extrabold text-sm sm:text-base text-slate-950 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-sky-600" />
              <span>Les 25 Sourates (1 & 91–114)</span>
            </h2>
            <span className="text-xs font-mono-tabular font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
              {filteredSurahs.length} / 25
            </span>
          </div>

          {/* Search inside 25 surahs */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-sky-700 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Chercher une sourate (ex : Chams, Duha, Ikhlas, 93...)"
              aria-label="Chercher une sourate parmi les 25"
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-sky-50/50 border border-sky-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-600"
            />
          </div>

          <div className="max-h-[680px] overflow-y-auto space-y-1.5 pr-1">
            {filteredSurahs.map((s) => {
              const isSelected = s.number === selectedSurahNum;
              return (
                <button
                  key={s.number}
                  type="button"
                  onClick={() => handleSelectSurah(s.number)}
                  className={`w-full text-left p-2.5 rounded-lg border transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-sky-600 text-white border-sky-700 shadow-2xs'
                      : 'bg-white text-slate-900 border-sky-200/80 hover:bg-sky-50'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`font-mono-tabular font-extrabold text-xs px-1.5 py-0.5 rounded ${
                          isSelected
                            ? 'bg-sky-800 text-white'
                            : 'bg-sky-100 text-sky-900'
                        }`}
                      >
                        N°{s.number}
                      </span>
                      <span className="font-bold text-xs sm:text-sm truncate">
                        {s.namePhonetic}
                      </span>
                    </div>
                    <div
                      className={`text-[11px] truncate mt-0.5 ${
                        isSelected ? 'text-sky-100' : 'text-slate-600'
                      }`}
                    >
                      {s.nameFrench} · {s.versesCount} versets
                    </div>
                  </div>

                  <div
                    dir="rtl"
                    className={`font-arabic font-bold text-base sm:text-lg shrink-0 ${
                      isSelected ? 'text-amber-200' : 'text-sky-950'
                    }`}
                  >
                    {s.nameArabic}
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Area: Active Surah Audio Player & Verses in Arabic + Phonetic + French */}
        <section className="lg:col-span-8 space-y-4">
          {/* Audio Player Control Deck */}
          <div className="bg-white rounded-xl border-2 border-sky-500 p-4 sm:p-5 shadow-2xs space-y-4">
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
                    aria-label="Vitesse de lecture audio"
                    className="inline-flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-xs font-mono-tabular"
                  >
                    {[
                      { rate: 0.65, label: 'Très lente (0.65×)' },
                      { rate: 0.8, label: 'Lente (0.8× Défaut)' },
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
                    Répéter verset : {repeatCountPerAyah}×
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
                      <span>Mettre en pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>
                        Lire verset par verset (Verset {activeAyahNumber})
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
                  <span>Écouter la Sourate entière</span>
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
                <div className="text-xs font-mono-tabular font-bold text-sky-800">
                  [Bismi Llāhi r-Raḥmāni r-Raḥīm] — Au nom d’Allah, le Tout-Miséricordieux, le Très-Miséricordieux
                </div>
              </div>
            )}

            {/* Complete Verses List (3-in-1: Vocalized Arabic + Phonetic + French) */}
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
                        : 'bg-white border-sky-200 hover:border-sky-400'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-mono-tabular font-extrabold text-xs ${
                            isActiveVerse
                              ? 'bg-sky-600 text-white'
                              : 'bg-sky-100 text-sky-900'
                          }`}
                        >
                          {verse.number}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                          <Volume2 className="w-3.5 h-3.5" />
                          {isActiveVerse && isPlaying ? 'En écoute...' : 'Écouter'}
                        </span>
                      </div>

                      <div
                        dir="rtl"
                        className="font-arabic font-bold text-xl sm:text-2xl text-slate-950 text-right leading-relaxed"
                      >
                        {verse.arabic}{' '}
                        <span className="text-sky-700 text-lg">
                          ﴿{verse.number}﴾
                        </span>
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-sky-100 space-y-0.5">
                      <div className="text-xs sm:text-sm font-mono-tabular font-bold text-sky-800">
                        [{verse.phonetic}]
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900">
                        = {verse.french}
                      </div>
                    </div>
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
