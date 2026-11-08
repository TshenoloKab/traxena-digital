export type ProjectVariant =
  | 'traxena'
  | 'kgetsi'
  | 'lenclean'
  | 'naledi'
  | 'amara'
  | 'setho'
  | 'thato'
  | 'syntrix'

export type Project = {
  slug: string
  name: string
  category: string
  description: string
  variant: ProjectVariant
  conceptLabel?: string
  href?: string
  previewImage?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'cleaning-pro',
    name: 'Cleaning Pro',
    category: 'Cleaning Services',
    description: 'Cleaning Services',
    variant: 'lenclean',
    conceptLabel: 'Website Concept',
    href: 'https://cleaning-pro-rho.vercel.app',
    previewImage: '/work/previews/cleaning-pro.jpg',
  },
  {
    slug: 'trixtin-ai',
    name: 'Trixtin AI',
    category: 'Technology & AI',
    description: 'AI Solutions',
    variant: 'syntrix',
    conceptLabel: 'Website Concept',
    href: 'https://trixtin-ai.vercel.app',
    previewImage: '/work/previews/trixtin-ai.jpg',
  },
  {
    slug: 'authors-studio',
    name: "The Author's Studio",
    category: 'Author & Speaker',
    description: 'Author Branding',
    variant: 'naledi',
    conceptLabel: 'Website Concept',
    href: 'https://authors-studio.vercel.app',
    previewImage: '/work/previews/authors-studio.jpg',
  },
  {
    slug: 'elan-beauty-studio',
    name: 'Elan Beauty Studio',
    category: 'Beauty & Wellness',
    description: 'Beauty & Wellness',
    variant: 'amara',
    conceptLabel: 'Website Concept',
    href: 'https://elan-beauty-studio-tau.vercel.app',
    previewImage: '/work/previews/elan-beauty-studio.jpg',
  },
  {
    slug: 'ngwao-couture',
    name: 'Ngwao Couture',
    category: 'Fashion & Couture',
    description: 'Fashion & Retail',
    variant: 'kgetsi',
    conceptLabel: 'Website Concept',
    href: 'https://ngwao-couture.vercel.app',
    previewImage: '/work/previews/ngwao-couture.jpg',
  },
  {
    slug: 'setho-kitchen',
    name: 'Setho Kitchen',
    category: 'Food & Catering',
    description: 'Food & Catering',
    variant: 'setho',
    conceptLabel: 'Website Concept',
    href: 'https://setho-kitchen.vercel.app',
    previewImage: '/work/previews/setho-kitchen.jpg',
  },
]
