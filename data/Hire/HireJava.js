const HireJava = {
  tech: "Java",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Java Developers",
    caption: "X-Team is a development company of motivated Java programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Java developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Java developers now',
        title: 'Hire Java developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Java",
    hasFed: false,
    devs: [],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Java Developers Now',
      title: 'Hire Java developers',
      big: true,
      style: 'red'
    },
  },
  DevQuotes: {
    hasQuotes: false,
    quotes: [],
  },
  CurrentPosts: {
    hasPosts: true,
    tech: "Java",
    posts: [
      {
        title: "Using Optional to Transform Your Java Code",
        link: 'https://x-team.com/blog/using-optional-to-transform-your-java-code/',
        text: "Java doesn’t have pointers. So why does it have the Null Pointer Exception? Because Java really does have pointers: they’re “references.” References give us some of the power that pointers in C and C++ give us, such as passing large objects between modules without having to copy them, but at the same time not allowing some of the more common mistakes, such as using a pointer to an object X as a pointer to object Y."
      }
    ],
  },
  Related: {
    RelSkills: [
      {skill: 'django'},
      {skill: 'python'},
      {skill: 'ruby'}
    ],
  },
  LandingCta: {
    tech: "Java",
    ctaAnchor: "Hire Java Developers",
    ctaTitle: "Hire Java Developers",
  },
}

export default HireJava
