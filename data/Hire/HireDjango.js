const HireDjango = {
  tech: "Django",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Django Developers",
    caption: "X-Team is a development company of motivated Django programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Django developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Django developers now',
        title: 'Hire Django developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Django",
    hasFed: false,
    devs: [],
    button: {},
  },
  DevQuotes: {
    hasQuotes: false,
    quotes: [],
  },
  CurrentPosts: {
    hasPosts: false,
    tech: "Django",
    posts: [],
  },
  Related: {
    RelSkills: [
      {skill: 'php'},
      {skill: 'ruby'},
      {skill: 'python'}
    ],
  },
  LandingCta: {
    tech: "Django",
    ctaAnchor: "Hire Django Developers",
    ctaTitle: "Hire Django Developers",
  },
}

export default HireDjango
