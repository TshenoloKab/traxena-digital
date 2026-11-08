const titles: Record<string, string> = {
  '/': 'Traxena Digital | Technology for Growing Businesses',
  '/services': 'Website Design & Digital Solutions | Traxena Digital',
  '/work': 'Our Work & Portfolio | Traxena Digital',
  '/about': 'About Traxena Digital',
  '/contact': 'Contact | Traxena Digital',
}

const descriptions: Record<string, string> = {
  '/': 'Traxena Digital is a technology business based in Botswana, helping small businesses, service providers, independent professionals and startups make practical use of technology.',
  '/services': 'Explore Traxena Digital’s Website Design & Digital Solutions — professional business websites, landing pages, tailored forms, booking flows and selected integrations.',
  '/work': 'A glimpse of the digital experiences Traxena Digital creates for businesses — website design and practical digital solutions.',
  '/about': 'Learn about Traxena Digital’s purpose, values and practical approach to Website Design & Digital Solutions.',
  '/contact': 'Tell Traxena Digital about your project. Share your details and what you’d like to achieve, and we’ll get in touch to discuss next steps.',
}

export function applyPageMeta(pathname: string) {
  const title = titles[pathname] ?? 'Page Not Found | Traxena Digital'
  const description = descriptions[pathname] ?? 'The requested page could not be found on the Traxena Digital website.'

  document.title = title

  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) descriptionMeta.setAttribute('content', description)

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', title)

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) ogDescription.setAttribute('content', description)
}