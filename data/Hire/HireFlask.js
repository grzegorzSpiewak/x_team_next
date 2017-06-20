const HireFlask = {
  tech: "Flask",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Flask Developers",
    caption: "X-Team is a development company of motivated Flask programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Flask developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Flask developers now',
        title: 'Hire Flask developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Flask",
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
    tech: "Flask",
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
    tech: "Flask",
    ctaAnchor: "Hire Flask Developers",
    ctaTitle: "Hire Flask Developers",
  },
}

export default HireFlask
