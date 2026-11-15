import React, { useState } from 'react';
import {
  Droplets,
  Compass,
  BookOpen,
  Scale,
  HeartHandshake,
  History,
  Sparkles,
  Volume2,
  CheckCircle2,
  RotateCcw,
  Download,
  FileText
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
  DAILY_DUAS
} from '../data/prayerAndReligionData';
import {
  CompletePdfDocId,
  downloadCompleteMultiPagePdf
} from '../utils/pdfGenerator';

type ReligionSubTab =
  | 'wudu-salat'
  | 'piliers-foi'
  | 'fiqh-maqasid'
  | 'ethique-sirah'
  | 'citadelle-duas'
  | 'quiz-religion';

interface PrayerAndReligionViewProps {
  initialTab?: ReligionSubTab;
  onOpenPdfDoc?: (docId: CompletePdfDocId) => void;
}

const RELIGION_QCM = [
  {
    id: 'rq-1',
    questionFr:
      'Lors des ablutions (Al-Wuḍū’), combien de fois essuie-t-on la tête et les oreilles (Al-Masḥ) ?',
    arabicRef: 'مَسْحُ الرَّأْسِ وَالْأُذُنَيْنِ مَرَّةً وَاحِدَةً',
    phoneticRef: 'Masḥu r-ra’si wa l-udhunayni marratan wāḥidatan',
    frenchRef: 'L’essuyage de la tête et des deux oreilles une seule fois',
    options: [
      'Une seule fois (1 fois)',
      'Trois fois comme le visage',
      'Sept fois',
      'Ce n’est pas nécessaire dans les ablutions'
    ]
  },
  {
    id: 'rq-2',
    questionFr:
      'Quelle parole prononce-t-on obligatoirement 3 fois durant l’inclinaison (Ar-Rukū‘) les mains sur les genoux ?',
    arabicRef: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    phoneticRef: 'Subḥāna Rabbiya l-‘Aẓīm',
    frenchRef: 'Gloire et pureté à mon Seigneur l’Immense',
    options: [
      'Subḥāna Rabbiya l-‘Aẓīm (سُبْحَانَ رَبِّيَ الْعَظِيمِ)',
      'Subḥāna Rabbiya l-A‘lā (سُبْحَانَ رَبِّيَ الْأَعْلَىٰ)',
      'Sami‘a Llāhu li-man ḥamidah',
      'Rabbi ghfir lī'
    ]
  },
  {
    id: 'rq-3',
    questionFr:
      'Combien d’unités obligatoires (Rak‘āt Farḍ) comportent les 5 prières quotidiennes dans l’ordre (Fajr, Ẓuhr, ‘Aṣr, Maghrib, ‘Ichā’) ?',
    arabicRef: '٢ (الْفَجْر) · ٤ (الظُّهْر) · ٤ (الْعَصْر) · ٣ (الْمَغْرِب) · ٤ (الْعِشَاء)',
    phoneticRef: '2 (Fajr) · 4 (Ẓuhr) · 4 (‘Aṣr) · 3 (Maghrib) · 4 (‘Ichā’)',
    frenchRef: 'Total de 17 Rak‘āt obligatoires par jour',
    options: [
      '2 · 4 · 4 · 3 · 4 (soit 17 Rak‘āt au total)',
      '2 · 2 · 2 · 3 · 4',
      '4 · 4 · 4 · 4 · 4',
      '2 · 4 · 3 · 3 · 2'
    ]
  },
  {
    id: 'rq-4',
    questionFr:
      'Dans les principes du Fiqh, comment appelle-t-on un acte recommandé qui procure une récompense si on l’accomplit mais aucun péché si on ne le fait pas ?',
    arabicRef: 'الْمُسْتَحَبُّ / السُّنَّةُ',
    phoneticRef: 'Al-Mustaḥabbu / As-Sunnah',
    frenchRef: 'Le Recommandé / La Sunnah méritoire',
    options: [
      'Mustaḥabb / Sunnah (الْمُسْتَحَبُّ)',
      'Farḍ / Wājib (الْفَرْضُ)',
      'Makrūh (الْمَكْرُوهُ)',
      'Ḥarām (الْحَرَامُ)'
    ]
  },
  {
    id: 'rq-5',
    questionFr:
      'Que signifie la grande maxime juridique : « الْيَقِينُ لَا يَزُولُ بِالشَّكِّ » [Al-yaqīnu lā yazūlu bi-ch-chakk] ?',
    arabicRef: 'الْيَقِينُ لَا يَزُولُ بِالشَّكِّ',
    phoneticRef: 'Al-yaqīnu lā yazūlu bi-ch-chakk',
    frenchRef: 'La certitude n’est jamais annulée par le doute',
    options: [
      'La certitude n’est pas annulée par un simple doute (ex : si je suis sûr d’avoir mes ablutions et que je doute ensuite, elles restent valides)',
      'Le doute annule immédiatement toutes les prières de la journée',
      'Il faut refaire ses ablutions toutes les dix minutes',
      'Les actes ne valent que par les paroles'
    ]
  },
  {
    id: 'rq-6',
    questionFr:
      'Quelles sont les 5 grandes finalités supérieures de l’Islam (Maqāṣid ach-Charī‘ah) ?',
    arabicRef: 'حِفْظُ الدِّينِ وَالنَّفْسِ وَالْعَقْلِ وَالنَّسْلِ وَالْمَالِ',
    phoneticRef: 'Ḥifẓu d-Dīn, wa n-Nafs, wa l-‘Aql, wa n-Nasl (wa l-‘Irḍ), wa l-Māl',
    frenchRef: 'Préserver la Religion, la Vie, la Raison, la Famille/Dignité et les Biens',
    options: [
      'Préserver la Foi, la Vie humaine, la Raison, la Famille/Dignité et les Biens',
      'Uniquement accumuler des richesses matérielles',
      'Voyager dans cinq pays différents',
      'Apprendre cinq langues étrangères'
    ]
  }
];

export const PrayerAndReligionView: React.FC<PrayerAndReligionViewProps> = ({
  initialTab = 'wudu-salat',
  onOpenPdfDoc
}) => {
  const [activeTab, setActiveTab] = useState<ReligionSubTab>(initialTab);
  const [selectedSalatStep, setSelectedSalatStep] = useState<number>(1);
  const [duaCategoryFilter, setDuaCategoryFilter] = useState<string>('ALL');
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<string, number>>({});

  const speakArabic = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.65;
      window.speechSynthesis.speak(utterance);
    } catch {
      // Ignore speech synthesis errors on unsupported environments
    }
  };

  const currentSalatStepObj =
    SALAT_STEP_BY_STEP.find((s) => s.stepNumber === selectedSalatStep) || SALAT_STEP_BY_STEP[0];

  const filteredDuas =
    duaCategoryFilter === 'ALL'
      ? DAILY_DUAS
      : DAILY_DUAS.filter((d) => d.category === duaCategoryFilter);

  return (
    <div className="space-y-6">
      {/* Header Banner — Mosquée SALEM de Saint-Sulpice-la-Pointe · Pôle Prière & Sciences Islamiques */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-700">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono-tabular font-semibold text-sky-200">
              <span>MOSQUÉE SALEM DE SAINT-SULPICE-LA-POINTE</span>
              <span>·</span>
              <span>PROGRAMME COMPLET DE PRIÈRE & PRINCIPES DE L’ISLAM</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white">
              Apprentissage de la Prière (Ṣalāt), Ablutions & Fondements Approfondis de l’Islam
            </h1>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              Chaque formule, invocation, verset et règle juridique est présenté avec le système{' '}
              <strong className="text-white">3-en-1 obligatoire</strong> :{' '}
              <span className="underline decoration-sky-300">Arabe vocalisé</span> +{' '}
              <span className="underline decoration-sky-300">Transcription phonétique</span> +{' '}
              <span className="underline decoration-sky-300">Signification en français</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <div className="bg-sky-950/70 border border-sky-600/50 rounded-lg px-3.5 py-2 text-right">
              <div
                dir="rtl"
                className="font-arabic font-bold text-lg sm:text-xl text-amber-200"
              >
                إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا
              </div>
              <div className="text-[11px] text-sky-200 font-medium">
                [Inna ṣ-ṣalāta kānat ‘alā l-mu’minīna kitāban mawqūtā] — Coran 4:103
              </div>
            </div>
          </div>
        </div>

        {/* Sub-navigation Tabs */}
        <div
          role="tablist"
          aria-label="Rubriques du cours de Prière et Religion"
          className="mt-5 pt-4 border-t border-sky-700/80 flex flex-wrap gap-2"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'wudu-salat'}
            onClick={() => setActiveTab('wudu-salat')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'wudu-salat'
                ? 'bg-white text-sky-950 shadow-xs'
                : 'bg-sky-800/70 text-sky-100 hover:bg-sky-700/80 border border-sky-600/50'
            }`}
          >
            <Droplets className="w-4 h-4 text-sky-500" />
            <span>1. Ablutions (Wuḍū’) & Prière Pas-à-Pas</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'piliers-foi'}
            onClick={() => setActiveTab('piliers-foi')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'piliers-foi'
                ? 'bg-white text-sky-950 shadow-xs'
                : 'bg-sky-800/70 text-sky-100 hover:bg-sky-700/80 border border-sky-600/50'
            }`}
          >
            <Compass className="w-4 h-4 text-sky-500" />
            <span>2. Les 5 Piliers, 6 Piliers de la Foi & Tawḥīd</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'fiqh-maqasid'}
            onClick={() => setActiveTab('fiqh-maqasid')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'fiqh-maqasid'
                ? 'bg-white text-sky-950 shadow-xs'
                : 'bg-sky-800/70 text-sky-100 hover:bg-sky-700/80 border border-sky-600/50'
            }`}
          >
            <Scale className="w-4 h-4 text-sky-500" />
            <span>3. Principes Approfondis : Fiqh, Maximes & Maqāṣid</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'ethique-sirah'}
            onClick={() => setActiveTab('ethique-sirah')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'ethique-sirah'
                ? 'bg-white text-sky-950 shadow-xs'
                : 'bg-sky-800/70 text-sky-100 hover:bg-sky-700/80 border border-sky-600/50'
            }`}
          >
            <HeartHandshake className="w-4 h-4 text-sky-500" />
            <span>4. Éthique (Akhlāq), Sīrah & Mois Hégiriens</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'citadelle-duas'}
            onClick={() => setActiveTab('citadelle-duas')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'citadelle-duas'
                ? 'bg-white text-sky-950 shadow-xs'
                : 'bg-sky-800/70 text-sky-100 hover:bg-sky-700/80 border border-sky-600/50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span>5. Invocations du Quotidien (Adhkār)</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'quiz-religion'}
            onClick={() => setActiveTab('quiz-religion')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'quiz-religion'
                ? 'bg-white text-sky-950 shadow-xs'
                : 'bg-sky-800/70 text-sky-100 hover:bg-sky-700/80 border border-sky-600/50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-sky-500" />
            <span>6. QCM Prière & Religion</span>
          </button>
        </div>
      </div>

      {/* =====================================================================
          BARRE DES 3 FICHIERS PDF OFFICIELS À TÉLÉCHARGER / IMPRIMER
          (Fichier PDF Prière · Fichier PDF Résumé Islam · Fichier PDF Alphabet)
      ===================================================================== */}
      <div className="bg-white border border-sky-300 rounded-xl p-4 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sky-100 pb-2.5">
          <div>
            <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
              SUPPORTS PDF IMPRIMABLES A4 · ÉCRITURE GRANDE & LISIBLE À L’IMPRESSION
            </span>
            <h2 className="text-sm sm:text-base font-display font-extrabold text-slate-950">
              Fichiers PDF Officiels : Prière & Ablutions, Résumé de l’Islam et Alphabet Arabe
            </h2>
          </div>
          <span className="text-xs text-slate-600">
            Téléchargez directement le fichier <code>.pdf</code> ou ouvrez l’aperçu A4 complet
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              docId: 'pdf-priere-salat' as CompletePdfDocId,
              code: 'PDF-10',
              title: 'Fichier PDF Prière & Ablutions',
              desc: 'Les 8 étapes des Ablutions (Wuḍū’), les 5 prières et les 11 étapes de la Ṣalāt (Tachahhud, Ibrāhīmiyyah) + QCM (2 pages A4).'
            },
            {
              docId: 'pdf-resume-islam' as CompletePdfDocId,
              code: 'PDF-11',
              title: 'Fichier PDF Résumé de l’Islam',
              desc: 'Les 5 Piliers de l’Islam, 6 Piliers de la Foi, Tawḥīd, 5 statuts du Fiqh, Maximes, Maqāṣid & Invocations + QCM (2 pages A4).'
            },
            {
              docId: 'pdf-alphabet' as CompletePdfDocId,
              code: 'PDF-01',
              title: 'Fichier PDF Alphabet Arabe',
              desc: 'Tableau complet des 28 lettres arabes, 4 positions, familles de squelettes, 6 lettres non-liantes, 16 mots soudés + QCM (2 pages A4).'
            }
          ].map((item) => (
            <div
              key={item.docId}
              className="bg-sky-50/60 border border-sky-200 rounded-lg p-3.5 flex flex-col justify-between gap-3"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono-tabular font-extrabold text-sky-800 bg-white border border-sky-200 px-2 py-0.5 rounded">
                    {item.code} · 2 PAGES A4
                  </span>
                  <FileText className="w-4 h-4 text-sky-600" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-950 mt-1.5">{item.title}</h3>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">{item.desc}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => downloadCompleteMultiPagePdf(item.docId)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-sky-600 hover:bg-sky-700 text-white rounded-md transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Télécharger .PDF
                </button>
                {onOpenPdfDoc && (
                  <button
                    type="button"
                    onClick={() => onOpenPdfDoc(item.docId)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold bg-white hover:bg-sky-100 text-sky-900 border border-sky-300 rounded-md transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Voir les 2 pages A4
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================================
          TAB 1 : ABLUTIONS (WUDU) & PRIÈRE (SALAT) PAS-À-PAS
      ===================================================================== */}
      {activeTab === 'wudu-salat' && (
        <div className="space-y-8">
          {/* PART A: LES ABLUTIONS (AL-WUDU) */}
          <section className="bg-white rounded-xl border border-sky-200 p-5 sm:p-6 shadow-2xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-sky-100">
              <div>
                <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                  VOLET 1 · LA PURIFICATION RITUELLE (الطَّهَارَةُ وَالْوُضُوءُ)
                </span>
                <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                  Guide Complet des Ablutions (Al-Wuḍū’) en 8 Étapes Ordonnées
                </h2>
              </div>
              <div className="bg-sky-50 px-3.5 py-2 rounded-lg border border-sky-200 text-right">
                <div dir="rtl" className="font-arabic font-bold text-xl text-sky-950">
                  الطُّهُورُ شَطْرُ الْإِيمَانِ
                </div>
                <div className="text-xs font-semibold text-sky-800">
                  [Aṭ-ṭuhūru chaṭru l-īmān] — « La pureté est la moitié de la foi » (Muslim)
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {WUDU_STEPS.map((step) => (
                <div
                  key={step.stepNumber}
                  className="rounded-lg border border-sky-200/90 bg-sky-50/30 p-4 flex flex-col justify-between gap-3 hover:border-sky-400 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono-tabular font-extrabold text-xs text-sky-900 bg-sky-100 px-2.5 py-0.5 rounded">
                        ÉTAPE {step.stepNumber} · {step.repetition}
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

                  <div className="bg-white rounded-lg border border-sky-200/80 p-3 space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => speakArabic(step.arabic)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-700 hover:text-sky-900 bg-sky-50 px-2 py-1 rounded border border-sky-200 cursor-pointer shrink-0"
                        title="Écouter la prononciation arabe"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        Écouter
                      </button>
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
                      = {step.french}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ce qui annule les ablutions & Tayammum */}
            <div className="bg-sky-50/70 rounded-lg border border-sky-200 p-4">
              <h3 className="font-display font-bold text-sm sm:text-base text-sky-950 mb-3">
                Ce qui annule les ablutions (Nawāqiḍ al-Wuḍū’) & Cas du Tayammum
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {WUDU_NULLIFIERS.map((item) => (
                  <div
                    key={item.titleFr}
                    className="bg-white rounded-lg p-3 border border-sky-200/80 flex flex-col justify-between gap-2"
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

          {/* PART B: TABLEAU DES 5 PRIÈRES OBLIGATOIRES */}
          <section className="bg-white rounded-xl border border-sky-200 p-5 sm:p-6 shadow-2xs space-y-4">
            <div>
              <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                VOLET 2 · LES 5 PRIÈRES QUOTIDIENNES (الصَّلَوَاتُ الْخَمْسُ)
              </span>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Tableau Récapitulatif des 5 Prières Obligatoires (17 Rak‘āt Farḍ / jour)
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-sky-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-sky-900 text-white">
                    <th className="p-2.5 border border-sky-800">Prière (Français & Phonétique)</th>
                    <th className="p-2.5 border border-sky-800 text-right">Nom en Arabe</th>
                    <th className="p-2.5 border border-sky-800 text-center">Rak‘āt Obligatoires (Farḍ)</th>
                    <th className="p-2.5 border border-sky-800 text-center">Sunnah (Avant / Après)</th>
                    <th className="p-2.5 border border-sky-800">Voix de récitation</th>
                    <th className="p-2.5 border border-sky-800">Moment / Horaire</th>
                  </tr>
                </thead>
                <tbody>
                  {FIVE_DAILY_PRAYERS.map((prayer, idx) => (
                    <tr
                      key={prayer.id}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/50'}
                    >
                      <td className="p-2.5 border border-sky-200">
                        <div className="font-bold text-slate-950">{prayer.nameFr}</div>
                        <div className="text-xs font-mono-tabular font-semibold text-sky-800">
                          [{prayer.namePhonetic}] = {prayer.meaningFr}
                        </div>
                      </td>
                      <td
                        dir="rtl"
                        className="p-2.5 border border-sky-200 font-arabic font-bold text-lg sm:text-xl text-slate-950 text-right"
                      >
                        {prayer.nameArabic}
                      </td>
                      <td className="p-2.5 border border-sky-200 text-center">
                        <span className="inline-block font-mono-tabular font-extrabold text-sm sm:text-base text-sky-950 bg-sky-100 border border-sky-300 px-2.5 py-0.5 rounded">
                          {prayer.fardRakats} Rak‘āt
                        </span>
                      </td>
                      <td className="p-2.5 border border-sky-200 text-center font-mono-tabular font-semibold text-slate-700">
                        {prayer.sunnahBefore > 0 ? `${prayer.sunnahBefore} avant` : '—'}{' '}
                        / {prayer.sunnahAfter > 0 ? `${prayer.sunnahAfter} après` : '—'}
                      </td>
                      <td className="p-2.5 border border-sky-200 font-semibold text-slate-800">
                        {prayer.recitationVoice}
                      </td>
                      <td className="p-2.5 border border-sky-200 text-slate-700">
                        {prayer.timeWindowFr}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* PART C: SIMULATEUR & GUIDE COMPLET PAS-À-PAS DE LA PRIÈRE (11 ÉTAPES) */}
          <section className="bg-white rounded-xl border border-sky-200 p-5 sm:p-6 shadow-2xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-sky-100">
              <div>
                <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                  VOLET 3 · GUIDE INTERACTIF DE LA SALÂT DE A À Z (كَيْفِيَّةُ الصَّلَاةِ)
                </span>
                <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                  Comment Prier Pas-à-Pas : Les 11 Étapes avec Tachahhud Complet & Salutations
                </h2>
              </div>
              <div className="text-xs text-slate-600 font-medium">
                Sélectionnez une étape ou parcourez la liste complète ci-dessous
              </div>
            </div>

            {/* Interactive Stepper Bar */}
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
                        ? 'bg-sky-600 text-white shadow-2xs'
                        : 'bg-sky-50 text-sky-900 hover:bg-sky-100 border border-sky-200'
                    }`}
                  >
                    Étape {s.stepNumber}
                  </button>
                );
              })}
            </div>

            {/* Highlighted Active Step Card */}
            <div className="bg-sky-50/80 rounded-xl border-2 border-sky-500 p-4 sm:p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bg-sky-700 text-white font-mono-tabular font-extrabold text-xs px-2.5 py-1 rounded">
                    ÉTAPE {currentSalatStepObj.stepNumber} / {SALAT_STEP_BY_STEP.length}
                  </span>
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950">
                    {currentSalatStepObj.postureFr}
                  </h3>
                </div>
                <span className="text-xs font-mono-tabular font-bold text-sky-900 bg-white px-2.5 py-1 rounded border border-sky-200">
                  Statut : {currentSalatStepObj.statusFr}
                </span>
              </div>

              <p className="text-sm text-slate-800 leading-relaxed">
                {currentSalatStepObj.actionFr}
              </p>

              <div className="bg-white rounded-xl border border-sky-200 p-4 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => speakArabic(currentSalatStepObj.arabic)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 cursor-pointer shrink-0"
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
                  = {currentSalatStepObj.french}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                <p className="text-xs text-sky-950 font-medium">
                  <strong>Conseil pratique :</strong> {currentSalatStepObj.tipFr}
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    disabled={selectedSalatStep <= 1}
                    onClick={() => setSelectedSalatStep((p) => Math.max(1, p - 1))}
                    className="px-3 py-1 rounded border border-sky-300 bg-white text-xs font-bold text-sky-900 disabled:opacity-40 cursor-pointer"
                  >
                    ← Étape précédente
                  </button>
                  <button
                    type="button"
                    disabled={selectedSalatStep >= SALAT_STEP_BY_STEP.length}
                    onClick={() =>
                      setSelectedSalatStep((p) => Math.min(SALAT_STEP_BY_STEP.length, p + 1))
                    }
                    className="px-3 py-1 rounded bg-sky-600 text-xs font-bold text-white disabled:opacity-40 cursor-pointer"
                  >
                    Étape suivante →
                  </button>
                </div>
              </div>
            </div>

            {/* Complete 11-step Reference Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {SALAT_STEP_BY_STEP.map((step) => (
                <div
                  key={step.stepNumber}
                  onClick={() => setSelectedSalatStep(step.stepNumber)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedSalatStep(step.stepNumber);
                    }
                  }}
                  className={`rounded-lg border p-3.5 text-left transition-colors cursor-pointer ${
                    step.stepNumber === selectedSalatStep
                      ? 'bg-sky-50/70 border-sky-500'
                      : 'bg-white border-sky-200/80 hover:border-sky-400'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono-tabular font-extrabold text-xs text-sky-800">
                      #{step.stepNumber} · {step.postureFr}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {step.statusFr}
                    </span>
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
                    = {step.french}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* =====================================================================
          TAB 2 : LES 5 PILIERS DE L'ISLAM & 6 PILIERS DE LA FOI (TAWHID)
      ===================================================================== */}
      {activeTab === 'piliers-foi' && (
        <div className="space-y-8">
          {/* 5 Piliers de l'Islam */}
          <section className="bg-white rounded-xl border border-sky-200 p-5 sm:p-6 shadow-2xs space-y-5">
            <div>
              <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                LES FONDEMENTS PRATIQUES (أَرْكَانُ الْإِسْلَامِ الْخَمْسَةُ)
              </span>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Les 5 Piliers de l’Islam — Sens, Règles Concrètes & Preuves Coraniques
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {FIVE_PILLARS_ISLAM.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-xl border border-sky-200 p-4 sm:p-5 bg-sky-50/20 flex flex-col justify-between gap-3"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono-tabular font-extrabold text-xs bg-sky-700 text-white px-2.5 py-0.5 rounded">
                        PILIER {pillar.number} / 5
                      </span>
                      <button
                        type="button"
                        onClick={() => speakArabic(pillar.arabic)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900 bg-white px-2.5 py-1 rounded border border-sky-200 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        Écouter
                      </button>
                    </div>

                    <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950">
                      {pillar.titleFr}
                    </h3>

                    <div className="bg-white rounded-lg border border-sky-200 p-3 space-y-1">
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
                        = {pillar.french}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {pillar.summaryFr}
                    </p>

                    <ul className="space-y-1.5 text-xs text-slate-800 list-disc pl-4">
                      {pillar.deepPrinciplesFr.map((pt, i) => (
                        <li key={i} className="leading-relaxed">
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-sky-900 text-white rounded-lg p-3 space-y-1">
                    <div
                      dir="rtl"
                      className="font-arabic font-bold text-base sm:text-lg text-amber-200 text-right"
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

          {/* 6 Piliers de la Foi (Al-Iman & Tawhid) */}
          <section className="bg-white rounded-xl border border-sky-200 p-5 sm:p-6 shadow-2xs space-y-5">
            <div>
              <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                LA CROYANCE AUTHENTIQUE (أَرْكَانُ الْإِيمَانِ السِّتَّةُ وَالتَّوْحِيدُ)
              </span>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Les 6 Piliers de la Foi (Al-Īmān) & Les 3 Catégories du Tawḥīd
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {SIX_PILLARS_IMAN.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-xl border border-sky-200 p-4 sm:p-5 bg-white flex flex-col justify-between gap-3"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono-tabular font-extrabold text-xs bg-slate-900 text-white px-2.5 py-0.5 rounded">
                        FOI (ĪMĀN) · PILIER {pillar.number} / 6
                      </span>
                      <button
                        type="button"
                        onClick={() => speakArabic(pillar.arabic)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900 bg-sky-50 px-2.5 py-1 rounded border border-sky-200 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        Écouter
                      </button>
                    </div>

                    <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950">
                      {pillar.titleFr}
                    </h3>

                    <div className="bg-sky-50/70 rounded-lg border border-sky-200 p-3 space-y-1">
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
                        = {pillar.french}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {pillar.summaryFr}
                    </p>

                    <ul className="space-y-1.5 text-xs text-slate-800 list-disc pl-4">
                      {pillar.deepPrinciplesFr.map((pt, i) => (
                        <li key={i} className="leading-relaxed">
                          {pt}
                        </li>
                      ))}
                    </ul>
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
        </div>
      )}

      {/* =====================================================================
          TAB 3 : PRINCIPES APPROFONDIS : FIQH (5 STATUTS), MAXIMES & MAQASID
      ===================================================================== */}
      {activeTab === 'fiqh-maqasid' && (
        <div className="space-y-8">
          {/* 1. Les 5 Statuts Juridiques des Actes (Al-Ahkam al-Khamsah) */}
          <section className="bg-white rounded-xl border border-sky-200 p-5 sm:p-6 shadow-2xs space-y-4">
            <div>
              <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                INTRODUCTION AU FIQH (الْأَحْكَامُ التَّكْلِيفِيَّةُ الْخَمْسَةُ)
              </span>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Les 5 Statuts Juridiques des Actes en Islam (Al-Aḥkām al-Khamsah)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Pour ne jamais confondre ce qui est obligatoire, ce qui est recommandé et ce qui est simplement permis ou interdit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {FIQH_FIVE_RULINGS.map((ruling) => (
                <div
                  key={ruling.code}
                  className="rounded-xl border border-sky-200 bg-sky-50/30 p-4 flex flex-col justify-between gap-3"
                >
                  <div className="space-y-2">
                    <div className="font-mono-tabular font-extrabold text-[11px] text-sky-800 bg-sky-100 px-2 py-0.5 rounded inline-block">
                      {ruling.code}
                    </div>
                    <h3 className="font-display font-extrabold text-base text-slate-950">
                      {ruling.nameFr}
                    </h3>
                    <div className="bg-white rounded-lg border border-sky-200 p-2.5">
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
                    <p className="text-xs font-semibold text-sky-950 bg-white p-2 rounded border border-sky-100">
                      {ruling.consequenceFr}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-sky-200/70">
                    <div className="text-[11px] font-bold text-slate-700 mb-1">
                      Exemples concrets :
                    </div>
                    <ul className="text-xs text-slate-700 space-y-1 list-disc pl-4">
                      {ruling.examplesFr.map((ex, idx) => (
                        <li key={idx}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Les 5 Grandes Maximes Juridiques (Al-Qawa'id al-Fiqhiyyah al-Kubra) */}
          <section className="bg-white rounded-xl border border-sky-200 p-5 sm:p-6 shadow-2xs space-y-4">
            <div>
              <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                LES 5 GRANDES MAXIMES DE L’ISLAM (الْقَوَاعِدُ الْفِقْهِيَّةُ الْكُبْرَى)
              </span>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Les 5 Règles d’Or qui Résument Toute la Sagesse Juridique de l’Islam
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FIVE_LEGAL_MAXIMS.map((maxim) => (
                <div
                  key={maxim.number}
                  className="rounded-xl border border-sky-200 p-4 space-y-2.5 bg-white"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-tabular font-extrabold text-xs bg-sky-700 text-white px-2.5 py-0.5 rounded">
                      MAXIME #{maxim.number}
                    </span>
                    <button
                      type="button"
                      onClick={() => speakArabic(maxim.arabic)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900 bg-sky-50 px-2.5 py-1 rounded border border-sky-200 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      Écouter
                    </button>
                  </div>

                  <h3 className="font-display font-extrabold text-base text-slate-950">
                    {maxim.titleFr}
                  </h3>

                  <div className="bg-sky-50/70 rounded-lg border border-sky-200 p-3 space-y-1">
                    <div
                      dir="rtl"
                      className="font-arabic font-bold text-lg sm:text-xl text-slate-950 text-right"
                    >
                      {maxim.arabic}
                    </div>
                    <div className="text-xs font-mono-tabular font-bold text-sky-800">
                      [{maxim.phonetic}]
                    </div>
                    <div className="text-xs font-semibold text-slate-900">
                      = {maxim.french}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {maxim.explanationFr}
                  </p>
                  <div className="text-xs font-medium text-sky-950 bg-sky-50 p-2.5 rounded border border-sky-200/70">
                    {maxim.concreteCaseFr}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Les 5 Finalités Supérieures de l'Islam (Maqasid ach-Chari'ah) */}
          <section className="bg-white rounded-xl border border-sky-200 p-5 sm:p-6 shadow-2xs space-y-4">
            <div>
              <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                LES FINALITÉS SUPÉRIEURES (مَقَاصِدُ الشَّرِيعَةِ الْخَمْسَةُ)
              </span>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Pourquoi Allah a-t-Il Prescrit des Règles ? Les 5 Protections Universelles
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {FIVE_MAQASID_SHARIA.map((m) => (
                <div
                  key={m.number}
                  className="rounded-xl border border-sky-200 bg-sky-50/40 p-4 flex flex-col justify-between gap-3"
                >
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-sm text-slate-950">
                      {m.titleFr}
                    </h3>
                    <div className="bg-white rounded-lg border border-sky-200 p-2.5">
                      <div
                        dir="rtl"
                        className="font-arabic font-bold text-xl text-sky-950 text-right"
                      >
                        {m.arabic}
                      </div>
                      <div className="text-xs font-mono-tabular font-bold text-sky-800">
                        [{m.phonetic}]
                      </div>
                      <div className="text-xs font-semibold text-slate-800 mt-0.5">
                        = {m.french}
                      </div>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {m.descriptionFr}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-sky-200 text-[11px] text-sky-950 font-medium">
                    <strong>En pratique :</strong> {m.practicalExamplesFr}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* =====================================================================
          TAB 4 : ÉTHIQUE (AKHLAQ), SIRAH & CALENDRIER HÉGIRIEN
      ===================================================================== */}
      {activeTab === 'ethique-sirah' && (
        <div className="space-y-8">
          {/* 1. Éthique & Comportement (Al-Akhlaq) */}
          <section className="bg-white rounded-xl border border-sky-200 p-5 sm:p-6 shadow-2xs space-y-4">
            <div>
              <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                ÉTHIQUE & SPIRITUALITÉ DU CŒUR (الْأَخْلَاقُ وَتَزْكِيَةُ النَّفْسِ)
              </span>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Les 6 Grandes Vertus du Comportement Islamique (Al-Akhlāq)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AKHLAQ_VIRTUES.map((v) => (
                <div
                  key={v.id}
                  className="rounded-xl border border-sky-200 p-4 flex flex-col justify-between gap-3 bg-white"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-extrabold text-base text-slate-950">
                        {v.virtueFr}
                      </h3>
                      <span
                        dir="rtl"
                        className="font-arabic font-bold text-lg text-sky-900 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200"
                      >
                        {v.arabic}
                      </span>
                    </div>
                    <div className="text-xs font-mono-tabular font-bold text-sky-800">
                      [{v.phonetic}] = {v.french}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {v.explanationFr}
                    </p>
                  </div>

                  <div className="bg-sky-50/80 rounded-lg border border-sky-200 p-3 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => speakArabic(v.quoteArabic)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-700 hover:text-sky-900 bg-white px-2 py-0.5 rounded border border-sky-200 cursor-pointer shrink-0"
                      >
                        <Volume2 className="w-3 h-3" />
                        Audio
                      </button>
                      <div
                        dir="rtl"
                        className="font-arabic font-bold text-base sm:text-lg text-slate-950 text-right"
                      >
                        {v.quoteArabic}
                      </div>
                    </div>
                    <div className="text-[11px] font-mono-tabular font-bold text-sky-800">
                      [{v.quotePhonetic}]
                    </div>
                    <div className="text-xs font-semibold text-slate-900">
                      {v.quoteFrench} — <span className="text-sky-800">{v.sourceFr}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Grandes Étapes de la Sīrah du Prophète ﷺ */}
          <section className="bg-white rounded-xl border border-sky-200 p-5 sm:p-6 shadow-2xs space-y-4">
            <div className="flex items-center gap-2">
              <History className="w-5 h-5 text-sky-600" />
              <div>
                <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                  REPÈRES HISTORIQUES (السِّيرَةُ النَّبَوِيَّةُ)
                </span>
                <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                  Les 5 Grandes Étapes de la Vie du Prophète Muḥammad ﷺ
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {SIRAH_MILESTONES.map((m) => (
                <div
                  key={m.period}
                  className="rounded-xl border border-sky-200 bg-sky-50/30 p-3.5 flex flex-col justify-between gap-2.5"
                >
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono-tabular font-extrabold text-sky-800">
                      {m.period} · {m.yearHijriOrCe}
                    </div>
                    <h3 className="font-display font-bold text-sm text-slate-950">
                      {m.titleFr}
                    </h3>
                    <div className="bg-white rounded p-2 border border-sky-200/80">
                      <div
                        dir="rtl"
                        className="font-arabic font-bold text-base text-slate-950 text-right"
                      >
                        {m.arabic}
                      </div>
                      <div className="text-[10.5px] font-mono-tabular font-bold text-sky-800">
                        [{m.phonetic}]
                      </div>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {m.summaryFr}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-sky-200/80 text-[11px] font-semibold text-sky-950">
                    Leçon : {m.lessonFr}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Les 12 Mois du Calendrier Hégirien */}
          <section className="bg-white rounded-xl border border-sky-200 p-5 sm:p-6 shadow-2xs space-y-4">
            <div>
              <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                LE CALENDRIER LUNAIRE ISLAMIQUE (التَّقْوِيمُ الْهِجْرِيُّ — ١٢ شَهْرًا)
              </span>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Les 12 Mois Hégiriens (dont les 4 Mois Sacrés : Al-Achhur al-Ḥurum)
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {HIJRI_MONTHS.map((m) => (
                <div
                  key={m.number}
                  className={`rounded-lg border p-3 ${
                    m.isSacred
                      ? 'bg-amber-50/50 border-amber-300'
                      : 'bg-sky-50/30 border-sky-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-tabular font-extrabold text-xs text-sky-900">
                      Mois {String(m.number).padStart(2, '0')} · [{m.phonetic}]
                    </span>
                    <span dir="rtl" className="font-arabic font-bold text-lg text-slate-950">
                      {m.arabic}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1">{m.frenchNote}</p>
                  {m.isSacred && (
                    <div className="mt-1.5 text-[10px] font-mono-tabular font-bold text-amber-900">
                      ★ Mois Sacré (Al-Achhur al-Ḥurum)
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* =====================================================================
          TAB 5 : LA CITADELLE DU CROYANT (INVOCATIONS DU QUOTIDIEN)
      ===================================================================== */}
      {activeTab === 'citadelle-duas' && (
        <section className="bg-white rounded-xl border border-sky-200 p-5 sm:p-6 shadow-2xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-sky-100">
            <div>
              <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                LA CITADELLE DU CROYANT (حِصْنُ الْمُسْلِمِ — أَذْكَارُ الْيَوْمِ وَاللَّيْلَةِ)
              </span>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Les Invocations Authentiques du Quotidien (Arabe + Phonétique + Français)
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {(['ALL', 'Matin & Soir', 'Repas & Sommeil', 'Maison & Mosquée', 'Épreuves & Parents'] as const).map(
                (cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setDuaCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                      duaCategoryFilter === cat
                        ? 'bg-sky-600 text-white'
                        : 'bg-sky-50 text-sky-900 hover:bg-sky-100 border border-sky-200'
                    }`}
                  >
                    {cat === 'ALL' ? 'Toutes les invocations' : cat}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDuas.map((dua) => (
              <div
                key={dua.id}
                className="rounded-xl border border-sky-200 bg-sky-50/30 p-4 flex flex-col justify-between gap-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono-tabular font-bold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded">
                      {dua.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => speakArabic(dua.arabic)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900 bg-white px-2.5 py-1 rounded border border-sky-200 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      Écouter
                    </button>
                  </div>

                  <h3 className="font-display font-extrabold text-base text-slate-950">
                    {dua.momentFr}
                  </h3>

                  <div className="bg-white rounded-lg border border-sky-200 p-3.5 space-y-1.5">
                    <div
                      dir="rtl"
                      className="font-arabic font-bold text-xl text-slate-950 text-right leading-relaxed"
                    >
                      {dua.arabic}
                    </div>
                    <div className="text-xs sm:text-sm font-mono-tabular font-bold text-sky-800">
                      [{dua.phonetic}]
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900">
                      = {dua.french}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-600 font-medium">
                  <strong>Repère :</strong> {dua.contextFr}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =====================================================================
          TAB 6 : QCM D'ÉVALUATION PRIÈRE & RELIGION (SANS CORRIGÉ AFFICHÉ)
      ===================================================================== */}
      {activeTab === 'quiz-religion' && (
        <section className="bg-white rounded-xl border border-sky-200 p-5 sm:p-6 shadow-2xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-sky-100">
            <div>
              <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                QCM D’ÉVALUATION · ABLUTIONS, PRIÈRE & PRINCIPES DE L’ISLAM
              </span>
              <h2 className="text-lg sm:text-xl font-display font-extrabold text-slate-950">
                Questionnaire à Choix Multiples (6 Questions — Sans corrigé affiché)
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-tabular font-bold text-sky-900 bg-sky-50 px-3 py-1.5 rounded border border-sky-200">
                {Object.keys(selectedQuizAnswers).length} / {RELIGION_QCM.length} cochées
              </span>
              <button
                type="button"
                onClick={() => setSelectedQuizAnswers({})}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Effacer les cases
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RELIGION_QCM.map((q, qIdx) => {
              const chosen = selectedQuizAnswers[q.id];
              return (
                <div
                  key={q.id}
                  className="rounded-xl border border-sky-200 p-4 space-y-3 bg-sky-50/20"
                >
                  <p className="font-bold text-sm text-slate-950">
                    <span className="text-sky-700 font-mono-tabular mr-1.5">
                      Q{qIdx + 1}.
                    </span>
                    {q.questionFr}
                  </p>

                  <div className="bg-white rounded-lg border border-sky-200/80 p-2.5 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono-tabular font-bold text-sky-800">
                      [{q.phoneticRef}] = {q.frenchRef}
                    </span>
                    <span dir="rtl" className="font-arabic font-bold text-lg text-slate-950">
                      {q.arabicRef}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {q.options.map((opt, optIdx) => {
                      const isPicked = chosen === optIdx;
                      const letter = ['A', 'B', 'C', 'D'][optIdx];
                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() =>
                            setSelectedQuizAnswers((prev) => ({
                              ...prev,
                              [q.id]: optIdx
                            }))
                          }
                          className={`w-full text-left px-3 py-2 rounded-lg border text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
                            isPicked
                              ? 'bg-sky-600 text-white border-sky-700'
                              : 'bg-white text-slate-800 border-sky-200 hover:bg-sky-50'
                          }`}
                        >
                          <span className="font-mono-tabular font-bold shrink-0">
                            {isPicked ? '☑' : '☐'} {letter}.
                          </span>
                          <span>{opt}</span>
                          {isPicked && <CheckCircle2 className="w-4 h-4 ml-auto shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
