const HireMobile = {
  tech: "Mobile",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Mobile Developers",
    caption: "X-Team is a development company of motivated Mobile programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Mobile developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Mobile developers now',
        title: 'Hire Mobile developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Mobile",
    hasFed: false,
    devs: [],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Mobile developers',
      title: 'Hire Mobile developers',
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
    tech: "Mobile",
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
        title: "How To Get Started With iOS Unit Tests in Swift",
        link: 'https://x-team.com/blog/how-to-get-started-with-ios-unit-tests-in-swift/',
        text: "Unit tests are awesome. They not only improve the overall quality of your code, they also make it easier for you to test individual pieces of your app without having to manually run your app. Given Apple's extensive support for unit tests in Xcode and Swift, it's surprising that so few iOS developers write unit tests. It is my hope that after completing this simple tutorial, you will see just how easy it to get started with unit tests in Swift."
      }
    ],
  },
  Related: {
    RelSkills: [
      {skill: 'ionic'},
      {skill: 'ios'},
      {skill: 'android'}
    ],
  },
  LandingCta: {
    tech: "Mobile",
    ctaAnchor: "Hire Mobile Developers",
    ctaTitle: "Hire Mobile Developers",
  },
}

export default HireMobile
