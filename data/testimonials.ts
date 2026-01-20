export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  industry: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Our partnership with S3 helps us to be good stewards of the environment and maximize our organizational efficiency as we process our surplus equipment.',
    author: 'IT Director',
    company: 'College University',
    industry: 'Education',
  },
  {
    id: '2',
    quote:
      "S3's customer service, ease of use, and account management are far superior to other recycling vendors we have partnered with in the past. All S3 personnel we have worked with have been kind and professional, making their pickups quick and easy.",
    author: 'Operations Manager',
    company: 'Financial Institution',
    industry: 'Finance',
  },
  {
    id: '3',
    quote:
      'Their reporting resources are easy to use and provide thorough documented record of all equipment recycled and all data destroyed. S3 has been an invaluable partner.',
    author: 'CTO',
    company: 'Healthcare System',
    industry: 'Healthcare',
  },
  {
    id: '4',
    quote:
      'S3 has consistently delivered on their promises. Their team is responsive, professional, and truly understands our compliance requirements.',
    author: 'Compliance Officer',
    company: 'Fortune 500 Corporation',
    industry: 'Enterprise',
  },
];
