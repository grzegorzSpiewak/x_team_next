const HireDrupal =  {
  tech: "Drupal",
  TextLanding: {
    hasText: false,
  },
  Hero: {
    title: "Hire Dedicated<br /> Drupal Developers",
    caption: "X-Team is a development company of motivated Drupal programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Drupal developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Drupal developers now',
        title: 'Hire Drupal developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Drupal",
    hasFed: true,
    devs: [
      {
        pic: "sven.jpg",
        name: "Sven Berg Ryen",
        link: "https://github.com/svenbergryen",
        news: [
          {badge: 'conference', status: 'gave a talk called', label: " Staging & Deployment of Content in Drupal 7; at DrupalCamp Oslo."},
          {badge: 'course', status: 'completed', label: " 4,000+ translations from English to Norwegian Bokål for Drupal 8."},
          {badge: 'code', status: 'contributed to (and maintains)', label: " EU Cookie Compliance module for Drupal 7"}
        ]
      },
      {
        pic: "diego_seghezzo.jpg",
        name: "Diego Seghezzo",
        link: "https://github.com/diegoseghezzo",
        news: [
          {badge: 'course', status: 'completed', label: " Week #5 of MongoDB's University Course."},
          {badge: 'code', status: 'created', label: " A Drupal 8 app at a FOX hackathon in Los Angeles."},
          {badge: 'conference', status: 'attended', label: " SmashingConf in Barcelona with 15 other X-Teamers."}
        ]
      }
    ],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Drupal Developers Now',
      title: 'Hire Drupal developers',
      big: true,
      style: 'red'
    }
  },
  DevQuotes: {
    hasQuotes: true,
    quotes: [
      {text: 'Drupal is suitable for building enterprise level web applications that also need a content management system. Support for Drupal is massive: IRC, StackOverflow, Drupal forums, meetups, DrupalCamps, DrupalCon, etc. Drupal is a nice balance between a CMS and a framework and is incredibly scalable. Drupal even has enterprise level security​. With thousands of amazing contributed modules, building a complex web application is simple. Not to mention that Drupal has good support on some of the leading open source performance solutions like Varnish, Memcache, ApacheSolr, CDN, ElasticSearch, MongoDB, and Redis. Having the Views module makes Drupal way more powerful than other content management frameworks.', author: 'GERALD VILLORENTE'},
      {text: 'Drupal is a great CMS in terms of organizing and administrating content. It is a robust platform that provides the necessary tools for non-technical people to maintain a very complex website.', author: 'DIEGO SEGHEZZO'},
      {text: 'Drupal is the most maintained and updated CMS/CMF with massive community. It makes it easy to quickly build a scalable site and flexible enough to handle any requirements.', author: 'PRATOMO ARDIANTO'},
    ],
  },
  CurrentPosts: {
    hasPosts: true,
    tech: "Drupal",
    posts: [
      {
        title: "Extending Drupal 7 Autocomplete Fields' Output",
        link: 'https://x-team.com/blog/extending-drupal-7-autocomplete-fields-output/',
        text: "Drupal 7 autocomplete field is something most content producers love. It’s an easy and convenient way to reference content by title. The problem is, that’s all you get from an autocomplete field: a title."
      },
      {
        title: 'Drupal 8: Finally Ready for Production',
        link: 'https://x-team.com/blog/drupal-8-finally-ready-production/',
        text: 'It’s been awhile since Drupal 8 was first ready to try out. But even since then, I was checking out news, reading updated docs, working on my Drupal 7 projects… still waiting for something real. And it finally happened – during the keynote at DrupalCon Barcelona, Dries announced the first D8 release candidate and basically confirmed that it’s now ready for production sites!'
      },
      {
        title: 'Drupalwood: Why You Should Attend a DrupalCon',
        link: 'https://x-team.com/blog/drupalwood-attend-drupalcon/',
        text: 'Time flies – it’s already summer, and I hope yours is going well! Seems like just yesterday I was at DrupalCon in Los Angeles, the famous city of movie-making – to make it sound more like a dream… at least my own dream, one that was made true. Because part of our team was invited to LA by an extraordinary company – X-Team.'
      },
      {
        title: 'Deep Dive into the Anatomy of Drupal 8 Theming',
        link: 'https://x-team.com/blog/deep-dive-anatomy-drupal-8-theming/',
        text: "Drupal 8 is the most advanced Drupal ever built and it will surely will be a game changer among other CMSes out there. Part of its strength comes from adopting the principles from other technologies like Symfony, YAML, Twig, and Backbone.js."
      }
    ]
  },
  Related: {
    RelSkills: [
      {skill: 'backend'},
      {skill: 'php'},
      {skill: 'wordpress'}
    ],
  },
}

export default HireDrupal
