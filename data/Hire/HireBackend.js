const HireBackend = {
  tech: "Back-End",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Back-End Developers",
    caption: "X-Team is a development company of motivated Back-End programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Back-End developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Back-End developers now',
        title: 'Hire Back-End developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Back-End",
    hasFed: true,
    devs: [
      {
        pic: "diego_seghezzo.jpg",
        name: "Diego Seghezzo",
        link: "https://github.com/diegoseghezzo",
        news: [
          {badge: 'course', status: 'completed', label: " Week #5 of MongoDB's University Course."},
          {badge: 'code', status: 'created', label: " A Drupal 8 app at a FOX hackathon in Los Angeles."},
          {badge: 'conference', status: 'attended', label: " SmashingConf in Barcelona with 15 other X-Teamers."}
        ]
      },
      {
        pic: "jedrzej.jpg",
        name: "Jedrzej Kurylo",
        link: "https://github.com/jedrzej",
        news: [
          {badge: 'conference', status: 'attended', label: " Dutch PHP Conference in Amsterdam."},
          {badge: 'code', status: 'reached', label: " 14,000 reputation points on StackOverflow."},
          {badge: 'conference', status: 'attended', label: " You Gotta Love Front-end Conference in Tel Aviv."}
        ]
      },
      {
        pic: "ben.jpg",
        name: "Ben Ferreira",
        link: "https://medium.com/@benf86",
        news: [
          {badge: 'code', status: 'created a', label: " Serverless CRUD REST API in AWS Lambda and AWS API Gateway."},
          {badge: 'react', status: 'finished', label: " Building React Applications with Idiomatic Redux&quot; course on Egghead."},
          {badge: 'conference', status: 'attended', label: "X-Outpost: Thailand with 6 other X-Teamers."}
        ]
      }
    ],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Back-End Developers Now',
      title: 'Hire Back-End developers',
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
    tech: "Back-End",
    posts: [
      {
        title: "How To Create a Ruby API with Sinatra",
        link: 'https://x-team.com/blog/how-to-create-a-ruby-api-with-sinatra/',
        text: "These days, every company needs some kind of web API. It’s not just for people who want to open their platforms to developers anymore. With the rise of Javascript SPA (Single Page Application) frameworks like AngularJS, Ember.js or React, software companies need to build internal web APIs for themselves too."
      },
      {
        title: 'How JSON-API Can Help Teams Work Together',
        link: 'https://x-team.com/blog/json-api-can-help-teams-work-together/',
        text: 'The following tutorial contains an overview of Material Design UI components with example code for including and customising them in your application. All of them can be used independently from others, so you can treat every section as a reference guide.'
      },
      {
        title: 'How To Become an AWS Certified Solutions Architect',
        link: 'https://x-team.com/blog/become-aws-certified-solutions-architect/',
        text: 'If you are also thinking about becoming certified, this post will help you out. This certificate is intended to be verify someone’s skills and expertise in designing, deploying and operating applications and infrastructure on the AWS platform. Of course, having hands-on experience is the most crucial here, but I will also guide you through other resources that will prepare you for the exam.'
      }
    ],
  },
  Related: {
    RelSkills: [
      {skill: 'java'},
      {skill: 'php'},
      {skill: 'ruby'}
    ],
  },
  LandingCta: {
    tech: "Back-End",
    ctaAnchor: "Hire Back-End Developers",
    ctaTitle: "Hire Back-End Developers",
  },
}

export default HireBackend
