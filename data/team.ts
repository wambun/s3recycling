export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const leadershipTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Rod McDaniel',
    role: 'Chief Executive Officer',
    bio: 'Rod McDaniel leads S3 Recycling Solutions with a vision to combat our planet\'s e-waste epidemic through environmentally and financially responsible processes. Under his leadership, S3 has been recognized as one of America\'s fastest-growing private companies by Inc. Magazine.',
  },
  {
    id: '2',
    name: 'Darrell S. Freeman, Sr.',
    role: 'Founder & Chairman (In Memoriam)',
    bio: 'The late Darrell S. Freeman, Sr. founded S3 Recycling Solutions with a commitment to creating sustainable solutions for electronic waste. His legacy continues to guide the company\'s mission and values.',
  },
  {
    id: '3',
    name: 'Leadership Team Member',
    role: 'Chief Operating Officer',
    bio: 'Our COO oversees daily operations, ensuring that S3 maintains the highest standards of efficiency, security, and customer service across all facilities.',
  },
  {
    id: '4',
    name: 'Leadership Team Member',
    role: 'Director of Logistics',
    bio: 'Our Director of Logistics manages the nationwide pickup and delivery network, coordinating secure transportation of IT assets from client locations to our processing facility.',
  },
  {
    id: '5',
    name: 'Leadership Team Member',
    role: 'Director of Business Development',
    bio: 'Our Director of Business Development works to expand S3\'s reach and build partnerships with organizations across various industries seeking responsible e-waste solutions.',
  },
];

export const companyValues = [
  {
    title: 'Security',
    description:
      'We maintain the highest data security standards, ensuring your sensitive information is protected throughout the entire disposition process.',
    icon: 'shield',
  },
  {
    title: 'Sustainability',
    description:
      'Our zero landfill policy and 95% reuse/recycle rate demonstrate our commitment to environmental responsibility.',
    icon: 'leaf',
  },
  {
    title: 'Stewardship',
    description:
      'We take responsibility for the proper handling of electronic assets, from pickup to final disposition.',
    icon: 'heart',
  },
  {
    title: 'Integrity',
    description:
      'We operate with transparency and honesty, providing detailed reporting and maintaining the trust of our clients.',
    icon: 'check',
  },
  {
    title: 'Community',
    description:
      'We give back to our communities through charitable donations, partnerships, and environmental initiatives.',
    icon: 'users',
  },
  {
    title: 'Excellence',
    description:
      'We strive for excellence in every aspect of our business, from customer service to operational efficiency.',
    icon: 'star',
  },
];

export const processSteps = [
  {
    step: 1,
    title: 'Initial Contact',
    description:
      'Reach out to S3 to discuss your e-waste recycling needs. Our team will assess your situation and provide a customized solution.',
  },
  {
    step: 2,
    title: 'Schedule Pickup',
    description:
      'We arrange a convenient pickup time at your location. Our white-glove service includes all necessary equipment and personnel.',
  },
  {
    step: 3,
    title: 'Secure Transportation',
    description:
      'Your assets are securely transported to our R2-certified facility using GPS-tracked vehicles and chain of custody documentation.',
  },
  {
    step: 4,
    title: 'Inventory & Assessment',
    description:
      'Each item is inventoried with make, model, and serial number. We assess equipment for remarketing potential or recycling.',
  },
  {
    step: 5,
    title: 'Data Destruction',
    description:
      'All data-containing devices undergo secure wiping or physical destruction according to NIST 800-88 guidelines.',
  },
  {
    step: 6,
    title: 'Processing & Disposition',
    description:
      'Equipment is either remarketed, donated, or responsibly recycled. Nothing goes to landfill.',
  },
  {
    step: 7,
    title: 'Documentation & Reporting',
    description:
      'Receive comprehensive reports including inventory audits, certificates of destruction, and ESG/sustainability documentation.',
  },
];
