import React, { useState } from 'react';
import {
  Volume2,
  Download,
  Eye,
  EyeOff,
  Search,
  RotateCcw,
  FileText
} from 'lucide-react';
import {
  ARABIC_ALPHABET,
  NON_CONNECTING_LETTERS,
  ALPHABET_QUIZ,
  QuizQuestion
} from '../data/alphabetData';
import {
  SKELETON_FAMILIES,
  WORD_DECOMPOSITIONS,
  READING_MECHANICS_GUIDES,
  EXTENDED_MINIMAL_PAIRS,
  SENTENCE_BUILDING_FORMULAS,
  LUNAR_LETTERS_TABLE,
  SOLAR_LETTERS_TABLE,
  PRONOUNS_AND_POSSESSIVES_TABLE,
  GRAMMAR_TOOLKIT_TABLE,
  ESSENTIAL_SENTENCES_A1,
  REAL_LIFE_DIALOGUES_A1
} from '../data/completeCourseData';
import {
  VOWELS_DATA,
  VOWELS_QUIZ,
  GRAMMAR_A1_QUIZ
} from '../data/vowelsAndGrammarData';
import {
  VOCAB_200_SUBCATEGORIES,
  VOCAB_200_QUIZ
} from '../data/vocab200Categorized';
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
  SHARED_ORIGINAL_PDF_DOCUMENTS,
  ORIGINAL_A1_PRONOUNS_PERSONAL,
  ORIGINAL_A1_PRONOUNS_POSSESSIVE,
  ORIGINAL_A1_SENTENCES,
  ORIGINAL_A1_OBJECTS_AND_ANIMALS,
  ORIGINAL_A1_THREE_DIALOGUES,
  downloadOriginalUntouchedPdf
} from '../data/sharedOriginalPdfsData';
import {
  COMPLETE_PDF_DOCUMENTS,
  CompletePdfDocId,
  downloadCompleteMultiPagePdf,
  speakArabicText
} from '../utils/pdfGenerator';

export type ArabicChapterId =
  | 'alphabet-voyelles'
  | 'grammaire-pronoms'
  | 'conjugaison-racines'
  | 'vocabulaire-themes'
  | 'dialogues-lecture'
  | 'exercices-supports';

interface UnifiedArabicPortalViewProps {
  activeChapter: ArabicChapterId;
}

interface InteractiveWebQcmProps {
  title: string;
  subtitle: string;
  questions: QuizQuestion[];
}

const InteractiveWebQcm: React.FC<InteractiveWebQcmProps> = ({
  title,
  subtitle,
  questions
}) => {
  const [selected, setSelected] = useState<Record<string, number>>({});

  const answeredCount = Object.keys(selected).length;

  return (
    <section className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
      <div className="bg-sky-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="text-[11px] font-mono-tabular uppercase tracking-wider text-sky-200 font-bold">
            AUTO-ÉVALUATION INTERACTIVE
          </span>
          <h3 className="text-base font-display font-extrabold text-white">
            {title}
          </h3>
          <p className="text-xs text-sky-100">{subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono-tabular font-bold bg-sky-800 border border-sky-700 px-3 py-1 rounded-lg">
            {answeredCount} / {questions.length} réponses sélectionnées
          </span>
          {answeredCount > 0 && (
            <button
              type="button"
              onClick={() => setSelected({})}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-white text-sky-950 hover:bg-sky-50 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Réinitialiser
            </button>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {questions.map((q, idx) => {
          const chosen = selected[q.id];
          return (
            <div
              key={q.id}
              className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 flex flex-col justify-between gap-3"
            >
              <div className="space-y-2">
                <div className="text-xs sm:text-sm font-bold text-slate-950 leading-snug">
                  <span className="font-mono-tabular text-sky-800 font-extrabold mr-1.5">
                    Question {idx + 1}.
                  </span>
                  {q.question}
                </div>

                {q.arabicPrompt && (
                  <div
                    onClick={() => speakArabicText(q.arabicPrompt!.arabic)}
                    className="bg-white border border-sky-200/80 rounded-lg px-3 py-2 flex flex-wrap items-center justify-between gap-2 cursor-pointer hover:border-sky-400 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-sky-700 shrink-0" />
                      <span className="font-mono-tabular text-xs font-bold text-sky-900">
                        [{q.arabicPrompt.phonetic}]
                      </span>
                      <span className="text-xs font-semibold text-slate-700">
                        — {q.arabicPrompt.french}
                      </span>
                    </div>
                    <span
                      dir="rtl"
                      lang="ar"
                      className="font-arabic font-bold text-xl text-slate-950"
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
                        setSelected((prev) => ({ ...prev, [q.id]: oIdx }))
                      }
                      className={`text-left px-3 py-2 rounded-lg border text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
                        isChosen
                          ? 'bg-sky-800 border-sky-800 text-white shadow-2xs'
                          : 'bg-white border-slate-200 text-slate-800 hover:border-sky-400 hover:bg-sky-50/40'
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
  );
};

export const UnifiedArabicPortalView: React.FC<UnifiedArabicPortalViewProps> = ({
  activeChapter
}) => {
  const [hidePhonetic, setHidePhonetic] = useState(false);
  const [hideFrench, setHideFrench] = useState(false);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [vocabSearch, setVocabSearch] = useState('');
  const [selectedVocabCatId, setSelectedVocabCatId] = useState<string>(
    VOCAB_200_SUBCATEGORIES[0]?.id || 'cat-1'
  );

  const originalA1Doc = SHARED_ORIGINAL_PDF_DOCUMENTS.find(
    (d) => d.id === 'original-arabe-a1-12p'
  )!;

  const arabePrintableBooklets = COMPLETE_PDF_DOCUMENTS.filter(
    (d) => d.id !== 'pdf-priere-salat' && d.id !== 'pdf-resume-islam'
  );

  const toggleRevealCard = (id: string) => {
    setRevealedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderMemoryControls = () => (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => {
          setHidePhonetic((v) => !v);
          setRevealedIds({});
        }}
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
        onClick={() => {
          setHideFrench((v) => !v);
          setRevealedIds({});
        }}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
          hideFrench
            ? 'bg-white text-sky-950 border-white'
            : 'bg-sky-800/80 text-sky-100 border-sky-700 hover:bg-sky-800'
        }`}
      >
        {hideFrench ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
        <span>{hideFrench ? 'Traduction masquée' : 'Masquer traduction'}</span>
      </button>
    </div>
  );

  const renderPdfDownloadButton = (
    label: string,
    onClick: () => void
  ) => (
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
  // CHAPITRE 1 : ALPHABET, ÉCRITURE ATTACHÉE & VOYELLES
  // ===========================================================================
  if (activeChapter === 'alphabet-voyelles') {
    return (
      <div className="space-y-6">
        {/* Homogeneous Header Banner with Direct PDF Downloads */}
        <div className="bg-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-800 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-sky-200">
                LANGUE ARABE · LECTURE, ÉCRITURE & VOCALISATION
              </div>
              <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Alphabet Arabe (28 Lettres), Formes Attachées & Voyelles
              </h1>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                Cliquez sur n’importe quelle lettre ou mot arabe pour écouter sa prononciation lente. Retrouvez ci-dessous les 28 lettres dans leurs 4 positions, les règles de liaison et l’ensemble des voyelles courtes, longues et signes de lecture.
              </p>
            </div>

            {renderMemoryControls()}
          </div>

          <div className="pt-3.5 border-t border-sky-800/80 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-sky-200">
              Supports PDF imprimables de ce chapitre :
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {renderPdfDownloadButton('PDF : Alphabet & Écriture', () =>
                downloadCompleteMultiPagePdf('pdf-alphabet')
              )}
              {renderPdfDownloadButton('PDF : Voyelles & Syllabes', () =>
                downloadCompleteMultiPagePdf('pdf-voyelles')
              )}
              {renderPdfDownloadButton('PDF : Cours Complet Arabe A1 (12 pages)', () =>
                downloadOriginalUntouchedPdf(originalA1Doc)
              )}
            </div>
          </div>
        </div>

        {/* Section A : Les 28 Lettres de l'Alphabet + 4 Positions + Audio */}
        <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-lg font-display font-extrabold text-slate-950">
                Les 28 Lettres de l’Alphabet & leurs 4 Positions d’Écriture
              </h2>
              <p className="text-xs text-slate-600">
                L’arabe se lit de droite à gauche. Chaque carte présente la lettre isolée, au début, au milieu et à la fin d’un mot.
              </p>
            </div>
            <span className="text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1 rounded-lg">
              Cliquez sur une carte pour écouter
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ARABIC_ALPHABET.map((letter) => {
              const cardKey = `alpha-${letter.order}`;
              const isRevealed = revealedIds[cardKey];
              const showPh = !hidePhonetic || isRevealed;
              const showFr = !hideFrench || isRevealed;

              return (
                <div
                  key={letter.order}
                  onClick={() => {
                    if (hidePhonetic || hideFrench) toggleRevealCard(cardKey);
                    speakArabicText(letter.exampleWord.arabic);
                  }}
                  className="bg-white border border-slate-200 hover:border-sky-400 rounded-xl p-4 flex flex-col justify-between gap-3 transition-all cursor-pointer shadow-2xs"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-extrabold text-slate-950">
                            {showPh ? letter.namePhonetic : '••••'}
                          </span>
                          {!letter.connectsAfter && (
                            <span className="text-[10px] font-mono-tabular font-bold bg-sky-100 text-sky-900 px-1.5 py-0.5 rounded">
                              Non-liante
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-sky-800 font-medium mt-0.5">
                          Son : {showFr ? letter.frenchEquivalent : '••••'}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-sky-50 text-sky-700">
                          <Volume2 className="w-4 h-4" />
                        </span>
                        <span
                          dir="rtl"
                          lang="ar"
                          className="font-arabic font-bold text-3xl text-slate-950 leading-none"
                        >
                          {letter.arabic}
                        </span>
                      </div>
                    </div>

                    <div
                      dir="rtl"
                      lang="ar"
                      className="mt-3 grid grid-cols-4 gap-1 bg-slate-50 border border-slate-200/80 rounded-lg p-1.5 text-center"
                    >
                      <div>
                        <div className="text-[10px] font-sans text-slate-500">Isolée</div>
                        <div className="font-arabic font-bold text-lg text-slate-900">
                          {letter.forms.isolated}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-sans text-slate-500">Début</div>
                        <div className="font-arabic font-bold text-lg text-sky-900">
                          {letter.forms.initial}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-sans text-slate-500">Milieu</div>
                        <div className="font-arabic font-bold text-lg text-sky-900">
                          {letter.forms.medial}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-sans text-slate-500">Fin</div>
                        <div className="font-arabic font-bold text-lg text-slate-900">
                          {letter.forms.final}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-xs font-mono-tabular font-bold text-sky-800 truncate">
                        {showPh ? `[${letter.exampleWord.phonetic}]` : '[Cliquer]'}
                      </div>
                      <div className="text-xs text-slate-700 font-medium truncate">
                        {showFr ? letter.exampleWord.french : '••••••'}
                      </div>
                    </div>
                    <span
                      dir="rtl"
                      lang="ar"
                      className="font-arabic font-bold text-xl text-slate-950 shrink-0"
                    >
                      {letter.exampleWord.arabic}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section B : Familles de Squelettes, 6 Lettres Non-Liantes & Mots Soudés */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-base sm:text-lg font-display font-extrabold text-slate-950">
                Familles Visuelles de Lettres & Lettres Non-Liantes
              </h2>
              <p className="text-xs text-slate-600">
                Regroupez les lettres qui partagent le même squelette pour les mémoriser rapidement.
              </p>
            </div>

            <div className="space-y-3">
              {SKELETON_FAMILIES.map((fam) => (
                <div
                  key={fam.familyName}
                  className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/50 space-y-2"
                >
                  <div className="font-bold text-xs sm:text-sm text-sky-950">
                    {fam.familyName}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{fam.rule}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                    {fam.members.map((m, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => speakArabicText(m.arabic)}
                        className="bg-white border border-slate-200 hover:border-sky-400 rounded-lg px-2.5 py-1.5 text-left flex items-center justify-between gap-2 cursor-pointer"
                      >
                        <div className="text-xs">
                          <div className="font-mono-tabular font-bold text-sky-900">
                            {m.phonetic}
                          </div>
                          <div className="text-slate-700 font-medium">{m.french}</div>
                        </div>
                        <span
                          dir="rtl"
                          lang="ar"
                          className="font-arabic font-bold text-lg text-slate-950 shrink-0"
                        >
                          {m.arabic}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border border-sky-200 rounded-xl p-3.5 bg-sky-50/60 space-y-2">
                <div className="font-bold text-xs sm:text-sm text-sky-950">
                  Les 6 Lettres Non-Liantes à Gauche (ا · د · ذ · ر · ز · و)
                </div>
                <p className="text-xs text-slate-700">
                  Ces 6 lettres s’attachent à la lettre qui précède (à droite), mais ne s’attachent jamais à la lettre qui suit (à gauche).
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                  {NON_CONNECTING_LETTERS.map((item) => (
                    <button
                      key={item.phonetic}
                      type="button"
                      onClick={() => speakArabicText(item.arabic)}
                      className="bg-white border border-sky-200 hover:border-sky-400 rounded-lg px-2.5 py-1.5 text-left cursor-pointer"
                    >
                      <div dir="rtl" className="font-arabic font-bold text-lg text-slate-950">
                        {item.arabic}
                      </div>
                      <div className="text-[11px] font-mono-tabular font-bold text-sky-800">
                        {item.phonetic}
                      </div>
                      <div className="text-[11px] text-slate-600">{item.french}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-base sm:text-lg font-display font-extrabold text-slate-950">
                Atelier d’Écriture Attachée : Décomposition de Mots
              </h2>
              <p className="text-xs text-slate-600">
                Observez comment les lettres isolées se soudent pour former un mot complet.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {WORD_DECOMPOSITIONS.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => speakArabicText(item.word.arabic)}
                  className="border border-slate-200 hover:border-sky-400 rounded-xl p-3 bg-slate-50/50 hover:bg-sky-50/30 transition-colors cursor-pointer space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      {item.word.french}{' '}
                      <span className="font-mono-tabular text-sky-800">
                        [{item.word.phonetic}]
                      </span>
                    </span>
                    <Volume2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                  </div>
                  <div
                    dir="rtl"
                    lang="ar"
                    className="font-arabic font-bold text-lg text-sky-950 bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-right"
                  >
                    {item.lettersJoined}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    {item.stepByStepRule}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Section C : Les Voyelles Courtes, Longues, Tanwīn, Sukūn & Chadda */}
        <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-lg font-display font-extrabold text-slate-950">
              Les Voyelles Courtes, Voyelles Longues (Madd) & Signes de Lecture
            </h2>
            <p className="text-xs text-slate-600">
              Les voyelles donnent le son exact et le rythme de lecture (1 temps pour une voyelle courte, 2 temps pour une voyelle longue).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {READING_MECHANICS_GUIDES.map((guide) => (
              <div
                key={guide.title}
                className="border border-sky-200 rounded-xl p-4 bg-sky-50/40 space-y-2.5"
              >
                <h3 className="text-xs sm:text-sm font-extrabold text-sky-950">
                  {guide.title}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">{guide.rule}</p>
                <div className="space-y-1.5 pt-1">
                  {guide.concreteExamples.map((ex, i) => (
                    <div
                      key={i}
                      onClick={() => speakArabicText(ex.arabic)}
                      className="bg-white border border-sky-200/80 hover:border-sky-400 rounded-lg px-3 py-1.5 flex items-center justify-between gap-2 cursor-pointer"
                    >
                      <div className="text-xs">
                        <span className="font-mono-tabular font-bold text-sky-900">
                          [{ex.phonetic}]
                        </span>{' '}
                        <span className="text-slate-700 font-medium">{ex.french}</span>
                      </div>
                      <span
                        dir="rtl"
                        lang="ar"
                        className="font-arabic font-bold text-lg text-slate-950 shrink-0"
                      >
                        {ex.arabic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {VOWELS_DATA.map((v) => (
              <div
                key={v.id}
                className="border border-slate-200 rounded-xl p-4 bg-white flex flex-col justify-between gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono-tabular font-bold text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded">
                      {v.categoryLabel}
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-950 mt-1.5">
                      {v.frenchName}{' '}
                      <span className="font-mono-tabular text-xs text-sky-800">
                        [{v.phoneticName}]
                      </span>
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">{v.soundValue}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakArabicText(v.symbolOnBa)}
                    className="w-14 h-14 rounded-xl bg-sky-900 text-white font-arabic font-bold text-3xl flex items-center justify-center shrink-0 cursor-pointer hover:bg-sky-800"
                    title="Écouter le son"
                  >
                    {v.symbolOnBa}
                  </button>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {v.examples.map((ex, i) => (
                    <div
                      key={i}
                      onClick={() => speakArabicText(ex.arabic)}
                      className="flex items-center justify-between gap-2 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-sky-50 cursor-pointer text-xs"
                    >
                      <span>
                        <strong className="font-mono-tabular text-sky-900">
                          [{ex.phonetic}]
                        </strong>{' '}
                        — {ex.french}
                      </span>
                      <span
                        dir="rtl"
                        lang="ar"
                        className="font-arabic font-bold text-lg text-slate-950"
                      >
                        {ex.arabic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Paires minimales 1 temps vs 2 temps */}
          <div className="pt-2 space-y-3">
            <h3 className="text-sm font-display font-extrabold text-slate-950">
              Différence entre Voyelle Courte (1 temps) et Voyelle Longue (2 temps)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {EXTENDED_MINIMAL_PAIRS.slice(0, 8).map((pair, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl p-3 bg-slate-50/60 space-y-2"
                >
                  <div
                    onClick={() => speakArabicText(pair.short.arabic)}
                    className="bg-white border border-slate-200 rounded-lg p-2 flex items-center justify-between cursor-pointer hover:border-sky-400"
                  >
                    <div className="text-xs">
                      <div className="font-mono-tabular font-bold text-slate-700">
                        1 temps : [{pair.short.phonetic}]
                      </div>
                      <div className="font-semibold text-slate-900">{pair.short.french}</div>
                    </div>
                    <span dir="rtl" className="font-arabic font-bold text-xl text-slate-950">
                      {pair.short.arabic}
                    </span>
                  </div>

                  <div
                    onClick={() => speakArabicText(pair.long.arabic)}
                    className="bg-sky-50 border border-sky-200 rounded-lg p-2 flex items-center justify-between cursor-pointer hover:border-sky-400"
                  >
                    <div className="text-xs">
                      <div className="font-mono-tabular font-bold text-sky-900">
                        2 temps : [{pair.long.phonetic}]
                      </div>
                      <div className="font-bold text-sky-950">{pair.long.french}</div>
                    </div>
                    <span dir="rtl" className="font-arabic font-bold text-xl text-sky-950">
                      {pair.long.arabic}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QCM Alphabet & Voyelles */}
        <InteractiveWebQcm
          title="QCM d’Entraînement — Alphabet & Voyelles"
          subtitle="Testez vos connaissances sur les lettres, leurs positions et les voyelles"
          questions={[...ALPHABET_QUIZ.slice(0, 4), ...VOWELS_QUIZ.slice(0, 4)]}
        />
      </div>
    );
  }

  // ===========================================================================
  // CHAPITRE 2 : GRAMMAIRE, PRONOMS & CONSTRUCTION DE PHRASES
  // ===========================================================================
  if (activeChapter === 'grammaire-pronoms') {
    return (
      <div className="space-y-6">
        <div className="bg-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-800 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-sky-200">
                LANGUE ARABE · GRAMMAIRE PRATIQUE & STRUCTURE DE LA PHRASE
              </div>
              <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Pronoms, Possession, Lettres Lunaires/Solaires & Construction de Phrases
              </h1>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                Apprenez à construire vos phrases nominales et verbales, utiliser les pronoms personnels et possessifs, exprimer « J’ai / Il y a » et prononcer l’article « Al- ».
              </p>
            </div>
          </div>

          <div className="pt-3.5 border-t border-sky-800/80 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-sky-200">
              Supports PDF imprimables de ce chapitre :
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {renderPdfDownloadButton('PDF : Grammaire & Phrases', () =>
                downloadCompleteMultiPagePdf('pdf-grammaire')
              )}
              {renderPdfDownloadButton('PDF : Cours Complet Arabe A1 (12 pages)', () =>
                downloadOriginalUntouchedPdf(originalA1Doc)
              )}
            </div>
          </div>
        </div>

        {/* Section A : Les 4 Formules Clés pour Construire une Phrase */}
        <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-lg font-display font-extrabold text-slate-950">
              Les Règles Fondamentales pour Construire une Phrase en Arabe
            </h2>
            <p className="text-xs text-slate-600">
              Cliquez sur chaque exemple pour écouter la prononciation arabe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {SENTENCE_BUILDING_FORMULAS.map((f) => (
              <div
                key={f.formulaTitle}
                className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-3"
              >
                <h3 className="text-sm font-extrabold text-sky-950">{f.formulaTitle}</h3>
                <p className="text-xs text-slate-700 leading-relaxed">{f.explanation}</p>

                <div className="space-y-2">
                  {[f.patternA, f.patternB].map((pat, idx) => {
                    const cleanArabic = pat.arabic.replace(/\s*\([^)]*\)/g, '').trim();
                    return (
                      <div
                        key={idx}
                        onClick={() => speakArabicText(cleanArabic)}
                        className="bg-white border border-sky-200/80 hover:border-sky-400 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer"
                      >
                        <div className="space-y-0.5">
                          <div className="text-xs font-mono-tabular font-bold text-sky-900">
                            [{pat.phonetic}]
                          </div>
                          <div className="text-xs font-semibold text-slate-800">
                            {pat.french}
                          </div>
                        </div>
                        <span
                          dir="rtl"
                          lang="ar"
                          className="font-arabic font-bold text-xl text-slate-950 text-right"
                        >
                          {cleanArabic}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section B : Pronoms Personnels (Singulier, Duel, Pluriel) & Pronoms Possessifs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="bg-sky-900 text-white px-4 py-3">
              <h2 className="text-sm sm:text-base font-extrabold">
                Les Pronoms Personnels (Singulier, Duel & Pluriel)
              </h2>
              <p className="text-xs text-sky-200">
                Cliquez sur une ligne pour écouter le pronom en arabe
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <th className="p-2.5 text-left">Catégorie</th>
                    <th className="p-2.5 text-left">Sens Français</th>
                    <th className="p-2.5 text-left">Phonétique</th>
                    <th className="p-2.5 text-right">Arabe</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {ORIGINAL_A1_PRONOUNS_PERSONAL.map((p, idx) => (
                    <tr
                      key={idx}
                      onClick={() => speakArabicText(p.arabic)}
                      className="hover:bg-sky-50/70 cursor-pointer transition-colors"
                    >
                      <td className="p-2.5 text-slate-600 font-medium">{p.category}</td>
                      <td className="p-2.5 font-bold text-slate-900">{p.french}</td>
                      <td className="p-2.5 font-mono-tabular font-semibold text-sky-800">
                        [{p.phonetic}]
                      </td>
                      <td
                        dir="rtl"
                        lang="ar"
                        className="p-2.5 font-arabic font-bold text-xl text-slate-950 text-right"
                      >
                        {p.arabic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="bg-sky-900 text-white px-4 py-3">
              <h2 className="text-sm sm:text-base font-extrabold">
                Les Pronoms Possessifs Attachés (avec كِتَاب = Livre & بَيْت = Maison)
              </h2>
              <p className="text-xs text-sky-200">
                En arabe, la possession s’exprime par une terminaison soudée à la fin du nom
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <th className="p-2.5 text-left">Possesseur</th>
                    <th className="p-2.5 text-left">Terminaison</th>
                    <th className="p-2.5 text-left">Phonétique</th>
                    <th className="p-2.5 text-right">Exemple (كِتَاب)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {ORIGINAL_A1_PRONOUNS_POSSESSIVE.map((p, idx) => (
                    <tr
                      key={idx}
                      onClick={() => speakArabicText(p.exampleAr)}
                      className="hover:bg-sky-50/70 cursor-pointer transition-colors"
                    >
                      <td className="p-2.5 font-bold text-slate-900">{p.french}</td>
                      <td className="p-2.5 font-arabic font-bold text-lg text-sky-900">
                        {p.suffix}{' '}
                        <span className="font-mono-tabular text-xs">({p.phonetic})</span>
                      </td>
                      <td className="p-2.5 font-mono-tabular font-semibold text-sky-800">
                        [{p.examplePhon}]
                      </td>
                      <td
                        dir="rtl"
                        lang="ar"
                        className="p-2.5 font-arabic font-bold text-xl text-slate-950 text-right"
                      >
                        {p.exampleAr}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Section C : Phrases Verbales & Nominales Modèles */}
        <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-lg font-display font-extrabold text-slate-950">
              Phrases Nominales, Phrases Verbales & Expressions du Quotidien
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ...ORIGINAL_A1_SENTENCES.map((s) => ({
                tag: s.type,
                arabic: s.arabic,
                phonetic: s.phonetic,
                french: s.french
              })),
              ...ESSENTIAL_SENTENCES_A1.slice(0, 4).map((s) => ({
                tag: 'Expression courante',
                arabic: s.arabic,
                phonetic: s.phonetic,
                french: s.french
              }))
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => speakArabicText(item.arabic)}
                className="border border-slate-200 hover:border-sky-400 rounded-xl p-3.5 bg-slate-50/50 hover:bg-sky-50/40 transition-colors cursor-pointer flex flex-col justify-between gap-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono-tabular font-bold text-sky-900 bg-sky-100 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                  <Volume2 className="w-4 h-4 text-sky-700" />
                </div>
                <div
                  dir="rtl"
                  lang="ar"
                  className="font-arabic font-bold text-xl text-slate-950 text-right"
                >
                  {item.arabic}
                </div>
                <div>
                  <div className="text-xs font-mono-tabular font-bold text-sky-800">
                    [{item.phonetic}]
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900">
                    {item.french}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section D : Les 14 Lettres Lunaires & 14 Lettres Solaires + Outils */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3">
            <h3 className="text-base font-display font-extrabold text-slate-950">
              Les 14 Lettres Lunaires (Al-Qamariyyah) — Le « L » de « Al- » se prononce
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {LUNAR_LETTERS_TABLE.map((item) => (
                <button
                  key={item.letter}
                  type="button"
                  onClick={() => speakArabicText(item.example.arabic)}
                  className="p-2.5 rounded-lg border border-slate-200 hover:border-sky-400 bg-slate-50/70 text-left cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-900">{item.name}</span>
                    <span dir="rtl" className="font-arabic font-bold text-lg text-slate-950">
                      {item.example.arabic}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono-tabular text-sky-800 font-semibold mt-0.5">
                    [{item.example.phonetic}]
                  </div>
                  <div className="text-[11px] text-slate-700">{item.example.french}</div>
                </button>
              ))}
            </div>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3">
            <h3 className="text-base font-display font-extrabold text-slate-950">
              Les 14 Lettres Solaires (Ach-Chamsiyyah) — Le « L » s’assimile (Chadda)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SOLAR_LETTERS_TABLE.map((item) => (
                <button
                  key={item.letter}
                  type="button"
                  onClick={() => speakArabicText(item.example.arabic)}
                  className="p-2.5 rounded-lg border border-slate-200 hover:border-sky-400 bg-slate-50/70 text-left cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-900">{item.name}</span>
                    <span dir="rtl" className="font-arabic font-bold text-lg text-slate-950">
                      {item.example.arabic}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono-tabular text-sky-800 font-semibold mt-0.5">
                    [{item.example.phonetic}]
                  </div>
                  <div className="text-[11px] text-slate-700">{item.example.french}</div>
                </button>
              ))}
            </div>
          </section>
        </div>

        <InteractiveWebQcm
          title="QCM d’Entraînement — Grammaire, Pronoms & Phrases"
          subtitle="Vérifiez votre maîtrise de la phrase arabe, de la possession et de l’article défini"
          questions={GRAMMAR_A1_QUIZ}
        />
      </div>
    );
  }

  // ===========================================================================
  // CHAPITRE 3 : CONJUGAISON AUX 4 TEMPS, NÉGATIONS & RACINES
  // ===========================================================================
  if (activeChapter === 'conjugaison-racines') {
    return (
      <div className="space-y-6">
        <div className="bg-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-800 space-y-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-sky-200">
              LANGUE ARABE · SYSTÈME VERBAL & MORPHOLOGIE DES RACINES
            </div>
            <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Conjugaison (Passé, Présent, Futur, Impératif), Négations & Racines
            </h1>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              Maîtrisez la conjugaison complète avec les 10 pronoms, les 8 verbes piliers du quotidien, les 5 particules de négation et le système des racines arabes de 3 lettres.
            </p>
          </div>

          <div className="pt-3.5 border-t border-sky-800/80 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-sky-200">
              Supports PDF imprimables de ce chapitre :
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {renderPdfDownloadButton('PDF : Conjugaison & Négations', () =>
                downloadCompleteMultiPagePdf('pdf-conjugaison-a2')
              )}
              {renderPdfDownloadButton('PDF : Racines, Textes & Proverbes', () =>
                downloadCompleteMultiPagePdf('pdf-textes-lecture-a2')
              )}
            </div>
          </div>
        </div>

        {/* Section A : Tableau Complet de Conjugaison aux 3 Temps (Verbe Kataba = Écrire) */}
        <section className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <div className="bg-sky-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-base sm:text-lg font-display font-extrabold">
                Tableau Modèle de Conjugaison : Passé (Māḍī), Présent (Muḍāri‘) & Futur (Mustaqbal)
              </h2>
              <p className="text-xs text-sky-200">
                Cliquez sur n’importe quelle forme verbale pour écouter la prononciation
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                  <th className="p-3 text-left">Pronom</th>
                  <th className="p-3 text-left">Passé (Al-Māḍī)</th>
                  <th className="p-3 text-left">Présent (Al-Muḍāri‘)</th>
                  <th className="p-3 text-left">Futur (Sa- + Présent)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {A2_PRONOUN_CONJUGATION_TABLE.map((row) => (
                  <tr key={row.code} className="hover:bg-sky-50/50">
                    <td
                      onClick={() => speakArabicText(row.pronoun.arabic)}
                      className="p-3 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          dir="rtl"
                          className="font-arabic font-bold text-xl text-sky-950"
                        >
                          {row.pronoun.arabic}
                        </span>
                        <div>
                          <div className="font-bold text-slate-900">{row.pronoun.french}</div>
                          <div className="text-xs font-mono-tabular text-sky-800">
                            [{row.pronoun.phonetic}]
                          </div>
                        </div>
                      </div>
                    </td>

                    <td
                      onClick={() => speakArabicText(row.writePast.arabic)}
                      className="p-3 cursor-pointer hover:bg-sky-100/50"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <div className="font-mono-tabular font-bold text-sky-900">
                            [{row.writePast.phonetic}]
                          </div>
                          <div className="text-xs text-slate-700">{row.writePast.french}</div>
                        </div>
                        <span
                          dir="rtl"
                          className="font-arabic font-bold text-xl text-slate-950"
                        >
                          {row.writePast.arabic}
                        </span>
                      </div>
                    </td>

                    <td
                      onClick={() => speakArabicText(row.writePresent.arabic)}
                      className="p-3 cursor-pointer hover:bg-sky-100/50"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <div className="font-mono-tabular font-bold text-sky-900">
                            [{row.writePresent.phonetic}]
                          </div>
                          <div className="text-xs text-slate-700">{row.writePresent.french}</div>
                        </div>
                        <span
                          dir="rtl"
                          className="font-arabic font-bold text-xl text-slate-950"
                        >
                          {row.writePresent.arabic}
                        </span>
                      </div>
                    </td>

                    <td
                      onClick={() => speakArabicText(row.writeFuture.arabic)}
                      className="p-3 cursor-pointer hover:bg-sky-100/50"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <div className="font-mono-tabular font-bold text-sky-900">
                            [{row.writeFuture.phonetic}]
                          </div>
                          <div className="text-xs text-slate-700">{row.writeFuture.french}</div>
                        </div>
                        <span
                          dir="rtl"
                          className="font-arabic font-bold text-xl text-slate-950"
                        >
                          {row.writeFuture.arabic}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section B : Les 8 Verbes Piliers & Les 5 Particules de Négation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
            <h2 className="text-base sm:text-lg font-display font-extrabold text-slate-950 border-b border-slate-200 pb-3">
              Les 8 Verbes Piliers (Passé, Présent, Impératif & Nom d’action)
            </h2>
            <div className="space-y-2.5">
              {A2_ESSENTIAL_VERBS_8.map((v) => (
                <div
                  key={v.infinitiveMeaning}
                  className="border border-slate-200 rounded-xl p-3 bg-slate-50/60 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-950">
                      {v.infinitiveMeaning}
                    </span>
                    <span
                      dir="rtl"
                      className="text-xs font-arabic font-bold text-sky-900 bg-sky-100 px-2 py-0.5 rounded"
                    >
                      Racine : {v.rootLetters}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {[
                      { label: 'Passé', item: v.past3m },
                      { label: 'Présent', item: v.present3m },
                      { label: 'Impératif', item: v.imperative2m },
                      { label: 'Masdar', item: v.masdar }
                    ].map((cell) => (
                      <button
                        key={cell.label}
                        type="button"
                        onClick={() => speakArabicText(cell.item.arabic)}
                        className="bg-white border border-slate-200 hover:border-sky-400 rounded-lg p-2 text-left cursor-pointer"
                      >
                        <div className="text-[10px] font-bold uppercase text-slate-400">
                          {cell.label}
                        </div>
                        <div
                          dir="rtl"
                          className="font-arabic font-bold text-lg text-slate-950"
                        >
                          {cell.item.arabic}
                        </div>
                        <div className="font-mono-tabular font-semibold text-[11px] text-sky-800">
                          {cell.item.phonetic}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
            <h2 className="text-base sm:text-lg font-display font-extrabold text-slate-950 border-b border-slate-200 pb-3">
              Les 5 Particules de Négation (Présent, Passé, Futur & Phrase Nominale)
            </h2>
            <div className="space-y-3">
              {A2_NEGATION_RULES.map((neg) => (
                <div
                  key={neg.particle.phonetic}
                  onClick={() => speakArabicText(neg.example.arabic)}
                  className="border border-slate-200 hover:border-sky-400 rounded-xl p-3.5 bg-slate-50/60 cursor-pointer space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        dir="rtl"
                        className="font-arabic font-bold text-xl text-white bg-sky-900 px-3 py-0.5 rounded-lg"
                      >
                        {neg.particle.arabic}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-slate-950">
                          [{neg.particle.phonetic}] — {neg.particle.french}
                        </div>
                        <div className="text-[11px] text-sky-800 font-semibold">
                          {neg.tenseTarget} · {neg.grammarEffect}
                        </div>
                      </div>
                    </div>
                    <Volume2 className="w-4 h-4 text-sky-700 shrink-0" />
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="text-xs">
                      <div className="font-mono-tabular font-bold text-sky-900">
                        [{neg.example.phonetic}]
                      </div>
                      <div className="font-semibold text-slate-800">{neg.example.french}</div>
                    </div>
                    <span
                      dir="rtl"
                      className="font-arabic font-bold text-lg text-slate-950 text-right"
                    >
                      {neg.example.arabic}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Section C : Le Système des Racines de 3 Lettres */}
        <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-lg font-display font-extrabold text-slate-950">
              Le Secret du Vocabulaire Arabe : Les Familles de Racines à 3 Lettres
            </h2>
            <p className="text-xs text-slate-600">
              À partir d’une seule racine de 3 consonnes, l’arabe construit le verbe, celui qui fait l’action (Fā‘il), l’objet (Maf‘ūl) et le lieu (Maf‘al).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {A2_ROOT_SYSTEM_TABLE.map((r) => (
              <div
                key={r.rootArabic}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/40"
              >
                <div className="bg-sky-900 text-white px-4 py-2.5 flex items-center justify-between">
                  <span className="text-xs font-extrabold">{r.rootMeaning}</span>
                  <span dir="rtl" className="font-arabic font-bold text-base text-sky-200">
                    {r.rootArabic}
                  </span>
                </div>
                <div className="p-3 space-y-2">
                  {[
                    { label: 'Verbe', item: r.verb3m },
                    { label: 'Acteur', item: r.activeParticiple },
                    { label: 'Objet / Passif', item: r.passiveOrObject },
                    { label: 'Lieu / Nom', item: r.placeOrNoun }
                  ].map((entry) => (
                    <div
                      key={entry.label}
                      onClick={() => speakArabicText(entry.item.arabic)}
                      className="bg-white border border-slate-200 hover:border-sky-400 rounded-lg px-3 py-1.5 flex items-center justify-between gap-2 cursor-pointer text-xs"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">
                          {entry.label}
                        </span>
                        <span className="font-mono-tabular font-bold text-sky-900">
                          [{entry.item.phonetic}]
                        </span>{' '}
                        — <span className="font-semibold text-slate-800">{entry.item.french}</span>
                      </div>
                      <span
                        dir="rtl"
                        className="font-arabic font-bold text-lg text-slate-950 shrink-0"
                      >
                        {entry.item.arabic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <InteractiveWebQcm
          title="QCM d’Entraînement — Conjugaison, Négations & Racines"
          subtitle="Vérifiez votre maîtrise des temps verbaux, des négations et des familles de mots"
          questions={PDF7_CONJUGATION_QUIZ}
        />
      </div>
    );
  }

  // ===========================================================================
  // CHAPITRE 4 : VOCABULAIRE CLASSÉ PAR THÈME, HEURE, NOMBRES & CONNECTEURS
  // ===========================================================================
  if (activeChapter === 'vocabulaire-themes') {
    const activeVocabCat =
      VOCAB_200_SUBCATEGORIES.find((c) => c.id === selectedVocabCatId) ||
      VOCAB_200_SUBCATEGORIES[0];

    const filteredWords = vocabSearch.trim()
      ? VOCAB_200_SUBCATEGORIES.flatMap((c) => c.words).filter((w) => {
          const q = vocabSearch.trim().toLowerCase();
          return (
            w.french.toLowerCase().includes(q) ||
            w.phonetic.toLowerCase().includes(q) ||
            w.arabic.includes(q)
          );
        })
      : activeVocabCat.words;

    return (
      <div className="space-y-6">
        <div className="bg-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-800 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-sky-200">
                LANGUE ARABE · LEXIQUE THÉMATIQUE & OUTILS D’EXPRESSION
              </div>
              <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Vocabulaire Indispensable par Thème, Objets, Animaux, Heure & Connecteurs
              </h1>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                Tous les mots essentiels regroupés par catégorie thématique avec phrases concrètes d’application et écoute vocale lente.
              </p>
            </div>

            {renderMemoryControls()}
          </div>

          <div className="pt-3.5 border-t border-sky-800/80 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-sky-200">
              Supports PDF imprimables de ce chapitre :
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {renderPdfDownloadButton('PDF : Lexique des 200 Mots par Thème', () =>
                downloadCompleteMultiPagePdf('pdf-vocab300')
              )}
              {renderPdfDownloadButton('PDF : Connecteurs, Heure & Conversations', () =>
                downloadCompleteMultiPagePdf('pdf-conversations-a2')
              )}
            </div>
          </div>
        </div>

        {/* Section A : Les 200 Mots Classés en 9 Thèmes + Recherche */}
        <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-display font-extrabold text-slate-950">
                Répertoire des 200 Mots Essentiels par Catégorie
              </h2>
              <p className="text-xs text-slate-600">
                Sélectionnez un thème ou recherchez directement un mot en français, phonétique ou arabe.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                value={vocabSearch}
                onChange={(e) => setVocabSearch(e.target.value)}
                placeholder="Rechercher un mot..."
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-sky-600"
              />
            </div>
          </div>

          {!vocabSearch.trim() && (
            <div className="flex flex-wrap gap-1.5">
              {VOCAB_200_SUBCATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedVocabCatId(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    selectedVocabCatId === cat.id
                      ? 'bg-sky-800 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-sky-50 hover:text-sky-900'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          )}

          {!vocabSearch.trim() && activeVocabCat && (
            <div
              onClick={() => speakArabicText(activeVocabCat.concreteSentence.arabic)}
              className="bg-sky-50/80 border border-sky-200 rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer hover:border-sky-400"
            >
              <div>
                <span className="text-xs font-extrabold text-sky-900 uppercase">
                  Phrase modèle — {activeVocabCat.title}
                </span>
                <div className="text-xs sm:text-sm font-medium text-slate-900 mt-0.5">
                  <span className="font-mono-tabular font-bold text-sky-900">
                    [{activeVocabCat.concreteSentence.phonetic}]
                  </span>{' '}
                  — {activeVocabCat.concreteSentence.french}
                </div>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <Volume2 className="w-4 h-4 text-sky-700" />
                <span dir="rtl" lang="ar" className="font-arabic font-bold text-xl text-slate-950">
                  {activeVocabCat.concreteSentence.arabic}
                </span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {filteredWords.map((w) => {
              const wKey = `voc-${w.num}`;
              const isRevealed = revealedIds[wKey];
              const showPh = !hidePhonetic || isRevealed;
              const showFr = !hideFrench || isRevealed;

              return (
                <div
                  key={w.num}
                  onClick={() => {
                    if (hidePhonetic || hideFrench) toggleRevealCard(wKey);
                    speakArabicText(w.arabic);
                  }}
                  className="bg-slate-50/60 border border-slate-200 hover:border-sky-400 hover:bg-white rounded-xl px-3.5 py-2.5 flex items-center justify-between gap-3 cursor-pointer transition-colors"
                >
                  <div className="min-w-0">
                    <div className="text-xs font-mono-tabular font-bold text-sky-800 truncate">
                      {showPh ? `[${w.phonetic}]` : '[Cliquer pour révéler]'}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                      {showFr ? w.french : '••••••••'}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      dir="rtl"
                      lang="ar"
                      className="font-arabic font-bold text-xl text-slate-950"
                    >
                      {w.arabic}
                    </span>
                    <Volume2 className="w-3.5 h-3.5 text-sky-700" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section B : Objets du Quotidien & Animaux (intégrés depuis le Cours A1) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3">
            <h3 className="text-base font-display font-extrabold text-slate-950 border-b border-slate-200 pb-2.5">
              Les Objets du Quotidien (15 mots indispensables)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {ORIGINAL_A1_OBJECTS_AND_ANIMALS.objects.map((w) => (
                <button
                  key={w.french}
                  type="button"
                  onClick={() => speakArabicText(w.arabic)}
                  className="p-2.5 rounded-lg border border-slate-200 hover:border-sky-400 bg-slate-50/70 hover:bg-sky-50/40 text-left cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{w.french}</span>
                    <span dir="rtl" className="font-arabic font-bold text-lg text-slate-950">
                      {w.arabic}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono-tabular text-sky-800 font-semibold mt-0.5">
                    [{w.phonetic}]
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3">
            <h3 className="text-base font-display font-extrabold text-slate-950 border-b border-slate-200 pb-2.5">
              Les Animaux en Arabe (15 mots indispensables)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {ORIGINAL_A1_OBJECTS_AND_ANIMALS.animals.map((w) => (
                <button
                  key={w.french}
                  type="button"
                  onClick={() => speakArabicText(w.arabic)}
                  className="p-2.5 rounded-lg border border-slate-200 hover:border-sky-400 bg-slate-50/70 hover:bg-sky-50/40 text-left cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{w.french}</span>
                    <span dir="rtl" className="font-arabic font-bold text-lg text-slate-950">
                      {w.arabic}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono-tabular text-sky-800 font-semibold mt-0.5">
                    [{w.phonetic}]
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Section C : Connecteurs Logiques, Dire l'Heure & Nombres */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3">
            <h3 className="text-base font-display font-extrabold text-slate-950 border-b border-slate-200 pb-2.5">
              Les 10 Connecteurs Logiques pour Relier ses Phrases
            </h3>
            <div className="space-y-2">
              {A2_LOGICAL_CONNECTORS.map((c) => (
                <div
                  key={c.triad.phonetic}
                  onClick={() => speakArabicText(c.example.arabic)}
                  className="border border-slate-200 hover:border-sky-400 rounded-lg p-3 bg-slate-50/50 cursor-pointer space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-sky-950">
                      {c.triad.french}{' '}
                      <span className="font-mono-tabular text-sky-800">
                        [{c.triad.phonetic}]
                      </span>
                    </span>
                    <span dir="rtl" className="font-arabic font-bold text-lg text-sky-900">
                      {c.triad.arabic}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-xs pt-1 border-t border-slate-200/70">
                    <span className="text-slate-700">
                      {c.example.french} ({c.example.phonetic})
                    </span>
                    <span dir="rtl" className="font-arabic font-bold text-base text-slate-950">
                      {c.example.arabic}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3">
            <h3 className="text-base font-display font-extrabold text-slate-950 border-b border-slate-200 pb-2.5">
              Dire l’Heure Exacte, les Nombres (1 à 1000) & Donner son Avis
            </h3>
            <div className="space-y-2">
              {A2_TIME_AND_NUMBERS.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => speakArabicText(item.arabic)}
                  className="border border-slate-200 hover:border-sky-400 rounded-lg p-3 bg-slate-50/50 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="text-xs">
                    <div className="font-mono-tabular font-bold text-sky-900">
                      [{item.phonetic}]
                    </div>
                    <div className="font-semibold text-slate-800">{item.french}</div>
                  </div>
                  <span
                    dir="rtl"
                    className="font-arabic font-bold text-lg text-slate-950 text-right"
                  >
                    {item.arabic}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <InteractiveWebQcm
          title="QCM d’Entraînement — Vocabulaire, Heure & Connecteurs"
          subtitle="Testez votre connaissance du lexique thématique et des mots de liaison"
          questions={[...VOCAB_200_QUIZ.slice(0, 4), ...PDF8_CONVERSATIONS_QUIZ.slice(0, 4)]}
        />
      </div>
    );
  }

  // ===========================================================================
  // CHAPITRE 5 : DIALOGUES DU QUOTIDIEN, TEXTES SUIVIS & PROVERBES
  // ===========================================================================
  if (activeChapter === 'dialogues-lecture') {
    return (
      <div className="space-y-6">
        <div className="bg-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-800 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-sky-200">
                LANGUE ARABE · CONVERSATIONS RÉELLES & LECTURE FLUIDE
              </div>
              <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Dialogues Pratiques, Textes de Lecture Vocalisés & Proverbes
              </h1>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                Écoutez et lisez les dialogues progressifs (salutations, connaissance, logement, médecin, marché) ainsi que les 3 textes suivis entièrement vocalisés.
              </p>
            </div>

            {renderMemoryControls()}
          </div>

          <div className="pt-3.5 border-t border-sky-800/80 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-sky-200">
              Supports PDF imprimables de ce chapitre :
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {renderPdfDownloadButton('PDF : Textes Suivis & Proverbes', () =>
                downloadCompleteMultiPagePdf('pdf-textes-lecture-a2')
              )}
              {renderPdfDownloadButton('PDF : Dialogues & Conversations', () =>
                downloadCompleteMultiPagePdf('pdf-conversations-a2')
              )}
              {renderPdfDownloadButton('PDF : Cours Complet Arabe A1 (12 pages)', () =>
                downloadOriginalUntouchedPdf(originalA1Doc)
              )}
            </div>
          </div>
        </div>

        {/* Section A : Les Dialogues Progressifs (Mohammed & Sami + Situations du Quotidien) */}
        <section className="space-y-4">
          <h2 className="text-lg font-display font-extrabold text-slate-950">
            Conversations Complètes avec Audio (Cliquez sur une réplique pour écouter)
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              ...ORIGINAL_A1_THREE_DIALOGUES.map((d) => ({
                title: d.titleFr,
                subtitle: d.titleAr,
                lines: d.lines.map((l) => ({
                  speaker: `${l.speakerFr} (${l.speakerAr})`,
                  arabic: l.arabic,
                  phonetic: l.phonetic,
                  french: l.french
                }))
              })),
              ...A2_REAL_LIFE_DIALOGUES.map((d) => ({
                title: d.title,
                subtitle: d.context,
                lines: d.lines.map((l) => ({
                  speaker: l.speaker,
                  arabic: l.triad.arabic,
                  phonetic: l.triad.phonetic,
                  french: l.triad.french
                }))
              })),
              ...REAL_LIFE_DIALOGUES_A1.slice(0, 1).map((d) => ({
                title: d.title,
                subtitle: d.context,
                lines: d.lines.map((l) => ({
                  speaker: l.speaker,
                  arabic: l.triad.arabic,
                  phonetic: l.triad.phonetic,
                  french: l.triad.french
                }))
              }))
            ].map((dialogue, dIdx) => (
              <div
                key={dIdx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs"
              >
                <div className="bg-sky-900 text-white px-4 py-3 flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-extrabold">{dialogue.title}</h3>
                    <p className="text-xs text-sky-200">{dialogue.subtitle}</p>
                  </div>
                </div>
                <div className="divide-y divide-slate-100">
                  {dialogue.lines.map((line, lIdx) => {
                    const lKey = `dlg-all-${dIdx}-${lIdx}`;
                    const isRev = revealedIds[lKey];
                    const showPh = !hidePhonetic || isRev;
                    const showFr = !hideFrench || isRev;

                    return (
                      <div
                        key={lIdx}
                        onClick={() => {
                          if (hidePhonetic || hideFrench) toggleRevealCard(lKey);
                          speakArabicText(line.arabic);
                        }}
                        className="p-3.5 hover:bg-sky-50/50 cursor-pointer transition-colors space-y-1"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-sky-900 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded">
                            {line.speaker}
                          </span>
                          <div className="flex items-center gap-2">
                            <span
                              dir="rtl"
                              lang="ar"
                              className="font-arabic font-bold text-lg sm:text-xl text-slate-950 text-right"
                            >
                              {line.arabic}
                            </span>
                            <Volume2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                          </div>
                        </div>
                        <div className="text-xs font-mono-tabular font-semibold text-sky-800">
                          {showPh ? `[${line.phonetic}]` : '[Phonétique masquée — cliquer]'}
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-slate-800">
                          {showFr ? line.french : 'Traduction masquée — cliquer'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section B : Les 3 Textes de Lecture Suivie */}
        <section className="space-y-4">
          <h2 className="text-lg font-display font-extrabold text-slate-950">
            Textes de Lecture Suivie Entièrement Vocalisés
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {A2_READING_TEXTS.map((txt) => (
              <div
                key={txt.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs"
              >
                <div className="bg-sky-900 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-extrabold">{txt.titleFrench}</span>
                  <span dir="rtl" lang="ar" className="font-arabic font-bold text-lg text-sky-200">
                    {txt.titleArabic}
                  </span>
                </div>
                <div className="divide-y divide-slate-100">
                  {txt.sentences.map((s, sIdx) => {
                    const tKey = `txt-${txt.id}-${sIdx}`;
                    const isRev = revealedIds[tKey];
                    const showPh = !hidePhonetic || isRev;
                    const showFr = !hideFrench || isRev;

                    return (
                      <div
                        key={sIdx}
                        onClick={() => {
                          if (hidePhonetic || hideFrench) toggleRevealCard(tKey);
                          speakArabicText(s.arabic);
                        }}
                        className="p-4 hover:bg-sky-50/40 cursor-pointer space-y-1.5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <Volume2 className="w-4 h-4 text-sky-700 shrink-0" />
                          <div
                            dir="rtl"
                            lang="ar"
                            className="font-arabic font-bold text-xl sm:text-2xl text-slate-950 text-right leading-relaxed"
                          >
                            {s.arabic}
                          </div>
                        </div>
                        <div className="text-xs font-mono-tabular font-semibold text-sky-800">
                          {showPh ? `[${s.phonetic}]` : '[Phonétique masquée]'}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-800">
                          {showFr ? s.french : 'Traduction masquée'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section C : Proverbes et Sagesses Arabes */}
        <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3">
          <h2 className="text-base sm:text-lg font-display font-extrabold text-slate-950">
            Proverbes & Sagesses Classiques en Arabe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {A2_ARABIC_PROVERBS.map((p, idx) => (
              <div
                key={idx}
                onClick={() => speakArabicText(p.arabic)}
                className="border border-slate-200 hover:border-sky-400 rounded-xl p-3.5 bg-slate-50/60 cursor-pointer space-y-1"
              >
                <div className="flex items-center justify-between">
                  <Volume2 className="w-4 h-4 text-sky-700" />
                  <span dir="rtl" className="font-arabic font-bold text-xl text-slate-950">
                    {p.arabic}
                  </span>
                </div>
                <div className="text-xs font-mono-tabular font-bold text-sky-800">
                  [{p.phonetic}]
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  « {p.french} »
                </div>
              </div>
            ))}
          </div>
        </section>

        <InteractiveWebQcm
          title="QCM d’Entraînement — Lecture, Racines & Proverbes"
          subtitle="Vérifiez votre compréhension des textes et proverbes"
          questions={PDF9_READING_QUIZ}
        />
      </div>
    );
  }

  // ===========================================================================
  // CHAPITRE 6 : EXERCICES BILAN & TOUS LES SUPPORTS PDF D'ARABE
  // ===========================================================================
  return (
    <div className="space-y-6">
      <div className="bg-sky-900 text-white rounded-xl p-5 sm:p-6 shadow-xs border border-sky-800 space-y-2">
        <div className="text-xs font-mono-tabular font-bold uppercase tracking-wider text-sky-200">
          LANGUE ARABE · ÉVALUATION & BIBLIOTHÈQUE DE SUPPORTS IMPRIMABLES
        </div>
        <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white">
          Supports PDF Téléchargeables & Grand QCM Bilan d’Arabe
        </h1>
        <p className="text-xs sm:text-sm text-sky-100 leading-relaxed max-w-3xl">
          Téléchargez librement l’ensemble des supports PDF de langue arabe prêts à imprimer (le support de cours de 12 pages ainsi que les livrets thématiques A4 avec exercices et QCM).
        </p>
      </div>

      {/* Unified PDF Library for Arabic (Single Homogeneous Color Palette, No 1/2/3/4 Numbering) */}
      <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
        <div className="border-b border-slate-200 pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-display font-extrabold text-slate-950">
              Tous les Supports PDF de Langue Arabe à Télécharger
            </h2>
            <p className="text-xs text-slate-600">
              Cliquez sur « Télécharger le PDF » pour enregistrer ou imprimer le fichier souhaité.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* The 12-page A1 Student Course PDF */}
          <div className="border border-sky-200 bg-sky-50/40 rounded-xl p-4 flex flex-col justify-between gap-3">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-tabular font-extrabold text-sky-900 bg-sky-100 px-2.5 py-0.5 rounded">
                  <FileText className="w-3.5 h-3.5" />
                  SUPPORT DE COURS COMPLET · 12 PAGES
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-950">
                {originalA1Doc.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {originalA1Doc.subtitle}
              </p>
            </div>

            <div className="pt-2 border-t border-sky-200/70 flex items-center justify-end">
              <button
                type="button"
                onClick={() => downloadOriginalUntouchedPdf(originalA1Doc)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-extrabold bg-sky-800 hover:bg-sky-900 text-white shadow-2xs transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Télécharger le PDF (12 pages)</span>
              </button>
            </div>
          </div>

          {/* All Thematic A4 Booklets */}
          {arabePrintableBooklets.map((doc) => (
            <div
              key={doc.id}
              className="border border-slate-200 bg-slate-50/40 hover:border-sky-300 rounded-xl p-4 flex flex-col justify-between gap-3 transition-colors"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-tabular font-extrabold text-sky-900 bg-sky-100 px-2.5 py-0.5 rounded">
                    <FileText className="w-3.5 h-3.5" />
                    LIVRET THÉMATIQUE A4 · {doc.pageCount} PAGES
                  </span>
                </div>
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

      {/* Grand QCM Bilan Global */}
      <InteractiveWebQcm
        title="Grand QCM Bilan de Langue Arabe (12 Questions)"
        subtitle="Révisez l’ensemble des notions : alphabet, voyelles, grammaire, conjugaison et vocabulaire"
        questions={[
          ...ALPHABET_QUIZ.slice(0, 2),
          ...VOWELS_QUIZ.slice(0, 2),
          ...GRAMMAR_A1_QUIZ.slice(0, 2),
          ...VOCAB_200_QUIZ.slice(0, 2),
          ...PDF7_CONJUGATION_QUIZ.slice(0, 2),
          ...PDF8_CONVERSATIONS_QUIZ.slice(0, 2)
        ]}
      />
    </div>
  );
};
