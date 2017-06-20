const HireRuby = {
  tech: "Ruby",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Ruby Developers",
    caption: "X-Team is a development company of motivated Ruby programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Ruby developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Ruby developers now',
        title: 'Hire Ruby developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Ruby",
    hasFed: false,
    devs: [],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Ruby Developers Now',
      title: 'Hire Ruby developers',
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
    tech: "Ruby",
    posts: [
      {
        title: 'How To Create a Ruby API with Sinatra',
        link: 'https://x-team.com/blog/how-to-create-a-ruby-api-with-sinatra/',
        text: 'These days, every company needs some kind of web API. It’s not just for people who want to open their platforms to developers anymore. With the rise of Javascript SPA (Single Page Application) frameworks like AngularJS, Ember.js or React, software companies need to build internal web APIs for themselves too.'
      }
    ],
  },
  Related: {
    RelSkills: [
      {skill: 'java'},
      {skill: 'django'},
      {skill: 'python'}
    ],
  },
  LandingCta: {
    tech: "Ruby",
    ctaAnchor: "Hire Ruby Developers",
    ctaTitle: "Hire Ruby Developers",
  },
}

export default HireRuby
