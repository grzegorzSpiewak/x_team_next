const HireNode = {
  tech: "Node",
  TextLanding: {
    hasText: true,
    text: '<h2></a>About Node.js</h2><p>Node.js is an open-source, cross-platform JavaScript runtime environment for server-side execution of JavaScript code, which uses the Chrome V8 JavaScript engine.</p><p>Put simply, while, in the old days, JavaScript used to be limited to browsers, with Node.js, it can be used to write stand-alone programs that run on the servers as well and use the same JavaScript engine Google uses for Chrome, which supports many of the latest language developments.</p><p>Node.js has been around since 2009 and has since grown into a major player that supports Linux, OSX, and Windows environments, has its own package manager, and which has, through rapid growth, since reached major version 7 (current) or 6 (LTS).</p><p>It would be remiss to not mention the fact that Node.js is used by everyone, from the solo programmer, working on their pet project, to a megacorporation, which is building a system that will serve millions of users.</p><p>Node.js can thus be used in all kinds of projects. Be it a tiny microservice or a giant monolithic server, it can do it all.</p><p>There is no doubt that Node.js is an extremely versatile piece of technology. It has a huge following, a gigantic set of existing libraries, and it is very easy to setup and run in both a “traditional” server environment or with specialized containerized continuous integration systems.</p><p>But that is not all. One of its most important bonuses is that it is just “plain old JavaScript”. This means that if you hire a dedicated node developer and then decide to have them learn front-end work as well, they will only have to learn the front-end library/framework stack, while the programming language stays the same — JavaScript. This alone can save you a significant amount of time and money, and this also means that your dedicated front-end JavaScript engineers can, in a pinch, help out on the back-end as well.</p><h2>Technology</h2><h3>General description</h3><p>Node.js is an asynchronous event driven Javascript runtime. As such, it does not employ the nowadays more common concurrency model with threads. The Node.js approach prevents many development headaches usually caused by threading, however. Node.js processess never block, which makes scalability easier. This, however, does not mean that your multi-core processor is going to have to stay idle, as it is possible to <a href="https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options">spawn child processes</a>, which can communicate through an easy-to-use API. Together with the <a href="https://nodejs.org/api/cluster.html">cluster</a> module, it is well-prepared for load-balancing over several cores.</p><p>Node.js took the concepts of Ruby’s <a href="http://rubyeventmachine.com/">Event Machine</a> and Python’s <a href="http://twistedmatrix.com/">Twisted</a> even further. It relies on an <a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/">event loop</a>, which is entered after input script execution, exited after the last callback has been performed, and which generally behaves like the one in browsers, i.e. it is hidden from the user.</p><p>The whole runtime was built with HTTP efficiency in mind, which makes it a perfect candidate for web libraries and/or frameworks.</p><h3>Versions</h3><p>There are apps that run on several major versions of Node.js currently in production, the latest LTS version at the time of this writing being version 6.10.2, the current version 7.9.0, and v8.0.0 nightlies are available.</p><p>Version 6.10.2 LTS, has 99% support for features of ES2015 and 100% support for features of ES2016, though it lags a bit in ES2017 features, of which it only covers 23%.</p><p>The current version 7.9.0, however, covers 99% of ES2015, 100% of ES2016, and 54% of ES2017 features.</p><p>The version 8.0.0 nightlies raise the stakes even more to 65% of ES2017 features. Due to this being a development branch, it is not yet suited for production use.</p><p>You can check <a href="http://node.green">node.green</a> for latest information on support of the various ES standards.</p><h3>Project and Package Management</h3><p>Node.js has its own package management system — <a href="https://www.npmjs.com/">npm</a> — which is, at this point, the world’s largest software registry, as well as one of the CLI tools for managing javascript packages. An alternative CLI interface to the npm registry is <a href="https://yarnpkg.com/">yarn</a>.</p><p>Npm and yarn use different file management philosophies but are compatible with each other, as both use the Node.js project configuration file <em>package.json</em>, which records project metadata, dependencies, scripts etc.</p><h2>Conclusion</h2><p>All these are reasons why we simply must recommend that you give Node.js some serious consideration. And once you decide it is the right choice for your needs, our Node.js programmers will be more than happy to assist you in fulfilling them in all stages — from planning to final sign-off.</p>',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Node Developers",
    caption: "X-Team is a development company of motivated Node programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Node developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Node developers now',
        title: 'Hire Node developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Node",
    hasFed: true,
    devs: [
      {
        pic: "slawek.jpg",
        name: "Slawek Kolodziej",
        link: "https://github.com/slawekkolodziej",
        news: [
          {badge: 'docker', status: 'completed', label: " the Docker For DevOps course on A Cloud Guru."},
          {badge: 'conference', status: 'gave a talk called', label: " Tools to make your product less exposed to risk; at PHPers Silesia."},
          {badge: 'code', status: 'published on Github', label: " a un ique bundled version of vim called Vimrc."}
        ]
      },
      {
        pic: "michal_nawrot.jpg",
        name: "Michal Nawrot",
        link: "https://github.com/desiter",
        news: [
          {badge: 'react', status: 'created', label: " A React Native app that helps discover nearby places to go to."},
          {badge: 'course', status: 'completed', label: " Creating a fault tolerant site chapter of the AWS Cloud Guru course."},
          {badge: 'react', status: 'attended', label: " ReactEurope in Paris with 10 other X-Teamers."}
        ]
      },
      {
        pic: "kelvin.jpg",
        name: "Kelvin de Moya",
        link: "https://github.com/kdemoya",
        news: [
          {badge: 'react', status: 'submitted a pull request', label: " to the React Native repo on Github."},
          {badge: 'conference', status: 'gave a talk called', label: " Redux and the Modern Web; at a university."},
          {badge: 'course', status: 'completed', label: " Two pair programming sessions with fellow X-Teamers."}
        ]
      }
    ],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Node developers',
      title: 'Hire Node developers',
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
    tech: "Node",
    posts: [
      {
        title: 'File System Permissions and Umask in Node.js',
        link: 'https://x-team.com/blog/file-system-permissions-umask-node-js/',
        text: 'Working as a developer sometimes requires more knowledge than just of programming itself. It’s always a good idea to grasp some concepts from other IT fields as well. One of these concepts are file system permissions, proper management of which is a must when it comes to working with files, eg. using node.js fs module.'
      },
      {
        title: 'Xplorers: A deep-dive into mkdirp',
        link: 'https://x-team.com/blog/xplorers-mkdirp/',
        text: 'Greetings adventurer! In today’s expedition we’re going to pick a popular nodejs library and dive into its depths to see what we can find. If this all goes to plan we’ll come away not only understanding the internal workings of a commonly-used module, we’ll also discover some interesting patterns and techniques along the way.'
      },
      {
        title: 'Reflecting on nodeconf 2013',
        link: 'https://x-team.com/blog/reflecting-on-nodeconf-2013/',
        text: 'Ever since I heard about the whole node-at-a-summercamp thing, I dreamed of going. And what a fun few days it was.How to get inspired: hang around a lot of people who are all excited about something.'
      }
    ],
  },
  Related: {
    RelSkills: [
      {skill: 'backend'},
      {skill: 'javascript'},
      {skill: 'php'}
    ],
  },
  LandingCta: {
    tech: "Node",
    ctaAnchor: "Hire Node Developers",
    ctaTitle: "Hire Node Developers",
  },
}

export default HireNode
