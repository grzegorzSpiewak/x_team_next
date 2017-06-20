const HireAngular = {
  tech: "Angular",
  TextLanding: {
    hasText: true,
    text: '<h3>What is Angular?</h3><p>Angular is a <a href="/hire-javascript-developers/">Javascript</a> powered web app framework released by Google and a group of independent engineers in 2009.</p><h3>How popular is Angular?</h3><p>According to <a href="http://stackoverflow.com/research/developer-survey-2015">StackOverflow</a>, Angular was the 10th most popular technology of 2015.</p><h3>Who uses Angular?</h3><p>Angular has become very popular since its release and can be seen in use on several high exposure websites including NBA.com, Google, NBC, Sprint and Ford.com.</p><h3>How can I become an Angular contributor?</h3><p>Check out their presence on <a href="https://github.com/angular/angular.js" target="_blank">GitHub</a>, take a look at their <a href="https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md" target="_blank">Guidelines</a> and start coding!</p>',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Angular Developers",
    caption: "X-Team is a development company of motivated Angular programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Angular developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Angular developers now',
        title: 'Hire Angular developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Angular",
    hasFed: true,
    devs: [
      {
        pic: "wojtek.jpg",
        name: "Wojtek Zajac",
        link: "http://wojtekzajac.com/",
        news: [
          {badge: 'conference', status: 'attended', label: " SmashingConf in Barcelona with 15 other X-Teamers."},
          {badge: 'react', status: 'completed', label: " ReactJS and Flux&quot; course on udemy.com"},
          {badge: 'react', status: 'attended', label: " ReactRally 2016 in Salt Lake City."}
        ]
      },
      {
        pic: "nadeem.jpg",
        name: "Nadeem Khedr",
        link: "http://nadeemkhedr.com/",
        news: [
          {badge: 'react', status: 'completed', label: " Using Webpack for Production JavaScript Applications; course on Egghead."},
          {badge: 'conference', status: 'published', label: " An emacs tips blog post for getting started with emacs."},
          {badge: 'code', status: 'completed', label: " Getting Started with Redux; Egghead course by Dan Abramov."}
        ]
      },
      {
        pic: "pawel.jpg",
        name: "Pawel Chojnacki",
        news: [
          {badge: 'course', status: 'completed', label: " the official self-paced Docker Training from Docker."},
          {badge: 'code', status: 'submitted a pull request to', label: " Redux Test Recorder open source project."},
          {badge: 'course', status: 'read', label: " Clojure for the Brave and True book AND attended EuroClojure conf."}
        ]
      }
    ],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Angular Developers Now',
      title: 'Hire Angular developers',
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
    tech: "Angular",
    posts: [
      {
        title: 'Performant Angular with Redux and Immutable',
        link: 'https://x-team.com/blog/performant-angular-with-redux-and-immutable/',
        text: 'The angular JS framework has become ubiquitous in the front end world. And with good reason. It allows you to abstract concepts such as rendering, it helps you manage dependencies and modules (which, granted, has become almost a drawback in this post ES6 world), and makes it easy to built all but the most involved of components.'
      },
      {
        title: 'Nested controllers, ngInclude & $scope',
        link: 'https://x-team.com/blog/nested-controllers-nginclude-scope/',
        text: 'When working with AngularJS, $scope will have a pivotal role in your work and when starting out you might run into roadbumps unless you have a rough idea about how to work with it. I’ll aim to explain a couple issues about $scope and ngInclude that I’ve run into.'
      }
    ],
  },
  Related: {
    RelSkills: [
      {skill: 'front-end'},
      {skill: 'javascript'},
      {skill: 'react'}
    ],
  },
  LandingCta: {
    tech: "Angular",
    ctaAnchor: "Hire Angular Developers",
    ctaTitle: "Hire Angular Developers",
  },
}

export default HireAngular
