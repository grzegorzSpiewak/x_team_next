const HireLaravel = {
  tech: "Laravel",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Laravel Developers",
    caption: "X-Team is a development company of motivated Laravel programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Laravel developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Laravel developers now',
        title: 'Hire Laravel developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Laravel",
    hasFed: true,
    devs: [
      {
        pic: "rubens.jpg",
        name: "Rubens Mariuzzo",
        link: "https://github.com/rmariuzzo",
        news: [
          {badge: 'course', status: 'completed', label: "the AWS Certified Solutions Architect course."},
          {badge: 'code', status: 'created', label: "&quot;Laravel JS Localization&quot; package and published it on Github."},
          {badge: 'code', status: 'created', label: "a plugin for Webpack and published it on Github."}
        ]
      },
      {
        pic: "jedrzej.jpg",
        name: "Jedrzej Kurylo",
        link: "https://github.com/jedrzej",
        news: [
          {badge: 'conference', status: 'attended', label: "Dutch PHP Conference in Amsterdam."},
          {badge: 'code', status: 'reached', label: "14,000 reputation points on StackOverflow."},
          {badge: 'conference', status: 'attended', label: "You Gotta Love Front-end Conference in Tel Aviv."}
        ]
      }
    ],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Laravel Developers Now',
      title: 'Hire Laravel Developers',
      big: true,
      style: 'red'
    },
  },
  DevQuotes: {
    hasQuotes: true,
    quotes: [
      {text: 'Laravel is a modern and robust framework for web development. It took some of the best features from other frameworks, such as expressiveness, simplicity and readability, and it comes bundled with a set of functionalities that facilitate common tasks like notifications, data migration, jobs and more. Be it as a solo-developer or in a team, Laravel is always a pleasure to work with, as it really helps you focus on the features that will make the app unique.', author: 'RUBENS MARIUZZO'},
    ],
  },
  CurrentPosts: {
    hasPosts: false,
    tech: "Laravel",
    posts: [],
  },
  Related: {
    RelSkills: [
      {skill: 'backend'},
      {skill: 'php'},
      {skill: 'wordpress'}
    ],
  },
  LandingCta: {
    tech: "Laravel",
    ctaAnchor: "Hire Laravel Developers",
    ctaTitle: "Hire Laravel Developers",
  },
}

export default HireLaravel
