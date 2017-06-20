const HireRedux = {
  tech: "Redux",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Redux Developers",
    caption: "X-Team is a development company of motivated Redux programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Redux developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Redux developers now',
        title: 'Hire Redux developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Redux",
    hasFed: false,
    devs: [],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Redux Developers Now',
      title: 'Hire Redux developers',
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
    tech: "Redux",
    posts: [
      {
        title: 'Preparing a development talk, from the heart out',
        link: 'https://x-team.com/blog/preparing-development-talk-heart/',
        text: 'It was a normal week day when I decided to apply for a software development talk at my Alma Mater (Pontificia Universidad Católica Madre y Maestra – Santiago, Dominican Republic), not much went through my head at the moment other than that it would be nice to meet the new generation of CS students and serve as a bridge between what they are learning versus real world execution.'
      },
      {
        title: 'Performant Angular with Redux and Immutable',
        link: 'https://x-team.com/blog/performant-angular-with-redux-and-immutable/',
        text: 'The angular JS framework has become ubiquitous in the front end world. And with good reason. It allows you to abstract concepts such as rendering, it helps you manage dependencies and modules (which, granted, has become almost a drawback in this post ES6 world), and makes it easy to built all but the most involved of components.'
      }
    ],
  },
  Related: {
    RelSkills: [
      {skill: 'react'},
      {skill: 'javascript'},
      {skill: 'angular'}
    ],
  },
  LandingCta: {
    tech: "Redux",
    ctaAnchor: "Hire Redux Developers",
    ctaTitle: "Hire Redux Developers",
  },
}

export default HireRedux
