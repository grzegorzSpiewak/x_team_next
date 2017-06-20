const HireReact = {
  tech: "React",
  TextLanding: {
    hasText: true,
    text: '<h2>About React</h2><p><a href="https://facebook.github.io/react/">React</a> is a declarative, component-based, open-source Javascript library for building user interfaces. Being independent of the rest of your stack, it can be used directly in the front-end, rendered in a <a href="https://nodejs.org/en/">Node.js</a> back-end, or used to write mobile applications in its <a href="https://facebook.github.io/react-native/">React Native</a> incarnation.</p><p>React is suitable for both small websites and huge web applications, and it excells at displaying data that changes over time without the user having to refresh the website. It handles only the user interface part of applications, which would classify it as the View part of the standard MVC (Model-View-Controller) architecture. While perfectly able to be stand-alone, it can even be used together with other front-end Javascript libraries and frameworks, such as <a href="https://angularjs.org/">AngularJS</a>.</p><p>The initial open-sourced release of React was in 2013, which makes it a mature technology, currently in use by giants such as Netflix, Imgur, Walmart, and others. React has been in constant development since its very beginning, with React Native, having been open-sourced in early 2015, and the latest improvement, <a href="https://github.com/acdlite/react-fiber-architecture">React Fiber</a> having been announced in April 2017.</p><p>As you can see, React is both stable and time-proven, while also cutting-edge with constant improvements. It has been the main competitor of Google’s AngularJS v1 and v2, and, some would claim, has won the battle for front-end supremacy, while others prefer to join both.</p><p>React code is primarily “plain ol’ Javascript”, though its components are typically written in <a href="https://facebook.github.io/react/docs/jsx-in-depth.html">JSX</a>, a Javascript extension syntax, which allows for the use of HTML tags within Javascript code. However, this is just syntactic sugar, which means that it is not strictly unavoidable, though recommended by many developers.</p><h2>Technology</h2><h3>React</h3><p>React is a front-end library with several notable features, which should be of interest to anyone considering it:</p><ul><li><p>React Architecture</p><p>The React Architecture applies even beyond just HTML rendering. For example, it supports rendering to <code>&lt;canvas&gt;</code> tags, and it is suited for <a href="http://isomorphic.net/">isomorphic architecture</a>, i.e. application logic that runs both on the server and the client. This allows for several optimizations and, though not as widely adopted as one would expect, is certainly worth considering.</p></li><li><p>Virtual DOM</p><p>The programmer no longer has to manually figure out the diffs in HTML code that should be rendered, nor do they have to manually update specific parts of the webpage. React’s <a href="https://cardlife.blog/what-is-virtual-dom-c0ec6d6a925c">Virtual DOM</a> enables the programmer to simply write code as if the webpage were loaded anew with every update, and React will automagically figure out the diff and update the view accordingly.</p></li><li><p>One-way data flow</p><p>To keep things clean, React does not allow component renderers to mutate any values passed to it. Instead, the components can be passed callbacks, which modify values. Essentially, this ensures that the data mutation logic and the rendering stay separate, which provides good reusability. This “data down, actions up” philosophy also perfectly combines with one of many programmers’ favorite state management library for React, the functionally-inspired <a href="http://redux.js.org/">Redux</a>, which works with both React and React Native.</p></li></ul><h3>React Native</h3><p>React has since become a contender for not only web front-ends but also mobile development. It gives you the chance of building cross-platform mobile apps using only Javascript and the same React architecture you already know and love.</p><p>Most importantly, using React Native, you are not building a “mobile web app” or a “hybrid app” but rather a full-fledged mobile app, indistinguishable from one built in the platform’s native language. This is possible because React uses the same fundamental UI building blocks as regular iOS and Android apps.</p><p>Besides making Javascript the lingua franca of both the web and mobile, React Native also provides one major benefit - no more recompiling! Not only can you reload the app instantly, React Native even supports hot reload, which lets you run new code while retaining your application state.</p><p>Sometimes, however, the native language simply must be used, be it for optimization or other purposes. When that time comes, React Native lets you elegantly write parts of the application in native code and even combine Javascript and native code, which is how e.g. the Facebook app works.</p><p>Some might argue that React Native does not perform as well as pure native code, but it is nevertheless used by giants like Facebook, Instagram, AirBnB, and many others, not to even mention innumerable startups and solo-developers. While perhaps not the best choice for mobile games, where every millisecond counts, it is certainly well-suited for most use cases.</p><h2>Conclusion</h2><p>With React for the front-end and React Native for mobile, it is obvious that this is a technology suited for a large variety of needs and requirements. If you still have doubts, however, our React specialists will be more than happy to discuss them with you and to determine whether React and/or React Native are what you are looking for.</p><p>And once a plan is made, they will make sure it is delivered on promptly and accurately, while providing you with advice and counsel on how to best implement it.</p><p>P.S. Considering React and React Native are both Javascript-based, why not check out <a href="https://x-team.com/hire-node-developers/">Node.js</a>, the Javascript back-end solution to complete your stack?</p>',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> React Developers",
    caption: "X-Team is a development company of motivated React programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top React developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire React developers now',
        title: 'Hire React developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "React",
    hasFed: true,
    devs: [
      {
        pic: "gianluca.jpg",
        name: "Gianluca Esposito",
        link: "http://www.esposi.to/",
        news: [
          {badge: 'course', status: 'completed', label: " Building React Applications with Idiomatic Redux course on Egghead."},
          {badge: 'conference', status: 'attended', label: " ReactEurope in Paris with 10 other X-Teamers."},
          {badge: 'code', status: 'submitted', label: " a pull request to, GatsbyJS, a React static site generator."}
        ]
      },
      {
        pic: "szymon.jpg",
        name: "Szymon Michalak",
        link: "http://www.szymonmichalak.com/",
        news: [
          {badge: 'course', status: 'completed', label: " the Webpack course on Egghead."},
          {badge: 'conference', status: 'attended', label: " SmashingConf in Barcelona with 15 other X-Teamers."},
          {badge: 'course', status: 'read', label: " SurviveJS - React, a top resource on mastering React."}
        ]
      },
      {
        pic: "michal_kawalec.jpg",
        name: "Michal Kawalec",
        link: "https://github.com/mkawalec",
        news: [
          {badge: 'conference', status: 'hosted', label: " Monadic Warsaw, a functional programming meetup."},
          {badge: 'conference', status: 'attended', label: " Lambda Days 2016 in Krakow."},
          {badge: 'code', status: 'open sourced', label: " IMAP, an IMAP library for Haskell."}
        ]
      }
    ],
    button: {
      href: '/hire-developers',
      anchor: 'Hire React Developers Now',
      title: 'Hire React developers',
      big: true,
      style: 'red'
    },
  },
  DevQuotes: {
    hasQuotes: true,
    quotes: [
      {text: 'React.js is very fast. It has a very big community. We have a lot of ready to use components out there that we can combine together to quickly prototype ideas. React is very simple. Once you understand a few key concepts, like property and state, you’re ready to start building. I also like that React’s architecture guides developers into creating encapsulated software. These smaller pieces of code are easier to maintain, easier to test and are more re-usable.', author: 'DIEGO DURLI'},
      {text: 'I love the way React and Flux compose and create an expressive dataflow over a very functional interface. It has been game changing.', author: 'MICHAL KAWALEC'},
      {text: 'Never felt so productive in my front-end development since I started working with React. I think the reason is that you (mostly) write plain JavaScript code, not framework specific code, and its declarative API makes it easier to reason through the UI app logic.', author: 'GIANLUCA ESPOSITO'},
      {text: 'React is how web apps should be done! It changed the ecosystem so much that the big major frameworks (angular, ember) now are following their lead.', author: 'NADEEM KHEDR'},
      {text: 'React allows me to use small building blocks to achieve exactly what I need in the project.', author: 'PAWEL CHOJNACKI'},
      {text: 'I cannot believe how easy and well-organised it is. I simply love it!', author: 'SZYMON MICHALAK'},
      {text: 'React is the framework that will be on top sites for the next 5-10 years, just like jQuery was years ago.', author: 'IGNACIO SEGURA'}
    ],
  },
  CurrentPosts: {
    hasPosts: true,
    tech: "React",
    posts: [
      {
        title: 'Best React Tutorials: Curated By X-Team',
        link: 'https://x-team.com/blog/best-react-tutorials-curated-by-x-team/',
        text: 'There are about 1 million results on Google for "React Tutorial", so needless to say it can be hard to find the right tutorial to spend your time with. And while I can not say these are the best tutorials ever written, they are definitely the ones that we used (or ended up writing ourselves) to become great React developers.'
      },
      {
        title: 'Best React Newsletters: Curated by X-Team',
        link: 'https://x-team.com/blog/best-react-newsletters-curated-by-x-team-2/',
        text: 'One of the best ways to stay on top of a new tech like React is to subscribe to newsletters curated by people actually working with that new tech. Searching for the most important React tutorials, news and tips is time consuming when you should be focusing your time on learning. This is where newsletter come in handy.'
      },
      {
        title: 'React 2017: Conference Guide',
        link: 'https://x-team.com/blog/react-2017-conference-guide/',
        text: 'The React.js community is young, but mighty. Over the past year, contributions have poured into the React project. Tools and frameworks like Flux, Redux, React Native and Relay continue to evolve. And the community has grown to include diverse gatherings across continents. With conferences from the United States to Israel, there is a React event for nearly every place, if not everyone.'
      },
      {
        title: 'React London 2017 - A Summary',
        link: 'https://x-team.com/blog/react-london-2017-a-summary/',
        text: 'If you and your colleagues work 100% remotely from all over the world, no opportunity to meet with them in person should be missed. We try to create these opportunities as often as possible, focusing them mainly around various events, such as conferences. This time around, we picked React London!'
      }
    ],
  },
  Related: {
    RelSkills: [
      {skill: 'front-end'},
      {skill: 'javascript'},
      {skill: 'angular'}
    ],
  },
  LandingCta: {
    tech: "React",
    ctaAnchor: "Hire React Developers",
    ctaTitle: "Hire React Developers",
  },
}

export default HireReact
