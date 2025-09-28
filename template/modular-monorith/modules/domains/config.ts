export type DomainDescriptor = {
  slug: string;
  title: string;
  summary: string;
  tagline: string;
};

export const DOMAIN_DESCRIPTORS: DomainDescriptor[] = [
  {
    slug: 'marketing',
    title: 'Marketing',
    summary: 'Campaign planning, lead scoring, and audience insights.',
    tagline: 'Reach and convert the right customers with data-backed campaigns.',
  },
  {
    slug: 'accounts',
    title: 'Accounts',
    summary: 'Account provisioning, plan management, and billing visibility.',
    tagline: 'Give customer success teams a full picture of every account.',
  },
  {
    slug: 'support',
    title: 'Support',
    summary: 'Knowledge base, multichannel routing, and SLA analytics.',
    tagline: 'Equip agents to solve issues quickly wherever customers reach out.',
  },
];
