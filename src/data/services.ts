export type ServiceIcon = 'layout' | 'landing' | 'tools'

export type Service = {
  slug: string
  title: string
  homeDescription: string
  pageDescription: string
  includes: string[]
  ctaLabel: string
  projectType: string
  icon: ServiceIcon
}

export const services: Service[] = [
  {
    slug: 'website-design',
    title: 'Website Design & Development',
    homeDescription:
      'Professional, responsive websites that help businesses establish their online presence and showcase what they offer.',
    pageDescription:
      'Professional, responsive websites designed to help businesses communicate their value, showcase their services and connect with customers.',
    includes: [
      'Business websites',
      'Professional service websites',
      'Personal brand websites',
      'Multi-page websites',
      'Mobile-friendly websites',
    ],
    ctaLabel: 'Discuss Your Website',
    projectType: 'website-design',
    icon: 'layout',
  },
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    homeDescription:
      'Focused landing pages designed to introduce a product, promote a service or encourage visitors to take action.',
    pageDescription:
      'Focused web pages designed around a specific product, service, campaign or business objective.',
    includes: [
      'Product and service landing pages',
      'Campaign landing pages',
      'Startup and product launch pages',
      'Lead-generation pages',
    ],
    ctaLabel: 'Start a Landing Page Project',
    projectType: 'landing-page',
    icon: 'landing',
  },
  {
    slug: 'digital-solutions',
    title: 'Practical Digital Solutions',
    homeDescription:
      'Digital tools and technology solutions designed around real business needs.',
    pageDescription:
      'Sometimes a business needs more than a website. We explore practical ways technology can simplify processes, improve customer experiences and support business operations.',
    includes: [
      'Business tools',
      'Workflow solutions',
      'Digital applications',
      'AI-enabled solutions where appropriate',
    ],
    ctaLabel: 'Discuss a Digital Solution',
    projectType: 'digital-solution',
    icon: 'tools',
  },
]

export const processSteps = [
  {
    title: 'Understand',
    text: 'We learn about your business and objectives.',
  },
  {
    title: 'Plan',
    text: 'We identify the right approach for your project.',
  },
  {
    title: 'Create',
    text: 'We design and develop your solution.',
  },
  {
    title: 'Deliver',
    text: 'We test and prepare your project for launch.',
  },
]
