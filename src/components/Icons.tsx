import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

const svgBase = (size: number, className: string, children: React.ReactNode) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

export const Menu: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </>
  ));

export const X: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ));

export const ChevronDown: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, <path d="m6 9 6 6 6-6" />);

export const ChevronLeft: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, <path d="m15 18-6-6 6-6" />);

export const ChevronRight: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, <path d="m9 18 6-6-6-6" />);

export const Zap: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />);

export const ShieldCheck: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </>
  ));

export const Clock: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ));

export const Search: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ));

export const CalendarDays: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <>
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </>
  ));

export const CheckCircle2: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </>
  ));

export const Calendar: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <>
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </>
  ));

export const Users: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ));

export const DollarSign: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <>
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </>
  ));

export const Headphones: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <>
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </>
  ));

export const Star: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const MapPin: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ));

export const Mail: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ));

export const Phone: React.FC<IconProps> = ({ className = '', size = 24 }) =>
  svgBase(size, className, (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ));
