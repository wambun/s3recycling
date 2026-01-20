export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 's3-exec-named-top-impact-ceo',
    title: 'S3 Exec Named a Top Impact CEO',
    excerpt:
      'Rod McDaniel is among CEOs around the country who are recognized for leadership, vision, and influence.',
    date: '2026-01-16',
    author: 'S3 Recycling Solutions',
    category: 'Awards',
  },
  {
    slug: 's3-ranks-on-the-2025-inc-list',
    title: 'S3 Ranks on the 2025 INC List',
    excerpt:
      'With three-year revenue growth of 145 percent, S3 Recycling Solutions ranks among America\'s fastest-growing private companies.',
    date: '2025-08-12',
    author: 'S3 Recycling Solutions',
    category: 'Awards',
  },
  {
    slug: 's3-receives-important-r2v3-certification',
    title: 'S3 Receives Important R2v3 Certification',
    excerpt:
      'S3 Recycling Solutions has achieved R2v3 certification, the latest standard in responsible electronics recycling.',
    date: '2024-09-15',
    author: 'S3 Recycling Solutions',
    category: 'Certifications',
  },
  {
    slug: 's3-ranks-no-1006-on-the-inc-5000',
    title: 'S3 Ranks No. 1006 on the Inc. 5000',
    excerpt:
      'S3 Recycling Solutions has been named to the Inc. 5000 list of America\'s fastest-growing private companies.',
    date: '2024-08-10',
    author: 'S3 Recycling Solutions',
    category: 'Awards',
  },
  {
    slug: 's3-named-best-place-to-work',
    title: 'S3 Named a Best Place to Work',
    excerpt:
      'S3 Recycling Solutions has been recognized as one of the best places to work in the Nashville area.',
    date: '2024-06-20',
    author: 'S3 Recycling Solutions',
    category: 'Company News',
  },
  {
    slug: 's3-acquires-iglobal',
    title: 'S3 Acquires iGlobal',
    excerpt:
      'S3 Recycling Solutions expands its capabilities with the acquisition of iGlobal, a leading IT asset disposition company.',
    date: '2024-03-15',
    author: 'S3 Recycling Solutions',
    category: 'Company News',
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
