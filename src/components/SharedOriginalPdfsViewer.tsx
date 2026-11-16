import React, { useState } from 'react';
import {
  Download,
  FileText,
  BookOpen,
  Volume2,
  Printer,
  CheckCircle2,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import {
  SHARED_ORIGINAL_PDF_DOCUMENTS,
  SharedOriginalPdfDocument,
  SharedOriginalPdfId,
  getOriginalPdfPageImageUrl,
  downloadOriginalUntouchedPdf,
  ORIGINAL_A1_PRONOUNS_PERSONAL,
  ORIGINAL_A1_PRONOUNS_POSSESSIVE,
  ORIGINAL_A1_SENTENCES,
  ORIGINAL_A1_OBJECTS_AND_ANIMALS,
  ORIGINAL_A1_THREE_DIALOGUES,
  TWENTY_FIVE_PROPHETS_QURAN,
  QUESTIONNAIRE_ISLAM_9_QUESTIONS
} from '../data/sharedOriginalPdfsData';
import { ARABIC_ALPHABET } from '../data/alphabetData';
import { speakArabicText } from '../utils/pdfGenerator';

interface SharedOriginalPdfsViewerProps {
  docId: SharedOriginalPdfId;
  zoomPercent: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
}

export const SharedOriginalPdfsViewer: React.FC<SharedOriginalPdfsViewerProps> = ({
  docId,
  zoomPercent,
  onZoomIn,
  onZoomOut,
  onZoomReset
}) => {
  const activeDoc: SharedOriginalPdfDocument =
    SHARED_ORIGINAL_PDF_DOCUMENTS.find((d) => d.id === docId) ||
    SHARED_ORIGINAL_PDF_DOCUMENTS[0];

  // Default to 'original-pages' so the user immediately sees the exact, unmodified visual pages of their PDF
  const [readingMode, setReadingMode] = useState<'original-pages' | 'interactive-web'>(
    'original-pages'
  );
  const [downloadStatus, setDownloadStatus] = useState<string | null>(null);
  const [activeDialogueId, setActiveDialogueId] = useState<string>('diag-1');
  const [studentAnswers, setStudentAnswers] = useState<Record<string, string>>({});

  const handleDownload = async () => {
    setDownloadStatus('Téléchargement en cours...');
    await downloadOriginalUntouchedPdf(activeDoc);
    setDownloadStatus('✓ Fichier PDF téléchargé');
    setTimeout(() => setDownloadStatus(null), 3500);
  };

  const pageNumbers = Array.from({ length: activeDoc.pageCount }, (_, i) => i + 1);

  return (
    <div className="space-y-4">
      {/* Top Action & Mode Bar for the Selected Original PDF */}
      <div className="no-print bg-sky-950 text-white rounded-xl p-4 shadow-xs border border-sky-800 space-y-3">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono-tabular font-extrabold px-2.5 py-0.5 rounded bg-emerald-400 text-slate-950">
                DOCUMENT PDF ORIGINAL ÉLÈVES · {activeDoc.pageCount}{' '}
                {activeDoc.pageCount > 1 ? 'PAGES' : 'PAGE'}
              </span>
              <span className="text-xs font-mono-tabular text-sky-200">
                Fichier : {activeDoc.downloadFileName}
              </span>
            </div>
            <h1 className="text-base sm:text-lg font-display font-extrabold text-white">
              {activeDoc.title}
            </h1>
            <p className="text-xs text-sky-100 leading-relaxed max-w-3xl">
              {activeDoc.subtitle}
            </p>
          </div>

          {/* Primary Download & Print Buttons */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-extrabold bg-emerald-400 hover:bg-emerald-300 text-slate-950 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>
                {downloadStatus || `Télécharger ce PDF (${activeDoc.pageCount}p)`}
              </span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-sky-800 hover:bg-sky-700 text-white border border-sky-600 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimer</span>
            </button>
          </div>
        </div>

        {/* Sub-bar: Switch between Exact Original PDF Pages vs Interactive Audio Study + Zoom */}
        <div className="pt-2.5 border-t border-sky-800/80 flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex rounded-lg bg-sky-900/90 p-1 border border-sky-700">
            <button
              type="button"
              onClick={() => setReadingMode('original-pages')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                readingMode === 'original-pages'
                  ? 'bg-white text-slate-950 shadow-2xs'
                  : 'text-sky-100 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-sky-700" />
              <span>Feuilles du PDF Original ({activeDoc.pageCount}p)</span>
            </button>

            <button
              type="button"
              onClick={() => setReadingMode('interactive-web')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                readingMode === 'interactive-web'
                  ? 'bg-white text-slate-950 shadow-2xs'
                  : 'text-sky-100 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-700" />
              <span>Version Interactive & Audio sur le site</span>
            </button>
          </div>

          <div className="inline-flex items-center bg-sky-900 border border-sky-700 rounded-lg p-0.5 text-xs">
            <button
              type="button"
              onClick={onZoomOut}
              className="px-2.5 py-1 rounded text-sky-100 hover:bg-sky-800 font-bold flex items-center gap-0.5 cursor-pointer"
              title="Réduire la taille"
            >
              <ZoomOut className="w-3.5 h-3.5" />-
            </button>
            <button
              type="button"
              onClick={onZoomReset}
              className="px-2.5 py-1 font-mono-tabular font-bold text-white hover:bg-sky-800 rounded cursor-pointer"
              title="Réinitialiser à 100%"
            >
              Zoom {zoomPercent}%
            </button>
            <button
              type="button"
              onClick={onZoomIn}
              className="px-2.5 py-1 rounded text-sky-100 hover:bg-sky-800 font-bold flex items-center gap-0.5 cursor-pointer"
              title="Agrandir la page"
            >
              <ZoomIn className="w-3.5 h-3.5" />+
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          MODE 1 (PAR DÉFAUT) : AFFICHAGE EXACT DES FEUILLES DU PDF ORIGINAL
      ===================================================================== */}
      {readingMode === 'original-pages' && (
        <div className="space-y-6">
          {/* Quick Page Jump Bar if multi-page document */}
          {activeDoc.pageCount > 1 && (
            <div className="no-print bg-white border border-slate-200 rounded-xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 shadow-2xs">
              <span className="text-xs font-bold text-slate-700">
                Accès rapide aux pages ({activeDoc.pageCount} pages) :
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {pageNumbers.map((num) => (
                  <a
                    key={num}
                    href={`#original-pdf-page-${num}`}
                    className="px-2.5 py-1 rounded-md text-xs font-mono-tabular font-bold bg-slate-100 hover:bg-sky-100 text-slate-800 hover:text-sky-900 border border-slate-200 transition-colors"
                  >
                    Page {num}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Render Every Original Page Image with A4 Frame */}
          <div className="space-y-6">
            {pageNumbers.map((pageNum) => {
              const imgUrl = getOriginalPdfPageImageUrl(activeDoc.pageImagePrefix, pageNum);
              const widthStyle =
                zoomPercent !== 100
                  ? { width: `${zoomPercent}%`, maxWidth: 'none' }
                  : undefined;

              return (
                <article
                  key={pageNum}
                  id={`original-pdf-page-${pageNum}`}
                  className="bg-white border border-slate-300 rounded-xl shadow-xs overflow-hidden print:shadow-none print:border-0 print:rounded-none break-after-page"
                >
                  <div className="no-print bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">
                      {activeDoc.title} — Page {pageNum} sur {activeDoc.pageCount}
                    </span>
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="inline-flex items-center gap-1 font-bold text-sky-800 hover:text-sky-950 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Télécharger le PDF ({activeDoc.pageCount}p)
                    </button>
                  </div>

                  <div className="p-2 sm:p-4 bg-slate-50/50 flex justify-center overflow-x-auto print:p-0">
                    <img
                      src={imgUrl}
                      alt={`${activeDoc.title} - Page ${pageNum}`}
                      style={widthStyle}
                      className="w-full max-w-4xl h-auto bg-white border border-slate-200 shadow-2xs rounded print:border-0 print:shadow-none"
                      loading={pageNum <= 2 ? 'eager' : 'lazy'}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* =====================================================================
          MODE 2 : VERSION INTERACTIVE & AUDIO SUR LE SITE
      ===================================================================== */}
      {readingMode === 'interactive-web' && (
        <>
          {/* DOCUMENT 1 : COURS DE LANGUE ARABE – NIVEAU A1 (12 PAGES) */}
          {activeDoc.id === 'original-arabe-a1-12p' && (
            <div className="space-y-6">
              {/* Page 1 : Objectifs & 1. Alphabet Arabe - Lettres isolées */}
              <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                      PAGE 1 / 12 · VERSION INTERACTIVE AVEC AUDIO
                    </span>
                    <h3 className="text-lg font-display font-extrabold text-slate-950">
                      Cours de Langue Arabe – Niveau A1 : 1. Alphabet Arabe (Lettres isolées)
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500">
                    Cliquez sur une ligne pour écouter la prononciation lente
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-sky-900 text-white">
                        <th className="p-2.5 border border-sky-800">Lettre</th>
                        <th className="p-2.5 border border-sky-800">Nom</th>
                        <th className="p-2.5 border border-sky-800">Son en français</th>
                        <th className="p-2.5 border border-sky-800">Exemple (Arabe · Phonétique · Sens)</th>
                        <th className="p-2.5 border border-sky-800 text-center">Audio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ARABIC_ALPHABET.map((l) => (
                        <tr
                          key={l.order}
                          onClick={() => speakArabicText(l.exampleWord.arabic)}
                          className="odd:bg-white even:bg-slate-50/80 hover:bg-sky-50/70 cursor-pointer transition-colors"
                        >
                          <td
                            dir="rtl"
                            className="p-2 border border-slate-200 font-arabic font-bold text-xl text-sky-900 text-center w-16"
                          >
                            {l.arabic}
                          </td>
                          <td className="p-2 border border-slate-200 font-bold text-slate-900">
                            {l.nameFrench}
                          </td>
                          <td className="p-2 border border-slate-200 text-slate-700">
                            {l.frenchEquivalent}
                          </td>
                          <td className="p-2 border border-slate-200">
                            <span
                              dir="rtl"
                              className="font-arabic font-bold text-lg text-slate-950 mr-2"
                            >
                              {l.exampleWord.arabic}
                            </span>
                            <span className="font-mono-tabular font-semibold text-sky-800">
                              ({l.exampleWord.phonetic} = {l.exampleWord.french})
                            </span>
                          </td>
                          <td className="p-2 border border-slate-200 text-center">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                speakArabicText(l.exampleWord.arabic);
                              }}
                              className="p-1.5 rounded-md bg-sky-50 hover:bg-sky-100 text-sky-700 cursor-pointer"
                              title="Écouter"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Pages 2 & 3 : Voyelles, Pronoms personnels, Expressions & Pronoms possessifs */}
              <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                    PAGES 2 & 3 / 12 · VOYELLES, PRONOMS & EXPRESSIONS
                  </span>
                  <h3 className="text-lg font-display font-extrabold text-slate-950">
                    2. Voyelles · 3. Pronoms personnels · 4. Expressions · 5. Pronoms possessifs
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <div className="bg-sky-900 text-white px-3.5 py-2 text-xs font-bold uppercase">
                      3. Les pronoms personnels (Singulier, Duel, Pluriel)
                    </div>
                    <table className="w-full text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-sky-50 text-sky-950">
                          <th className="p-2 border-b border-slate-200">Catégorie</th>
                          <th className="p-2 border-b border-slate-200">Arabe</th>
                          <th className="p-2 border-b border-slate-200">Français</th>
                          <th className="p-2 border-b border-slate-200">Transcription</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ORIGINAL_A1_PRONOUNS_PERSONAL.map((p, idx) => (
                          <tr
                            key={idx}
                            onClick={() => speakArabicText(p.arabic)}
                            className="border-b border-slate-100 hover:bg-sky-50/70 cursor-pointer"
                          >
                            <td className="p-2 text-slate-600 font-medium">{p.category}</td>
                            <td
                              dir="rtl"
                              className="p-2 font-arabic font-bold text-base text-slate-950"
                            >
                              {p.arabic}
                            </td>
                            <td className="p-2 font-semibold text-slate-900">{p.french}</td>
                            <td className="p-2 font-mono-tabular text-sky-800">{p.phonetic}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <div className="bg-sky-900 text-white px-3.5 py-2 text-xs font-bold uppercase">
                      5. Les pronoms possessifs (avec كِتَاب = livre)
                    </div>
                    <table className="w-full text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-sky-50 text-sky-950">
                          <th className="p-2 border-b border-slate-200">Français</th>
                          <th className="p-2 border-b border-slate-200">Suffixe</th>
                          <th className="p-2 border-b border-slate-200">Exemple (كِتَاب)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ORIGINAL_A1_PRONOUNS_POSSESSIVE.map((p, idx) => (
                          <tr
                            key={idx}
                            onClick={() => speakArabicText(p.exampleAr)}
                            className="border-b border-slate-100 hover:bg-sky-50/70 cursor-pointer"
                          >
                            <td className="p-2 font-semibold text-slate-900">{p.french}</td>
                            <td className="p-2 font-arabic font-bold text-sky-900">
                              {p.suffix} ({p.phonetic})
                            </td>
                            <td className="p-2">
                              <span className="font-arabic font-bold text-base text-slate-950 mr-1.5">
                                {p.exampleAr}
                              </span>
                              <span className="font-mono-tabular text-xs text-sky-800">
                                ({p.examplePhon})
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Pages 3 à 5 : Phrases, Objets & Animaux */}
              <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                    PAGES 3 À 5 / 12 · PHRASES, OBJETS & ANIMAUX
                  </span>
                  <h3 className="text-lg font-display font-extrabold text-slate-950">
                    6. Phrases verbales et nominales · 7. Objets · 8. Animaux
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-2.5 border border-slate-700">Type</th>
                        <th className="p-2.5 border border-slate-700">Phrase arabe</th>
                        <th className="p-2.5 border border-slate-700">Transcription</th>
                        <th className="p-2.5 border border-slate-700">Traduction</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ORIGINAL_A1_SENTENCES.map((s, idx) => (
                        <tr
                          key={idx}
                          onClick={() => speakArabicText(s.arabic)}
                          className="odd:bg-white even:bg-slate-50 hover:bg-sky-50 cursor-pointer"
                        >
                          <td className="p-2 border border-slate-200 font-semibold text-sky-900">
                            {s.type}
                          </td>
                          <td
                            dir="rtl"
                            className="p-2 border border-slate-200 font-arabic font-bold text-base text-slate-950"
                          >
                            {s.arabic}
                          </td>
                          <td className="p-2 border border-slate-200 font-mono-tabular text-sky-800">
                            {s.phonetic}
                          </td>
                          <td className="p-2 border border-slate-200 text-slate-800 font-medium">
                            {s.french}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-lg p-3.5">
                    <h4 className="text-sm font-extrabold text-slate-950 mb-2.5">
                      7. Noms des objets en arabe (15 mots)
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {ORIGINAL_A1_OBJECTS_AND_ANIMALS.objects.map((w) => (
                        <button
                          key={w.french}
                          type="button"
                          onClick={() => speakArabicText(w.arabic)}
                          className="p-2 rounded border border-slate-200 hover:border-sky-400 bg-slate-50/70 hover:bg-sky-50 text-left transition-colors cursor-pointer"
                        >
                          <div dir="rtl" className="font-arabic font-bold text-lg text-slate-950">
                            {w.arabic}
                          </div>
                          <div className="text-[11px] font-mono-tabular text-sky-800 font-semibold">
                            [{w.phonetic}]
                          </div>
                          <div className="text-xs font-bold text-slate-800">{w.french}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-3.5">
                    <h4 className="text-sm font-extrabold text-slate-950 mb-2.5">
                      8. Noms des animaux en arabe (15 mots)
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {ORIGINAL_A1_OBJECTS_AND_ANIMALS.animals.map((w) => (
                        <button
                          key={w.french}
                          type="button"
                          onClick={() => speakArabicText(w.arabic)}
                          className="p-2 rounded border border-slate-200 hover:border-sky-400 bg-slate-50/70 hover:bg-sky-50 text-left transition-colors cursor-pointer"
                        >
                          <div dir="rtl" className="font-arabic font-bold text-lg text-slate-950">
                            {w.arabic}
                          </div>
                          <div className="text-[11px] font-mono-tabular text-sky-800 font-semibold">
                            [{w.phonetic}]
                          </div>
                          <div className="text-xs font-bold text-slate-800">{w.french}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Pages 5 à 12 : Les 3 Dialogues */}
              <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-xs font-mono-tabular font-bold text-sky-700 uppercase">
                      PAGES 5 À 12 / 12 · LES 3 DIALOGUES AVEC AUDIO
                    </span>
                    <h3 className="text-lg font-display font-extrabold text-slate-950">
                      9. Dialogues 1, 2 et 3 — Mohammed & Sami
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {ORIGINAL_A1_THREE_DIALOGUES.map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setActiveDialogueId(d.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          activeDialogueId === d.id
                            ? 'bg-sky-800 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-sky-50'
                        }`}
                      >
                        {d.titleFr.split(':')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {ORIGINAL_A1_THREE_DIALOGUES.filter((d) => d.id === activeDialogueId).map(
                  (dialogue) => (
                    <div key={dialogue.id} className="space-y-2.5">
                      {dialogue.lines.map((line) => (
                        <div
                          key={line.num}
                          onClick={() => speakArabicText(line.arabic)}
                          className="p-3.5 rounded-lg border border-slate-200 hover:border-sky-400 bg-slate-50/60 hover:bg-sky-50/40 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                        >
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono-tabular font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900">
                                Réplique {line.num} · {line.speakerFr} ({line.speakerAr})
                              </span>
                              <Volume2 className="w-3.5 h-3.5 text-sky-600" />
                            </div>
                            <div className="text-xs sm:text-sm font-mono-tabular font-semibold text-sky-900">
                              {line.phonetic}
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-slate-900">
                              {line.french}
                            </div>
                          </div>

                          <div
                            dir="rtl"
                            className="font-arabic font-bold text-xl sm:text-2xl text-slate-950 text-right sm:max-w-md"
                          >
                            {line.arabic}
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                )}
              </section>
            </div>
          )}

          {/* DOCUMENT 2 : FICHE RÉSUMÉ PRATIQUE PRIÈRE (1 PAGE) */}
          {activeDoc.id === 'original-priere-1p' && (
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-950">
                  Version Audio Interactive — Fiche Résumé Pratique : Comment Faire la Prière
                </h3>
                <span className="text-xs text-slate-500">
                  Cliquez sur une étape ou un verset pour écouter
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    step: '1. Takbîrat al-Ihrâm',
                    phon: 'Allâhu Akbar',
                    ar: 'اللَّهُ أَكْبَرُ',
                    fr: 'Allah est le plus Grand'
                  },
                  {
                    step: '3. Rukû‘ (Inclinaison)',
                    phon: 'Subhâna Rabbiya l-‘Adhîm (× 3)',
                    ar: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
                    fr: 'Gloire à mon Seigneur le Très Grand'
                  },
                  {
                    step: '4. I‘tidâl (Se redresser)',
                    phon: 'Sami‘a Llâhu liman hamidah · Rabbanâ wa laka l-hamd',
                    ar: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ / رَبَّنَا وَلَكَ الْحَمْدُ',
                    fr: 'Allah entend celui qui Le loue / Notre Seigneur, à Toi la louange'
                  },
                  {
                    step: '5 & 7. Sujûd (Prosternation)',
                    phon: 'Subhâna Rabbiya l-A‘lâ (× 3)',
                    ar: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
                    fr: 'Gloire à mon Seigneur le Très Haut'
                  },
                  {
                    step: '6. Jalsa (Assise entre les 2 Sujûd)',
                    phon: 'Rabbi ghfir lî, Rabbi ghfir lî',
                    ar: 'رَبِّ اغْفِرْ لِي',
                    fr: 'Seigneur, pardonne-moi (2 fois)'
                  },
                  {
                    step: '8. Taslîm (Salut final)',
                    phon: 'As-salâmu ‘alaykum wa rahmatu Llâh',
                    ar: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
                    fr: 'Que la paix et la miséricorde d’Allah soient sur vous'
                  }
                ].map((item) => (
                  <div
                    key={item.step}
                    onClick={() => speakArabicText(item.ar)}
                    className="p-3.5 rounded-lg border border-slate-200 hover:border-sky-400 bg-slate-50/70 cursor-pointer space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-sky-900">{item.step}</span>
                      <Volume2 className="w-4 h-4 text-sky-600" />
                    </div>
                    <div dir="rtl" className="font-arabic font-bold text-xl text-slate-950">
                      {item.ar}
                    </div>
                    <div className="text-xs font-mono-tabular font-semibold text-amber-900">
                      {item.phon}
                    </div>
                    <div className="text-xs text-slate-700">{item.fr}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DOCUMENT 3 : L'ISLAM DE A À Z (3 PAGES) */}
          {activeDoc.id === 'original-islam-az-3p' && (
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-5">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-950 border-b border-slate-200 pb-3">
                Les 25 Prophètes mentionnés dans le Coran (Cliquez pour écouter en arabe)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {TWENTY_FIVE_PROPHETS_QURAN.map((pr) => (
                  <button
                    key={pr.num}
                    type="button"
                    onClick={() => speakArabicText(pr.ar)}
                    className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-sky-50 flex items-center justify-between cursor-pointer"
                  >
                    <span className="text-xs font-bold text-slate-800">
                      {pr.num}. {pr.fr}
                    </span>
                    <span dir="rtl" className="font-arabic font-bold text-base text-sky-950">
                      {pr.ar}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* DOCUMENT 4 : QUESTIONNAIRE — LES GRANDES LIGNES DE L'ISLAM */}
          {activeDoc.id === 'original-questionnaire-islam-2p' && (
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-950 border-b border-slate-200 pb-3">
                Entraînement Interactif aux 9 Questions (Barème / 20)
              </h3>
              <div className="space-y-4">
                {QUESTIONNAIRE_ISLAM_9_QUESTIONS.map((q) => (
                  <div
                    key={q.num}
                    className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-2.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-extrabold text-slate-950">
                        Question {q.num} — {q.titleFr} ({q.titleAr})
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-100 text-amber-900">
                        {q.points}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700">{q.prompt}</p>
                    <div className="space-y-2">
                      {q.items.map((item, idx) => {
                        const key = `q${q.num}_${idx}`;
                        const isPreFilled =
                          item.includes('SIYAM') || item.includes('CROIRE AUX LIVRES');
                        return (
                          <div key={key} className="p-2 rounded bg-white border border-slate-200 text-xs">
                            <div className="font-medium text-slate-800 mb-1">{item}</div>
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
                                placeholder="Votre réponse..."
                                className="w-full px-2.5 py-1 text-xs bg-slate-50 border border-slate-200 rounded"
                              />
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-bold">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Déjà rempli sur la fiche
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
