import {FC} from 'react';

interface SvgProps {
  className?: string;
  size?: number;
  color?: string;
}

export const LogoSvg: FC<SvgProps> = ({ className = 'h-10 w-10', color = 'currentColor' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer elegant dial or constellation circles */}
      <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="0.5" opacity="0.4" />
      
      {/* Cupid's Bow (Amor) merged with Modern Needle (Nadel) */}
      {/* Bow Arc */}
      <path
        d="M25 50 C25 25, 75 25, 75 50"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M20 50 C20 20, 80 20, 80 50"
        stroke="#C8102E" /* Tattoo Red highlight */
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Bow String (straight bottom chord) */}
      <line x1="25" y1="50" x2="75" y2="50" stroke={color} strokeWidth="0.5" opacity="0.5" />

      {/* The Arrow / Needle going straight down through the center */}
      {/* Needle shaft */}
      <line x1="50" y1="15" x2="50" y2="78" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="15" x2="50" y2="78" stroke="#D4A017" /* Old Gold inner line */ strokeWidth="0.8" />
      
      {/* Heart-shaped flight at the top of the arrow/needle */}
      <path
        d="M50 15 C45 8, 38 12, 50 24 C62 12, 55 8, 50 15 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      />

      {/* Precision grip ridges on tattoo needle */}
      <line x1="46" y1="62" x2="54" y2="62" stroke={color} strokeWidth="1" />
      <line x1="46" y1="66" x2="54" y2="66" stroke={color} strokeWidth="1" />
      <line x1="46" y1="70" x2="54" y2="70" stroke={color} strokeWidth="1" />

      {/* Needle tip - extremely fine taper */}
      <path d="M50 78 L48.5 83 L50 88 L51.5 83 Z" fill={color} />
      {/* Ink droplet falling from the needle */}
      <path
        d="M50 90 C51 90, 52.5 91, 52.5 92.5 C52.5 94, 50 96, 50 96 C50 96, 47.5 94, 47.5 92.5 C47.5 91, 49 90, 50 90 Z"
        fill="#C8102E" /* Tattoo Red blood/ink drop */
      />
    </svg>
  );
};

export const OrnamentDivider: FC<SvgProps> = ({ className = 'w-full h-8', color = '#D4A017' }) => {
  return (
    <svg
      viewBox="0 0 400 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="10" y1="15" x2="160" y2="15" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="240" y1="15" x2="390" y2="15" stroke={color} strokeWidth="1" opacity="0.4" />
      
      {/* Central Gothic/Baroque ornament */}
      {/* Left scroll */}
      <path d="M160 15 C170 5, 180 5, 185 15 C190 25, 175 25, 180 15" stroke={color} strokeWidth="1" fill="none" />
      {/* Right scroll */}
      <path d="M240 15 C230 5, 220 5, 215 15 C210 25, 225 25, 220 15" stroke={color} strokeWidth="1" fill="none" />
      
      {/* Centerpiece Diamond & Dots */}
      <path d="M200 7 L208 15 L200 23 L192 15 Z" fill="#C8102E" stroke={color} strokeWidth="1" />
      <circle cx="200" cy="15" r="2" fill={color} />
      <circle cx="172" cy="15" r="1.5" fill={color} />
      <circle cx="228" cy="15" r="1.5" fill={color} />
    </svg>
  );
};

export const CompassRoseSvg: FC<SvgProps> = ({ className = 'h-12 w-12', color = '#D4A017' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
      <circle cx="50" cy="50" r="35" stroke={color} strokeWidth="0.5" opacity="0.3" />
      
      {/* Compass Points */}
      {/* North */}
      <path d="M50 50 L50 15 L53 47 Z" fill={color} />
      <path d="M50 50 L50 15 L47 47 Z" fill="none" stroke={color} strokeWidth="0.5" />
      
      {/* South */}
      <path d="M50 50 L50 85 L47 53 Z" fill={color} opacity="0.8" />
      <path d="M50 50 L50 85 L53 53 Z" fill="none" stroke={color} strokeWidth="0.5" />

      {/* East */}
      <path d="M50 50 L85 50 L53 53 Z" fill={color} opacity="0.9" />
      <path d="M50 50 L85 50 L53 47 Z" fill="none" stroke={color} strokeWidth="0.5" />

      {/* West */}
      <path d="M50 50 L15 50 L47 47 Z" fill={color} opacity="0.7" />
      <path d="M50 50 L15 50 L47 53 Z" fill="none" stroke={color} strokeWidth="0.5" />

      {/* Intercardinal lines */}
      <line x1="25" y1="25" x2="75" y2="75" stroke={color} strokeWidth="0.5" opacity="0.5" />
      <line x1="75" y1="25" x2="25" y2="75" stroke={color} strokeWidth="0.5" opacity="0.5" />

      {/* Heart of the Rose */}
      <circle cx="50" cy="50" r="6" fill="#C8102E" stroke={color} strokeWidth="1" />
      <circle cx="50" cy="50" r="2" fill="#F5F2EC" />
    </svg>
  );
};

export const SignatureCheckSvg: FC<SvgProps> = ({ className = 'h-5 w-5', color = '#D4A017' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1" opacity="0.5" />
      <path
        d="M7 12 L10 15 L17 8"
        stroke="#C8102E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
