interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

const Logo = ({ variant = 'dark', className = '' }: LogoProps) => {
  const primaryColor = variant === 'dark' ? '#22c55e' : '#22c55e';
  const textColor = variant === 'dark' ? '#1e1e1e' : '#ffffff';

  return (
    <svg
      viewBox="0 0 180 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="S3 Recycling Solutions"
    >
      {/* S3 Mark */}
      <g>
        {/* Recycling arrows forming S shape */}
        <path
          d="M12 8C12 8 18 4 26 8C34 12 34 20 26 24C18 28 12 24 12 24"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M12 26C12 26 18 22 26 26C34 30 34 38 26 42C18 46 12 42 12 42"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* 3 dots representing the three S's */}
        <circle cx="8" cy="16" r="3" fill={primaryColor} />
        <circle cx="8" cy="25" r="3" fill={primaryColor} />
        <circle cx="8" cy="34" r="3" fill={primaryColor} />
      </g>

      {/* S3 Text */}
      <text
        x="48"
        y="35"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="700"
        fill={textColor}
      >
        S3
      </text>

      {/* Tagline */}
      <text
        x="82"
        y="22"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="9"
        fontWeight="500"
        fill={variant === 'dark' ? '#6f6f6f' : 'rgba(255,255,255,0.8)'}
        letterSpacing="0.5"
      >
        RECYCLING
      </text>
      <text
        x="82"
        y="35"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="9"
        fontWeight="500"
        fill={variant === 'dark' ? '#6f6f6f' : 'rgba(255,255,255,0.8)'}
        letterSpacing="0.5"
      >
        SOLUTIONS
      </text>
    </svg>
  );
};

export default Logo;
