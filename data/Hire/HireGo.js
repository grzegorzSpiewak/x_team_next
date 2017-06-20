const HireGo = {
  tech: "Go",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Go Developers",
    caption: "X-Team is a development company of motivated Go programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Go developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Go developers now',
        title: 'Hire Go developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Go",
    hasFed: false,
    devs: [],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Go Developers Now',
      title: 'Hire Go developers',
      big: true,
      style: 'red'
    },
  },
  DevQuotes: {
    hasQuotes: false,
    quotes: [],
  },
  CurrentPosts: {
    hasPosts: false,
    tech: "Go",
    posts: [],
  },
  Related: {
    RelSkills: [
      {skill: 'django'},
      {skill: 'ruby'},
      {skill: 'python'}
    ],
  },
  LandingCta: {
    tech: "Go",
    ctaAnchor: "Hire Go Developers",
    ctaTitle: "Hire Go Developers",
  },
}

export default HireGo
