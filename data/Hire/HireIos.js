const HireIos = {
  tech: "Ios",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Ios Developers",
    caption: "X-Team is a development company of motivated Ios programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Ios developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Ios developers now',
        title: 'Hire Ios developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Ios",
    hasFed: false,
    devs: [],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Ios Developers Now',
      title: 'Hire Ios developers',
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
    tech: "Ios",
    posts: [
      {
        title: "How To Get Started With iOS Unit Tests in Swift",
        link: 'https://x-team.com/blog/how-to-get-started-with-ios-unit-tests-in-swift/',
        text: "Unit tests are awesome. They not only improve the overall quality of your code, they also make it easier for you to test individual pieces of your app without having to manually run your app. Given Apple's extensive support for unit tests in Xcode and Swift, it's surprising that so few iOS developers write unit tests. It is my hope that after completing this simple tutorial, you will see just how easy it to get started with unit tests in Swift."
      }
    ],
  },
  Related: {
    RelSkills: [
      {skill: 'mobile'},
      {skill: 'ionic'},
      {skill: 'android'}
    ],
  },
  LandingCta: {
    tech: "Ios",
    ctaAnchor: "Hire Ios Developers",
    ctaTitle: "Hire Ios Developers",
  },
}

export default HireIos
