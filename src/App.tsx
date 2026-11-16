import React, { useState } from 'react';
import {
  BookOpen,
  Compass,
  GraduationCap,
  Headphones,
  Sparkles,
  FileText,
  Layers,
  MessageSquare,
  CheckCircle2,
  Droplets
} from 'lucide-react';
import { MosqueeSalemLogo } from './components/MosqueeSalemLogo';
import {
  UnifiedArabicPortalView,
  ArabicChapterId
} from './components/UnifiedArabicPortalView';
import {
  UnifiedReligionPortalView,
  ReligionChapterId
} from './components/UnifiedReligionPortalView';

type MainDomain = 'arabe' | 'religion';

const ARABIC_CHAPTERS: {
  id: ArabicChapterId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: 'alphabet-voyelles',
    label: 'Alphabet & Voyelles',
    icon: BookOpen
  },
  {
    id: 'grammaire-pronoms',
    label: 'Grammaire & Pronoms',
    icon: Layers
  },
  {
    id: 'conjugaison-racines',
    label: 'Conjugaison & Racines',
    icon: GraduationCap
  },
  {
    id: 'vocabulaire-themes',
    label: 'Vocabulaire par Thème',
    icon: BookOpen
  },
  {
    id: 'dialogues-lecture',
    label: 'Dialogues & Lecture',
    icon: MessageSquare
  },
  {
    id: 'exercices-supports',
    label: 'QCM & Supports PDF',
    icon: FileText
  }
];

const RELIGION_CHAPTERS: {
  id: ReligionChapterId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: 'ablutions-priere',
    label: 'Ablutions & Prière',
    icon: Droplets
  },
  {
    id: 'fondements-fiqh',
    label: 'L’Islam de A à Z & Fiqh',
    icon: Compass
  },
  {
    id: 'questionnaire-evaluation',
    label: 'Questionnaire & QCM',
    icon: CheckCircle2
  },
  {
    id: 'coran-sourates',
    label: 'Coran (25 Sourates)',
    icon: Headphones
  },
  {
    id: 'tasbih-invocations',
    label: 'Compteur de Tasbīḥ',
    icon: Sparkles
  },
  {
    id: 'supports-pdf-religion',
    label: 'Supports PDF Religion',
    icon: FileText
  }
];

export default function App() {
  const [domain, setDomain] = useState<MainDomain>('arabe');
  const [arabicChapter, setArabicChapter] =
    useState<ArabicChapterId>('alphabet-voyelles');
  const [religionChapter, setReligionChapter] =
    useState<ReligionChapterId>('ablutions-priere');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* =====================================================================
          BARRE SUPÉRIEURE UNIQUE — SÉLECTION EN HAUT (ARABE | RELIGION + CHAPITRES)
      ===================================================================== */}
      <header className="no-print sticky top-0 z-30 bg-white border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Logo Mosquée SALEM de Saint-Sulpice-la-Pointe */}
          <div
            onClick={() => {
              setDomain('arabe');
              setArabicChapter('alphabet-voyelles');
            }}
            role="button"
            aria-label="Accueil Mosquée SALEM de Saint-Sulpice-la-Pointe"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setDomain('arabe');
                setArabicChapter('alphabet-voyelles');
              }
            }}
            className="cursor-pointer self-start lg:self-auto"
          >
            <MosqueeSalemLogo size="md" showSubtitle={true} />
          </div>

          {/* Sélecteur Principal en Haut : Langue Arabe | Religion, Prière & Coran */}
          <div
            role="tablist"
            aria-label="Choisir l’espace d’étude"
            className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200"
          >
            <button
              type="button"
              role="tab"
              aria-selected={domain === 'arabe'}
              onClick={() => setDomain('arabe')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                domain === 'arabe'
                  ? 'bg-sky-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-white/80'
              }`}
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>Langue Arabe</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={domain === 'religion'}
              onClick={() => setDomain('religion')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                domain === 'religion'
                  ? 'bg-sky-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-white/80'
              }`}
            >
              <Compass className="w-4 h-4 shrink-0" />
              <span>Religion, Prière & Coran</span>
            </button>
          </div>
        </div>

        {/* Deuxième ligne en haut : Navigation horizontale par chapitre thématique */}
        <div className="bg-sky-50/80 border-t border-sky-200/80">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2">
            {domain === 'arabe' ? (
              <nav
                aria-label="Chapitres de Langue Arabe"
                className="flex flex-wrap items-center gap-1.5 sm:gap-2"
              >
                {ARABIC_CHAPTERS.map((chap) => {
                  const Icon = chap.icon;
                  const isActive = arabicChapter === chap.id;
                  return (
                    <button
                      key={chap.id}
                      type="button"
                      onClick={() => setArabicChapter(chap.id)}
                      className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        isActive
                          ? 'bg-sky-900 text-white shadow-2xs'
                          : 'bg-white text-slate-800 hover:bg-sky-100/70 hover:text-sky-950 border border-sky-200/90'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span>{chap.label}</span>
                    </button>
                  );
                })}
              </nav>
            ) : (
              <nav
                aria-label="Chapitres de Religion, Prière & Coran"
                className="flex flex-wrap items-center gap-1.5 sm:gap-2"
              >
                {RELIGION_CHAPTERS.map((chap) => {
                  const Icon = chap.icon;
                  const isActive = religionChapter === chap.id;
                  return (
                    <button
                      key={chap.id}
                      type="button"
                      onClick={() => setReligionChapter(chap.id)}
                      className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        isActive
                          ? 'bg-sky-900 text-white shadow-2xs'
                          : 'bg-white text-slate-800 hover:bg-sky-100/70 hover:text-sky-950 border border-sky-200/90'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span>{chap.label}</span>
                    </button>
                  );
                })}
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* =====================================================================
          CONTENU PRINCIPAL PLEINE LARGEUR (HOMOGÈNE, SANS COLONNE GAUCHE)
      ===================================================================== */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-5 sm:py-6">
        {domain === 'arabe' ? (
          <UnifiedArabicPortalView activeChapter={arabicChapter} />
        ) : (
          <UnifiedReligionPortalView activeChapter={religionChapter} />
        )}
      </main>

      {/* Pied de page sobre */}
      <footer className="no-print bg-white border-t border-slate-200 py-5 px-4 sm:px-6 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <MosqueeSalemLogo size="sm" showSubtitle={false} />
          <div className="text-center md:text-right space-y-0.5">
            <div className="font-semibold text-slate-900">
              Mosquée SALEM de Saint-Sulpice-la-Pointe — Institut d’Enseignement de la Langue Arabe et des Sciences Islamiques
            </div>
            <div className="text-[11px] text-slate-500">
              Cours en ligne avec prononciation audio lente, exercices interactifs et supports PDF prêts à imprimer
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
