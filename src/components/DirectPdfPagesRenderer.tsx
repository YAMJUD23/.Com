import React, { useState } from 'react';
import {
  Download,
  Printer,
  FileText,
  ZoomIn,
  Volume2,
  X,
  RotateCcw
} from 'lucide-react';
import {
  ARABIC_ALPHABET,
  NON_CONNECTING_LETTERS,
  ALPHABET_QUIZ,
  ArabicLetter,
  ArabicTriad,
  QuizQuestion
} from '../data/alphabetData';
import {
  VOWELS_DATA,
  VOWELS_QUIZ,
  GRAMMAR_A1_QUIZ
} from '../data/vowelsAndGrammarData';
import { SURAHS_QUIZ } from '../data/surahsAndPdfsData';
import {
  A2_PRONOUN_CONJUGATION_TABLE,
  A2_ESSENTIAL_VERBS_8,
  A2_NEGATION_RULES,
  A2_CONJUGATION_SENTENCES,
  PDF7_CONJUGATION_QUIZ,
  A2_LOGICAL_CONNECTORS,
  A2_REAL_LIFE_DIALOGUES,
  A2_TIME_AND_NUMBERS,
  PDF8_CONVERSATIONS_QUIZ,
  A2_READING_TEXTS,
  A2_ROOT_SYSTEM_TABLE,
  A2_ARABIC_PROVERBS,
  PDF9_READING_QUIZ
} from '../data/arabicA2NewPdfsData';
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
  DAILY_DUAS,
  PDF10_PRIERE_QUIZ,
  PDF11_RESUME_ISLAM_QUIZ
} from '../data/prayerAndReligionData';
import {
  VOCAB_200_SUBCATEGORIES,
  VOCAB_200_QUIZ,
  VocabSubcategory
} from '../data/vocab200Categorized';
import {
  SKELETON_FAMILIES,
  READING_MECHANICS_GUIDES,
  THREE_LETTER_READING_WORDS,
  EXTENDED_MINIMAL_PAIRS,
  WORD_DECOMPOSITIONS,
  SENTENCE_BUILDING_FORMULAS,
  REAL_LIFE_DIALOGUES_A1,
  LUNAR_LETTERS_TABLE,
  SOLAR_LETTERS_TABLE,
  PRONOUNS_AND_POSSESSIVES_TABLE,
  GRAMMAR_TOOLKIT_TABLE,
  ESSENTIAL_SENTENCES_A1,
  ALL_12_SURAHS
} from '../data/completeCourseData';
import {
  CompletePdfDocId,
  COMPLETE_PDF_DOCUMENTS,
  downloadCompleteMultiPagePdf,
  speakArabicText
} from '../utils/pdfGenerator';
import { buildSyllableCombination } from '../utils/learningEngine';

interface DirectPdfPagesRendererProps {
  docId: CompletePdfDocId;
  density: 'tight' | 'normal';
  zoomPercent: number;
  searchQuery: string;
  onQuizCompleted?: (sectionId: string, percentage: number) => void;
}

interface A4SheetFrameProps {
  code: string;
  docTitle: string;
  pageSub: string;
  pageNumber: number;
  totalPages: number;
  density: 'tight' | 'normal';
  zoomPercent: number;
  onDownload: () => void;
  children: React.ReactNode;
}

const A4SheetFrame: React.FC<A4SheetFrameProps> = ({
  code,
  docTitle,
  pageSub,
  pageNumber,
  totalPages,
  density,
  zoomPercent,
  onDownload,
  children
}) => {
  const padClass = density === 'tight' ? 'p-3 sm:p-4' : 'p-5 sm:p-6';
  const textBase =
    density === 'tight'
      ? 'text-[13px] leading-snug'
      : 'text-sm leading-normal';
  const zoomStyle =
    zoomPercent !== 100
      ? ({ zoom: `${zoomPercent}%` } as React.CSSProperties)
      : undefined;

  return (
    <article
      style={zoomStyle}
      className={`bg-white border border-sky-300 rounded-lg shadow-xs ${padClass} ${textBase} text-slate-950 print:shadow-none print:border-slate-400 print:rounded-none print:p-2 print:mb-0 mb-5 break-after-page overflow-hidden`}
    >
      {/* Compact & Bold Official PDF Header */}
      <header className="flex flex-wrap items-center justify-between gap-2 pb-1.5 mb-2 border-b-2 border-sky-700">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="font-mono-tabular font-bold text-xs text-sky-900 uppercase tracking-wider">
              PROGRAMME COMPLET D’ARABE LITTÉRAIRE — NIVEAU A2 · MÉTHODE PROGRESSIVE & CONCRÈTE
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-950 tracking-tight mt-0.5 break-words">
            {code} — {docTitle}{' '}
            <span className="text-sky-800 font-bold text-sm">({pageSub})</span>
          </h2>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onDownload}
            className="no-print inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-300 rounded transition-colors cursor-pointer"
            title="Télécharger ce document PDF complet multi-pages"
          >
            <Download className="w-3.5 h-3.5" />
            PDF ({totalPages} p.)
          </button>
          <span className="font-mono-tabular font-extrabold text-xs px-2.5 py-1 bg-sky-900 text-white rounded">
            PAGE {pageNumber} / {totalPages}
          </span>
        </div>
      </header>

      {/* Main Dense A4 Page Body */}
      <div className="space-y-2.5">{children}</div>

      {/* Compact A4 Page Footer */}
      <footer className="mt-2 pt-1.5 border-t border-slate-300 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-700 font-mono-tabular font-semibold">
        <span>
          Support de Cours — Langue Arabe & Sciences Islamiques
        </span>
        <span>
          Arabe vocalisé · Phonétique · Traduction française
        </span>
        <span className="font-bold text-sky-900">
          {code} · Page {pageNumber}/{totalPages}
        </span>
      </footer>
    </article>
  );
};

interface EmbeddedPdfQcmProps {
  categoryTitle: string;
  questions: QuizQuestion[];
  onInspectTriad?: (triad: ArabicTriad, title: string) => void;
}

/**
 * Printable & checkable QCM block embedded inside each PDF WITHOUT any answer key
 * (large, legible fonts for printing).
 */
const EmbeddedPdfQcmBlock: React.FC<EmbeddedPdfQcmProps> = ({
  categoryTitle,
  questions,
  onInspectTriad
}) => {
  const [selected, setSelected] = useState<Record<string, number>>({});

  const answeredCount = Object.keys(selected).length;

  const handleSelect = (qId: string, idx: number) => {
    setSelected((prev) => ({ ...prev, [qId]: idx }));
  };

  const handleReset = () => {
    setSelected({});
  };

  return (
    <div className="border-2 border-sky-700 rounded-md overflow-hidden bg-sky-50/40 mt-2">
      <div className="bg-sky-900 text-white px-3 py-1.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono-tabular text-xs uppercase tracking-wider bg-sky-950 text-sky-200 px-2 py-0.5 rounded font-bold">
            QCM D’ÉVALUATION
          </span>
          <h3 className="font-extrabold text-sm">
            {categoryTitle} ({questions.length} questions — Cocher la bonne réponse)
          </h3>
        </div>
        <div className="flex items-center gap-2 no-print">
          <span className="font-mono-tabular text-xs bg-sky-800 px-2 py-0.5 rounded font-bold">
            {answeredCount}/{questions.length} cochées
          </span>
          {answeredCount > 0 && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-bold bg-white text-sky-900 rounded cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              Effacer les cases
            </button>
          )}
        </div>
      </div>

      <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
        {questions.map((q, qIdx) => {
          const chosen = selected[q.id];
          return (
            <div
              key={q.id}
              className="bg-white border border-sky-300 rounded p-2 space-y-1.5"
            >
              <div className="flex items-start justify-between gap-1.5">
                <p className="font-bold text-slate-950 text-[13px] leading-snug">
                  <span className="font-mono-tabular text-sky-800 mr-1 font-extrabold">
                    Q{qIdx + 1}.
                  </span>
                  {q.question}
                </p>
                {q.arabicPrompt && (
                  <button
                    type="button"
                    onClick={() =>
                      onInspectTriad &&
                      onInspectTriad(q.arabicPrompt!, `Question ${qIdx + 1}`)
                    }
                    className="no-print shrink-0 text-xs font-bold text-sky-800 hover:text-sky-950 bg-sky-50 border border-sky-300 rounded px-1.5 py-0.5 inline-flex items-center gap-0.5 cursor-pointer"
                    title="Zoomer sur l’exemple arabe"
                  >
                    <ZoomIn className="w-3 h-3" />
                    Zoom
                  </button>
                )}
              </div>

              {q.arabicPrompt && (
                <div className="bg-sky-50 border border-sky-200 rounded px-2.5 py-1 flex flex-wrap items-baseline justify-between gap-1.5">
                  <span
                    dir="rtl"
                    lang="ar"
                    className="font-arabic font-bold text-lg text-slate-950"
                  >
                    {q.arabicPrompt.arabic}
                  </span>
                  <span className="font-mono-tabular font-bold text-xs text-sky-900">
                    [{q.arabicPrompt.phonetic}]
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    = {q.arabicPrompt.french}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {q.options.map((opt, oIdx) => {
                  const isChosen = chosen === oIdx;
                  const optStyle = isChosen
                    ? 'bg-sky-700 border-sky-700 text-white font-bold'
                    : 'bg-slate-50 border-slate-300 text-slate-950 font-semibold hover:border-sky-500';

                  return (
                    <button
                      key={oIdx}
                      type="button"
                      onClick={() => handleSelect(q.id, oIdx)}
                      className={`text-left px-2 py-1 rounded border text-xs leading-snug flex items-center gap-1.5 transition-colors cursor-pointer ${optStyle}`}
                    >
                      <span className="font-mono-tabular font-extrabold shrink-0">
                        {isChosen ? '☑' : '☐'} {String.fromCharCode(65 + oIdx)}.
                      </span>
                      <span className="break-words">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Teacher Grading Strip (NO answer key displayed) */}
      <div className="bg-sky-100 border-t border-sky-300 px-3 py-1.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-tabular text-slate-950 font-bold">
        <span>
          Nom & Prénom de l’élève : ......................................................
        </span>
        <span>
          Date : .... / .... / 20....
        </span>
        <span>
          Note du professeur : ....... / {questions.length}
        </span>
      </div>
    </div>
  );
};

function matchesSearch(textList: string[], query: string): boolean {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  return textList.some((t) => t.toLowerCase().includes(q));
}

export const DirectPdfPagesRenderer: React.FC<DirectPdfPagesRendererProps> = ({
  docId,
  density,
  zoomPercent,
  searchQuery
}) => {
  const [zoomedItem, setZoomedItem] = useState<{
    triad: ArabicTriad;
    contextTitle: string;
  } | null>(null);

  const docMeta =
    COMPLETE_PDF_DOCUMENTS.find((d) => d.id === docId) || COMPLETE_PDF_DOCUMENTS[0];

  const handleDownload = () => {
    downloadCompleteMultiPagePdf(docId);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleInspect = (triad: ArabicTriad, contextTitle: string) => {
    setZoomedItem({ triad, contextTitle });
  };

  const cellPad = density === 'tight' ? 'py-1 px-2' : 'py-1.5 px-2.5';

  // Helper to render a dense half-table of letters with LARGE readable fonts
  const renderAlphabetColumnTable = (letters: ArabicLetter[]) => (
    <div className="border border-slate-400 rounded overflow-hidden bg-white">
      <table className="w-full border-collapse text-left table-fixed">
        <thead>
          <tr className="bg-sky-900 text-white text-xs uppercase tracking-wider font-extrabold">
            <th className="py-1 px-1.5 w-7">#</th>
            <th className="py-1 px-1.5 w-[31%]">Lettre & Son FR</th>
            <th className="py-1 px-1 w-[25%] text-center bg-sky-950">
              Isol · Déb · Mil · Fin
            </th>
            <th className="py-1 px-1.5">2 Exemples (Arabe · Phon. · Sens)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-300">
          {letters.map((letter, idx) => (
            <tr
              key={letter.id}
              onClick={() =>
                handleInspect(
                  letter.exampleWord,
                  `Lettre ${letter.nameFrench} (${letter.arabic}) — Formes : ${letter.forms.isolated} / ${letter.forms.initial} / ${letter.forms.medial} / ${letter.forms.final}`
                )
              }
              className={`cursor-pointer hover:bg-sky-100/60 transition-colors ${
                idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'
              }`}
            >
              <td className="py-1 px-1.5 font-mono-tabular font-bold text-xs text-slate-600">
                {String(letter.order).padStart(2, '0')}
              </td>
              <td className="py-1 px-1.5 break-words leading-snug">
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span
                    dir="rtl"
                    lang="ar"
                    className="font-arabic font-bold text-2xl text-sky-900 leading-none"
                  >
                    {letter.arabic}
                  </span>
                  <span className="font-extrabold text-[13.5px] text-slate-950">
                    {letter.namePhonetic}
                  </span>
                  {!letter.connectsAfter && (
                    <span className="text-[10.5px] font-mono-tabular font-bold bg-amber-100 text-amber-950 border border-amber-300 px-1 rounded">
                      Non-liante
                    </span>
                  )}
                </div>
                <div className="text-xs font-medium text-slate-800 leading-snug mt-0.5">
                  {letter.frenchEquivalent}
                </div>
              </td>
              <td
                dir="rtl"
                lang="ar"
                className="py-1 px-1 text-center font-arabic font-bold text-lg sm:text-xl text-slate-950 bg-slate-50 whitespace-nowrap"
              >
                <span className="px-0.5">{letter.forms.isolated}</span>
                <span className="text-slate-400">·</span>
                <span className="px-0.5 text-sky-800">{letter.forms.initial}</span>
                <span className="text-slate-400">·</span>
                <span className="px-0.5 text-sky-800">{letter.forms.medial}</span>
                <span className="text-slate-400">·</span>
                <span className="px-0.5">{letter.forms.final}</span>
              </td>
              <td className="py-1 px-1.5 text-xs leading-snug break-words space-y-0.5">
                <div>
                  <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg text-slate-950">
                    {letter.exampleWord.arabic}
                  </strong>{' '}
                  <span className="font-mono-tabular font-bold text-sky-900">
                    [{letter.exampleWord.phonetic}]
                  </span>{' '}
                  <span className="font-semibold text-slate-900">= {letter.exampleWord.french}</span>
                </div>
                <div>
                  <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg text-slate-950">
                    {letter.secondExample.arabic}
                  </strong>{' '}
                  <span className="font-mono-tabular font-bold text-sky-900">
                    [{letter.secondExample.phonetic}]
                  </span>{' '}
                  <span className="font-semibold text-slate-900">= {letter.secondExample.french}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Helper to render a dense half-table of Word Decompositions with LARGE readable fonts
  const renderWordDecompositionColumn = (
    items: typeof WORD_DECOMPOSITIONS,
    startIndex: number
  ) => (
    <div className="border border-slate-400 rounded overflow-hidden bg-white">
      <table className="w-full border-collapse text-left table-fixed">
        <thead>
          <tr className="bg-sky-900 text-white text-xs uppercase tracking-wider font-extrabold">
            <th className="py-1 px-1.5 w-7">#</th>
            <th className="py-1 px-1.5 w-[34%]">Mot & Sens</th>
            <th className="py-1 px-1.5 w-[28%] bg-sky-950 text-right">Soudure</th>
            <th className="py-1 px-1.5">Règle de liaison</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-300">
          {items.map((item, idx) => (
            <tr
              key={item.word.phonetic}
              onClick={() => handleInspect(item.word, item.stepByStepRule)}
              className={`cursor-pointer hover:bg-sky-100/60 ${
                idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'
              }`}
            >
              <td className="py-1 px-1.5 font-mono-tabular font-bold text-xs text-slate-600">
                {String(startIndex + idx + 1).padStart(2, '0')}
              </td>
              <td className="py-1 px-1.5 break-words leading-snug">
                <span
                  dir="rtl"
                  lang="ar"
                  className="font-arabic font-bold text-lg sm:text-xl text-slate-950 mr-1.5"
                >
                  {item.word.arabic}
                </span>
                <span className="font-mono-tabular font-bold text-xs text-sky-900">
                  [{item.word.phonetic}]
                </span>
                <div className="font-bold text-xs text-slate-950">
                  = {item.word.french}
                </div>
              </td>
              <td
                dir="rtl"
                lang="ar"
                className="py-1 px-1.5 font-arabic font-bold text-base sm:text-lg text-sky-900 bg-slate-50 text-right break-words"
              >
                {item.lettersJoined}
              </td>
              <td className="py-1 px-1.5 text-xs font-medium text-slate-800 leading-snug break-words">
                {item.stepByStepRule}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Helper to render half of the 11 Vowel rules table with LARGE readable fonts
  const renderVowelRulesColumn = (rules: typeof VOWELS_DATA) => (
    <div className="border border-slate-400 rounded overflow-hidden bg-white">
      <table className="w-full border-collapse text-left table-fixed">
        <thead>
          <tr className="bg-sky-900 text-white text-xs uppercase tracking-wider font-extrabold">
            <th className="py-1 px-1.5 w-14 text-center bg-sky-950">Signe</th>
            <th className="py-1 px-1.5 w-[38%]">Nom & Règle de son</th>
            <th className="py-1 px-1.5">Exemples (Arabe · Phon. · Sens)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-300">
          {rules.map((v, idx) => (
            <tr
              key={v.id}
              onClick={() =>
                handleInspect(v.examples[0], `${v.frenchName} (${v.symbolOnBa})`)
              }
              className={`cursor-pointer hover:bg-sky-100/60 ${
                idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'
              }`}
            >
              <td
                dir="rtl"
                lang="ar"
                className="py-1 px-1 font-arabic font-bold text-2xl text-sky-950 bg-sky-50 text-center"
              >
                {v.symbolOnBa}
              </td>
              <td className="py-1 px-1.5 break-words leading-snug">
                <div className="font-extrabold text-[13px] text-slate-950">
                  {v.frenchName}{' '}
                  <span className="font-mono-tabular text-xs text-sky-800">
                    [{v.phoneticName}]
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-800">{v.soundValue}</div>
              </td>
              <td className="py-1 px-1.5 text-xs leading-snug break-words space-y-0.5">
                {v.examples.slice(0, 2).map((ex, i) => (
                  <div key={i}>
                    <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg text-slate-950">
                      {ex.arabic}
                    </strong>{' '}
                    <span className="font-mono-tabular font-bold text-sky-900">
                      [{ex.phonetic}]
                    </span>{' '}
                    <span className="font-semibold text-slate-900">= {ex.french}</span>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Helper to render half of the 28-letter syllable grid with LARGE readable fonts
  const renderSyllableGridColumn = (letters: ArabicLetter[]) => (
    <div className="border border-slate-400 rounded overflow-hidden bg-white">
      <table className="w-full border-collapse text-left table-fixed">
        <thead>
          <tr className="bg-sky-900 text-white text-xs uppercase tracking-wider font-extrabold">
            <th className="py-1 px-1.5 w-[20%]">Lettre</th>
            <th className="py-1 px-1.5 w-[27%] bg-sky-800">Courtes (a · i · u)</th>
            <th className="py-1 px-1.5 w-[27%] bg-sky-950">Longues (ā · ū · ī)</th>
            <th className="py-1 px-1.5">Tanwīn (un · an · in)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-300">
          {letters.map((letter, idx) => {
            const fatha = buildSyllableCombination(letter, 'fatha');
            const kasra = buildSyllableCombination(letter, 'kasra');
            const damma = buildSyllableCombination(letter, 'damma');
            const maddA = buildSyllableCombination(letter, 'madd-alif');
            const maddW = buildSyllableCombination(letter, 'madd-waw');
            const maddY = buildSyllableCombination(letter, 'madd-ya');
            const tanUn = buildSyllableCombination(letter, 'tanwin-un');
            const tanAn = buildSyllableCombination(letter, 'tanwin-an');
            const tanIn = buildSyllableCombination(letter, 'tanwin-in');

            return (
              <tr
                key={letter.id}
                onClick={() =>
                  handleInspect(
                    {
                      arabic: `${fatha.arabicSyllable} · ${kasra.arabicSyllable} · ${damma.arabicSyllable} | ${maddA.arabicSyllable} · ${maddW.arabicSyllable} · ${maddY.arabicSyllable}`,
                      phonetic: `${fatha.phoneticSyllable}, ${kasra.phoneticSyllable}, ${damma.phoneticSyllable} | ${maddA.phoneticSyllable}, ${maddW.phoneticSyllable}, ${maddY.phoneticSyllable}`,
                      french: `Syllabes complètes de la lettre ${letter.nameFrench}`
                    },
                    `Grille syllabique — ${letter.nameFrench} (${letter.arabic})`
                  )
                }
                className={`cursor-pointer hover:bg-sky-100/60 ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'
                }`}
              >
                <td className="py-1 px-1.5 font-extrabold text-xs whitespace-nowrap">
                  <span dir="rtl" lang="ar" className="font-arabic text-lg text-sky-900 mr-1">
                    {letter.arabic}
                  </span>
                  {letter.namePhonetic}
                </td>
                <td className="py-1 px-1.5 text-xs whitespace-nowrap">
                  <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg">
                    {fatha.arabicSyllable}·{kasra.arabicSyllable}·{damma.arabicSyllable}
                  </strong>{' '}
                  <span className="font-mono-tabular font-bold text-[11px] text-sky-900">
                    [{fatha.phoneticSyllable}/{kasra.phoneticSyllable}/{damma.phoneticSyllable}]
                  </span>
                </td>
                <td className="py-1 px-1.5 text-xs bg-sky-50/60 whitespace-nowrap">
                  <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg text-sky-950">
                    {maddA.arabicSyllable}·{maddW.arabicSyllable}·{maddY.arabicSyllable}
                  </strong>{' '}
                  <span className="font-mono-tabular font-bold text-[11px] text-sky-950">
                    [{maddA.phoneticSyllable}/{maddW.phoneticSyllable}/{maddY.phoneticSyllable}]
                  </span>
                </td>
                <td className="py-1 px-1.5 text-xs whitespace-nowrap">
                  <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg">
                    {tanUn.arabicSyllable}·{tanAn.arabicSyllable}·{tanIn.arabicSyllable}
                  </strong>{' '}
                  <span className="font-mono-tabular font-bold text-[11px] text-slate-700">
                    [{tanUn.phoneticSyllable}/{tanAn.phoneticSyllable}/{tanIn.phoneticSyllable}]
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  // Helper to render half of the 16 Minimal Pairs table with LARGE readable fonts
  const renderMinimalPairsColumn = (
    pairs: typeof EXTENDED_MINIMAL_PAIRS,
    startIndex: number
  ) => (
    <div className="border border-slate-400 rounded overflow-hidden bg-white">
      <table className="w-full border-collapse text-left table-fixed">
        <thead>
          <tr className="bg-sky-900 text-white text-xs uppercase tracking-wider font-extrabold">
            <th className="py-1 px-1.5 w-7">#</th>
            <th className="py-1 px-1.5 w-[46%] bg-sky-800">Courte (1 temps)</th>
            <th className="py-1 px-1.5 bg-sky-950">Longue (2 temps)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-300">
          {pairs.map((pair, idx) => (
            <tr
              key={idx}
              onClick={() =>
                handleInspect(
                  {
                    arabic: `${pair.short.arabic} ≠ ${pair.long.arabic}`,
                    phonetic: `${pair.short.phonetic} ≠ ${pair.long.phonetic}`,
                    french: `${pair.short.french} ≠ ${pair.long.french}`
                  },
                  `Contraste 1 temps vs 2 temps (${pair.vowelType})`
                )
              }
              className={`cursor-pointer hover:bg-sky-100/60 ${
                idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'
              }`}
            >
              <td className="py-1 px-1.5 font-mono-tabular font-bold text-xs text-slate-600">
                {String(startIndex + idx + 1).padStart(2, '0')}
              </td>
              <td className="py-1 px-1.5 text-xs break-words">
                <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg text-slate-950 mr-1.5">
                  {pair.short.arabic}
                </strong>
                <span className="font-mono-tabular font-bold text-sky-900">
                  [{pair.short.phonetic}]
                </span>{' '}
                <span className="font-semibold text-slate-900">= {pair.short.french}</span>
              </td>
              <td className="py-1 px-1.5 text-xs bg-sky-50/60 break-words">
                <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg text-sky-950 mr-1.5">
                  {pair.long.arabic}
                </strong>
                <span className="font-mono-tabular font-bold text-sky-950">
                  [{pair.long.phonetic}]
                </span>{' '}
                = <strong>{pair.long.french}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderSubcategoryBlock = (cat: VocabSubcategory) => {
    const filtered = cat.words.filter((w) =>
      matchesSearch([w.arabic, w.phonetic, w.french, String(w.num), cat.title], searchQuery)
    );
    if (filtered.length === 0) return null;

    const half = Math.ceil(filtered.length / 2);
    const leftCol = filtered.slice(0, half);
    const rightCol = filtered.slice(half);

    const renderWordCol = (list: typeof filtered) => (
      <div className="border border-slate-400 rounded overflow-hidden bg-white">
        <table className="w-full border-collapse text-left table-fixed">
          <thead>
            <tr className="bg-slate-100 text-slate-800 text-xs uppercase font-extrabold">
              <th className="py-1 px-1.5 w-9">#</th>
              <th className="py-1 px-1.5 w-[32%] text-right">Arabe</th>
              <th className="py-1 px-1.5 w-[30%]">Phonétique</th>
              <th className="py-1 px-1.5">Signification Française</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-300">
            {list.map((w, idx) => (
              <tr
                key={w.num}
                onClick={() =>
                  handleInspect(
                    { arabic: w.arabic, phonetic: w.phonetic, french: w.french },
                    `${cat.code} — Mot #${w.num}`
                  )
                }
                className={`cursor-pointer hover:bg-sky-100/60 transition-colors ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'
                }`}
                title="Cliquer pour agrandir et écouter ce mot"
              >
                <td className="py-0.5 px-1.5 font-mono-tabular font-bold text-xs text-slate-600">
                  {String(w.num).padStart(3, '0')}
                </td>
                <td
                  dir="rtl"
                  lang="ar"
                  className="py-0.5 px-1.5 font-arabic font-bold text-lg sm:text-xl text-slate-950 text-right break-words"
                >
                  {w.arabic}
                </td>
                <td className="py-0.5 px-1.5 font-mono-tabular font-bold text-xs text-sky-900 break-words">
                  [{w.phonetic}]
                </td>
                <td className="py-0.5 px-1.5 font-semibold text-xs text-slate-950 break-words">
                  {w.french}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

    return (
      <div key={cat.id} className="border border-sky-300 rounded-md overflow-hidden bg-sky-50/35">
        <div className="bg-sky-900 text-white px-3 py-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <span className="font-mono-tabular text-xs font-extrabold text-sky-300 uppercase mr-1.5">
              {cat.code}
            </span>
            <span className="font-extrabold text-sm">{cat.title}</span>
          </div>
          <span className="text-xs text-sky-100 font-medium">{cat.subtitle}</span>
        </div>

        {/* Concrete sentence in context for this subcategory */}
        <div
          onClick={() => handleInspect(cat.concreteSentence, `Phrase concrète — ${cat.title}`)}
          className="bg-sky-50 border-b border-sky-200 px-3 py-1 flex flex-wrap items-baseline justify-between gap-2 cursor-pointer hover:bg-sky-100/70 transition-colors"
        >
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-extrabold uppercase text-sky-900 bg-white border border-sky-300 px-1.5 py-0.5 rounded">
              Exemple concret
            </span>
            <span className="font-mono-tabular font-bold text-xs text-sky-900">
              [{cat.concreteSentence.phonetic}]
            </span>
            <span className="text-xs font-extrabold text-slate-950">
              = {cat.concreteSentence.french}
            </span>
          </div>
          <span
            dir="rtl"
            lang="ar"
            className="font-arabic font-bold text-lg sm:text-xl text-slate-950"
          >
            {cat.concreteSentence.arabic}
          </span>
        </div>

        <div className="p-1.5 grid grid-cols-1 lg:grid-cols-2 gap-1.5">
          {renderWordCol(leftCol)}
          {rightCol.length > 0 && renderWordCol(rightCol)}
        </div>
      </div>
    );
  };

  const filteredAlphabet = ARABIC_ALPHABET.filter((l) =>
    matchesSearch(
      [
        l.arabic,
        l.namePhonetic,
        l.nameFrench,
        l.frenchEquivalent,
        l.exampleWord.arabic,
        l.exampleWord.phonetic,
        l.exampleWord.french,
        l.secondExample.arabic,
        l.secondExample.phonetic,
        l.secondExample.french
      ],
      searchQuery
    )
  );
  const alphaHalf = Math.ceil(filteredAlphabet.length / 2);

  return (
    <div className="space-y-5">
      {/* Interactive Loupe / Word Zoom Modal */}
      {zoomedItem && (
        <div
          className="no-print fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setZoomedItem(null)}
        >
          <div
            className="bg-white border-2 border-sky-500 rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-mono-tabular font-bold uppercase text-sky-700">
                  LOUPE DE LECTURE GRAND FORMAT (ZOOM XXL)
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {zoomedItem.contextTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setZoomedItem(null)}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 text-center space-y-3">
              <p
                dir="rtl"
                lang="ar"
                className="font-arabic font-bold text-4xl sm:text-5xl text-slate-950 leading-relaxed"
              >
                {zoomedItem.triad.arabic}
              </p>
              <p className="font-mono-tabular font-bold text-lg text-sky-800">
                [{zoomedItem.triad.phonetic}]
              </p>
              <p className="text-lg font-bold text-slate-900">
                {zoomedItem.triad.french}
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              <button
                type="button"
                onClick={() => speakArabicText(zoomedItem.triad.arabic)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Écouter la prononciation arabe
              </button>
              <button
                type="button"
                onClick={() => setZoomedItem(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
              >
                Fermer l’aperçu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Document Banner & Direct Actions Bar */}
      <div className="no-print bg-sky-900 text-white rounded-xl p-3.5 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 border border-sky-800 shadow-2xs">
        <div>
          <div className="flex items-center gap-2 text-sky-300 text-xs font-mono-tabular">
            <FileText className="w-3.5 h-3.5" />
            <span>
              SUPPORT DE COURS A4 ({docMeta.pageCount} PAGES) · LECTURE INTERACTIVE & IMPRESSION
            </span>
          </div>
          <h1 className="text-sm sm:text-base font-extrabold tracking-tight mt-0.5">
            {docMeta.code} — {docMeta.title} : {docMeta.subtitle}
          </h1>
          <p className="text-xs text-sky-100 mt-0.5">{docMeta.summary}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold bg-sky-400 hover:bg-sky-300 text-slate-950 rounded-md transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Télécharger le fichier .PDF ({docMeta.pageCount} p.)
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-sky-800 hover:bg-sky-700 text-white border border-sky-600 rounded-md transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            Imprimer ({docMeta.pageCount} p. A4)
          </button>
        </div>
      </div>

      {/* =====================================================================
          PDF 1 : ALPHABET ARABE COMPLET (2 COLONNES DENSES, GRANDS CARACTÈRES LISIBLES)
         ===================================================================== */}
      {docId === 'pdf-alphabet' && (
        <>
          {/* PAGE 1 / 2 */}
          <A4SheetFrame
            code="PDF-01"
            docTitle="L’Alphabet Arabe Complet (28 Lettres en 2 Colonnes) : Équivalents, 4 Positions & Exemples"
            pageSub="Page 1/2 : Tableau des 28 lettres (Lettres 01–14 à gauche · Lettres 15–28 à droite)"
            pageNumber={1}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div className="bg-sky-50 border border-sky-300 rounded px-3 py-1.5 text-xs text-slate-900 flex flex-wrap items-center justify-between gap-2">
              <span>
                <strong>Lecture de droite à gauche (←) :</strong> 28 consonnes, aucune majuscule. Chaque lettre garde son squelette et ses points en début, milieu et fin de mot.
              </span>
              <span className="text-sky-900 font-bold">
                Cliquez sur une ligne pour zoomer et écouter.
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {renderAlphabetColumnTable(filteredAlphabet.slice(0, alphaHalf))}
              {filteredAlphabet.slice(alphaHalf).length > 0 &&
                renderAlphabetColumnTable(filteredAlphabet.slice(alphaHalf))}
            </div>
          </A4SheetFrame>

          {/* PAGE 2 / 2 */}
          <A4SheetFrame
            code="PDF-01"
            docTitle="Familles de Squelettes, 6 Lettres Non-Liantes, 16 Mots Soudés (2 Colonnes) & QCM"
            pageSub="Page 2/2 : Comprendre comment les lettres s’attachent concrètement + QCM Alphabet intégré"
            pageNumber={2}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            {/* 1. Compact 2-Column Table of the 4 Skeleton Families + 6 Non-Connecting Letters */}
            <div className="border border-slate-400 rounded overflow-hidden bg-white">
              <div className="bg-sky-900 text-white px-3 py-1.5 flex items-center justify-between">
                <h3 className="font-extrabold text-xs uppercase tracking-wider">
                  1. Astuce Visuelle : Les 4 Familles de « Squelettes » + Les 6 Lettres Non-Liantes à Gauche
                </h3>
                <span className="text-xs text-sky-200 font-mono-tabular font-semibold">
                  Même forme de base = seuls les points changent
                </span>
              </div>
              <table className="w-full border-collapse text-left table-fixed">
                <tbody className="divide-y divide-slate-300">
                  {SKELETON_FAMILIES.map((fam, idx) => (
                    <tr key={fam.familyName} className={idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'}>
                      <td className="py-1.5 px-2.5 w-[35%] align-top">
                        <div className="font-extrabold text-[13px] text-sky-950">{fam.familyName}</div>
                        <div className="text-xs font-medium text-slate-800 leading-snug mt-0.5">
                          {fam.rule}
                        </div>
                      </td>
                      <td className="py-1.5 px-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {fam.members.map((m, mIdx) => (
                            <button
                              key={mIdx}
                              type="button"
                              onClick={() => handleInspect(m, fam.familyName)}
                              className="bg-sky-50 border border-sky-300 hover:border-sky-500 rounded px-2 py-1 text-xs text-left cursor-pointer break-words"
                            >
                              <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg text-slate-950">
                                {m.arabic}
                              </strong>{' '}
                              <span className="font-mono-tabular font-bold text-sky-900">[{m.phonetic}]</span> ={' '}
                              <span className="font-semibold text-slate-900">{m.french}</span>
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                  {/* Row 5: The 6 Non-Connecting Letters */}
                  <tr className="bg-sky-100/60">
                    <td className="py-1.5 px-2.5 align-top">
                      <div className="font-extrabold text-[13px] text-sky-950">
                        Règle d’Or : Les 6 Lettres Non-Liantes (ا · د · ذ · ر · ز · و)
                      </div>
                      <div className="text-xs font-medium text-slate-900 leading-snug mt-0.5">
                        S’attachent à droite (avant), mais <strong>coupent toujours à gauche</strong> (après).
                      </div>
                    </td>
                    <td className="py-1.5 px-2">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                        {NON_CONNECTING_LETTERS.map((item) => (
                          <button
                            key={item.phonetic}
                            type="button"
                            onClick={() => handleInspect(item, 'Lettre non-liante à gauche')}
                            className="bg-white border border-sky-300 rounded px-2 py-1 text-xs text-left cursor-pointer break-words"
                          >
                            <strong dir="rtl" lang="ar" className="font-arabic text-lg text-sky-900">
                              {item.arabic}
                            </strong>{' '}
                            <span className="font-mono-tabular font-bold text-sky-900">[{item.phonetic}]</span>{' '}
                            <span className="font-medium text-slate-800">({item.french})</span>
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 2. 16 Concrete Word Decompositions in 2 side-by-side compact columns */}
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                2. Atelier Pas-à-Pas : 16 Mots Concrets du Quotidien Soudés Lettre par Lettre (En 2 Colonnes)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {renderWordDecompositionColumn(WORD_DECOMPOSITIONS.slice(0, 8), 0)}
                {renderWordDecompositionColumn(WORD_DECOMPOSITIONS.slice(8, 16), 8)}
              </div>
            </div>

            {/* 3. QCM Integrated directly inside Page 2 of PDF-01 */}
            <EmbeddedPdfQcmBlock
              categoryTitle="PDF 1 — Alphabet & Liaison des Lettres"
              questions={ALPHABET_QUIZ}
              onInspectTriad={handleInspect}
            />
          </A4SheetFrame>
        </>
      )}

      {/* =====================================================================
          PDF 2 : VOYELLES COURTES, LONGUES, RÈGLES 1-2-3 & SYLLABES (GRAND FORMAT LISIBLE)
         ===================================================================== */}
      {docId === 'pdf-voyelles' && (
        <>
          {/* PAGE 1 / 2 */}
          <A4SheetFrame
            code="PDF-02"
            docTitle="Voyelles Courtes, Longues (Al-Madd), Règles 1-2-3 (Sukūn, Chadda, Tanwīn) & Grille"
            pageSub="Page 1/2 : Règles 1-2-3, les 11 signes en 2 colonnes & grille syllabique en 2 colonnes"
            pageNumber={1}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            {/* 1. Règles 1, 2, 3 in a single 2-column table with LARGE readable text */}
            <div className="border border-sky-400 rounded overflow-hidden bg-white">
              <div className="bg-sky-900 text-white px-3 py-1.5 flex items-center justify-between">
                <h3 className="font-extrabold text-xs uppercase tracking-wider">
                  1. Les 3 Règles Mécaniques Indispensables pour Déchiffrer Tous les Mots (Sukūn · Chadda · Tanwīn)
                </h3>
                <span className="text-xs text-sky-200 font-mono-tabular font-semibold">
                  Cliquez sur un exemple pour l’écouter
                </span>
              </div>
              <table className="w-full border-collapse text-left table-fixed">
                <tbody className="divide-y divide-slate-300">
                  {READING_MECHANICS_GUIDES.map((g, idx) => (
                    <tr key={g.title} className={idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'}>
                      <td className="py-1.5 px-2.5 w-[36%] align-top">
                        <div className="font-extrabold text-[13px] text-sky-950">{g.title}</div>
                        <div className="text-xs font-medium text-slate-800 leading-snug mt-0.5">
                          {g.rule}
                        </div>
                      </td>
                      <td className="py-1.5 px-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {g.concreteExamples.map((ex, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => handleInspect(ex, g.title)}
                              className="bg-sky-50 border border-sky-300 hover:border-sky-500 rounded px-2 py-1 text-xs text-left cursor-pointer break-words"
                            >
                              <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg text-slate-950">
                                {ex.arabic}
                              </strong>{' '}
                              <span className="font-mono-tabular font-bold text-sky-900">[{ex.phonetic}]</span> ={' '}
                              <span className="font-semibold text-slate-900">{ex.french}</span>
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 2. All 11 Vowel Signs in 2 side-by-side columns */}
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                2. Tableau Complet des 11 Signes de Vocalisation (En 2 Colonnes : Courtes, Longues, Tanwīn & Signes)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {renderVowelRulesColumn(VOWELS_DATA.slice(0, 6))}
                {renderVowelRulesColumn(VOWELS_DATA.slice(6, 11))}
              </div>
            </div>

            {/* 3. Complete 28-letter Syllable Grid in 2 side-by-side columns */}
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                3. Grille Syllabique des 28 Lettres en 2 Colonnes (Lettres 01–14 à gauche · Lettres 15–28 à droite)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {renderSyllableGridColumn(ARABIC_ALPHABET.slice(0, 14))}
                {renderSyllableGridColumn(ARABIC_ALPHABET.slice(14, 28))}
              </div>
            </div>
          </A4SheetFrame>

          {/* PAGE 2 / 2 */}
          <A4SheetFrame
            code="PDF-02"
            docTitle="Lecture Syllabique : 28 Verbes d’Action, 16 Paires Courte vs Longue (2 Colonnes) & QCM"
            pageSub="Page 2/2 : Entraînement concret à la fluidité de lecture + QCM Voyelles intégré"
            pageNumber={2}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            {/* 4. 28 Three-Letter Verbs in a tight 4-column grid with LARGE Arabic */}
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                4. Entraînement à la Lecture Syllabique : 28 Verbes d’Action de 3 Lettres (Tableau 4 Colonnes)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {THREE_LETTER_READING_WORDS.map((w, idx) => (
                  <div
                    key={w.phonetic}
                    onClick={() => handleInspect(w, `Verbe #${idx + 1} (3 syllabes)`)}
                    className="border border-slate-400 rounded px-2 py-1 bg-white hover:bg-sky-50 cursor-pointer flex items-baseline justify-between gap-1.5"
                  >
                    <div className="break-words">
                      <span className="font-mono-tabular text-xs font-bold text-slate-500 mr-1">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="font-mono-tabular font-bold text-xs text-sky-900">
                        [{w.phonetic}]
                      </span>{' '}
                      <span className="text-xs font-bold text-slate-950">
                        = {w.french}
                      </span>
                    </div>
                    <span
                      dir="rtl"
                      lang="ar"
                      className="font-arabic font-bold text-lg sm:text-xl text-slate-950 shrink-0"
                    >
                      {w.arabic}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. 16 Minimal Pairs Short vs Long in 2 side-by-side columns */}
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                5. Pourquoi la Durée Change Tout : 16 Paires Concrètes en 2 Colonnes (1 Temps vs 2 Temps)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {renderMinimalPairsColumn(EXTENDED_MINIMAL_PAIRS.slice(0, 8), 0)}
                {renderMinimalPairsColumn(EXTENDED_MINIMAL_PAIRS.slice(8, 16), 8)}
              </div>
            </div>

            {/* Embedded QCM inside Page 2 of PDF-02 */}
            <EmbeddedPdfQcmBlock
              categoryTitle="PDF 2 — Voyelles Courtes, Longues, Sukūn & Chadda"
              questions={VOWELS_QUIZ}
              onInspectTriad={handleInspect}
            />
          </A4SheetFrame>
        </>
      )}

      {/* =====================================================================
          PDF 3 : GRAMMAIRE CONCRÈTE, CONSTRUCTION DE PHRASES & DIALOGUES (GRAND FORMAT LISIBLE)
         ===================================================================== */}
      {docId === 'pdf-grammaire' && (
        <>
          {/* PAGE 1 / 2 */}
          <A4SheetFrame
            code="PDF-03"
            docTitle="Grammaire Concrète A2 : Construire ses Phrases, Article « Al- » & Boîte à Outils"
            pageSub="Page 1/2 : 4 formules clés de phrase, 14 Lunaires, 14 Solaires, Démonstratifs, Questions & Négations"
            pageNumber={1}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            {/* 1. The 4 Sentence-Building Formulas */}
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                1. Les 4 Formules Concrètes pour Construire ses Phrases (Cliquez sur une phrase pour la Zoomer)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {SENTENCE_BUILDING_FORMULAS.map((f) => (
                  <div
                    key={f.formulaTitle}
                    className="border border-sky-400 rounded p-2.5 bg-sky-50/40 space-y-1"
                  >
                    <div className="font-extrabold text-xs sm:text-sm text-sky-950">{f.formulaTitle}</div>
                    <p className="text-xs font-medium text-slate-800 leading-snug">{f.explanation}</p>
                    <div className="grid grid-cols-1 gap-1 pt-0.5">
                      {[f.patternA, f.patternB].map((pat, pIdx) => (
                        <div
                          key={pIdx}
                          onClick={() => handleInspect(pat, f.formulaTitle)}
                          className="bg-white border border-sky-300 hover:border-sky-600 rounded px-2 py-1 flex flex-wrap items-baseline justify-between gap-1.5 cursor-pointer"
                        >
                          <span
                            dir="rtl"
                            lang="ar"
                            className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950"
                          >
                            {pat.arabic}
                          </span>
                          <span className="font-mono-tabular font-bold text-xs print:text-sm text-sky-900">
                            [{pat.phonetic}]
                          </span>
                          <span className="text-xs print:text-sm font-semibold text-slate-950">
                            = {pat.french}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Lunar vs Solar 14 + 14 complete tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {/* 14 Lunar Letters */}
              <div className="border border-slate-400 rounded overflow-hidden">
                <div className="bg-sky-900 text-white px-3 py-1">
                  <h3 className="font-extrabold text-xs uppercase tracking-wider">
                    2A. Les 14 Lettres Lunaires (Al-Qamariyya) — Le « L » (لْ) se prononce
                  </h3>
                </div>
                <table className="w-full border-collapse text-left table-fixed">
                  <thead>
                    <tr className="bg-slate-100 text-xs uppercase font-extrabold text-slate-800">
                      <th className="py-1 px-1.5 w-[23%]">Lettre</th>
                      <th className="py-1 px-1.5 w-[28%] text-right">Avec Al-</th>
                      <th className="py-1 px-1.5 w-[26%]">Phonétique</th>
                      <th className="py-1 px-1.5">Sens Français</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300">
                    {LUNAR_LETTERS_TABLE.map((item, idx) => (
                      <tr
                        key={idx}
                        onClick={() =>
                          handleInspect(item.example, `Lettre lunaire ${item.letter} (${item.name})`)
                        }
                        className={`cursor-pointer hover:bg-sky-100/60 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'
                        }`}
                      >
                        <td className="py-0.5 px-1.5 font-bold text-xs">
                          <span dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg print:text-xl text-sky-900 mr-1">
                            {item.letter}
                          </span>
                          <span className="font-mono-tabular text-xs text-slate-800">
                            [{item.name}]
                          </span>
                        </td>
                        <td
                          dir="rtl"
                          lang="ar"
                          className="py-0.5 px-1.5 font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950 text-right"
                        >
                          {item.example.arabic}
                        </td>
                        <td className="py-0.5 px-1.5 font-mono-tabular font-bold text-xs text-sky-900">
                          [{item.example.phonetic}]
                        </td>
                        <td className="py-0.5 px-1.5 font-semibold text-xs text-slate-950">
                          {item.example.french}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 14 Solar Letters */}
              <div className="border border-slate-400 rounded overflow-hidden">
                <div className="bg-sky-800 text-white px-3 py-1">
                  <h3 className="font-extrabold text-xs uppercase tracking-wider">
                    2B. Les 14 Lettres Solaires (Ach-Chamsiyya) — Le « L » s’assimile (Chadda)
                  </h3>
                </div>
                <table className="w-full border-collapse text-left table-fixed">
                  <thead>
                    <tr className="bg-slate-100 text-xs uppercase font-extrabold text-slate-800">
                      <th className="py-1 px-1.5 w-[23%]">Lettre</th>
                      <th className="py-1 px-1.5 w-[28%] text-right">Avec Al-</th>
                      <th className="py-1 px-1.5 w-[26%]">Phonétique</th>
                      <th className="py-1 px-1.5">Sens Français</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300">
                    {SOLAR_LETTERS_TABLE.map((item, idx) => (
                      <tr
                        key={idx}
                        onClick={() =>
                          handleInspect(item.example, `Lettre solaire ${item.letter} (${item.name})`)
                        }
                        className={`cursor-pointer hover:bg-sky-100/60 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'
                        }`}
                      >
                        <td className="py-0.5 px-1.5 font-bold text-xs">
                          <span dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg print:text-xl text-sky-900 mr-1">
                            {item.letter}
                          </span>
                          <span className="font-mono-tabular text-xs text-slate-800">
                            [{item.name}]
                          </span>
                        </td>
                        <td
                          dir="rtl"
                          lang="ar"
                          className="py-0.5 px-1.5 font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950 text-right"
                        >
                          {item.example.arabic}
                        </td>
                        <td className="py-0.5 px-1.5 font-mono-tabular font-bold text-xs text-sky-900">
                          [{item.example.phonetic}]
                        </td>
                        <td className="py-0.5 px-1.5 font-semibold text-xs text-slate-950">
                          {item.example.french}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Grammar Toolkit Table */}
            <div className="space-y-1">
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider">
                3. Boîte à Outils en Phrases : Genre (ة), Démonstratifs, Questions & Les 4 Négations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {GRAMMAR_TOOLKIT_TABLE.map((group) => (
                  <div
                    key={group.category}
                    className="border border-slate-400 rounded overflow-hidden bg-white"
                  >
                    <div className="bg-sky-900 text-white px-2.5 py-1 font-extrabold text-xs">
                      {group.category}
                    </div>
                    <div className="divide-y divide-slate-300">
                      {group.items.map((it, i) => (
                        <div
                          key={i}
                          onClick={() => handleInspect(it, group.category)}
                          className="px-2 py-1 hover:bg-sky-50 cursor-pointer text-xs leading-snug"
                        >
                          <div className="flex items-baseline justify-between gap-1">
                            <span className="font-mono-tabular font-bold text-sky-900">
                              [{it.phonetic}]
                            </span>
                            <span
                              dir="rtl"
                              lang="ar"
                              className="font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950"
                            >
                              {it.arabic}
                            </span>
                          </div>
                          <div className="font-semibold text-slate-900">= {it.french}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </A4SheetFrame>

          {/* PAGE 2 / 2 */}
          <A4SheetFrame
            code="PDF-03"
            docTitle="Pronoms, Suffixes Possessifs, Conjugaison, Dialogues Réels & QCM Grammaire"
            pageSub="Page 2/2 : Tableau des 8 personnes, 2 dialogues concrets du quotidien, 8 phrases clés + QCM intégré"
            pageNumber={2}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            {/* 4. Pronouns + Possessives + Conjugation Table */}
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                4. Tableau Intégral : Pronoms Personnels + Suffixes Possessifs + Conjugaison (Passé & Présent)
              </h3>
              <div className="border border-slate-400 rounded overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-sky-900 text-white text-xs uppercase tracking-wider font-extrabold">
                      <th className="py-1 px-2">Personne</th>
                      <th className="py-1 px-2">Pronom Sujet</th>
                      <th className="py-1 px-2">Suffixe</th>
                      <th className="py-1 px-2">Possessif (Maison / Nom)</th>
                      <th className="py-1 px-2 bg-sky-950">Passé (ذَهَبَ = Aller)</th>
                      <th className="py-1 px-2 bg-sky-800">Présent (يَذْهَبُ = Aller)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 text-xs">
                    {PRONOUNS_AND_POSSESSIVES_TABLE.map((row, idx) => (
                      <tr
                        key={idx}
                        onClick={() =>
                          handleInspect(
                            row.attachedExample,
                            `${row.person} — Pronom ${row.detached.arabic} [${row.detached.phonetic}]`
                          )
                        }
                        className={`cursor-pointer hover:bg-sky-100/60 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'
                        }`}
                      >
                        <td className="py-1 px-2 font-mono-tabular font-bold text-slate-800">
                          {row.person}
                        </td>
                        <td className="py-1 px-2">
                          <span
                            dir="rtl"
                            lang="ar"
                            className="font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950 mr-1"
                          >
                            {row.detached.arabic}
                          </span>
                          <span className="font-mono-tabular font-bold text-sky-900">
                            [{row.detached.phonetic}]
                          </span>{' '}
                          <span className="font-semibold">= {row.detached.french}</span>
                        </td>
                        <td className="py-1 px-2 font-mono-tabular font-extrabold text-sky-900">
                          {row.suffix}
                        </td>
                        <td className="py-1 px-2">
                          <span
                            dir="rtl"
                            lang="ar"
                            className="font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950 mr-1"
                          >
                            {row.attachedExample.arabic}
                          </span>
                          <span className="font-mono-tabular font-bold text-sky-900">
                            [{row.attachedExample.phonetic}]
                          </span>{' '}
                          <span className="font-semibold">= {row.attachedExample.french}</span>
                        </td>
                        <td className="py-1 px-2 bg-slate-50 font-semibold">
                          <span
                            dir="rtl"
                            lang="ar"
                            className="font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950 mr-1"
                          >
                            {row.pastVerb.arabic}
                          </span>
                          <span className="font-mono-tabular font-bold text-sky-900">
                            [{row.pastVerb.phonetic}]
                          </span>{' '}
                          = {row.pastVerb.french}
                        </td>
                        <td className="py-1 px-2 bg-sky-50/60 font-semibold">
                          <span
                            dir="rtl"
                            lang="ar"
                            className="font-arabic font-bold text-base sm:text-lg print:text-xl text-sky-950 mr-1"
                          >
                            {row.presentVerb.arabic}
                          </span>
                          <span className="font-mono-tabular font-bold text-sky-900">
                            [{row.presentVerb.phonetic}]
                          </span>{' '}
                          = {row.presentVerb.french}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. 2 Concrete Real-Life Dialogues */}
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                5. Dialogues Concrets de la Vie Réelle (Se présenter, Commander au café & Demander son chemin)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {REAL_LIFE_DIALOGUES_A1.map((dlg) => (
                  <div
                    key={dlg.title}
                    className="border border-sky-400 rounded overflow-hidden bg-white"
                  >
                    <div className="bg-sky-900 text-white px-3 py-1 flex items-center justify-between gap-2">
                      <span className="font-extrabold text-xs">{dlg.title}</span>
                      <span className="text-xs text-sky-200">{dlg.context}</span>
                    </div>
                    <table className="w-full border-collapse text-left">
                      <tbody className="divide-y divide-slate-300">
                        {dlg.lines.map((line, lIdx) => (
                          <tr
                            key={lIdx}
                            onClick={() => handleInspect(line.triad, `${dlg.title} (${line.speaker})`)}
                            className="hover:bg-sky-50 cursor-pointer"
                          >
                            <td className="py-1 px-2 w-20 align-top">
                              <span className="font-mono-tabular font-extrabold text-xs text-sky-900 bg-sky-50 border border-sky-300 px-1.5 py-0.5 rounded block text-center">
                                {line.speaker}
                              </span>
                            </td>
                            <td className="py-1 px-2 text-xs leading-snug">
                              <div
                                dir="rtl"
                                lang="ar"
                                className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950 text-right"
                              >
                                {line.triad.arabic}
                              </div>
                              <div className="font-mono-tabular font-bold text-sky-900">
                                [{line.triad.phonetic}]
                              </div>
                              <div className="font-semibold text-slate-950">
                                = {line.triad.french}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. 8 Essential Everyday Sentences */}
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                6. Les 8 Phrases Modèles Indispensables pour Parler de Soi et du Quotidien
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                {ESSENTIAL_SENTENCES_A1.map((s, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleInspect(s, `Phrase modèle #${idx + 1}`)}
                    className="border border-slate-400 rounded px-2.5 py-1.5 bg-white hover:bg-sky-50 cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono-tabular text-xs font-bold text-sky-900">
                        #{String(idx + 1).padStart(2, '0')} [{s.phonetic}]
                      </span>
                      <span
                        dir="rtl"
                        lang="ar"
                        className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950 text-right"
                      >
                        {s.arabic}
                      </span>
                    </div>
                    <div className="font-semibold text-slate-950 text-xs">
                      = {s.french}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded QCM inside Page 2 of PDF-03 */}
            <EmbeddedPdfQcmBlock
              categoryTitle="PDF 3 — Grammaire, Construction de Phrases & Dialogues"
              questions={GRAMMAR_A1_QUIZ}
              onInspectTriad={handleInspect}
            />
          </A4SheetFrame>
        </>
      )}

      {/* =====================================================================
          PDF 4 : LES 200 MOTS LES PLUS IMPORTANTS PAR SOUS-CATÉGORIES + QCM (GRAND FORMAT LISIBLE)
         ===================================================================== */}
      {docId === 'pdf-vocab300' && (
        <>
          {/* PAGE 1 / 2 : CATÉGORIES 1 À 4 (MOTS #001 À #100) */}
          <A4SheetFrame
            code="PDF-04"
            docTitle="Les 200 Mots Arabes les Plus Utilisés — Classés par Sous-Catégories Thématiques"
            pageSub="Page 1/2 : Catégories 1 à 4 (#001 à #100 : Salutations, Mots-outils, Famille, Maison, École & Ville)"
            pageNumber={1}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div className="bg-sky-50 border border-sky-300 rounded px-3 py-1.5 text-xs text-slate-900">
              <strong>Organisation par sous-catégories (sans mélange) :</strong> Les{' '}
              <strong>200 mots et expressions les plus utiles de la langue arabe</strong>, classés en{' '}
              <strong>9 sous-catégories concrètes</strong> (178 mots de la vie quotidienne + 22 mots essentiels pour la religion en Catégorie 9), avec une phrase modèle par thème.
            </div>

            <div className="space-y-2">
              {VOCAB_200_SUBCATEGORIES.filter((c) => c.pageNumber === 1).map((cat) =>
                renderSubcategoryBlock(cat)
              )}
            </div>
          </A4SheetFrame>

          {/* PAGE 2 / 2 : CATÉGORIES 5 À 9 (MOTS #101 À #200 + QCM VOCABULAIRE) */}
          <A4SheetFrame
            code="PDF-04"
            docTitle="Les 200 Mots Arabes par Sous-Catégories — Suite & QCM Vocabulaire"
            pageSub="Page 2/2 : Catégories 5 à 9 (#101 à #200 : Nourriture, Temps, Adjectifs Contraires, 24 Verbes & 22 Mots Religion) + QCM"
            pageNumber={2}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div className="space-y-2">
              {VOCAB_200_SUBCATEGORIES.filter((c) => c.pageNumber === 2).map((cat) =>
                renderSubcategoryBlock(cat)
              )}
            </div>

            {/* Embedded QCM inside Page 2 of PDF-04 */}
            <EmbeddedPdfQcmBlock
              categoryTitle="PDF 4 — Les 200 Mots Indispensables par Sous-Catégories"
              questions={VOCAB_200_QUIZ}
              onInspectTriad={handleInspect}
            />
          </A4SheetFrame>
        </>
      )}

      {/* =====================================================================
          PDF 5 : LES 10 SOURATES COURTES ESSENTIELLES + QCM
         ===================================================================== */}
      {docId === 'pdf-sourates' && (
        <>
          {/* PAGE 1 / 2 : SOURATES 1 À 5 */}
          <A4SheetFrame
            code="PDF-05"
            docTitle="Livret des 10 Sourates Courtes Essentielles (Arabe Vocalisé · Phonétique · Traduction)"
            pageSub="Page 1/2 : Al-Fātiḥa (n°1), Al-Ikhlāṣ (n°112), Al-Falaq (n°113), An-Nās (n°114) & Al-‘Aṣr (n°103)"
            pageNumber={1}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div className="grid grid-cols-1 gap-3">
              {ALL_12_SURAHS.slice(0, 5).map((surah) => (
                <div
                  key={surah.id}
                  className="border border-sky-400 rounded-md overflow-hidden bg-white"
                >
                  <div className="bg-sky-900 text-white px-3.5 py-1.5 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="font-mono-tabular font-extrabold text-xs text-sky-300 mr-2">
                        SOURATE N°{surah.surahNumber} ({surah.versesCount} VERSETS)
                      </span>
                      <span className="font-extrabold text-sm sm:text-base print:text-lg">
                        {surah.titlePhonetic} — {surah.titleFrench}
                      </span>
                    </div>
                    <span dir="rtl" lang="ar" className="font-arabic font-bold text-lg sm:text-xl print:text-3xl text-sky-100">
                      {surah.titleArabic}
                    </span>
                  </div>

                  <table className="w-full border-collapse text-left">
                    <tbody className="divide-y divide-slate-300">
                      {surah.verses.map((v) => (
                        <tr
                          key={v.verseNumber}
                          onClick={() =>
                            handleInspect(
                              { arabic: v.arabic, phonetic: v.phonetic, french: v.french },
                              `${surah.titleFrench} — Verset ${v.verseNumber}`
                            )
                          }
                          className="hover:bg-sky-50 cursor-pointer"
                        >
                          <td className="py-1.5 px-2.5 w-12 font-mono-tabular font-extrabold text-xs print:text-base text-sky-900 align-top bg-sky-50/50">
                            V.{v.verseNumber}
                          </td>
                          <td className="py-1.5 px-3 leading-snug">
                            <div
                              dir="rtl"
                              lang="ar"
                              className="font-arabic font-bold text-lg sm:text-xl print:text-3xl text-slate-950 text-right leading-relaxed"
                            >
                              {v.arabic}
                            </div>
                            <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-xs sm:text-[13px] print:text-base">
                              <span className="font-mono-tabular font-bold text-sky-900">
                                [{v.phonetic}]
                              </span>
                              <span className="text-slate-950 font-semibold">— {v.french}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="bg-sky-50 px-3 py-1.5 border-t border-sky-200 flex flex-wrap items-center gap-1.5 text-xs print:text-sm">
                    <span className="font-extrabold text-sky-950">Mots-clés :</span>
                    {surah.keyWords.map((kw, i) => (
                      <span key={i} className="bg-white border border-sky-300 rounded px-1.5 py-0.5">
                        <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg print:text-xl text-slate-950">
                          {kw.arabic}
                        </strong>{' '}
                        <span className="font-mono-tabular font-bold text-sky-900">[{kw.phonetic}]</span> ={' '}
                        <span className="font-semibold text-slate-900">{kw.french}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </A4SheetFrame>

          {/* PAGE 2 / 2 : SOURATES 6 À 10 + QCM SOURATES INTÉGRÉ */}
          <A4SheetFrame
            code="PDF-05"
            docTitle="Livret des 10 Sourates Courtes Essentielles — Suite & QCM"
            pageSub="Page 2/2 : Al-Kawthar (n°108), An-Naṣr (n°110), Al-Kāfirūn (n°109), Quraych (n°106) & Al-Mā‘ūn (n°107) + QCM"
            pageNumber={2}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div className="grid grid-cols-1 gap-3">
              {ALL_12_SURAHS.slice(5, 10).map((surah) => (
                <div
                  key={surah.id}
                  className="border border-sky-400 rounded-md overflow-hidden bg-white"
                >
                  <div className="bg-sky-900 text-white px-3.5 py-1.5 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="font-mono-tabular font-extrabold text-xs text-sky-300 mr-2">
                        SOURATE N°{surah.surahNumber} ({surah.versesCount} VERSETS)
                      </span>
                      <span className="font-extrabold text-sm sm:text-base print:text-lg">
                        {surah.titlePhonetic} — {surah.titleFrench}
                      </span>
                    </div>
                    <span dir="rtl" lang="ar" className="font-arabic font-bold text-lg sm:text-xl print:text-3xl text-sky-100">
                      {surah.titleArabic}
                    </span>
                  </div>

                  <table className="w-full border-collapse text-left">
                    <tbody className="divide-y divide-slate-300">
                      {surah.verses.map((v) => (
                        <tr
                          key={v.verseNumber}
                          onClick={() =>
                            handleInspect(
                              { arabic: v.arabic, phonetic: v.phonetic, french: v.french },
                              `${surah.titleFrench} — Verset ${v.verseNumber}`
                            )
                          }
                          className="hover:bg-sky-50 cursor-pointer"
                        >
                          <td className="py-1.5 px-2.5 w-12 font-mono-tabular font-extrabold text-xs print:text-base text-sky-900 align-top bg-sky-50/50">
                            V.{v.verseNumber}
                          </td>
                          <td className="py-1.5 px-3 leading-snug">
                            <div
                              dir="rtl"
                              lang="ar"
                              className="font-arabic font-bold text-lg sm:text-xl print:text-3xl text-slate-950 text-right leading-relaxed"
                            >
                              {v.arabic}
                            </div>
                            <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-xs sm:text-[13px] print:text-base">
                              <span className="font-mono-tabular font-bold text-sky-900">
                                [{v.phonetic}]
                              </span>
                              <span className="text-slate-950 font-semibold">— {v.french}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="bg-sky-50 px-3 py-1.5 border-t border-sky-200 flex flex-wrap items-center gap-1.5 text-xs print:text-sm">
                    <span className="font-extrabold text-sky-950">Mots-clés :</span>
                    {surah.keyWords.map((kw, i) => (
                      <span key={i} className="bg-white border border-sky-300 rounded px-1.5 py-0.5">
                        <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg print:text-xl text-slate-950">
                          {kw.arabic}
                        </strong>{' '}
                        <span className="font-mono-tabular font-bold text-sky-900">[{kw.phonetic}]</span> ={' '}
                        <span className="font-semibold text-slate-900">{kw.french}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded QCM inside Page 2 of PDF-05 */}
            <EmbeddedPdfQcmBlock
              categoryTitle="PDF 5 — Compréhension & Vocabulaire des Sourates Courtes"
              questions={SURAHS_QUIZ}
              onInspectTriad={handleInspect}
            />
          </A4SheetFrame>
        </>
      )}

      {/* =====================================================================
          PDF 6 : CAHIER D'EXERCICES PRATIQUES & EXAMEN FINAL BILAN A2 (SANS CORRIGÉ)
         ===================================================================== */}
      {docId === 'pdf-cahier-quiz' && (
        <>
          {/* PAGE 1 / 2 : 4 EXERCICES PRATIQUES D'APPLICATION À COMPLÉTER (SANS CORRIGÉ) */}
          <A4SheetFrame
            code="PDF-06"
            docTitle="Cahier d’Exercices Concrets Niveau A2 : Écriture, Phrases & Conjugaison (/ 20 pts)"
            pageSub="Page 1/2 : 4 exercices d’application à compléter par l’élève (sans corrigé)"
            pageNumber={1}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            {/* Student Header Strip */}
            <div className="bg-sky-50 border border-sky-300 rounded px-3.5 py-2 flex flex-wrap items-center justify-between gap-2 text-xs print:text-sm font-mono-tabular text-slate-950 font-bold">
              <span>
                Nom & Prénom de l’élève : .........................................................
              </span>
              <span>
                Date : .... / .... / 20....
              </span>
              <span className="text-sky-900">
                Note Exercices (Page 1) : ....... / 20
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {/* Exercice 1 */}
              <div className="border border-slate-400 rounded overflow-hidden bg-white">
                <div className="bg-sky-900 text-white px-3 py-1.5 flex items-center justify-between">
                  <h3 className="font-extrabold text-xs uppercase tracking-wider">
                    Exercice 1 — Souder les lettres et donner le sens
                  </h3>
                  <span className="font-mono-tabular text-xs font-bold text-sky-200">..... / 5 pts</span>
                </div>
                <table className="w-full border-collapse text-xs sm:text-[13px] print:text-sm table-fixed">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-extrabold">
                      <th className="py-1.5 px-2 w-[38%]">Lettres détachées</th>
                      <th className="py-1.5 px-2 w-[26%]">Indice phon.</th>
                      <th className="py-1.5 px-2">Mot soudé & Sens FR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300">
                    {WORD_DECOMPOSITIONS.slice(0, 8).map((w, i) => (
                      <tr key={i}>
                        <td
                          dir="rtl"
                          lang="ar"
                          className="py-1.5 px-2 font-arabic font-bold text-lg sm:text-xl print:text-2xl text-slate-950 text-right"
                        >
                          {w.lettersJoined.split('=')[0]}
                        </td>
                        <td className="py-1.5 px-2 font-mono-tabular font-bold text-sky-900">
                          [{w.word.phonetic}]
                        </td>
                        <td className="py-1.5 px-2 font-mono-tabular text-slate-400">
                          ..................................
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Exercice 2 */}
              <div className="border border-slate-400 rounded overflow-hidden bg-white">
                <div className="bg-sky-900 text-white px-3 py-1.5 flex items-center justify-between">
                  <h3 className="font-extrabold text-xs uppercase tracking-wider">
                    Exercice 2 — Traduire en arabe (Indéfini vs Phrase Nominale)
                  </h3>
                  <span className="font-mono-tabular text-xs font-bold text-sky-200">..... / 5 pts</span>
                </div>
                <table className="w-full border-collapse text-xs sm:text-[13px] print:text-sm table-fixed">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-extrabold">
                      <th className="py-1.5 px-2 w-[46%]">Phrase en Français</th>
                      <th className="py-1.5 px-2">Traduction en Arabe & Phonétique</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300">
                    {[
                      '1. Une grande maison',
                      '2. La maison est grande',
                      '3. Une voiture rapide',
                      '4. La voiture est rapide',
                      '5. J’ai une clé et un téléphone',
                      '6. Dans la rue, il y a un restaurant',
                      '7. La porte de la maison est ouverte',
                      '8. Le café est chaud et l’eau est froide'
                    ].map((frText, i) => (
                      <tr key={i}>
                        <td className="py-1.5 px-2 font-bold text-slate-950">{frText}</td>
                        <td className="py-1.5 px-2 font-mono-tabular text-slate-400">
                          ................................................
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Exercice 3 & 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="border border-slate-400 rounded overflow-hidden bg-white">
                <div className="bg-sky-900 text-white px-3 py-1.5 flex items-center justify-between">
                  <h3 className="font-extrabold text-xs uppercase tracking-wider">
                    Exercice 3 — Compléter le Possessif et le Verbe (Passé / Présent)
                  </h3>
                  <span className="font-mono-tabular text-xs font-bold text-sky-200">..... / 5 pts</span>
                </div>
                <table className="w-full border-collapse text-xs sm:text-[13px] print:text-sm table-fixed">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-extrabold">
                      <th className="py-1.5 px-2 w-[38%]">Pronom Sujet</th>
                      <th className="py-1.5 px-2 w-[31%]">Possessif (بَيْت)</th>
                      <th className="py-1.5 px-2">Verbe Aller (ذَهَبَ)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300">
                    {PRONOUNS_AND_POSSESSIVES_TABLE.slice(0, 6).map((p, i) => (
                      <tr key={i}>
                        <td className="py-1.5 px-2 font-bold text-slate-950">
                          <span dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg print:text-xl text-sky-900 mr-1.5">
                            {p.detached.arabic}
                          </span>
                          [{p.detached.phonetic}] ({p.detached.french})
                        </td>
                        <td className="py-1.5 px-2 font-mono-tabular text-slate-400">
                          ...........................
                        </td>
                        <td className="py-1.5 px-2 font-mono-tabular text-slate-400">
                          ...........................
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border border-slate-400 rounded overflow-hidden bg-white">
                <div className="bg-sky-900 text-white px-3 py-1.5 flex items-center justify-between">
                  <h3 className="font-extrabold text-xs uppercase tracking-wider">
                    Exercice 4 — Répondre en Arabe aux Questions du Quotidien
                  </h3>
                  <span className="font-mono-tabular text-xs font-bold text-sky-200">..... / 5 pts</span>
                </div>
                <div className="p-2.5 space-y-2 text-xs sm:text-[13px] print:text-sm">
                  {[
                    {
                      ar: '1. مَا اسْمُكَ وَأَيْنَ تَسْكُنُ ؟',
                      ph: 'Mā smuka wa ayna taskunu ?',
                      fr: 'Comment t’appelles-tu et où habites-tu ?'
                    },
                    {
                      ar: '2. مَاذَا تُرِيدُ أَنْ تَشْرَبَ فِي الصَّبَاحِ ؟',
                      ph: 'Mādhā turīdu an tachraba fī ṣ-ṣabāḥi ?',
                      fr: 'Que veux-tu boire le matin ?'
                    },
                    {
                      ar: '3. كَيْفَ تَذْهَبُ إِلَى الْمَدْرَسَةِ أَوِ الْعَمَلِ ؟',
                      ph: 'Kayfa tadhhabu ilā l-madrasati awi l-‘amali ?',
                      fr: 'Comment vas-tu à l’école ou au travail ?'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-2 bg-slate-50 rounded border border-slate-300 space-y-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-mono-tabular font-bold text-sky-900">
                          [{item.ph}]
                        </span>
                        <span dir="rtl" lang="ar" className="font-arabic font-bold text-lg sm:text-xl print:text-2xl text-slate-950">
                          {item.ar}
                        </span>
                      </div>
                      <div className="font-semibold text-slate-800">({item.fr})</div>
                      <div className="font-mono-tabular text-slate-400 pt-0.5">
                        Réponse : .....................................................................................
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </A4SheetFrame>

          {/* PAGE 2 / 2 : GRAND EXAMEN FINAL QCM BILAN A2 (10 QUESTIONS SANS CORRIGÉ) */}
          <A4SheetFrame
            code="PDF-06"
            docTitle="Grand Examen Bilan Niveau A2 : 10 QCM Récapitulatifs (Toutes Catégories)"
            pageSub="Page 2/2 : Évaluation finale imprimable (Alphabet, Voyelles, Grammaire, 200 Mots & Sourates)"
            pageNumber={2}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <EmbeddedPdfQcmBlock
              categoryTitle="PDF 6 — Grand Examen Bilan Complet Niveau A2 (10 Questions)"
              questions={[
                ...ALPHABET_QUIZ.slice(0, 2),
                ...VOWELS_QUIZ.slice(0, 2),
                ...GRAMMAR_A1_QUIZ.slice(0, 2),
                ...VOCAB_200_QUIZ.slice(0, 2),
                ...SURAHS_QUIZ.slice(0, 2)
              ]}
              onInspectTriad={handleInspect}
            />
          </A4SheetFrame>
        </>
      )}

      {/* =====================================================================
          PDF 7 : CONJUGAISON COMPLÈTE NIVEAU A2 (PASSÉ, PRÉSENT, FUTUR, IMPÉRATIF & NÉGATIONS)
         ===================================================================== */}
      {docId === 'pdf-conjugaison-a2' && (
        <>
          {/* PAGE 1 / 2 : 10 PRONOMS + CONJUGAISON AUX 3 TEMPS + 8 VERBES PILIERS */}
          <A4SheetFrame
            code="PDF-07"
            docTitle="Conjugaison Complète Niveau A2 : Les 10 Pronoms, Passé, Présent, Futur & 8 Verbes Piliers"
            pageSub="Page 1/2 : Tableau des 10 pronoms (Māḍī, Muḍāri‘, Mustaqbal) & les 8 verbes indispensables A2"
            pageNumber={1}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                1. Tableau des 10 Pronoms et Conjugaison aux 3 Temps (Modèle : كَتَبَ [Kataba] = Écrire)
              </h3>
              <div className="border border-slate-400 rounded overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-sky-900 text-white text-xs uppercase font-extrabold">
                      <th className="py-1.5 px-2">Personne</th>
                      <th className="py-1.5 px-2">Pronom</th>
                      <th className="py-1.5 px-2 bg-sky-950">Passé (Al-Māḍī)</th>
                      <th className="py-1.5 px-2 bg-sky-800">Présent (Al-Muḍāri‘)</th>
                      <th className="py-1.5 px-2 bg-sky-900">Futur (Sa- / Sawfa)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 text-xs sm:text-[13px] print:text-sm">
                    {A2_PRONOUN_CONJUGATION_TABLE.map((row, idx) => (
                      <tr
                        key={row.code}
                        onClick={() => handleInspect(row.writePresent, `${row.code} — Conjugaison`)}
                        className={`cursor-pointer hover:bg-sky-50 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'
                        }`}
                      >
                        <td className="py-1 px-2 font-mono-tabular font-bold text-slate-900">
                          {row.code}
                        </td>
                        <td className="py-1 px-2">
                          <span dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-xl text-sky-950 mr-1.5">
                            {row.pronoun.arabic}
                          </span>
                          <span className="font-mono-tabular font-bold text-sky-900">
                            [{row.pronoun.phonetic}]
                          </span>{' '}
                          <span className="font-semibold">({row.pronoun.french})</span>
                        </td>
                        <td className="py-1 px-2 bg-slate-50">
                          <span dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950 mr-1.5">
                            {row.writePast.arabic}
                          </span>
                          <span className="font-mono-tabular font-bold text-sky-900">
                            [{row.writePast.phonetic}]
                          </span>{' '}
                          = <strong>{row.writePast.french}</strong>
                        </td>
                        <td className="py-1 px-2 bg-sky-50/50">
                          <span dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950 mr-1.5">
                            {row.writePresent.arabic}
                          </span>
                          <span className="font-mono-tabular font-bold text-sky-900">
                            [{row.writePresent.phonetic}]
                          </span>{' '}
                          = <strong>{row.writePresent.french}</strong>
                        </td>
                        <td className="py-1 px-2">
                          <span dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-xl text-sky-950 mr-1.5">
                            {row.writeFuture.arabic}
                          </span>
                          <span className="font-mono-tabular font-bold text-sky-900">
                            [{row.writeFuture.phonetic}]
                          </span>{' '}
                          = <strong>{row.writeFuture.french}</strong>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                2. Les 8 Verbes Piliers du Niveau A2 (Passé · Présent · Impératif · Nom d’action Maṣdar)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {A2_ESSENTIAL_VERBS_8.map((v) => (
                  <div
                    key={v.infinitiveMeaning}
                    className="border border-sky-400 rounded-md overflow-hidden bg-white"
                  >
                    <div className="bg-sky-900 text-white px-3 py-1 flex items-center justify-between">
                      <span className="font-extrabold text-xs sm:text-sm">{v.infinitiveMeaning}</span>
                      <span dir="rtl" lang="ar" className="font-arabic font-bold text-sm sm:text-base text-sky-200">
                        Racine : {v.rootLetters}
                      </span>
                    </div>
                    <div className="p-2 grid grid-cols-2 gap-1.5 text-xs">
                      {[
                        { label: 'Passé (Huwa)', item: v.past3m },
                        { label: 'Présent (Huwa)', item: v.present3m },
                        { label: 'Impératif (Anta)', item: v.imperative2m },
                        { label: 'Maṣdar (Nom)', item: v.masdar }
                      ].map((cell) => (
                        <div
                          key={cell.label}
                          onClick={() => handleInspect(cell.item, `${v.infinitiveMeaning} — ${cell.label}`)}
                          className="bg-sky-50/50 border border-sky-200 rounded px-2 py-1 cursor-pointer hover:bg-sky-100/60"
                        >
                          <div className="text-[10px] font-mono-tabular font-extrabold text-sky-800 uppercase">
                            {cell.label}
                          </div>
                          <div className="flex items-baseline justify-between gap-1 mt-0.5">
                            <span className="font-mono-tabular font-bold text-sky-950">
                              [{cell.item.phonetic}]
                            </span>
                            <span dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950">
                              {cell.item.arabic}
                            </span>
                          </div>
                          <div className="font-semibold text-slate-900 text-xs mt-0.5">
                            = {cell.item.french}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </A4SheetFrame>

          {/* PAGE 2 / 2 : LES 5 NÉGATIONS + PHRASES CONJUGUÉES + QCM */}
          <A4SheetFrame
            code="PDF-07"
            docTitle="Les 5 Négations en Arabe selon le Temps, Phrases Modèles A2 & QCM Conjugaison"
            pageSub="Page 2/2 : Lā (Présent), Mā (Passé), Lam (Passé jussif), Lan (Futur), Laysa (Nominal) + QCM"
            pageNumber={2}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                3. Les 5 Particules de Négation selon le Temps en Arabe (Niveau A2)
              </h3>
              <div className="border border-slate-400 rounded overflow-hidden">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-sky-900 text-white text-xs uppercase font-extrabold">
                      <th className="py-1.5 px-2.5 w-[22%]">Particule</th>
                      <th className="py-1.5 px-2.5 w-[26%]">Temps & Effet</th>
                      <th className="py-1.5 px-2.5">Exemple Complet (Arabe · Phonétique · Sens)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 text-xs sm:text-[13px] print:text-sm">
                    {A2_NEGATION_RULES.map((neg, i) => (
                      <tr
                        key={i}
                        onClick={() => handleInspect(neg.example, neg.particle.french)}
                        className="bg-white hover:bg-sky-50 cursor-pointer"
                      >
                        <td className="py-1.5 px-2.5">
                          <span dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-xl text-sky-900 mr-1.5">
                            {neg.particle.arabic}
                          </span>
                          <span className="font-mono-tabular font-extrabold text-sky-950">
                            [{neg.particle.phonetic}]
                          </span>
                          <div className="font-semibold text-slate-800 text-xs">{neg.particle.french}</div>
                        </td>
                        <td className="py-1.5 px-2.5">
                          <div className="font-extrabold text-sky-950">{neg.tenseTarget}</div>
                          <div className="text-xs font-medium text-slate-700">{neg.grammarEffect}</div>
                        </td>
                        <td className="py-1.5 px-2.5">
                          <div dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950 text-right">
                            {neg.example.arabic}
                          </div>
                          <div className="mt-0.5">
                            <span className="font-mono-tabular font-bold text-sky-900">
                              [{neg.example.phonetic}]
                            </span>{' '}
                            <span className="font-semibold text-slate-950">= {neg.example.french}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                4. Phrases Modèles Conjuguées (Passé, Présent, Futur & Impératif)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {A2_CONJUGATION_SENTENCES.map((s, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleInspect(s, `Phrase conjuguée #${idx + 1}`)}
                    className="border border-sky-300 rounded px-3 py-1.5 bg-white hover:bg-sky-50 cursor-pointer"
                  >
                    <div
                      dir="rtl"
                      lang="ar"
                      className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950 text-right leading-relaxed"
                    >
                      {s.arabic}
                    </div>
                    <div className="font-mono-tabular font-bold text-xs print:text-sm text-sky-900 mt-0.5">
                      [{s.phonetic}]
                    </div>
                    <div className="font-semibold text-slate-950 text-xs print:text-sm">
                      = {s.french}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <EmbeddedPdfQcmBlock
              categoryTitle="PDF 7 — Conjugaison Complète Niveau A2 & Négations"
              questions={PDF7_CONJUGATION_QUIZ}
              onInspectTriad={handleInspect}
            />
          </A4SheetFrame>
        </>
      )}

      {/* =====================================================================
          PDF 8 : EXPRESSION, CONNECTEURS LOGIQUES, HEURE, NOMBRES & DIALOGUES A2
         ===================================================================== */}
      {docId === 'pdf-conversations-a2' && (
        <>
          {/* PAGE 1 / 2 : CONNECTEURS LOGIQUES + 2 DIALOGUES PRATIQUES A2 */}
          <A4SheetFrame
            code="PDF-08"
            docTitle="Expression & Connecteurs Logiques A2 : Mots de Liaison & Dialogues Réels (Médecin, Marché)"
            pageSub="Page 1/2 : Les 10 connecteurs logiques indispensables (Parce que, Mais, Avant de...) & 2 dialogues A2"
            pageNumber={1}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                1. Les 10 Connecteurs Logiques Indispensables pour Construire des Phrases Complexes (Niveau A2)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {A2_LOGICAL_CONNECTORS.map((c, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleInspect(c.example, `${c.category} — ${c.triad.french}`)}
                    className="border border-sky-300 rounded px-2.5 py-1.5 bg-white hover:bg-sky-50 cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-1">
                      <span className="text-xs font-mono-tabular font-extrabold uppercase bg-sky-100 text-sky-950 px-1.5 py-0.5 rounded">
                        {c.category} : {c.triad.french}
                      </span>
                      <span className="font-bold text-xs text-sky-900">
                        [{c.triad.phonetic}]{' '}
                        <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg print:text-xl text-slate-950 ml-1">
                          {c.triad.arabic}
                        </strong>
                      </span>
                    </div>
                    <div
                      dir="rtl"
                      lang="ar"
                      className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950 text-right mt-1"
                    >
                      {c.example.arabic}
                    </div>
                    <div className="text-xs print:text-sm mt-0.5">
                      <span className="font-mono-tabular font-bold text-sky-900">
                        [{c.example.phonetic}]
                      </span>{' '}
                      <span className="font-semibold text-slate-950">= {c.example.french}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                2. Dialogues Pratiques Niveau A2 (Chez le Médecin & Au Marché)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {A2_REAL_LIFE_DIALOGUES.map((dlg) => (
                  <div
                    key={dlg.title}
                    className="border border-sky-500 rounded-md overflow-hidden bg-white"
                  >
                    <div className="bg-sky-900 text-white px-3 py-1 flex items-center justify-between gap-2">
                      <span className="font-extrabold text-xs sm:text-sm">{dlg.title}</span>
                      <span className="text-xs text-sky-200">{dlg.context}</span>
                    </div>
                    <div className="divide-y divide-slate-300">
                      {dlg.lines.map((line, lIdx) => (
                        <div
                          key={lIdx}
                          onClick={() => handleInspect(line.triad, `${dlg.title} (${line.speaker})`)}
                          className="p-2 hover:bg-sky-50 cursor-pointer"
                        >
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="font-mono-tabular font-extrabold text-xs bg-sky-100 text-sky-950 px-1.5 py-0.5 rounded">
                              {line.speaker}
                            </span>
                            <span
                              dir="rtl"
                              lang="ar"
                              className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950 text-right"
                            >
                              {line.triad.arabic}
                            </span>
                          </div>
                          <div className="font-mono-tabular font-bold text-xs print:text-sm text-sky-900 mt-0.5">
                            [{line.triad.phonetic}]
                          </div>
                          <div className="font-semibold text-xs print:text-sm text-slate-950">
                            = {line.triad.french}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </A4SheetFrame>

          {/* PAGE 2 / 2 : HEURE, NOMBRES, OPINION & QCM */}
          <A4SheetFrame
            code="PDF-08"
            docTitle="Lire l’Heure Exacte, les Nombres (11 à 1000), Exprimer son Avis & QCM Conversations A2"
            pageSub="Page 2/2 : Dire l’heure (et quart, et demie, moins dix), les dizaines/centaines & QCM d’évaluation"
            pageNumber={2}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                3. Lire l’Heure Exacte, les Nombres (11 à 1000) & Exprimer son Avis en Arabe
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {A2_TIME_AND_NUMBERS.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleInspect(item, `Expression Heure/Nombres #${idx + 1}`)}
                    className="border border-sky-400 rounded px-2.5 py-2 bg-white hover:bg-sky-50 cursor-pointer"
                  >
                    <div
                      dir="rtl"
                      lang="ar"
                      className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950 text-right leading-relaxed"
                    >
                      {item.arabic}
                    </div>
                    <div className="font-mono-tabular font-bold text-xs print:text-sm text-sky-900 mt-0.5">
                      [{item.phonetic}]
                    </div>
                    <div className="font-semibold text-xs print:text-sm text-slate-950">
                      = {item.french}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <EmbeddedPdfQcmBlock
              categoryTitle="PDF 8 — Connecteurs Logiques, Heure, Nombres & Dialogues A2"
              questions={PDF8_CONVERSATIONS_QUIZ}
              onInspectTriad={handleInspect}
            />
          </A4SheetFrame>
        </>
      )}

      {/* =====================================================================
          PDF 9 : LECTURE DE TEXTES SUIVIS A2, SYSTÈME DES RACINES & PROVERBES
         ===================================================================== */}
      {docId === 'pdf-textes-lecture-a2' && (
        <>
          {/* PAGE 1 / 2 : 3 TEXTES SUIVIS VOCALISÉS */}
          <A4SheetFrame
            code="PDF-09"
            docTitle="Lecture de Textes Suivis Niveau A2 (Arabe Vocalisé · Phonétique · Traduction)"
            pageSub="Page 1/2 : 3 récits éducatifs complets vocalisés ligne par ligne avec vocabulaire clé"
            pageNumber={1}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div className="space-y-2.5">
              {A2_READING_TEXTS.map((txt) => (
                <div
                  key={txt.id}
                  className="border border-sky-400 rounded-md overflow-hidden bg-white"
                >
                  <div className="bg-sky-900 text-white px-3 py-1.5 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-extrabold text-xs sm:text-sm">{txt.titleFrench}</span>
                    <span dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-sky-200">
                      {txt.titleArabic}
                    </span>
                  </div>

                  <div className="divide-y divide-slate-300">
                    {txt.sentences.map((s, sIdx) => (
                      <div
                        key={sIdx}
                        onClick={() => handleInspect(s, `${txt.titleFrench} — Phrase ${sIdx + 1}`)}
                        className="p-2 hover:bg-sky-50 cursor-pointer"
                      >
                        <div
                          dir="rtl"
                          lang="ar"
                          className="font-arabic font-bold text-lg sm:text-xl print:text-3xl text-slate-950 text-right leading-relaxed"
                        >
                          {s.arabic}
                        </div>
                        <div className="font-mono-tabular font-bold text-xs print:text-base text-sky-900 mt-0.5">
                          [{s.phonetic}]
                        </div>
                        <div className="font-semibold text-xs print:text-base text-slate-950">
                          = {s.french}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-sky-50 px-3 py-1.5 border-t border-sky-200 flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="font-extrabold text-sky-950">Vocabulaire clé :</span>
                    {txt.keyVocab.map((kw, kIdx) => (
                      <span key={kIdx} className="bg-white border border-sky-300 rounded px-1.5 py-0.5">
                        <strong dir="rtl" lang="ar" className="font-arabic text-base sm:text-lg text-slate-950">
                          {kw.arabic}
                        </strong>{' '}
                        <span className="font-mono-tabular font-bold text-sky-900">[{kw.phonetic}]</span> ={' '}
                        <span className="font-semibold">{kw.french}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </A4SheetFrame>

          {/* PAGE 2 / 2 : SYSTÈME DES RACINES DE 3 LETTRES + PROVERBES + QCM */}
          <A4SheetFrame
            code="PDF-09"
            docTitle="Le Système des Racines de 3 Lettres (Al-Juthūr), Proverbes Arabes & QCM Lecture A2"
            pageSub="Page 2/2 : Comprendre les familles de mots (K-T-B, ‘-L-M, S-L-M...), 6 proverbes célèbres + QCM"
            pageNumber={2}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                1. Le Secret des Racines Arabes de 3 Lettres : Deviner le Sens des Mots d’une Même Famille
              </h3>
              <div className="border border-slate-400 rounded overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-sky-900 text-white text-xs uppercase font-extrabold">
                      <th className="py-1.5 px-2">Racine (3 lettres)</th>
                      <th className="py-1.5 px-2">Verbe (Il a...)</th>
                      <th className="py-1.5 px-2">Celui qui fait (Fā‘il)</th>
                      <th className="py-1.5 px-2">Objet / Passif (Maf‘ūl)</th>
                      <th className="py-1.5 px-2">Lieu ou Nom (Maf‘al)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 text-xs sm:text-[13px] print:text-sm">
                    {A2_ROOT_SYSTEM_TABLE.map((r, idx) => (
                      <tr
                        key={r.rootArabic}
                        onClick={() => handleInspect(r.placeOrNoun, `Racine ${r.rootArabic}`)}
                        className={`cursor-pointer hover:bg-sky-50 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'
                        }`}
                      >
                        <td className="py-1.5 px-2">
                          <div dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-xl text-sky-900">
                            {r.rootArabic}
                          </div>
                          <div className="text-xs font-semibold text-slate-700">{r.rootMeaning}</div>
                        </td>
                        <td className="py-1.5 px-2">
                          <span dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950 mr-1">
                            {r.verb3m.arabic}
                          </span>
                          <span className="font-mono-tabular font-bold text-sky-900">[{r.verb3m.phonetic}]</span>
                          <div className="text-xs font-semibold">{r.verb3m.french}</div>
                        </td>
                        <td className="py-1.5 px-2">
                          <span dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950 mr-1">
                            {r.activeParticiple.arabic}
                          </span>
                          <span className="font-mono-tabular font-bold text-sky-900">[{r.activeParticiple.phonetic}]</span>
                          <div className="text-xs font-semibold">{r.activeParticiple.french}</div>
                        </td>
                        <td className="py-1.5 px-2">
                          <span dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950 mr-1">
                            {r.passiveOrObject.arabic}
                          </span>
                          <span className="font-mono-tabular font-bold text-sky-900">[{r.passiveOrObject.phonetic}]</span>
                          <div className="text-xs font-semibold">{r.passiveOrObject.french}</div>
                        </td>
                        <td className="py-1.5 px-2">
                          <span dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950 mr-1">
                            {r.placeOrNoun.arabic}
                          </span>
                          <span className="font-mono-tabular font-bold text-sky-900">[{r.placeOrNoun.phonetic}]</span>
                          <div className="text-xs font-semibold">{r.placeOrNoun.french}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                2. Les 6 Proverbes et Sagesses Arabes Célèbres à Connaître
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {A2_ARABIC_PROVERBS.map((p, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleInspect(p, `Proverbe arabe #${idx + 1}`)}
                    className="border border-sky-300 rounded px-2.5 py-1.5 bg-white hover:bg-sky-50 cursor-pointer"
                  >
                    <div
                      dir="rtl"
                      lang="ar"
                      className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950 text-right"
                    >
                      {p.arabic}
                    </div>
                    <div className="font-mono-tabular font-bold text-xs print:text-sm text-sky-900 mt-0.5">
                      [{p.phonetic}]
                    </div>
                    <div className="font-semibold text-xs print:text-sm text-slate-950">
                      = « {p.french} »
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <EmbeddedPdfQcmBlock
              categoryTitle="PDF 9 — Lecture de Textes A2, Système des Racines & Proverbes"
              questions={PDF9_READING_QUIZ}
              onInspectTriad={handleInspect}
            />
          </A4SheetFrame>
        </>
      )}

      {/* =====================================================================
          PDF 10 : FICHIER PDF PRIÈRE & ABLUTIONS (AL-WUḌŪ’ & AṢ-ṢALĀT)
         ===================================================================== */}
      {docId === 'pdf-priere-salat' && (
        <>
          {/* PAGE 1 / 2 : LES 8 ÉTAPES DES ABLUTIONS, ANNULATIFS, 5 PRIÈRES & ÉTAPES 1 À 5 DE LA SALÂT */}
          <A4SheetFrame
            code="PDF-10"
            docTitle="Guide Complet : Les Ablutions (Al-Wuḍū’), les 5 Prières & la Ṣalāt Pas à Pas"
            pageSub="Page 1/2 : Les 8 étapes du Wuḍū’, annulatifs, tableau des 5 prières et étapes 1 à 5 de la Ṣalāt"
            pageNumber={1}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                1. Les 8 Étapes des Ablutions (الْوُضُوءُ — Al-Wuḍū’) dans l’Ordre
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                {WUDU_STEPS.map((step) => (
                  <div
                    key={step.stepNumber}
                    onClick={() =>
                      handleInspect(
                        { arabic: step.arabic, phonetic: step.phonetic, french: step.french },
                        `Ablutions — Étape ${step.stepNumber} : ${step.titleFr}`
                      )
                    }
                    className="border border-sky-300 rounded px-2.5 py-1.5 bg-white hover:bg-sky-50 cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-extrabold text-xs text-sky-950">
                        {step.stepNumber}. {step.titleFr}
                      </span>
                      <span className="text-[11px] font-mono-tabular font-bold text-sky-800 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded">
                        {step.repetition}
                      </span>
                    </div>
                    <div
                      dir="rtl"
                      lang="ar"
                      className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950 text-right mt-0.5"
                    >
                      {step.arabic}
                    </div>
                    <div className="text-xs print:text-sm font-mono-tabular font-bold text-sky-900">
                      [{step.phonetic}]
                    </div>
                    <div className="text-xs print:text-sm font-semibold text-slate-900">
                      = {step.french}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                2. Ce qui Annule les Ablutions & le Tayammum (Ablutions Sèches)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5">
                {WUDU_NULLIFIERS.map((n, idx) => (
                  <div key={idx} className="border border-amber-300 bg-amber-50/40 rounded px-2.5 py-1.5 text-xs">
                    <div className="font-extrabold text-amber-950">{n.titleFr}</div>
                    <div dir="rtl" lang="ar" className="font-arabic font-bold text-base print:text-xl text-slate-950 text-right">
                      {n.arabic}
                    </div>
                    <div className="font-mono-tabular font-bold text-sky-900">[{n.phonetic}]</div>
                    <div className="text-slate-700 mt-0.5">{n.detailFr}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                3. Tableau des 5 Prières Obligatoires Quotidiennes (الصَّلَوَاتُ الْخَمْسُ)
              </h3>
              <div className="border border-slate-400 rounded overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs print:text-sm">
                  <thead>
                    <tr className="bg-sky-900 text-white uppercase font-extrabold">
                      <th className="py-1 px-2">Prière</th>
                      <th className="py-1 px-2 text-right">Arabe</th>
                      <th className="py-1 px-2">Phonétique</th>
                      <th className="py-1 px-2">Rak‘āt Farḍ</th>
                      <th className="py-1 px-2">Récitation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300">
                    {FIVE_DAILY_PRAYERS.map((pr, idx) => (
                      <tr key={pr.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-sky-50/40'}>
                        <td className="py-1 px-2 font-extrabold text-sky-950">
                          {pr.nameFr} ({pr.meaningFr})
                        </td>
                        <td dir="rtl" lang="ar" className="py-1 px-2 font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950 text-right">
                          {pr.nameArabic}
                        </td>
                        <td className="py-1 px-2 font-mono-tabular font-bold text-sky-900">
                          [{pr.namePhonetic}]
                        </td>
                        <td className="py-1 px-2 font-extrabold text-slate-950">
                          {pr.fardRakats} Rak‘āt obligatoires
                        </td>
                        <td className="py-1 px-2 font-semibold text-slate-800">
                          {pr.recitationVoice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                4. La Prière Pas à Pas (Aṣ-Ṣalāt) — Étapes 1 à 5 (Debout, Fātiḥa, Rukū‘ & Redressement)
              </h3>
              <div className="space-y-1.5">
                {SALAT_STEP_BY_STEP.slice(0, 5).map((st) => (
                  <div
                    key={st.stepNumber}
                    onClick={() =>
                      handleInspect(
                        { arabic: st.arabic, phonetic: st.phonetic, french: st.french },
                        `Ṣalāt — Étape ${st.stepNumber} : ${st.postureFr}`
                      )
                    }
                    className="border border-sky-300 rounded px-3 py-1.5 bg-white hover:bg-sky-50 cursor-pointer"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-extrabold text-xs sm:text-sm text-sky-950">
                        Étape {st.stepNumber} · {st.postureFr} ({st.statusFr})
                      </span>
                      <span
                        dir="rtl"
                        lang="ar"
                        className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950 text-right"
                      >
                        {st.arabic}
                      </span>
                    </div>
                    <div className="text-xs print:text-sm font-mono-tabular font-bold text-sky-900">
                      [{st.phonetic}]
                    </div>
                    <div className="text-xs print:text-sm font-semibold text-slate-950">
                      = « {st.french} »
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </A4SheetFrame>

          {/* PAGE 2 / 2 : ÉTAPES 6 À 11 DE LA SALÂT (SUJŪD, TACHAHHUD COMPLET, IBRĀHĪMIYYAH, TASLĪM) + QCM */}
          <A4SheetFrame
            code="PDF-10"
            docTitle="Guide de la Prière : Prosternation, Tachahhud Complet, Prière Ibrāhīmique & QCM"
            pageSub="Page 2/2 : Étapes 6 à 11 de la Ṣalāt (Sujūd, Jalsah, At-Taḥiyyāt, Ṣalāt Ibrāhīmiyyah, Taslīm) + QCM"
            pageNumber={2}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                5. La Prière Pas à Pas (Aṣ-Ṣalāt) — Étapes 6 à 11 (Prosternation, Tachahhud & Salut Final)
              </h3>
              <div className="space-y-2">
                {SALAT_STEP_BY_STEP.slice(5, 11).map((st) => (
                  <div
                    key={st.stepNumber}
                    onClick={() =>
                      handleInspect(
                        { arabic: st.arabic, phonetic: st.phonetic, french: st.french },
                        `Ṣalāt — Étape ${st.stepNumber} : ${st.postureFr}`
                      )
                    }
                    className={`border rounded px-3 py-2 cursor-pointer ${
                      st.stepNumber === 9 || st.stepNumber === 10
                        ? 'border-sky-500 bg-sky-50/40'
                        : 'border-slate-300 bg-white hover:bg-sky-50'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-extrabold text-xs sm:text-sm text-sky-950">
                        Étape {st.stepNumber} · {st.postureFr} ({st.statusFr})
                      </span>
                      <span className="text-xs text-slate-600">{st.actionFr}</span>
                    </div>
                    <div
                      dir="rtl"
                      lang="ar"
                      className="font-arabic font-bold text-lg sm:text-xl print:text-2xl text-slate-950 text-right leading-relaxed mt-1"
                    >
                      {st.arabic}
                    </div>
                    <div className="text-xs print:text-sm font-mono-tabular font-bold text-sky-900 mt-0.5">
                      [{st.phonetic}]
                    </div>
                    <div className="text-xs print:text-sm font-semibold text-slate-950">
                      = « {st.french} »
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <EmbeddedPdfQcmBlock
              categoryTitle="PDF 10 — Guide de la Prière (Ṣalāt) & des Ablutions (Wuḍū’)"
              questions={PDF10_PRIERE_QUIZ}
              onInspectTriad={handleInspect}
            />
          </A4SheetFrame>
        </>
      )}

      {/* =====================================================================
          PDF 11 : FICHIER PDF RÉSUMÉ DE L’ISLAM (PILIERS, FOI, FIQH, MAXIMES & INVOCATIONS)
         ===================================================================== */}
      {docId === 'pdf-resume-islam' && (
        <>
          {/* PAGE 1 / 2 : LES 5 PILIERS DE L’ISLAM & LES 6 PILIERS DE LA FOI (ĪMĀN) */}
          <A4SheetFrame
            code="PDF-11"
            docTitle="Résumé Complet de l’Islam : Les 5 Piliers de l’Islam, les 6 Piliers de la Foi & le Tawḥīd"
            pageSub="Page 1/2 : Arkānu l-Islām (5 Piliers), Arkānu l-Īmān (6 Piliers) & les 3 dimensions de l’Unicité (Tawḥīd)"
            pageNumber={1}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                1. Les 5 Piliers de l’Islam (أَرْكَانُ الْإِسْلَامِ الْخَمْسَةُ — Arkānu l-Islām)
              </h3>
              <div className="space-y-1.5">
                {FIVE_PILLARS_ISLAM.map((pil) => (
                  <div
                    key={pil.number}
                    onClick={() =>
                      handleInspect(
                        { arabic: pil.arabic, phonetic: pil.phonetic, french: pil.french },
                        `Pilier de l’Islam n°${pil.number} : ${pil.titleFr}`
                      )
                    }
                    className="border border-sky-300 rounded px-3 py-1.5 bg-white hover:bg-sky-50 cursor-pointer"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-extrabold text-xs sm:text-sm text-sky-950">
                        Pilier {pil.number} · {pil.titleFr}
                      </span>
                      <span
                        dir="rtl"
                        lang="ar"
                        className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950 text-right"
                      >
                        {pil.arabic}
                      </span>
                    </div>
                    <div className="text-xs print:text-sm font-mono-tabular font-bold text-sky-900">
                      [{pil.phonetic}] — <span className="text-slate-950">{pil.french}</span>
                    </div>
                    <div className="text-xs text-slate-700 mt-0.5">{pil.summaryFr}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                2. Les 6 Piliers de la Foi (أَرْكَانُ الْإِيمَانِ السِّتَّةُ — Arkānu l-Īmān) & le Tawḥīd
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {SIX_PILLARS_IMAN.map((im) => (
                  <div
                    key={im.number}
                    onClick={() =>
                      handleInspect(
                        { arabic: im.arabic, phonetic: im.phonetic, french: im.french },
                        `Pilier de la Foi n°${im.number} : ${im.titleFr}`
                      )
                    }
                    className="border border-slate-300 rounded px-2.5 py-2 bg-white hover:bg-sky-50 cursor-pointer"
                  >
                    <div className="font-extrabold text-xs text-sky-950">
                      {im.number}. {im.titleFr}
                    </div>
                    <div
                      dir="rtl"
                      lang="ar"
                      className="font-arabic font-bold text-base sm:text-lg print:text-2xl text-slate-950 text-right mt-0.5"
                    >
                      {im.arabic}
                    </div>
                    <div className="text-xs print:text-sm font-mono-tabular font-bold text-sky-900">
                      [{im.phonetic}]
                    </div>
                    <div className="text-xs print:text-sm font-semibold text-slate-950">
                      = {im.french}
                    </div>
                    <div className="text-xs text-slate-700 mt-0.5">{im.summaryFr}</div>
                  </div>
                ))}
              </div>
            </div>
          </A4SheetFrame>

          {/* PAGE 2 / 2 : LES 5 STATUTS DU FIQH, 5 MAXIMES, 5 MAQĀṢID, INVOCATIONS & QCM */}
          <A4SheetFrame
            code="PDF-11"
            docTitle="Résumé de l’Islam : Les 5 Statuts du Fiqh, Maximes Juridiques, Maqāṣid, Invocations & QCM"
            pageSub="Page 2/2 : Farḍ / Mustaḥabb / Mubāḥ / Makrūh / Ḥarām, 5 Maximes, 5 Maqāṣid, Adhkār + QCM"
            pageNumber={2}
            totalPages={2}
            density={density}
            zoomPercent={zoomPercent}
            onDownload={handleDownload}
          >
            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                3. Les 5 Statuts des Actes en Jurisprudence (الْأَحْكَامُ التَّكْلِيفِيَّةُ الْخَمْسَةُ)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1.5">
                {FIQH_FIVE_RULINGS.map((fq) => (
                  <div key={fq.code} className="border border-sky-300 bg-sky-50/30 rounded p-2 text-xs">
                    <div className="font-extrabold text-sky-950">{fq.nameFr}</div>
                    <div dir="rtl" lang="ar" className="font-arabic font-bold text-base print:text-xl text-slate-950 text-right">
                      {fq.arabic}
                    </div>
                    <div className="font-mono-tabular font-bold text-sky-900">[{fq.phonetic}]</div>
                    <div className="text-slate-800 mt-0.5">{fq.definitionFr}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div>
                <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                  4A. Les 5 Grandes Maximes Juridiques (Al-Qawā‘id al-Fiqhiyyah)
                </h3>
                <div className="space-y-1.5">
                  {FIVE_LEGAL_MAXIMS.map((mx) => (
                    <div key={mx.number} className="border border-slate-300 rounded px-2.5 py-1.5 bg-white text-xs">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-extrabold text-sky-950">
                          {mx.number}. {mx.titleFr}
                        </span>
                        <span dir="rtl" lang="ar" className="font-arabic font-bold text-base print:text-xl text-slate-950">
                          {mx.arabic.split('(')[0].trim()}
                        </span>
                      </div>
                      <div className="font-mono-tabular font-bold text-sky-900">
                        [{mx.phonetic.split('(')[0].trim()}]
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                  4B. Les 5 Grandes Finalités de l’Islam (Maqāṣid ach-Charī‘ah)
                </h3>
                <div className="space-y-1.5">
                  {FIVE_MAQASID_SHARIA.map((mq) => (
                    <div key={mq.number} className="border border-sky-300 rounded px-2.5 py-1.5 bg-sky-50/30 text-xs">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-extrabold text-sky-950">{mq.titleFr}</span>
                        <span dir="rtl" lang="ar" className="font-arabic font-bold text-base print:text-xl text-slate-950">
                          {mq.arabic}
                        </span>
                      </div>
                      <div className="font-mono-tabular font-bold text-sky-900">
                        [{mq.phonetic}] — <span className="text-slate-900 font-semibold">{mq.french}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-xs text-sky-950 uppercase tracking-wider mb-1">
                5. Invocations Quotidiennes Essentielles (La Citadelle du Croyant — Adhkār)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                {DAILY_DUAS.slice(0, 4).map((dua) => (
                  <div
                    key={dua.id}
                    onClick={() =>
                      handleInspect(
                        { arabic: dua.arabic, phonetic: dua.phonetic, french: dua.french },
                        `Invocation — ${dua.momentFr}`
                      )
                    }
                    className="border border-slate-300 rounded px-2.5 py-1.5 bg-white hover:bg-sky-50 cursor-pointer text-xs"
                  >
                    <div className="font-extrabold text-sky-950">{dua.momentFr}</div>
                    <div dir="rtl" lang="ar" className="font-arabic font-bold text-base sm:text-lg print:text-xl text-slate-950 text-right">
                      {dua.arabic}
                    </div>
                    <div className="font-mono-tabular font-bold text-sky-900">[{dua.phonetic}]</div>
                    <div className="font-semibold text-slate-900">= « {dua.french} »</div>
                  </div>
                ))}
              </div>
            </div>

            <EmbeddedPdfQcmBlock
              categoryTitle="PDF 11 — Résumé de l’Islam, Piliers, Foi & Principes du Fiqh"
              questions={PDF11_RESUME_ISLAM_QUIZ}
              onInspectTriad={handleInspect}
            />
          </A4SheetFrame>
        </>
      )}
    </div>
  );
};

