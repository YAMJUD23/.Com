import React, { useState, useEffect, useCallback } from 'react';
import {
  RotateCcw,
  Volume2,
  VolumeX,
  CheckCircle2,
  Sparkles,
  Plus
} from 'lucide-react';
import {
  DHIKR_PRESETS,
  DhikrPreset,
  PostPrayerCycleState,
  getPostPrayerStage,
  stepPostPrayerCycle
} from '../utils/tasbihLogic';

export const TasbihCounterView: React.FC = () => {
  const [mode, setMode] = useState<'cycle-100' | 'single'>('cycle-100');
  const [selectedPresetId, setSelectedPresetId] = useState<string>('subhanallah');
  const [countsByPreset, setCountsByPreset] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('salem_tasbih_counts');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [targetsByPreset, setTargetsByPreset] = useState<Record<string, number>>({});
  const [cycleState, setCycleState] = useState<PostPrayerCycleState>(() => {
    try {
      const saved = localStorage.getItem('salem_tasbih_cycle');
      return saved ? JSON.parse(saved) : { totalBeads: 0, completedCycles: 0 };
    } catch {
      return { totalBeads: 0, completedCycles: 0 };
    }
  });
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [lifetimeTotal, setLifetimeTotal] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('salem_tasbih_lifetime');
      return saved ? Number(saved) || 0 : 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('salem_tasbih_counts', JSON.stringify(countsByPreset));
    } catch {
      // Ignore storage errors
    }
  }, [countsByPreset]);

  useEffect(() => {
    try {
      localStorage.setItem('salem_tasbih_cycle', JSON.stringify(cycleState));
    } catch {
      // Ignore storage errors
    }
  }, [cycleState]);

  useEffect(() => {
    try {
      localStorage.setItem('salem_tasbih_lifetime', String(lifetimeTotal));
    } catch {
      // Ignore storage errors
    }
  }, [lifetimeTotal]);

  const playSoftBeadClick = useCallback((isMilestone: boolean) => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(isMilestone ? 660 : 420, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (isMilestone ? 0.18 : 0.06));
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + (isMilestone ? 0.19 : 0.07));
    } catch {
      // Ignore audio context errors
    }
  }, [soundEnabled]);

  const speakArabicFormula = (arabicText: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(arabicText);
      u.lang = 'ar-SA';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    } catch {
      // Ignore
    }
  };

  const activeSinglePreset: DhikrPreset =
    DHIKR_PRESETS.find((p) => p.id === selectedPresetId) || DHIKR_PRESETS[0];

  const singleCount = countsByPreset[activeSinglePreset.id] || 0;
  const singleTarget =
    targetsByPreset[activeSinglePreset.id] || activeSinglePreset.defaultTarget;

  const postPrayerStage = getPostPrayerStage(cycleState.totalBeads);

  const displayedPreset =
    mode === 'cycle-100' ? postPrayerStage.preset : activeSinglePreset;
  const displayedCount =
    mode === 'cycle-100' ? postPrayerStage.currentInStage : singleCount;
  const displayedTarget =
    mode === 'cycle-100' ? postPrayerStage.stageTarget : singleTarget;

  const progressRatio = Math.min(
    1,
    displayedTarget > 0 ? displayedCount / displayedTarget : 0
  );

  const handleIncrement = useCallback(() => {
    setLifetimeTotal((t) => t + 1);

    if (mode === 'cycle-100') {
      setCycleState((prev) => {
        const next = stepPostPrayerCycle(prev);
        const hitMilestone =
          next.totalBeads === 33 ||
          next.totalBeads === 66 ||
          next.totalBeads === 99 ||
          next.totalBeads === 100;
        playSoftBeadClick(hitMilestone);
        return next;
      });
    } else {
      setCountsByPreset((prev) => {
        const nextVal = (prev[activeSinglePreset.id] || 0) + 1;
        playSoftBeadClick(nextVal % singleTarget === 0);
        return {
          ...prev,
          [activeSinglePreset.id]: nextVal
        };
      });
    }
  }, [mode, activeSinglePreset.id, singleTarget, playSoftBeadClick]);

  const handleResetCurrent = () => {
    if (mode === 'cycle-100') {
      setCycleState((prev) => ({
        ...prev,
        totalBeads: 0
      }));
    } else {
      setCountsByPreset((prev) => ({
        ...prev,
        [activeSinglePreset.id]: 0
      }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner Header */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-700">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono-tabular font-semibold text-sky-200">
              <span>COMPTEUR DE TASBĪḤ & DHIKR NUMÉRIQUE</span>
              <span>·</span>
              <span>ARABE VOCALISÉ + PHONÉTIQUE + FRANÇAIS</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white">
              Compteur de Tasbīḥ (SubḥānAllāh · Al-Ḥamdulillāh · Allāhu Akbar) & Invocations
            </h1>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              Utilisez le <strong>Mode Cycle Après-Prière (33 + 33 + 33 + 1 = 100)</strong> qui change automatiquement de formule à chaque palier, ou choisissez librement parmi les <strong>9 formules authentiques de Dhikr</strong>.
            </p>
          </div>

          {/* Mode Switch & Total Counter */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <div className="bg-sky-950/80 border border-sky-600/60 rounded-xl px-4 py-2 text-center">
              <div className="text-[10px] font-mono-tabular font-bold text-sky-300 uppercase">
                TOTAL CUMULÉ
              </div>
              <div className="font-mono-tabular font-extrabold text-xl text-amber-200">
                {lifetimeTotal}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSoundEnabled((s) => !s)}
              className="px-3 py-2.5 rounded-xl bg-sky-800 hover:bg-sky-700 text-xs font-bold text-white border border-sky-600 flex items-center gap-1.5 cursor-pointer"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-sky-300" />
                  <span>Son perle : Activé</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-300" />
                  <span>Son perle : Muet</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mode Tabs */}
        <div className="mt-4 pt-4 border-t border-sky-700/80 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setMode('cycle-100')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer ${
              mode === 'cycle-100'
                ? 'bg-white text-sky-950 shadow-xs'
                : 'bg-sky-800/70 text-sky-100 hover:bg-sky-700 border border-sky-600/50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>Cycle Après-Prière Automatique (33 + 33 + 33 + 1 = 100)</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('single')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer ${
              mode === 'single'
                ? 'bg-white text-sky-950 shadow-xs'
                : 'bg-sky-800/70 text-sky-100 hover:bg-sky-700 border border-sky-600/50'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            <span>Compteur par Formule au Choix (9 Dhikr)</span>
          </button>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left / Center Stage: Interactive Tasbih Bead Counter */}
        <section className="lg:col-span-7 bg-white rounded-xl border-2 border-sky-500 p-5 sm:p-6 shadow-2xs space-y-5">
          {/* If in 100-bead Post-Prayer Cycle Mode, show the 4-stage pipeline */}
          {mode === 'cycle-100' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono-tabular font-bold text-sky-900">
                <span>PROGRESSION DU CYCLE APRÈS LA PRIÈRE : {cycleState.totalBeads} / 100</span>
                <span>CYCLES COMPLETS : {cycleState.completedCycles}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { idx: 0, label: 'SubḥānAllāh', range: '33×', count: Math.min(33, cycleState.totalBeads) },
                  { idx: 1, label: 'Al-ḥamdu lillāh', range: '33×', count: Math.max(0, Math.min(33, cycleState.totalBeads - 33)) },
                  { idx: 2, label: 'Allāhu akbar', range: '33×', count: Math.max(0, Math.min(33, cycleState.totalBeads - 66)) },
                  { idx: 3, label: 'Lā ilāha illa Llāh', range: '1× (100e)', count: cycleState.totalBeads >= 100 ? 1 : 0 }
                ].map((stage) => {
                  const isCurrent = postPrayerStage.stageIndex === stage.idx && !postPrayerStage.isCycleComplete;
                  const isDone =
                    (stage.idx < 3 && stage.count >= 33) ||
                    (stage.idx === 3 && stage.count >= 1);
                  return (
                    <div
                      key={stage.idx}
                      className={`rounded-lg p-2 border text-center ${
                        isCurrent
                          ? 'bg-sky-700 text-white border-sky-800 font-bold'
                          : isDone
                          ? 'bg-sky-100 text-sky-950 border-sky-300 font-semibold'
                          : 'bg-sky-50/60 text-slate-600 border-sky-200'
                      }`}
                    >
                      <div className="text-[11px] truncate">{stage.label}</div>
                      <div className="font-mono-tabular font-extrabold text-xs mt-0.5">
                        {stage.count} / {stage.range}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Active Dhikr Triad Card (Arabic + Phonetic + French) */}
          <div className="bg-sky-50/80 rounded-xl border border-sky-200 p-4 sm:p-5 space-y-2.5 text-center">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono-tabular font-extrabold text-sky-800 bg-white px-2.5 py-1 rounded border border-sky-200">
                {displayedPreset.titleFr}
              </span>
              <button
                type="button"
                onClick={() => speakArabicFormula(displayedPreset.arabic)}
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-950 bg-white px-2.5 py-1 rounded border border-sky-200 cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Écouter la prononciation
              </button>
            </div>

            <div
              dir="rtl"
              className="font-arabic font-bold text-3xl sm:text-4xl text-slate-950 py-2 leading-relaxed"
            >
              {displayedPreset.arabic}
            </div>

            <div className="text-sm sm:text-base font-mono-tabular font-extrabold text-sky-800">
              [{displayedPreset.phonetic}]
            </div>

            <div className="text-sm sm:text-base font-semibold text-slate-900">
              = {displayedPreset.french}
            </div>

            <p className="text-xs text-slate-600 pt-1">
              {displayedPreset.virtueFr}
            </p>
          </div>

          {/* Large Tactile Tasbih Counter Button & Progress Ring */}
          <div className="flex flex-col items-center justify-center py-2 space-y-4">
            <button
              type="button"
              onClick={handleIncrement}
              data-testid="tasbih-increment-button"
              aria-label="Compter une perle de Tasbih (+1)"
              className="group relative w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-gradient-to-b from-sky-600 to-sky-800 hover:from-sky-500 hover:to-sky-700 active:scale-95 transition-all shadow-md flex flex-col items-center justify-center text-white cursor-pointer border-4 border-sky-200 select-none"
            >
              {/* SVG Circular Progress Ring */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                viewBox="0 0 120 120"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="6"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#FDE68A"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 54}
                  strokeDashoffset={2 * Math.PI * 54 * (1 - progressRatio)}
                />
              </svg>

              <span className="text-xs font-mono-tabular font-bold text-sky-200 uppercase tracking-wider">
                CLIQUER POUR COMPTER
              </span>
              <span
                data-testid="tasbih-current-count"
                className="font-mono-tabular font-extrabold text-5xl sm:text-6xl text-white my-1"
              >
                {displayedCount}
              </span>
              <span className="text-xs font-mono-tabular font-bold text-amber-200">
                Objectif : {displayedTarget}
              </span>
              <span className="mt-2 inline-flex items-center gap-1 text-[11px] bg-sky-950/60 px-3 py-1 rounded-full text-sky-100">
                <Plus className="w-3.5 h-3.5" /> +1 perle
              </span>
            </button>

            {mode === 'cycle-100' && postPrayerStage.isCycleComplete && (
              <div className="bg-sky-50 border border-sky-300 text-sky-950 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                <span>
                  Mā chā’a Llāh ! Cycle complet de 100 terminé (33 SubḥānAllāh + 33 Al-ḥamdu lillāh + 33 Allāhu akbar + 1 Tahlīl). Cliquez à nouveau pour démarrer un nouveau cycle.
                </span>
              </div>
            )}

            {/* Bottom Controls: Target Selector & Reset */}
            <div className="w-full flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-sky-100">
              {mode === 'single' ? (
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-700">Objectif :</span>
                  {[33, 99, 100, 300].map((targetVal) => (
                    <button
                      key={targetVal}
                      type="button"
                      onClick={() =>
                        setTargetsByPreset((prev) => ({
                          ...prev,
                          [activeSinglePreset.id]: targetVal
                        }))
                      }
                      className={`px-2.5 py-1 rounded text-xs font-mono-tabular font-bold cursor-pointer ${
                        singleTarget === targetVal
                          ? 'bg-sky-600 text-white'
                          : 'bg-sky-50 text-sky-900 border border-sky-200 hover:bg-sky-100'
                      }`}
                    >
                      {targetVal}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-xs font-mono-tabular font-bold text-sky-900">
                  Total du cycle actuel : {cycleState.totalBeads} / 100 perles
                </div>
              )}

              <button
                type="button"
                onClick={handleResetCurrent}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Remettre à zéro (0)</span>
              </button>
            </div>
          </div>
        </section>

        {/* Right Column: List of All 9 Authentic Dhikr Formulas */}
        <aside className="lg:col-span-5 bg-white rounded-xl border border-sky-200 p-4 sm:p-5 shadow-2xs space-y-3">
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-sky-100">
            <h2 className="font-display font-extrabold text-sm sm:text-base text-slate-950">
              Les 9 Formules de Tasbīḥ & Dhikr
            </h2>
            <span className="text-xs font-mono-tabular font-bold text-sky-800">
              Cliquez pour sélectionner
            </span>
          </div>

          <div className="space-y-2.5">
            {DHIKR_PRESETS.map((preset) => {
              const countForPreset = countsByPreset[preset.id] || 0;
              const isSelected =
                (mode === 'single' && selectedPresetId === preset.id) ||
                (mode === 'cycle-100' && displayedPreset.id === preset.id);

              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => {
                    setMode('single');
                    setSelectedPresetId(preset.id);
                  }}
                  className={`w-full text-left rounded-xl border p-3.5 transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-sky-50 border-sky-600 ring-2 ring-sky-500/20'
                      : 'bg-white border-sky-200/80 hover:bg-sky-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-xs sm:text-sm text-slate-950">
                      {preset.titleFr}
                    </span>
                    <span className="font-mono-tabular font-extrabold text-xs bg-sky-100 text-sky-900 px-2 py-0.5 rounded border border-sky-200">
                      {countForPreset} / {preset.defaultTarget}
                    </span>
                  </div>

                  <div
                    dir="rtl"
                    className="font-arabic font-bold text-xl text-slate-950 text-right my-1"
                  >
                    {preset.arabic}
                  </div>

                  <div className="text-xs font-mono-tabular font-bold text-sky-800">
                    [{preset.phonetic}]
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">
                    = {preset.french}
                  </div>
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
};
