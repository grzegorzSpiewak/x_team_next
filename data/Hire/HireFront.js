const HireFront = {
  tech: "Front",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Front Developers",
    caption: "X-Team is a development company of motivated Front programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Front developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Front developers now',
        title: 'Hire Front developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Front",
    hasFed: true,
    devs: [
      {
        pic: "michal_nawrot.jpg",
        name: "Michal Nawrot",
        link: "https://github.com/desiter",
        news: [
          {badge: 'react', status: 'created', label: "A React Native app that helps discover nearby places to go to."},
          {badge: 'course', status: 'completed', label: "&quot;Creating a fault tolerant site&quot; chapter of the AWS Cloud Guru course."},
          {badge: 'react', status: 'attended', label: "ReactEurope in Paris with 10 other X-Teamers."}
        ]
      },
      {
        pic: "andrew.jpg",
        name: "Andrew Stratu",
        link: "https://github.com/avantgardian",
        news: [
          {badge: 'course', status: 'completed', label: "&quot;Advanced SVG Animation&quot; course on FrontEndMasters.com"},
          {badge: 'conference', status: 'attended', label: "SmashingConf in Barcelona with 15 other X-Teamers."},
          {badge: 'course', status: 'read', label: "&quot;SurviveJS - React&quot;, a top resource on mastering React."}
        ]
      },
      {
        pic: "szymon.jpg",
        name: "Szymon Michalak",
        link: "http://www.szymonmichalak.com/",
        news: [
          {badge: 'course', status: 'completed', label: "the Webpack course on Egghead."},
          {badge: 'conference', status: 'attended', label: "SmashingConf in Barcelona with 15 other X-Teamers."},
          {badge: 'course', status: 'read', label: "&quot;SurviveJS - React&quot;, a top resource on mastering React."}
        ]
      },
    ],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Front Developers Now',
      title: 'Hire Front developers',
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
    tech: "Front",
    posts: [
      {
        title: "Performant Angular with Redux and Immutable",
        link: 'https://x-team.com/blog/performant-angular-with-redux-and-immutable/',
        text: "The angular JS framework has become ubiquitous in the front end world. And with good reason. It allows you to abstract concepts such as rendering, it helps you manage dependencies and modules (which, granted, has become almost a drawback in this post ES6 world), and makes it easy to built all but the most involved of components. But frequently, as an application grows in size and complexity, we begin running into problems."
      },
      {
        title: "Nested controllers, ngInclude & $scope",
        link: 'https://x-team.com/blog/nested-controllers-nginclude-scope/',
        text: "When working with AngularJS, $scope will have a pivotal role in your work and when starting out you might run into roadbumps unless you have a rough idea about how to work with it. I’ll aim to explain a couple issues about $scope and ngInclude that I’ve run into."
      },
      {
        title: "X-periment: A React, Elm, and WebAssembly Story",
        link: 'https://x-team.com/blog/x-periment-a-react-elm-and-webassembly-story/',
        text: "X-Team recently held a round table discussion on the future of front-end web technologies, and one specific topic really stood out. With React.js being one of the current juggernauts of front-end development, can an up-and-coming technology like Elm hope to dethrone it? And what does WebAssembly have to do with all of this?"
      },
      {
        title: "Best React Tutorials: Curated By X-Team",
        link: 'https://x-team.com/blog/best-react-tutorials-curated-by-x-team/',
        text: "The angular JS framework has become ubiquitous in the front end world. And with good reason. It allows you to abstract concepts such as rendering, it helps you manage dependencies and modules (which, granted, has become almost a drawback in this post ES6 world), and makes it easy to built all but the most involved of components. But frequently, as an application grows in size and complexity, we begin running into problems."
      },
      {
        title: "Java UI Component on React Native",
        link: 'https://x-team.com/blog/java-ui-component-on-react-native/',
        text: "In this article, we will learn how to convert our Android Java View components to React Native. This is especially interesting, if we need to use a Java UI library or implement a custom View component in our React Native app."
      },
    ],
  },
  Related: {
    RelSkills: [
      {skill: 'react'},
      {skill: 'angular'},
      {skill: 'javascript'}
    ],
  },
  LandingCta: {
    tech: "Front",
    ctaAnchor: "Hire Front Developers",
    ctaTitle: "Hire Front Developers",
  },
}

export default HireFront
