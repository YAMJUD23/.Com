import React from 'react';
import { Volume2 } from 'lucide-react';
import { ArabicTriad } from '../data/alphabetData';
import { speakArabicText } from '../utils/pdfGenerator';

interface ArabicTriadBlockProps {
  triad: ArabicTriad;
  size?: 'sm' | 'md' | 'lg';
  showAudio?: boolean;
  labelPrefix?: string;
}

export const ArabicTriadBlock: React.FC<ArabicTriadBlockProps> = ({
  triad,
  size = 'md',
  showAudio = true,
  labelPrefix
}) => {
  const arabicSizeClass =
    size === 'lg'
      ? 'text-3xl sm:text-4xl'
      : size === 'sm'
      ? 'text-xl'
      : 'text-2xl sm:text-3xl';

  return (
    <div className="bg-sky-50/60 border border-sky-100 rounded-xl p-3.5 transition-colors hover:border-sky-200">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1 min-w-0">
          {labelPrefix && (
            <p className="text-xs font-medium text-slate-500">
              {labelPrefix}
            </p>
          )}
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span className="text-xs font-medium text-slate-500">Phonétique :</span>
            <span className="font-mono-tabular text-sm font-semibold text-sky-700">
              {triad.phonetic}
            </span>
          </div>
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span className="text-xs font-medium text-slate-500">Sens français :</span>
            <span className="text-sm font-medium text-slate-900">
              {triad.french}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <span
            dir="rtl"
            lang="ar"
            className={`font-arabic font-bold text-slate-900 select-all ${arabicSizeClass}`}
          >
            {triad.arabic}
          </span>
          {showAudio && (
            <button
              type="button"
              onClick={() => speakArabicText(triad.arabic)}
              aria-label={`Écouter ${triad.phonetic} (${triad.french})`}
              title={`Écouter la prononciation : ${triad.phonetic}`}
              className="p-2 text-sky-700 hover:text-sky-900 hover:bg-sky-100/80 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-sky-600"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
