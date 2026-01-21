import Image from 'next/image';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

const Logo = ({ variant = 'dark', className = '' }: LogoProps) => {
  // Original dimensions: dark logo is 498x96, white logo is 375x144
  // Scale by 1.5x: dark becomes ~747x144, white becomes ~562x216
  // Using consistent height approach: h-15 (60px) * 1.5 = h-[90px]

  if (variant === 'light') {
    return (
      <Image
        src="/static/images/s3-logo-white.png"
        alt="S3 Recycling Solutions"
        width={234}
        height={90}
        className={className}
        priority
      />
    );
  }

  return (
    <Image
      src="/static/images/s3-logo-dark.png"
      alt="S3 Recycling Solutions"
      width={234}
      height={45}
      className={className}
      priority
    />
  );
};

export default Logo;
