import React, { useState } from 'react';
import {
  Volume2,
  Eye,
  EyeOff,
  Download,
  FileText,
  BookOpen,
  MessageSquare,
  Layers,
  Search
} from 'lucide-react';
import { ARABIC_ALPHABET } from '../data/alphabetData';
import { VOCAB_200_SUBCATEGORIES } from '../data/vocab200Categorized';
import {
  A2_REAL_LIFE_DIALOGUES,
  A2_READING_TEXTS,
  A2_ARABIC_PROVERBS
} from '../data/arabicA2NewPdfsData';
import {
  CompletePdfDocId,
  downloadCompleteMultiPagePdf,
  speakArabicText
} from '../utils/pdfGenerator';

interface InteractiveArabicStudyViewProps {
  onOpenPdfSheet: (docId: CompletePdfDocId) => void;
}

type StudyModuleTab = 'alphabet' | 'vocabulaire' | 'dialogues-textes';

export const InteractiveArabicStudyView: React.FC<InteractiveArabicStudyViewProps> = ({
  onOpenPdfSheet
}) => {
  const [moduleTab, setModuleTab] = useState<StudyModuleTab>('alphabet');
  const [selectedVocabCatId, setSelectedVocabCatId] = useState<string>(
    VOCAB_200_SUBCATEGORIES[0]?.id || 'cat-1'
  );
  const [vocabSearch, setVocabSearch] = useState('');
  const [hidePhonetic, setHidePhonetic] = useState(false);
  const [hideFrench, setHideFrench] = useState(false);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  const toggleRevealCard = (id: string) => {
    setRevealedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
      {/* Top Bar: Module Navigation + Memorization Controls */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-2xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setModuleTab('alphabet')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
              moduleTab === 'alphabet'
                ? 'bg-sky-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Alphabet &amp; 4 Positions</span>
          </button>

          <button
            type="button"
            onClick={() => setModuleTab('vocabulaire')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
              moduleTab === 'vocabulaire'
                ? 'bg-sky-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Lexique Thématique (200 mots)</span>
          </button>

          <button
            type="button"
            onClick={() => setModuleTab('dialogues-textes')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
              moduleTab === 'dialogues-textes'
                ? 'bg-sky-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Dialogues &amp; Textes Suivis (A2)</span>
          </button>
        </div>

        {/* Memorization Masking Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-slate-500 mr-1">
            Entraînement mémoire :
          </span>
          <button
            type="button"
            onClick={() => {
              setHidePhonetic((v) => !v);
              setRevealedIds({});
            }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
              hidePhonetic
                ? 'bg-sky-50 border-sky-600 text-sky-900'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
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
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
              hideFrench
                ? 'bg-sky-50 border-sky-600 text-sky-900'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {hideFrench ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{hideFrench ? 'Traduction masquée' : 'Masquer traduction'}</span>
          </button>
        </div>
      </div>

      {/* =====================================================================
          MODULE 1 : ALPHABET & 4 POSITIONS (LECTURE SIMPLE SUR LE SITE)
      ===================================================================== */}
      {moduleTab === 'alphabet' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-sky-50/70 border border-sky-200/80 rounded-xl px-4 py-3">
            <div>
              <h2 className="text-base font-display font-bold text-slate-900">
                Les 28 Lettres de l’Alphabet Arabe
              </h2>
              <p className="text-xs text-slate-600">
                Écoute vocale lente adaptée à la mémorisation des points d’articulation et des 4 formes d’écriture.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => downloadCompleteMultiPagePdf('pdf-alphabet')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-sky-700 hover:bg-sky-800 text-white rounded-lg cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Fichier PDF Alphabet</span>
              </button>
              <button
                type="button"
                onClick={() => onOpenPdfSheet('pdf-alphabet')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white hover:bg-sky-50 text-sky-900 border border-sky-200 rounded-lg cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Aperçu A4</span>
              </button>
            </div>
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
                  className="bg-white border border-slate-200 hover:border-sky-300 rounded-xl p-4 flex flex-col justify-between gap-3 transition-colors shadow-2xs"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-mono-tabular font-semibold text-slate-400">
                          Lettre {String(letter.order).padStart(2, '0')}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900">
                          {showPh ? letter.namePhonetic : '••••'}
                        </h3>
                        <p className="text-xs text-sky-700 font-medium">
                          Son : {showFr ? letter.frenchEquivalent : '••••'}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => speakArabicText(letter.exampleWord.arabic)}
                          className="p-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 transition-colors cursor-pointer"
                          title="Écouter la prononciation lente"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <span
                          dir="rtl"
                          lang="ar"
                          className="font-arabic font-bold text-3xl text-slate-950 leading-none px-1"
                        >
                          {letter.arabic}
                        </span>
                      </div>
                    </div>

                    {/* 4 Positions Table */}
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

                  {/* Example word */}
                  <div
                    onClick={() => {
                      if (hidePhonetic || hideFrench) toggleRevealCard(cardKey);
                      speakArabicText(letter.exampleWord.arabic);
                    }}
                    className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2 cursor-pointer group"
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-mono-tabular font-semibold text-sky-800 truncate">
                        {showPh ? `[${letter.exampleWord.phonetic}]` : '[Cliquer pour révéler]'}
                      </div>
                      <div className="text-xs text-slate-700 font-medium truncate">
                        {showFr ? letter.exampleWord.french : '••••••'}
                      </div>
                    </div>
                    <span
                      dir="rtl"
                      lang="ar"
                      className="font-arabic font-bold text-xl text-slate-950 group-hover:text-sky-700 transition-colors shrink-0"
                    >
                      {letter.exampleWord.arabic}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =====================================================================
          MODULE 2 : LEXIQUE THÉMATIQUE (200 MOTS EN 9 SOUS-CATÉGORIES)
      ===================================================================== */}
      {moduleTab === 'vocabulaire' && (
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="search"
                  value={vocabSearch}
                  onChange={(e) => setVocabSearch(e.target.value)}
                  placeholder="Rechercher un mot en français, phonétique ou arabe..."
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-sky-600"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => downloadCompleteMultiPagePdf('pdf-vocab300')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-sky-700 hover:bg-sky-800 text-white rounded-lg cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Télécharger PDF Lexique</span>
                </button>
                <button
                  type="button"
                  onClick={() => onOpenPdfSheet('pdf-vocab300')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Aperçu A4</span>
                </button>
              </div>
            </div>

            {!vocabSearch.trim() && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {VOCAB_200_SUBCATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedVocabCatId(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedVocabCatId === cat.id
                        ? 'bg-sky-700 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {!vocabSearch.trim() && activeVocabCat && (
            <div className="bg-sky-50/70 border border-sky-200 rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-semibold text-sky-800">
                  Phrase d’application — {activeVocabCat.title}
                </span>
                <div className="text-xs sm:text-sm font-medium text-slate-900 mt-0.5">
                  <span className="font-mono-tabular font-semibold text-sky-900">
                    [{activeVocabCat.concreteSentence.phonetic}]
                  </span>{' '}
                  — {activeVocabCat.concreteSentence.french}
                </div>
              </div>
              <button
                type="button"
                onClick={() => speakArabicText(activeVocabCat.concreteSentence.arabic)}
                className="inline-flex items-center gap-2 self-end sm:self-auto px-3 py-1.5 rounded-lg bg-white border border-sky-200 hover:border-sky-400 cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-sky-700" />
                <span dir="rtl" lang="ar" className="font-arabic font-bold text-lg text-slate-950">
                  {activeVocabCat.concreteSentence.arabic}
                </span>
              </button>
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
                  className="bg-white border border-slate-200 hover:border-sky-300 rounded-xl px-3.5 py-2.5 flex items-center justify-between gap-3 cursor-pointer transition-colors"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-mono-tabular text-slate-400">
                        #{String(w.num).padStart(3, '0')}
                      </span>
                      <span className="text-xs font-mono-tabular font-semibold text-sky-800 truncate">
                        {showPh ? `[${w.phonetic}]` : '[Cliquer pour révéler]'}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 truncate mt-0.5">
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
                    <Volume2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =====================================================================
          MODULE 3 : DIALOGUES & TEXTES SUIVIS (NIVEAU A2)
      ===================================================================== */}
      {moduleTab === 'dialogues-textes' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {A2_REAL_LIFE_DIALOGUES.map((dlg) => (
              <div
                key={dlg.title}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs"
              >
                <div className="bg-sky-900 text-white px-4 py-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold">{dlg.title}</h3>
                    <p className="text-xs text-sky-200">{dlg.context}</p>
                  </div>
                </div>
                <div className="divide-y divide-slate-100">
                  {dlg.lines.map((line, idx) => {
                    const lKey = `dlg-${dlg.title}-${idx}`;
                    const isRev = revealedIds[lKey];
                    const showPh = !hidePhonetic || isRev;
                    const showFr = !hideFrench || isRev;

                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          if (hidePhonetic || hideFrench) toggleRevealCard(lKey);
                          speakArabicText(line.triad.arabic);
                        }}
                        className="p-3.5 hover:bg-sky-50/50 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded">
                            {line.speaker}
                          </span>
                          <div className="flex items-center gap-2">
                            <span
                              dir="rtl"
                              lang="ar"
                              className="font-arabic font-bold text-lg sm:text-xl text-slate-950 text-right"
                            >
                              {line.triad.arabic}
                            </span>
                            <Volume2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                          </div>
                        </div>
                        <div className="text-xs font-mono-tabular font-medium text-sky-800 mt-1">
                          {showPh ? `[${line.triad.phonetic}]` : '[Phonétique masquée — cliquer]'}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-800 font-medium mt-0.5">
                          {showFr ? line.triad.french : 'Traduction masquée — cliquer pour vérifier'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* 3 Vocalized Reading Texts */}
          <div className="space-y-4">
            <h3 className="text-sm font-display font-bold text-slate-900 uppercase tracking-wider">
              Textes de Lecture Suivie (Niveau A2)
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {A2_READING_TEXTS.map((txt) => (
                <div
                  key={txt.id}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs"
                >
                  <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between">
                    <span className="text-sm font-bold">{txt.titleFrench}</span>
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
                          className="p-3.5 hover:bg-sky-50/40 cursor-pointer flex flex-col gap-1"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <Volume2 className="w-4 h-4 text-sky-600 shrink-0" />
                            <div
                              dir="rtl"
                              lang="ar"
                              className="font-arabic font-bold text-lg sm:text-xl text-slate-950 text-right leading-relaxed"
                            >
                              {s.arabic}
                            </div>
                          </div>
                          <div className="text-xs font-mono-tabular font-medium text-sky-800">
                            {showPh ? `[${s.phonetic}]` : '[Phonétique masquée]'}
                          </div>
                          <div className="text-xs sm:text-sm text-slate-800 font-medium">
                            {showFr ? s.french : 'Traduction masquée'}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Proverbs */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
            <h3 className="text-sm font-display font-bold text-slate-900">
              Proverbes &amp; Expressions Classiques
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {A2_ARABIC_PROVERBS.map((p, idx) => (
                <div
                  key={idx}
                  onClick={() => speakArabicText(p.arabic)}
                  className="border border-slate-200 hover:border-sky-300 rounded-lg p-3 cursor-pointer flex flex-col gap-1"
                >
                  <div
                    dir="rtl"
                    lang="ar"
                    className="font-arabic font-bold text-lg text-slate-950 text-right"
                  >
                    {p.arabic}
                  </div>
                  <div className="text-xs font-mono-tabular font-semibold text-sky-800">
                    [{p.phonetic}]
                  </div>
                  <div className="text-xs text-slate-700 font-medium">« {p.french} »</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
