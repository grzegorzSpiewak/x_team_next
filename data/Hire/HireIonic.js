const HireIonic = {
  tech: "Ionic",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Ionic Developers",
    caption: "X-Team is a development company of motivated Ionic programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Ionic developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Ionic developers now',
        title: 'Hire Ionic developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Ionic",
    hasFed: false,
    devs: [],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Ionic Developers Now',
      title: 'Hire Ionic developers',
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
    tech: "Ionic",
    posts: [
      {
        title: 'A Beginners Guide to Ionic 2 Mobile Applications',
        link: 'https://x-team.com/blog/beginners-guide-ionic-2-mobile-applications/',
        text: 'When it comes to mobile application development, there are many different routes you can choose. You can choose a native solution, using the Android SDK and Java or iOS with Objective-C, but in both these scenarios there is a multiple language requirement.'
      },
      {
        title: 'Jump-start an Ionic Prototype with Ionic Creator',
        link: 'https://x-team.com/blog/jump-start-an-ionic-prototype-with-ionic-creator/',
        text: 'Introduction In recent years, web technologies have gained a lot of terrain in the development community, greatly increasing the number of tools and frameworks available and hence, increasing the number of people interested in web development.'
      },
      {
        title: 'Include JavaScript Libraries in an Ionic 2 TypeScript Project',
        link: 'https://x-team.com/blog/include-javascript-libraries-in-an-ionic-2-typescript-project/',
        text: 'Angular 2 and Ionic 2 are very new developer frameworks. Although not as new, the TypeScript language has been getting a lot of attention as the recommended way to develop with Angular 2 and Ionic 2. TypeScript is a superset to JavaScript that turns it into a typed language.'
      }
    ],
  },
  Related: {
    RelSkills: [
      {skill: 'angular'},
      {skill: 'javascript'},
      {skill: 'react'}
    ],
  },
  LandingCta: {
    tech: "Ionic",
    ctaAnchor: "Hire Ionic Developers",
    ctaTitle: "Hire Ionic Developers",
  },
}

export default HireIonic
