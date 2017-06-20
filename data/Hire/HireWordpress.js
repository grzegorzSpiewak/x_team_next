const HireWordpress = {
  tech: "Wordpress",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Wordpress Developers",
    caption: "X-Team is a development company of motivated Wordpress programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Wordpress developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Wordpress developers now',
        title: 'Hire Wordpress developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Wordpress",
    hasFed: false,
    devs: [],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Wordpress Developers Now',
      title: 'Hire Wordpress developers',
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
    tech: "Wordpress",
    posts: [],
  },
  Related: {
    RelSkills: [
      {skill: 'php'},
      {skill: 'drupal'},
      {skill: 'backend'}
    ],
  },
  LandingCta: {
    tech: "Wordpress",
    ctaAnchor: "Hire Wordpress Developers",
    ctaTitle: "Hire Wordpress Developers",
  },
}

export default HireWordpress
