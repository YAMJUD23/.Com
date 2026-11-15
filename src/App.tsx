import React, { useState } from 'react';
import {
  FileText,
  Download,
  Printer,
  Search,
  Layers,
  CheckCircle2,
  AlignJustify,
  BookOpen,
  ZoomIn,
  ZoomOut,
  Compass,
  Scale,
  Headphones,
  Sparkles
} from 'lucide-react';
import {
  COMPLETE_PDF_DOCUMENTS,
  CompletePdfDocId,
  downloadCompleteMultiPagePdf
} from './utils/pdfGenerator';
import { DirectPdfPagesRenderer } from './components/DirectPdfPagesRenderer';
import { MosqueeSalemLogo } from './components/MosqueeSalemLogo';
import { PrayerAndReligionView } from './components/PrayerAndReligionView';
import { Quran25ReaderView } from './components/Quran25ReaderView';
import { TasbihCounterView } from './components/TasbihCounterView';

type PdfViewMode = CompletePdfDocId | 'all-pdfs';
type MainPortalSection =
  | 'pdfs-arabe'
  | 'priere-ablutions'
  | 'principes-islam'
  | 'coran-25-dossari'
  | 'tasbih-dhikr';

export default function App() {
  const [portalSection, setPortalSection] = useState<MainPortalSection>('pdfs-arabe');
  const [activeDoc, setActiveDoc] = useState<PdfViewMode>('pdf-alphabet');
  const [density, setDensity] = useState<'tight' | 'normal'>('tight');
  const [zoomPercent, setZoomPercent] = useState<number>(100);
  const [searchQuery, setSearchQuery] = useState('');
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});

  const handleQuizCompleted = (sectionId: string, percentage: number) => {
    setQuizScores((prev) => ({
      ...prev,
      [sectionId]: Math.max(prev[sectionId] ?? 0, percentage)
    }));
  };

  const handleZoomOut = () => {
    setZoomPercent((prev) => Math.max(80, prev - 15));
  };

  const handleZoomIn = () => {
    setZoomPercent((prev) => Math.min(175, prev + 15));
  };

  const handleDownloadCurrent = () => {
    if (activeDoc === 'all-pdfs') {
      COMPLETE_PDF_DOCUMENTS.forEach((doc, idx) => {
        setTimeout(() => {
          downloadCompleteMultiPagePdf(doc.id);
        }, idx * 350);
      });
    } else {
      downloadCompleteMultiPagePdf(activeDoc);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-sky-50/50 text-slate-900">
      {/* Top Navigation Bar — Sky-Blue & White, Mosquée SALEM Logo on site ONLY (no-print) */}
      <header className="no-print sticky top-0 z-30 bg-white border-b border-sky-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-col xl:flex-row xl:items-center justify-between gap-3">
          {/* Left Zone: Mosquée SALEM de Saint-Sulpice-la-Pointe Logo (Visible on site, never on PDFs) */}
          <div className="flex items-center justify-between gap-3">
            <div
              onClick={() => setPortalSection('pdfs-arabe')}
              role="button"
              aria-label="Accueil Mosquée SALEM de Saint-Sulpice-la-Pointe"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setPortalSection('pdfs-arabe');
                }
              }}
              className="cursor-pointer"
            >
              <MosqueeSalemLogo size="md" showSubtitle={true} />
            </div>

            {portalSection === 'pdfs-arabe' && (
              <button
                type="button"
                onClick={() => window.print()}
                className="xl:hidden inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-md cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                Imprimer
              </button>
            )}
          </div>

          {/* Right Zone: Primary Portal Navigation (5 Pôles Complets) */}
          <nav
            aria-label="Rubriques principales du portail Mosquée SALEM"
            className="flex flex-wrap items-center gap-1.5"
          >
            <button
              type="button"
              onClick={() => setPortalSection('pdfs-arabe')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                portalSection === 'pdfs-arabe'
                  ? 'bg-sky-600 text-white shadow-2xs'
                  : 'bg-sky-50 text-sky-950 hover:bg-sky-100 border border-sky-200/90'
              }`}
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span>Livrets PDF (11 PDF · Arabe, Prière & Islam)</span>
            </button>

            <button
              type="button"
              onClick={() => setPortalSection('priere-ablutions')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                portalSection === 'priere-ablutions'
                  ? 'bg-sky-600 text-white shadow-2xs'
                  : 'bg-sky-50 text-sky-950 hover:bg-sky-100 border border-sky-200/90'
              }`}
            >
              <Compass className="w-3.5 h-3.5 shrink-0" />
              <span>Ablutions & Prière (Ṣalāt)</span>
            </button>

            <button
              type="button"
              onClick={() => setPortalSection('principes-islam')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                portalSection === 'principes-islam'
                  ? 'bg-sky-600 text-white shadow-2xs'
                  : 'bg-sky-50 text-sky-950 hover:bg-sky-100 border border-sky-200/90'
              }`}
            >
              <Scale className="w-3.5 h-3.5 shrink-0" />
              <span>Principes & Sciences de l’Islam</span>
            </button>

            <button
              type="button"
              onClick={() => setPortalSection('coran-25-dossari')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                portalSection === 'coran-25-dossari'
                  ? 'bg-sky-600 text-white shadow-2xs'
                  : 'bg-sky-50 text-sky-950 hover:bg-sky-100 border border-sky-200/90'
              }`}
            >
              <Headphones className="w-3.5 h-3.5 shrink-0" />
              <span>Coran (25 Sourates · Al-Dosari)</span>
            </button>

            <button
              type="button"
              onClick={() => setPortalSection('tasbih-dhikr')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                portalSection === 'tasbih-dhikr'
                  ? 'bg-sky-600 text-white shadow-2xs'
                  : 'bg-sky-50 text-sky-950 hover:bg-sky-100 border border-sky-200/90'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Compteur de Tasbīḥ</span>
            </button>
          </nav>
        </div>

        {/* Sub-Toolbar ONLY when viewing the 11 Printable PDFs */}
        {portalSection === 'pdfs-arabe' && (
          <div className="bg-sky-50/90 border-t border-sky-200/80">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 space-y-2">
              {/* Direct PDF Document Selector Tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
                {COMPLETE_PDF_DOCUMENTS.map((doc) => {
                  const isSelected = activeDoc === doc.id;
                  return (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => setActiveDoc(doc.id)}
                      className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-sky-700 text-white shadow-2xs'
                          : 'bg-white text-sky-950 hover:bg-sky-100 border border-sky-200'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5 shrink-0" />
                      <span>{doc.title}</span>
                      <span
                        className={`font-mono-tabular text-[10px] ${
                          isSelected ? 'text-sky-100' : 'text-sky-700'
                        }`}
                      >
                        ({doc.pageCount}p)
                      </span>
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => setActiveDoc('all-pdfs')}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeDoc === 'all-pdfs'
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-800 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-sky-600" />
                  <span>Tout afficher (22 pages A4)</span>
                </button>
              </div>

              {/* Search, Zoom, Density & Print/Download Controls */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pt-1 border-t border-sky-200/60">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-3.5 h-3.5 text-sky-700 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filtrer dans le PDF (mot français, phonétique ou arabe)..."
                    className="w-full pl-8 pr-3 py-1 text-xs bg-white border border-sky-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-600"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Zoom Control */}
                  <div className="inline-flex items-center bg-white border border-sky-200 rounded-md p-0.5 text-[11px]">
                    <button
                      type="button"
                      onClick={handleZoomOut}
                      className="px-2 py-1 rounded text-slate-700 hover:bg-sky-50 font-bold flex items-center gap-0.5 cursor-pointer"
                      title="Réduire le zoom"
                    >
                      <ZoomOut className="w-3.5 h-3.5 text-sky-700" />-
                    </button>
                    <button
                      type="button"
                      onClick={() => setZoomPercent(100)}
                      className="px-2 py-1 font-mono-tabular font-bold text-sky-900 hover:bg-sky-50 rounded cursor-pointer"
                      title="Réinitialiser le zoom à 100%"
                    >
                      Zoom {zoomPercent}%
                    </button>
                    <button
                      type="button"
                      onClick={handleZoomIn}
                      className="px-2 py-1 rounded text-slate-700 hover:bg-sky-50 font-bold flex items-center gap-0.5 cursor-pointer"
                      title="Agrandir le texte et les mots du PDF"
                    >
                      <ZoomIn className="w-3.5 h-3.5 text-sky-700" />+
                    </button>
                  </div>

                  {/* Density Toggle */}
                  <div className="inline-flex items-center bg-white border border-sky-200 rounded-md p-0.5 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setDensity('tight')}
                      className={`px-2 py-1 rounded font-semibold flex items-center gap-1 cursor-pointer ${
                        density === 'tight'
                          ? 'bg-sky-600 text-white'
                          : 'text-slate-700 hover:bg-sky-50'
                      }`}
                    >
                      <AlignJustify className="w-3 h-3" />
                      Écriture serrée
                    </button>
                    <button
                      type="button"
                      onClick={() => setDensity('normal')}
                      className={`px-2 py-1 rounded font-semibold flex items-center gap-1 cursor-pointer ${
                        density === 'normal'
                          ? 'bg-sky-600 text-white'
                          : 'text-slate-700 hover:bg-sky-50'
                      }`}
                    >
                      <BookOpen className="w-3 h-3" />
                      Lecture aérée
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleDownloadCurrent}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-md transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {activeDoc === 'all-pdfs'
                      ? 'Télécharger les 11 PDF (.pdf)'
                      : 'Télécharger ce PDF (.pdf)'}
                  </button>

                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sky-900 bg-white hover:bg-sky-100 border border-sky-300 rounded-md transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    Imprimer A4
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-2 sm:px-6 py-4 sm:py-6">
        {portalSection === 'pdfs-arabe' && (
          <>
            {/* Compact Index Strip of All 11 Complete PDF Files */}
            <section
              aria-label="Sommaire des 11 fichiers PDF complets"
              className="no-print mb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5"
            >
              {COMPLETE_PDF_DOCUMENTS.map((doc) => {
                const isActive = activeDoc === doc.id;
                const quizMap: Record<CompletePdfDocId, string> = {
                  'pdf-alphabet': 'alphabet',
                  'pdf-voyelles': 'vowels',
                  'pdf-grammaire': 'grammar-a2',
                  'pdf-vocab300': 'vocabulary',
                  'pdf-sourates': 'surahs',
                  'pdf-cahier-quiz': 'bilan-a2',
                  'pdf-conjugaison-a2': 'conjugaison-a2',
                  'pdf-conversations-a2': 'conversations-a2',
                  'pdf-textes-lecture-a2': 'lecture-a2',
                  'pdf-priere-salat': 'priere-salat',
                  'pdf-resume-islam': 'resume-islam'
                };
                const score = quizScores[quizMap[doc.id]];

                return (
                  <div
                    key={doc.id}
                    onClick={() => setActiveDoc(doc.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveDoc(doc.id);
                      }
                    }}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? 'bg-white border-sky-600 ring-2 ring-sky-500/20 shadow-xs'
                        : 'bg-white/80 border-sky-200/80 hover:bg-white hover:border-sky-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 text-[10px] font-mono-tabular font-bold text-sky-700">
                        <span>{doc.code}</span>
                        <span>{doc.pageCount} PAGES A4</span>
                      </div>
                      <div className="font-bold text-xs text-slate-950 mt-0.5 leading-snug">
                        {doc.title}
                      </div>
                      <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        {doc.subtitle}
                      </div>
                    </div>

                    <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between gap-1">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadCompleteMultiPagePdf(doc.id);
                        }}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-sky-700 hover:text-sky-900 cursor-pointer"
                      >
                        <Download className="w-3 h-3" />
                        .PDF
                      </button>
                      {typeof score === 'number' ? (
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-mono-tabular font-bold text-emerald-700">
                          <CheckCircle2 className="w-3 h-3" />
                          QCM {score}%
                        </span>
                      ) : (
                        <span className="text-[10px] text-sky-800 font-medium">
                          QCM inclus
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </section>

            {/* Render either the selected multi-page PDF or ALL 11 multi-page PDFs (22 pages total) */}
            {activeDoc === 'all-pdfs' ? (
              <div className="space-y-10">
                {COMPLETE_PDF_DOCUMENTS.map((doc) => (
                  <DirectPdfPagesRenderer
                    key={doc.id}
                    docId={doc.id}
                    density={density}
                    zoomPercent={zoomPercent}
                    searchQuery={searchQuery}
                    onQuizCompleted={handleQuizCompleted}
                  />
                ))}
              </div>
            ) : (
              <DirectPdfPagesRenderer
                docId={activeDoc}
                density={density}
                zoomPercent={zoomPercent}
                searchQuery={searchQuery}
                onQuizCompleted={handleQuizCompleted}
              />
            )}
          </>
        )}

        {portalSection === 'priere-ablutions' && (
          <PrayerAndReligionView
            key="priere-view"
            initialTab="wudu-salat"
            onOpenPdfDoc={(docId) => {
              setActiveDoc(docId);
              setPortalSection('pdfs-arabe');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {portalSection === 'principes-islam' && (
          <PrayerAndReligionView
            key="principes-view"
            initialTab="fiqh-maqasid"
            onOpenPdfDoc={(docId) => {
              setActiveDoc(docId);
              setPortalSection('pdfs-arabe');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {portalSection === 'coran-25-dossari' && <Quran25ReaderView />}

        {portalSection === 'tasbih-dhikr' && <TasbihCounterView />}
      </main>

      {/* Sober Sky-Blue & White Website Footer with Mosquée SALEM Logo (strictly no-print so never on PDFs) */}
      <footer className="no-print bg-white border-t border-sky-200 py-5 px-4 sm:px-6 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <MosqueeSalemLogo size="sm" showSubtitle={false} />
          <div className="text-center md:text-right space-y-0.5">
            <div className="font-semibold text-slate-900">
              Mosquée SALEM de Saint-Sulpice-la-Pointe — Portail Éducatif d’Arabe Littéraire (Niveau A2), Prière, Religion & Coran
            </div>
            <div className="font-mono-tabular text-[11px] text-sky-800">
              11 Livrets PDF A4 (sans logo sur les feuilles imprimées) · Cours de Prière & Fiqh · 25 Sourates (Audio Yasser Al-Dosari, lecture lente par défaut) · Compteur de Tasbīḥ
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
