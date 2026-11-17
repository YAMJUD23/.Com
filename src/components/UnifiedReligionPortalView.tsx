import React, { useState } from 'react';
import {
  Volume2,
  Download,
  CheckCircle2,
  RotateCcw,
  FileText,
  History
} from 'lucide-react';
import {
  WUDU_STEPS,
  WUDU_NULLIFIERS,
  FIVE_DAILY_PRAYERS,
  SALAT_STEP_BY_STEP,
  FIVE_PILLARS_ISLAM,
  SIX_PILLARS_IMAN,
  FIQH_FIVE_RULINGS,
  FIVE_LEGAL_MAXIMS,
  FIVE_MAQASID_SHARIA,
  AKHLAQ_VIRTUES,
  SIRAH_MILESTONES,
  HIJRI_MONTHS,
  DAILY_DUAS,
  PDF10_PRIERE_QUIZ,
  PDF11_RESUME_ISLAM_QUIZ
} from '../data/prayerAndReligionData';
import {
  SHARED_ORIGINAL_PDF_DOCUMENTS,
  TWENTY_FIVE_PROPHETS_QURAN,
  QUESTIONNAIRE_ISLAM_9_QUESTIONS,
  downloadOriginalUntouchedPdf
} from '../data/sharedOriginalPdfsData';
import {
  COMPLETE_PDF_DOCUMENTS,
  CompletePdfDocId,
  QURAN_LARGE_PDF_PACKS,
  QuranLargePdfPackId,
  downloadCompleteMultiPagePdf,
  downloadQuranLargePdfPack,
  speakArabicText
} from '../utils/pdfGenerator';
import { Quran25ReaderView } from './Quran25ReaderView';
import { TasbihCounterView } from './TasbihCounterView';

export type ReligionChapterId =
  | 'ablutions-priere'
  | 'fondements-fiqh'
  | 'questionnaire-evaluation'
  | 'coran-sourates'
  | 'tasbih-invocations'
  | 'supports-pdf-religion';

interface UnifiedReligionPortalViewProps {
  activeChapter: ReligionChapterId;
}

export const UnifiedReligionPortalView: React.FC<UnifiedReligionPortalViewProps> = ({
  activeChapter
}) => {
  const [selectedSalatStep, setSelectedSalatStep] = useState<number>(1);
  const [duaCategoryFilter, setDuaCategoryFilter] = useState<string>('ALL');
  const [studentAnswers, setStudentAnswers] = useState<Record<string, string>>({});
  const [selectedQcmAnswers, setSelectedQcmAnswers] = useState<Record<string, number>>({});

  const priere1pDoc = SHARED_ORIGINAL_PDF_DOCUMENTS.find(
    (d) => d.id === 'original-priere-1p'
  )!;
  const islamAz3pDoc = SHARED_ORIGINAL_PDF_DOCUMENTS.find(
    (d) => d.id === 'original-islam-az-3p'
  )!;
  const questionnaire2pDoc = SHARED_ORIGINAL_PDF_DOCUMENTS.find(
    (d) => d.id === 'original-questionnaire-islam-2p'
  )!;

  const religionOriginalDocs = SHARED_ORIGINAL_PDF_DOCUMENTS.filter(
    (d) => d.domain === 'religion'
  );
  const religionBookletDocs = COMPLETE_PDF_DOCUMENTS.filter(
    (d) => d.id === 'pdf-priere-salat' || d.id === 'pdf-resume-islam'
  );

  const currentSalatStepObj =
    SALAT_STEP_BY_STEP.find((s) => s.stepNumber === selectedSalatStep) ||
    SALAT_STEP_BY_STEP[0];

  const filteredDuas =
    duaCategoryFilter === 'ALL'
      ? DAILY_DUAS
      : DAILY_DUAS.filter((d) => d.category === duaCategoryFilter);

  const renderPdfDownloadButton = (label: string, onClick: () => void) => (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-extrabold bg-white hover:bg-sky-50 text-sky-950 shadow-2xs transition-colors cursor-pointer"
    >
      <Download className="w-3.5 h-3.5 text-sky-800" />
      <span>{label}</span>
    </button>
  );

  // ===========================================================================
  // CHAPITRE 1 : ABLUTIONS (WUḌŪ’) & PRIÈRE PAS-À-PAS (ṢALĀT)
  // ===========================================================================
  if (activeChapter === 'ablutions-priere') {
    return (
      <div className="space-y-6">
        {/* Homogeneous Top Header with PDF Downloads */}
        <div className="bg-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-800 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-sky-200">
                RELIGION & PRATIQUE · PURIFICATION & ACCOMPLISSEMENT DE LA PRIÈRE
              </div>
              <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Guide des Ablutions (Al-Wuḍū’), des 5 Prières & de la Prière Pas-à-Pas
              </h1>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                Retrouvez toutes les étapes des ablutions et de la prière quotidienne avec les formules en arabe vocalisé, la transcription phonétique, la traduction française et l’écoute vocale lente.
              </p>
            </div>
          </div>

          <div className="pt-3.5 border-t border-sky-800/80 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-sky-200">
              Supports PDF imprimables de ce chapitre :
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {renderPdfDownloadButton(
                'PDF : Fiche Résumé Pratique de la Prière (1 page)',
                () => downloadOriginalUntouchedPdf(priere1pDoc)
              )}
              {renderPdfDownloadButton(
                'PDF : Guide Complet Ablutions & Prière (2 pages)',
                () => downloadCompleteMultiPagePdf('pdf-priere-salat')
              )}
            </div>
          </div>
        </div>

        {/* Section A : Les 8 Étapes Ordonnées des Ablutions + Annulatifs */}
        <section className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
            <div>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Les Ablutions (Al-Wuḍū’) en 8 Étapes Ordonnées
              </h2>
              <p className="text-xs text-slate-600">
                Cliquez sur une étape pour écouter la formule en arabe.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WUDU_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                onClick={() => speakArabicText(step.arabic)}
                className="rounded-xl border border-slate-200 bg-slate-50/40 p-4 flex flex-col justify-between gap-3 hover:border-sky-400 transition-colors cursor-pointer"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono-tabular font-extrabold text-xs text-sky-900 bg-sky-100 px-2.5 py-0.5 rounded">
                      Étape {step.stepNumber} · {step.repetition}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600">
                      {step.obligationType}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-950">
                    {step.titleFr}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {step.descriptionFr}
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-slate-200 p-3 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 shrink-0">
                      <Volume2 className="w-3.5 h-3.5" />
                      Écouter
                    </span>
                    <div
                      dir="rtl"
                      className="font-arabic font-bold text-lg sm:text-xl text-slate-950 text-right leading-relaxed"
                    >
                      {step.arabic}
                    </div>
                  </div>
                  <div className="text-xs font-mono-tabular font-bold text-sky-800">
                    [{step.phonetic}]
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800">
                    {step.french}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-sky-50/60 rounded-xl border border-sky-200 p-4">
            <h3 className="font-display font-bold text-sm sm:text-base text-sky-950 mb-3">
              Ce qui annule les ablutions (Nawāqiḍ al-Wuḍū’) & Cas du Tayammum
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {WUDU_NULLIFIERS.map((item) => (
                <div
                  key={item.titleFr}
                  onClick={() => speakArabicText(item.arabic)}
                  className="bg-white rounded-lg p-3 border border-sky-200/80 flex flex-col justify-between gap-2 cursor-pointer hover:border-sky-400"
                >
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-slate-950">
                      {item.titleFr}
                    </div>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                      {item.detailFr}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono-tabular font-bold text-sky-800">
                      [{item.phonetic}]
                    </span>
                    <span dir="rtl" className="font-arabic font-bold text-base text-slate-900">
                      {item.arabic}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B : Tableau des 5 Prières Quotidiennes */}
        <section className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
              Les 5 Prières Obligatoires de la Journée (17 Rak‘āt Farḍ)
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
              <thead>
                <tr className="bg-sky-900 text-white">
                  <th className="p-2.5 border border-sky-800">Prière</th>
                  <th className="p-2.5 border border-sky-800 text-right">Nom en Arabe</th>
                  <th className="p-2.5 border border-sky-800 text-center">Unités Obligatoires (Farḍ)</th>
                  <th className="p-2.5 border border-sky-800 text-center">Sunnah (Avant / Après)</th>
                  <th className="p-2.5 border border-sky-800">Récitation</th>
                  <th className="p-2.5 border border-sky-800">Moment</th>
                </tr>
              </thead>
              <tbody>
                {FIVE_DAILY_PRAYERS.map((prayer, idx) => (
                  <tr
                    key={prayer.id}
                    onClick={() => speakArabicText(prayer.nameArabic)}
                    className={`cursor-pointer hover:bg-sky-50 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                    }`}
                  >
                    <td className="p-2.5 border border-slate-200">
                      <div className="font-bold text-slate-950">{prayer.nameFr}</div>
                      <div className="text-xs font-mono-tabular font-semibold text-sky-800">
                        [{prayer.namePhonetic}] — {prayer.meaningFr}
                      </div>
                    </td>
                    <td
                      dir="rtl"
                      className="p-2.5 border border-slate-200 font-arabic font-bold text-lg sm:text-xl text-slate-950 text-right"
                    >
                      {prayer.nameArabic}
                    </td>
                    <td className="p-2.5 border border-slate-200 text-center">
                      <span className="inline-block font-mono-tabular font-extrabold text-sm text-sky-950 bg-sky-100 border border-sky-200 px-2.5 py-0.5 rounded">
                        {prayer.fardRakats} Rak‘āt
                      </span>
                    </td>
                    <td className="p-2.5 border border-slate-200 text-center font-mono-tabular font-semibold text-slate-700">
                      {prayer.sunnahBefore > 0 ? `${prayer.sunnahBefore} avant` : '—'} /{' '}
                      {prayer.sunnahAfter > 0 ? `${prayer.sunnahAfter} après` : '—'}
                    </td>
                    <td className="p-2.5 border border-slate-200 font-semibold text-slate-800">
                      {prayer.recitationVoice}
                    </td>
                    <td className="p-2.5 border border-slate-200 text-slate-700">
                      {prayer.timeWindowFr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section C : Guide Interactif de la Prière Pas-à-Pas (11 étapes) */}
        <section className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Comment Faire la Prière (As-Ṣalāt) Pas-à-Pas
              </h2>
              <p className="text-xs text-slate-600">
                Sélectionnez une étape ou parcourez l’ensemble des postures et formules à réciter.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {SALAT_STEP_BY_STEP.map((s) => {
              const isSelected = s.stepNumber === selectedSalatStep;
              return (
                <button
                  key={s.stepNumber}
                  type="button"
                  onClick={() => setSelectedSalatStep(s.stepNumber)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-sky-800 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-800 hover:bg-sky-50 hover:text-sky-900'
                  }`}
                >
                  Étape {s.stepNumber}
                </button>
              );
            })}
          </div>

          <div className="bg-sky-50/70 rounded-xl border border-sky-300 p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="bg-sky-900 text-white font-mono-tabular font-extrabold text-xs px-2.5 py-1 rounded">
                  Étape {currentSalatStepObj.stepNumber} sur {SALAT_STEP_BY_STEP.length}
                </span>
                <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950">
                  {currentSalatStepObj.postureFr}
                </h3>
              </div>
              <span className="text-xs font-mono-tabular font-bold text-sky-900 bg-white px-2.5 py-1 rounded border border-sky-200">
                {currentSalatStepObj.statusFr}
              </span>
            </div>

            <p className="text-sm text-slate-800 leading-relaxed">
              {currentSalatStepObj.actionFr}
            </p>

            <div className="bg-white rounded-xl border border-sky-200 p-4 space-y-2">
              <div className="flex items-start justify-between gap-3">
                <button
                  type="button"
                  onClick={() => speakArabicText(currentSalatStepObj.arabic)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-sky-800 hover:bg-sky-900 cursor-pointer shrink-0"
                >
                  <Volume2 className="w-4 h-4" />
                  Écouter la formule
                </button>
                <div
                  dir="rtl"
                  className="font-arabic font-bold text-xl sm:text-2xl text-slate-950 text-right leading-relaxed"
                >
                  {currentSalatStepObj.arabic}
                </div>
              </div>
              <div className="text-xs sm:text-sm font-mono-tabular font-bold text-sky-800">
                [{currentSalatStepObj.phonetic}]
              </div>
              <div className="text-sm font-semibold text-slate-900">
                {currentSalatStepObj.french}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
              <p className="text-xs text-sky-950 font-medium">
                <strong>Repère :</strong> {currentSalatStepObj.tipFr}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  disabled={selectedSalatStep <= 1}
                  onClick={() => setSelectedSalatStep((p) => Math.max(1, p - 1))}
                  className="px-3 py-1 rounded border border-sky-300 bg-white text-xs font-bold text-sky-900 disabled:opacity-40 cursor-pointer"
                >
                  ← Précédente
                </button>
                <button
                  type="button"
                  disabled={selectedSalatStep >= SALAT_STEP_BY_STEP.length}
                  onClick={() =>
                    setSelectedSalatStep((p) =>
                      Math.min(SALAT_STEP_BY_STEP.length, p + 1)
                    )
                  }
                  className="px-3 py-1 rounded bg-sky-800 text-xs font-bold text-white disabled:opacity-40 cursor-pointer"
                >
                  Suivante →
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {SALAT_STEP_BY_STEP.map((step) => (
              <div
                key={step.stepNumber}
                onClick={() => {
                  setSelectedSalatStep(step.stepNumber);
                  speakArabicText(step.arabic);
                }}
                className={`rounded-xl border p-3.5 text-left transition-colors cursor-pointer ${
                  step.stepNumber === selectedSalatStep
                    ? 'bg-sky-50/80 border-sky-600'
                    : 'bg-slate-50/50 border-slate-200 hover:border-sky-400'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-extrabold text-xs text-sky-950">
                    Étape {step.stepNumber} — {step.postureFr}
                  </span>
                  <Volume2 className="w-3.5 h-3.5 text-sky-700" />
                </div>
                <div
                  dir="rtl"
                  className="font-arabic font-bold text-lg text-slate-950 text-right my-1"
                >
                  {step.arabic}
                </div>
                <div className="text-xs font-mono-tabular font-bold text-sky-800">
                  [{step.phonetic}]
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  {step.french}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // ===========================================================================
  // CHAPITRE 2 : L’ISLAM DE A À Z, PILIERS, PROPHÈTES & FIQH
  // ===========================================================================
  if (activeChapter === 'fondements-fiqh') {
    return (
      <div className="space-y-6">
        <div className="bg-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-800 space-y-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-sky-200">
              RELIGION & PRATIQUE · CROYANCE, PILIERS, PROPHÈTES & PRINCIPES DU FIQH
            </div>
            <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              L’Islam de A à Z : Piliers de l’Islam, Piliers de la Foi, Prophètes & Fiqh
            </h1>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              Synthèse complète et bilingue (Français – Arabe) regroupant les 5 Piliers de l’Islam, les 6 Piliers de la Foi, les 25 Prophètes cités dans le Coran, les statuts du Fiqh, l’éthique et les invocations quotidiennes.
            </p>
          </div>

          <div className="pt-3.5 border-t border-sky-800/80 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-sky-200">
              Supports PDF imprimables de ce chapitre :
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {renderPdfDownloadButton(
                'PDF : L’Islam de A à Z — Français & Arabe (3 pages)',
                () => downloadOriginalUntouchedPdf(islamAz3pDoc)
              )}
              {renderPdfDownloadButton(
                'PDF : Synthèse des Fondements & du Fiqh (2 pages)',
                () => downloadCompleteMultiPagePdf('pdf-resume-islam')
              )}
            </div>
          </div>
        </div>

        {/* Section A : Les 5 Piliers de l'Islam */}
        <section className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
              Les 5 Piliers de l’Islam (أَرْكَانُ الْإِسْلَامِ الْخَمْسَةُ)
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {FIVE_PILLARS_ISLAM.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-xl border border-slate-200 p-4 sm:p-5 bg-slate-50/40 flex flex-col justify-between gap-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-tabular font-extrabold text-xs bg-sky-900 text-white px-2.5 py-0.5 rounded">
                      Pilier {pillar.number} sur 5
                    </span>
                    <button
                      type="button"
                      onClick={() => speakArabicText(pillar.arabic)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-sky-800 hover:text-sky-950 bg-white px-2.5 py-1 rounded border border-slate-200 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      Écouter
                    </button>
                  </div>

                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950">
                    {pillar.titleFr}
                  </h3>

                  <div className="bg-white rounded-lg border border-slate-200 p-3 space-y-1">
                    <div
                      dir="rtl"
                      className="font-arabic font-bold text-lg sm:text-xl text-slate-950 text-right"
                    >
                      {pillar.arabic}
                    </div>
                    <div className="text-xs font-mono-tabular font-bold text-sky-800">
                      [{pillar.phonetic}]
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800">
                      {pillar.french}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {pillar.summaryFr}
                  </p>
                </div>

                <div className="bg-sky-900 text-white rounded-lg p-3 space-y-1">
                  <div
                    dir="rtl"
                    className="font-arabic font-bold text-base sm:text-lg text-sky-100 text-right"
                  >
                    {pillar.proofArabic}
                  </div>
                  <div className="text-[11px] font-mono-tabular text-sky-200">
                    [{pillar.proofPhonetic}]
                  </div>
                  <div className="text-xs font-medium text-white">
                    {pillar.proofFrench}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section B : Les 6 Piliers de la Foi (Al-Iman) */}
        <section className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
              Les 6 Piliers de la Foi (أَرْكَانُ الْإِيمَانِ السِّتَّةُ) & Le Tawḥīd
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {SIX_PILLARS_IMAN.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-xl border border-slate-200 p-4 sm:p-5 bg-white flex flex-col justify-between gap-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-tabular font-extrabold text-xs bg-sky-800 text-white px-2.5 py-0.5 rounded">
                      Foi (Īmān) · Pilier {pillar.number} sur 6
                    </span>
                    <button
                      type="button"
                      onClick={() => speakArabicText(pillar.arabic)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-sky-800 hover:text-sky-950 bg-sky-50 px-2.5 py-1 rounded border border-sky-200 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      Écouter
                    </button>
                  </div>

                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950">
                    {pillar.titleFr}
                  </h3>

                  <div className="bg-slate-50 rounded-lg border border-slate-200 p-3 space-y-1">
                    <div
                      dir="rtl"
                      className="font-arabic font-bold text-lg sm:text-xl text-slate-950 text-right"
                    >
                      {pillar.arabic}
                    </div>
                    <div className="text-xs font-mono-tabular font-bold text-sky-800">
                      [{pillar.phonetic}]
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800">
                      {pillar.french}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {pillar.summaryFr}
                  </p>
                </div>

                <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 space-y-1">
                  <div
                    dir="rtl"
                    className="font-arabic font-bold text-base sm:text-lg text-sky-950 text-right"
                  >
                    {pillar.proofArabic}
                  </div>
                  <div className="text-[11px] font-mono-tabular font-bold text-sky-800">
                    [{pillar.proofPhonetic}]
                  </div>
                  <div className="text-xs font-semibold text-slate-800">
                    {pillar.proofFrench}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section C : Les 25 Prophètes Mentionnés dans le Coran */}
        <section className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="border-b border-slate-200 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Les 25 Prophètes et Messagers Mentionnés dans le Coran
              </h2>
              <p className="text-xs text-slate-600">
                Cliquez sur un nom pour écouter sa prononciation en arabe.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {TWENTY_FIVE_PROPHETS_QURAN.map((pr) => (
              <button
                key={pr.num}
                type="button"
                onClick={() => speakArabicText(pr.ar)}
                className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-sky-50 hover:border-sky-400 flex items-center justify-between gap-2 cursor-pointer transition-colors"
              >
                <span className="text-xs font-bold text-slate-900">
                  {pr.num}. {pr.fr}
                </span>
                <span dir="rtl" className="font-arabic font-bold text-lg text-sky-950">
                  {pr.ar}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Section D : Fiqh (5 Statuts Juridiques, 5 Maximes & 5 Maqāṣid) */}
        <section className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
              Principes du Fiqh : Les 5 Statuts des Actes, Maximes & Finalités (Maqāṣid)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {FIQH_FIVE_RULINGS.map((ruling) => (
              <div
                key={ruling.code}
                onClick={() => speakArabicText(ruling.arabic)}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 flex flex-col justify-between gap-3 cursor-pointer hover:border-sky-400"
              >
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-950">
                    {ruling.nameFr}
                  </h3>
                  <div className="bg-white rounded-lg border border-slate-200 p-2.5">
                    <div
                      dir="rtl"
                      className="font-arabic font-bold text-lg text-slate-950 text-right"
                    >
                      {ruling.arabic}
                    </div>
                    <div className="text-[11px] font-mono-tabular font-bold text-sky-800">
                      [{ruling.phonetic}]
                    </div>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {ruling.definitionFr}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 text-xs font-semibold text-sky-950">
                  {ruling.consequenceFr}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FIVE_LEGAL_MAXIMS.map((maxim) => (
              <div
                key={maxim.number}
                onClick={() => speakArabicText(maxim.arabic)}
                className="rounded-xl border border-slate-200 p-4 space-y-2 bg-white hover:border-sky-400 cursor-pointer"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-950">
                    {maxim.titleFr}
                  </h3>
                  <Volume2 className="w-4 h-4 text-sky-700 shrink-0" />
                </div>

                <div className="bg-sky-50/70 rounded-lg border border-sky-200 p-3 space-y-1">
                  <div
                    dir="rtl"
                    className="font-arabic font-bold text-lg sm:text-xl text-slate-950 text-right"
                  >
                    {maxim.arabic}
                  </div>
                  <div className="text-xs font-mono-tabular font-bold text-sky-800">
                    [{maxim.phonetic}] — {maxim.french}
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed">
                  {maxim.explanationFr}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {FIVE_MAQASID_SHARIA.map((m) => (
              <div
                key={m.number}
                onClick={() => speakArabicText(m.arabic)}
                className="rounded-xl border border-sky-200 bg-sky-50/40 p-3.5 space-y-2 cursor-pointer hover:border-sky-400"
              >
                <h3 className="font-display font-extrabold text-xs sm:text-sm text-slate-950">
                  {m.titleFr}
                </h3>
                <div
                  dir="rtl"
                  className="font-arabic font-bold text-lg text-sky-950 text-right"
                >
                  {m.arabic}
                </div>
                <div className="text-[11px] font-mono-tabular font-bold text-sky-800">
                  [{m.phonetic}]
                </div>
                <p className="text-xs text-slate-700">{m.descriptionFr}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section E : Éthique (Akhlāq), Sīrah, Mois Hégiriens & Invocations */}
        <section className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
              Éthique du Croyant (Al-Akhlāq), Étapes de la Sīrah & Calendrier Hégirien
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AKHLAQ_VIRTUES.map((v) => (
              <div
                key={v.id}
                onClick={() => speakArabicText(v.quoteArabic)}
                className="rounded-xl border border-slate-200 p-4 flex flex-col justify-between gap-3 bg-slate-50/40 hover:border-sky-400 cursor-pointer"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display font-extrabold text-sm text-slate-950">
                      {v.virtueFr}
                    </h3>
                    <span dir="rtl" className="font-arabic font-bold text-base text-sky-900">
                      {v.arabic}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {v.explanationFr}
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-slate-200 p-2.5 space-y-1">
                  <div dir="rtl" className="font-arabic font-bold text-base text-slate-950 text-right">
                    {v.quoteArabic}
                  </div>
                  <div className="text-[11px] text-slate-700 font-medium">
                    {v.quoteFrench} ({v.sourceFr})
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-base font-display font-extrabold text-slate-950 flex items-center gap-2">
              <History className="w-4 h-4 text-sky-700" />
              <span>Les Grandes Étapes de la Vie du Prophète Muḥammad ﷺ</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {SIRAH_MILESTONES.map((m) => (
                <div
                  key={m.period}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-1.5"
                >
                  <div className="text-[11px] font-mono-tabular font-extrabold text-sky-800">
                    {m.period} · {m.yearHijriOrCe}
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-slate-950">
                    {m.titleFr}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{m.summaryFr}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-base font-display font-extrabold text-slate-950">
              Les 12 Mois du Calendrier Hégirien
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {HIJRI_MONTHS.map((m) => (
                <div
                  key={m.number}
                  onClick={() => speakArabicText(m.arabic)}
                  className="rounded-lg border border-slate-200 bg-slate-50/50 hover:border-sky-400 p-3 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-tabular font-bold text-xs text-sky-900">
                      {String(m.number).padStart(2, '0')}. {m.phonetic}
                    </span>
                    <span dir="rtl" className="font-arabic font-bold text-base text-slate-950">
                      {m.arabic}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">{m.frenchNote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section F : Invocations du Quotidien (Adhkār) */}
        <section className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div>
              <h2 className="text-lg font-display font-extrabold text-slate-950">
                Les Invocations Authentiques du Quotidien (Adhkār)
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {(
                [
                  'ALL',
                  'Matin & Soir',
                  'Repas & Sommeil',
                  'Maison & Mosquée',
                  'Épreuves & Parents'
                ] as const
              ).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setDuaCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                    duaCategoryFilter === cat
                      ? 'bg-sky-800 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-sky-50'
                  }`}
                >
                  {cat === 'ALL' ? 'Toutes' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDuas.map((dua) => (
              <div
                key={dua.id}
                onClick={() => speakArabicText(dua.arabic)}
                className="rounded-xl border border-slate-200 bg-slate-50/40 hover:border-sky-400 p-4 space-y-2 cursor-pointer"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold text-sky-900">{dua.momentFr}</span>
                  <Volume2 className="w-4 h-4 text-sky-700" />
                </div>
                <div
                  dir="rtl"
                  className="font-arabic font-bold text-xl text-slate-950 text-right leading-relaxed"
                >
                  {dua.arabic}
                </div>
                <div className="text-xs font-mono-tabular font-bold text-sky-800">
                  [{dua.phonetic}]
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  {dua.french}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // ===========================================================================
  // CHAPITRE 3 : QUESTIONNAIRE (LES GRANDES LIGNES DE L'ISLAM) & QCM
  // ===========================================================================
  if (activeChapter === 'questionnaire-evaluation') {
    const allQcm = [...PDF10_PRIERE_QUIZ, ...PDF11_RESUME_ISLAM_QUIZ];

    return (
      <div className="space-y-6">
        <div className="bg-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-800 space-y-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-sky-200">
              RELIGION & PRATIQUE · RÉVISION & ÉVALUATION DES CONNAISSANCES
            </div>
            <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Questionnaire — Les Grandes Lignes de l’Islam & QCM d’Évaluation
            </h1>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              Révisez directement sur le site grâce aux 9 questions bilingues (barème sur 20 points) et au QCM interactif, ou téléchargez le fichier PDF du questionnaire pour l’imprimer.
            </p>
          </div>

          <div className="pt-3.5 border-t border-sky-800/80 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-sky-200">
              Supports PDF imprimables de ce chapitre :
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {renderPdfDownloadButton(
                'PDF : Questionnaire — Les Grandes Lignes de l’Islam (2 pages)',
                () => downloadOriginalUntouchedPdf(questionnaire2pDoc)
              )}
              {renderPdfDownloadButton(
                'PDF : L’Islam de A à Z — Français & Arabe (3 pages)',
                () => downloadOriginalUntouchedPdf(islamAz3pDoc)
              )}
            </div>
          </div>
        </div>

        {/* Section A : Les 9 Questions Bilingues (Questionnaire sur 20 points) adaptées au site */}
        <section className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-lg font-display font-extrabold text-slate-950">
                Questionnaire Bilingue — Les Grandes Lignes de l’Islam (9 Questions · / 20)
              </h2>
              <p className="text-xs text-slate-600">
                Complétez les champs ci-dessous pour vous entraîner ou téléchargez la fiche PDF à remplir sur papier.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStudentAnswers({})}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Effacer mes réponses
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {QUESTIONNAIRE_ISLAM_9_QUESTIONS.map((q) => (
              <div
                key={q.num}
                className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono-tabular font-extrabold text-sky-800 uppercase">
                      Question {q.num}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-950">
                      {q.titleFr}{' '}
                      <span dir="rtl" className="font-arabic text-base text-sky-900 ml-1">
                        ({q.titleAr})
                      </span>
                    </h3>
                  </div>
                  <span className="text-xs font-mono-tabular font-bold px-2.5 py-0.5 rounded bg-sky-100 text-sky-900 shrink-0">
                    {q.points}
                  </span>
                </div>

                <p className="text-xs text-slate-700 font-medium">{q.prompt}</p>

                <div className="space-y-2">
                  {q.items.map((item, idx) => {
                    const key = `q${q.num}_${idx}`;
                    const isPreFilled =
                      item.includes('SIYAM') || item.includes('CROIRE AUX LIVRES');
                    return (
                      <div
                        key={key}
                        className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs space-y-1.5"
                      >
                        <div className="font-semibold text-slate-900">{item}</div>
                        {!isPreFilled ? (
                          <input
                            type="text"
                            value={studentAnswers[key] || ''}
                            onChange={(e) =>
                              setStudentAnswers((prev) => ({
                                ...prev,
                                [key]: e.target.value
                              }))
                            }
                            placeholder="Écrire votre réponse ici..."
                            className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:bg-white focus:border-sky-600"
                          />
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] text-sky-800 font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Exemple déjà complété sur le questionnaire
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section B : QCM Interactif (Ablutions, Prière & Fondements) */}
        <section className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
          <div className="bg-sky-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-display font-extrabold text-white">
                QCM d’Évaluation — Ablutions, Prière & Fondements ({allQcm.length} Questions)
              </h2>
              <p className="text-xs text-sky-200">
                Sélectionnez la bonne réponse pour chaque question
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-tabular font-bold bg-sky-800 px-3 py-1 rounded-lg">
                {Object.keys(selectedQcmAnswers).length} / {allQcm.length} cochées
              </span>
              {Object.keys(selectedQcmAnswers).length > 0 && (
                <button
                  type="button"
                  onClick={() => setSelectedQcmAnswers({})}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-white text-sky-950 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Réinitialiser
                </button>
              )}
            </div>
          </div>

          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {allQcm.map((q, idx) => {
              const chosen = selectedQcmAnswers[q.id];
              return (
                <div
                  key={q.id}
                  className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 flex flex-col justify-between gap-3"
                >
                  <div className="space-y-2">
                    <div className="text-xs sm:text-sm font-bold text-slate-950">
                      <span className="font-mono-tabular text-sky-800 font-extrabold mr-1.5">
                        Q{idx + 1}.
                      </span>
                      {q.question}
                    </div>
                    {q.arabicPrompt && (
                      <div
                        onClick={() => speakArabicText(q.arabicPrompt!.arabic)}
                        className="bg-white border border-sky-200 rounded-lg px-3 py-2 flex items-center justify-between gap-2 cursor-pointer"
                      >
                        <span className="text-xs font-mono-tabular font-bold text-sky-900">
                          [{q.arabicPrompt.phonetic}] — {q.arabicPrompt.french}
                        </span>
                        <span
                          dir="rtl"
                          className="font-arabic font-bold text-lg text-slate-950"
                        >
                          {q.arabicPrompt.arabic}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-1.5">
                    {q.options.map((opt, oIdx) => {
                      const isChosen = chosen === oIdx;
                      return (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() =>
                            setSelectedQcmAnswers((prev) => ({
                              ...prev,
                              [q.id]: oIdx
                            }))
                          }
                          className={`text-left px-3 py-2 rounded-lg border text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
                            isChosen
                              ? 'bg-sky-800 border-sky-800 text-white'
                              : 'bg-white border-slate-200 text-slate-800 hover:border-sky-400'
                          }`}
                        >
                          <span className="font-mono-tabular font-extrabold shrink-0">
                            {isChosen ? '●' : '○'} {String.fromCharCode(65 + oIdx)}.
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  // ===========================================================================
  // CHAPITRE 4 : CORAN (25 SOURATES · AUDIO LENT PAR DÉFAUT)
  // ===========================================================================
  if (activeChapter === 'coran-sourates') {
    return <Quran25ReaderView />;
  }

  // ===========================================================================
  // CHAPITRE 5 : COMPTEUR DE TASBĪḤ & INVOCATIONS
  // ===========================================================================
  if (activeChapter === 'tasbih-invocations') {
    return <TasbihCounterView />;
  }

  // ===========================================================================
  // CHAPITRE 6 : TOUS LES SUPPORTS PDF DE RELIGION
  // ===========================================================================
  return (
    <div className="space-y-6">
      <div className="bg-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-800 space-y-2">
        <div className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-sky-200">
          RELIGION & PRATIQUE · BIBLIOTHÈQUE DE SUPPORTS IMPRIMABLES
        </div>
        <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
          Tous les Supports PDF de Religion & Prière à Télécharger
        </h1>
        <p className="text-xs sm:text-sm text-sky-100 leading-relaxed max-w-3xl">
          Retrouvez ici les supports PDF de religion (la fiche pratique de la prière en 1 page, le résumé complet de l’Islam de A à Z en 3 pages, le questionnaire en 2 pages ainsi que les livrets complémentaires A4).
        </p>
      </div>

      <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-lg font-display font-extrabold text-slate-950">
            Supports PDF Téléchargeables (Prière, Islam de A à Z & Questionnaire)
          </h2>
          <p className="text-xs text-slate-600">
            Cliquez sur « Télécharger le PDF » pour obtenir directement le document prêt à imprimer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {religionOriginalDocs.map((doc) => (
            <div
              key={doc.id}
              className="border border-sky-200 bg-sky-50/40 rounded-xl p-4 flex flex-col justify-between gap-3"
            >
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-tabular font-extrabold text-sky-900 bg-sky-100 px-2.5 py-0.5 rounded">
                  <FileText className="w-3.5 h-3.5" />
                  SUPPORT DE COURS · {doc.pageCount}{' '}
                  {doc.pageCount > 1 ? 'PAGES' : 'PAGE'}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-950">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{doc.subtitle}</p>
              </div>

              <div className="pt-2 border-t border-sky-200/70 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => downloadOriginalUntouchedPdf(doc)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-extrabold bg-sky-800 hover:bg-sky-900 text-white shadow-2xs transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>
                    Télécharger le PDF ({doc.pageCount}{' '}
                    {doc.pageCount > 1 ? 'pages' : 'page'})
                  </span>
                </button>
              </div>
            </div>
          ))}

          {religionBookletDocs.map((doc) => (
            <div
              key={doc.id}
              className="border border-slate-200 bg-slate-50/40 hover:border-sky-300 rounded-xl p-4 flex flex-col justify-between gap-3 transition-colors"
            >
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-tabular font-extrabold text-sky-900 bg-sky-100 px-2.5 py-0.5 rounded">
                  <FileText className="w-3.5 h-3.5" />
                  LIVRET DE SYNTHÈSE A4 · {doc.pageCount} PAGES
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-950">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{doc.subtitle}</p>
              </div>

              <div className="pt-2 border-t border-slate-200/80 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() =>
                    downloadCompleteMultiPagePdf(doc.id as CompletePdfDocId)
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-extrabold bg-sky-800 hover:bg-sky-900 text-white shadow-2xs transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Télécharger le PDF ({doc.pageCount} pages)</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Les 10 Livrets PDF du Coran (25 Sourates en Très Grands Caractères) */}
      <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-lg font-display font-extrabold text-slate-950">
            Les 10 Livrets PDF des 25 Sourates du Coran (Très Grands Caractères Ultra-Lisibles)
          </h2>
          <p className="text-xs text-slate-600">
            Les 25 sourates réparties en 10 fichiers PDF distincts avec écriture très grande et aérée (arabe vocalisé géant, phonétique et traduction française).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {QURAN_LARGE_PDF_PACKS.map((pack) => (
            <div
              key={pack.id}
              className="border border-slate-200 bg-slate-50/40 hover:border-sky-300 rounded-xl p-4 flex flex-col justify-between gap-3 transition-colors"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-tabular font-extrabold text-sky-900 bg-sky-100 px-2.5 py-0.5 rounded">
                    <FileText className="w-3.5 h-3.5" />
                    CORAN TRÈS GRAND FORMAT · {pack.surahNumbers.length}{' '}
                    {pack.surahNumbers.length > 1 ? 'SOURATES' : 'SOURATE COMPLÈTE'}
                  </span>
                  <span dir="rtl" className="font-arabic font-bold text-base text-sky-950">
                    {pack.titleArabic}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-950">
                  {pack.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pack.subtitle}</p>
              </div>

              <div className="pt-2 border-t border-slate-200/80 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => downloadQuranLargePdfPack(pack.id as QuranLargePdfPackId)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-extrabold bg-sky-800 hover:bg-sky-900 text-white shadow-2xs transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Télécharger le PDF Grand Format</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
