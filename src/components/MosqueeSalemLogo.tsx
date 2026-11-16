import React from 'react';

interface MosqueeSalemLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const MosqueeSalemLogo: React.FC<MosqueeSalemLogoProps> = ({
  size = 'md',
  showSubtitle = true
}) => {
  const dimensions =
    size === 'sm'
      ? 'w-9 h-9'
      : size === 'lg'
      ? 'w-13 h-13'
      : 'w-11 h-11';

  return (
    <div className="no-print inline-flex items-center gap-3 select-none">
      {/* Architectural Emblem of Mosquée SALEM de Saint-Sulpice-la-Pointe */}
      <div
        className={`${dimensions} rounded-xl bg-gradient-to-br from-sky-600 via-sky-700 to-sky-900 p-0.5 shadow-xs shrink-0 flex items-center justify-center relative overflow-hidden border border-sky-300/60`}
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-[10px] bg-gradient-to-b from-sky-700 to-sky-900 flex flex-col items-center justify-center relative">
          <svg
            viewBox="0 0 64 64"
            className="w-full h-full p-1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer subtle octagonal star frame */}
            <rect
              x="6"
              y="6"
              width="52"
              height="52"
              rx="10"
              stroke="rgba(186,230,253,0.35)"
              strokeWidth="1.2"
            />
            {/* Crescent Moon at top */}
            <path
              d="M33.5 9.5C30.8 10.2 29.2 12.9 30 15.6C30.8 18.3 33.6 19.8 36.3 19C34.9 20.1 33 20.5 31.1 19.9C28.1 19 26.4 15.8 27.3 12.8C28.1 10.2 30.8 8.7 33.5 9.5Z"
              fill="#FDE68A"
            />
            {/* Right Minaret */}
            <path
              d="M47 22L49.5 17L52 22V48H47V22Z"
              fill="#E0F2FE"
              stroke="#7DD3FC"
              strokeWidth="1"
            />
            <rect x="48.5" y="13.5" width="2" height="3.5" rx="1" fill="#FDE68A" />
            {/* Left Minaret */}
            <path
              d="M12 25L14 20.5L16 25V48H12V25Z"
              fill="#BAE6FD"
              stroke="#7DD3FC"
              strokeWidth="1"
            />
            {/* Central Mosque Dome */}
            <path
              d="M18 36C18 27.5 24.5 22 31.5 20C38.5 22 45 27.5 45 36H18Z"
              fill="#FFFFFF"
            />
            {/* Mosque Base & Archway */}
            <rect x="17" y="36" width="29" height="12" rx="1.5" fill="#F0F9FF" />
            <path
              d="M27.5 48V41.5C27.5 39.2 29.3 37.5 31.5 37.5C33.7 37.5 35.5 39.2 35.5 41.5V48H27.5Z"
              fill="#0284C7"
            />
            {/* Bottom Wave (Tarn / Agout river symbol of Saint-Sulpice-la-Pointe) */}
            <path
              d="M10 52.5C17 50.5 24 54.5 32 52.5C40 50.5 47 54.5 54 52.5"
              stroke="#7DD3FC"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Text Lockup (French only — no Arabic mosque name) */}
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-display font-extrabold text-sm sm:text-base text-slate-950 tracking-tight whitespace-nowrap">
            Mosquée SALEM
          </span>
          <span className="text-xs font-medium text-sky-700 whitespace-nowrap">
            Saint-Sulpice-la-Pointe
          </span>
        </div>
        {showSubtitle && (
          <p className="text-xs text-slate-500 truncate">
            Institut d’Enseignement Arabe &amp; Sciences Islamiques
          </p>
        )}
      </div>
    </div>
  );
};
