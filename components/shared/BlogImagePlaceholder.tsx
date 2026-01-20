import { Newspaper, Award, Shield, Building, FileText } from 'lucide-react';

interface BlogImagePlaceholderProps {
  category: string;
  size?: 'sm' | 'lg';
}

const categoryIcons: Record<string, typeof Newspaper> = {
  'Awards': Award,
  'Company News': Building,
  'Certifications': Shield,
  'default': FileText,
};

const categoryColors: Record<string, { from: string; to: string; icon: string }> = {
  'Awards': { from: 'from-amber-500', to: 'to-orange-600', icon: 'text-amber-100' },
  'Company News': { from: 'from-blue-500', to: 'to-indigo-600', icon: 'text-blue-100' },
  'Certifications': { from: 'from-green-500', to: 'to-emerald-600', icon: 'text-green-100' },
  'default': { from: 'from-primary', to: 'to-secondary', icon: 'text-white/80' },
};

const BlogImagePlaceholder = ({ category, size = 'sm' }: BlogImagePlaceholderProps) => {
  const Icon = categoryIcons[category] || categoryIcons['default'];
  const colors = categoryColors[category] || categoryColors['default'];
  const iconSize = size === 'lg' ? 'w-16 h-16' : 'w-10 h-10';

  return (
    <div className={`w-full h-full bg-gradient-to-br ${colors.from} ${colors.to} flex items-center justify-center relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />

      {/* Icon */}
      <div className="relative z-10 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
        <Icon className={`${iconSize} ${colors.icon}`} />
      </div>
    </div>
  );
};

export default BlogImagePlaceholder;
