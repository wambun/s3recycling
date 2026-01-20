export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Solutions',
    href: '/services',
    children: [
      { label: 'IT Asset Disposition', href: '/services/itad' },
      { label: 'Data Destruction', href: '/services/data-destruction' },
      { label: 'E-Waste Recycling', href: '/services/end-of-life-recycling' },
      {
        label: 'Data Center Decommissioning',
        href: '/services/data-center-decommissioning',
      },
      {
        label: 'Medical Equipment Disposal',
        href: '/services/medical-equipment-disposal',
      },
      { label: 'Reverse Logistics', href: '/services/reverse-logistics' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Values', href: '/about/values' },
      { label: 'Our Process', href: '/about/process' },
    ],
  },
  { label: 'News', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  solutions: [
    { label: 'IT Asset Disposition', href: '/services/itad' },
    { label: 'Data Destruction', href: '/services/data-destruction' },
    { label: 'E-Waste Recycling', href: '/services/end-of-life-recycling' },
    { label: 'Medical Equipment', href: '/services/medical-equipment-disposal' },
    { label: 'Reverse Logistics', href: '/services/reverse-logistics' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Leadership', href: '/about/leadership' },
    { label: 'Careers', href: '/careers' },
    { label: 'News', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Client Portal', href: 'https://s3erpportal.makor-erp.com/portal' },
    { label: 'Request Pickup', href: '/pickup-request' },
    { label: 'Donation Request', href: '/donation-request' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
};

export const contactInfo = {
  phone: '888-970-S3RS',
  phoneHref: 'tel:8889707377',
  email: 'info@s3rs.com',
  emailHref: 'mailto:info@s3rs.com',
  address: 'Springfield, Tennessee',
  hours: 'Monday-Friday (7AM-4PM)',
  clientPortal: 'https://s3erpportal.makor-erp.com/portal',
};
