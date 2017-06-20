const HireJavascript = {
  tech: "Javascript",
  TextLanding: {
    hasText: true,
    text: '<h2></a>About Javascript</h2><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a> (not to be confused with Java) is a high-level programming language, which is one of the core technologies of the World Wide Web. It has been standardized in the ECMAScript specification, and it is natively supported by all modern web browsers.</p><p>Due to the part it plays in web programming, Javascript is one of the most prolific programming languages of all time. But programming for the web is not all it is used for. Over the years, it has also found a place in</p><ul><li>mobile development with <a href="https://facebook.github.io/react-native/">React Native</a></li><li>browser extension development for Chrome, Opera, Safari…</li><li>Apple Dashboard Widgets, Microsoft Gadgets, Yahoo! Widgets, Google Desktop Gadgets…</li><li>some NoSQL databases like <a href="https://www.mongodb.com/">MongoDB</a></li><li>PDF files with Adobe Acrobat and Adobe Reader</li><li>scripting for the Adobe Creative Suite, OpenOffice, LibreOffice, Unity…</li></ul><p>And this is not even an exhaustive list.</p><p>It is undeniable that Javascript has made a great impact, and it is still on the rise. <a href="http://githut.info/">Github statistics</a> show it to be the language with the most active repositories and total pushes, and with new standards being continuously developed and adopted (ES2015, ES2016, and the currently in-progress ES2017), Javascript is shaping up to be a strong contender for the place of the most versatile language of the future.</p><p>So, is Javascript the right thing for you?</p><h2><a id="The_Stack_19"></a>The Stack</h2><p>As mentioned before, Javascript can satisfy virtually all needs of a modern web application. The most commonly known Javascript stack is <a href="http://mean.io/">MEAN</a> — <a href="https://www.mongodb.com/">MongoDB</a>, <a href="https://expressjs.com/">Express</a>, <a href="https://angular.io/">AngularJS</a>, <a href="https://nodejs.org">Node.js</a> —, but there are, of course, many other options.</p><p>Our developers are highly proficient in several stack configurations, but the one that is most commonly requested by our clients and which has shown to have great potential and flexibility is:</p><h3><a id="Backend_mdash_Nodejs__Express_25"></a>Back-end — Node.js + Express</h3><p>Node.js is a Javasript runtime based on Chrome’s V8 Javascript Engine, which brings Javascript from the browser to the server. It is event-driven and non-blocking. Node.js, does not support threads, but can make use of multiple processors by spawning child processes and with its clustering support.</p><p>It is most commonly used with Express, which is a fast and efficient routing solution with an incredible number of existing middlewares for just about anything you might ever need to include in your application.</p><h3><a id="Frontend_mdash_React__Redux_31"></a>Front-end — React + Redux</h3><p>React is a Javascript library created by Facebook, which is used for building graphical user interfaces for the web. It takes the place of the <em>V</em> — View — in the common Model-View-Controller pattern, and can work very well combined with the Redux state manager, or even coupled with a front-end framework like AngularJS.</p><h3><a id="Mobile_mdash_React_Native_35"></a>Mobile — React Native</h3><p>React Native is a way for building full-fledged mobile apps in Javascript. It works on both Android devices and iPhones, and even offers some benefits over platform-native languages, like absence of constant recompiling of code, instant reloading, and hot reloading which includes new code but preserves the current state in the application. While not perfect for applications that require every last atom of device power for maximum performance, like power-hungry games, it is well-suited for most common uses.</p><h3><a id="Database_mdash_MongoDB_39"></a>Database — MongoDB</h3><p>MongoDB is a NoSQL database system that uses JSON-like documents with schemas. Javascript can be used in its queries, which, together with the document format, means that it plays very well with any Javascript application. MongoDB can run over multiple servers, as it uses sharding for horizontal load balancing, and has built-in replication systems, which provide automatic fall-back to replicas in case of primary source failure.</p><h2><a id="Technology_43"></a>Technology</h2><h3><a id="Main_differences_from_other_languages_45"></a>Main differences from other languages</h3><h4><a id="Prototypal_inheritance_47"></a>Prototypal inheritance</h4><p>While the ES2015 standard brought the <code>class</code> keyword to Javascript, these classes are not an implementation of the classical inheritance, but rather just syntactic sugar for Javascript’s actual inheritance model — prototypal inheritance.</p><p>Simply put, prototypal inheritance differs from classical inheritance in the sense that while classical inheritance uses “blueprints”, i.e. classes, from which objects are instantiated, in prototypal inheritance, such blueprints do not exists. In Javascript, objects inherit directly from other objects, which thus become <em>prototypes</em> of the former.</p><p>This also means that Javascript uses prototype chains instead of extended classes, and that it does not support multiple inheritance at the same hierarchical level of the parent. A very common pattern to achieve most benefits of multiple inheritance while avoiding some pitfalls thereof, however, is concatenative inheritance.</p><h4><a id="Functional_55"></a>Functional</h4><p>Javascript is a multi-paradigm language. It can be used to write both Object-Oriented or Functional code. This is possible because functions are 1st class citizens in Javascript, which means they can be used and passed around as any other value could be. This is aided by the concepts of lexical scope and lexical closures, which enable internal function state preservation even after execution of the outer scope(s) finishes.</p><h4><a id="Asynchronous_59"></a>Asynchronous</h4><p>Where most other mainstream languages rely on multi-threading, Javascript instead relies on the internal Event-Loop and uses web workers and child processes to make use of multiprocessor systems. This allows Javascript to avoid many common problems arising from bad thread handling without major performance sacrifice. The asynchronicity also prevents IO-blocking, which is especially crucial in web browsers, where a blocked UI thread could completely ruin the UX.</p><h4><a id="Variadic_functions_63"></a>Variadic functions</h4><p>Where most languages demand one specify the exact number and often type of function parameters, Javascript allows for passing a smaller or greater number of parameters to functions than explicitly specified. This is highly useful when needing to “pre-load” a function with e.g. just the first two parameters, which binds back to Functional Programming concepts.</p><h2><a id="Conclusion_67"></a>Conclusion</h2><p>Javascript is one of the most widespread programming languages on the planet and will definitely remain so for quite some time. With its domination of the web and rising popularity in mobile development, we would be remiss to not advise you to take it under serious consideration as the language for your project. Our Javascript experts will be happy to talk to you and are certain to alleviate your doubts about it, as they are veterans honed by “Javascripting” at household names like Fox, Twitter, Riot Games etc.</p><p>We are looking forward to helping you bridge the gap between your plans and the future reality, so do not hesitate and let us know, how we can be of assistance!</p><br/><div class="text__item"><h2>Guide to JavaScript Interviewing</h2><p>It’s the 21st century and web users expect full-featured, responsive web applications with intuitive interfaces.</p><p>JavaScript helps you create such web applications.</p><p>But how?</p><p>Generally, great products are made of good code and good code is written by good developers.</p><p>So, one sure way to create a great product is to hire a good developer.</p><p>However, identifying a good developer amongst a pool of job applicants can be taxing.</p><p>Whether you’re looking to hire a front-end designer, a node.js back-end engineer or a full-stack JavaScript generalist, this guide contains interview techniques that can help you do just that.</p><p>Good coding relies on more than just the knowledge of a language syntax. You need someone who can turn your wildest dreams into reality, bring new ideas to the table and create stuff people love.</p><p>How can you tell this about a stranger by spending 20-30 minutes with them in a conference room or on Skype?</p><h3>1. Explore their JavaScript Expertise</h3><p>Rather than testing the applicant’s general coding knowledge, you should focus on their JavaScript chops.</p><p>This helps you judge their abilities.</p><p>Here’s a quick way to explore:</p><p>Ask a simple JavaScript-related question.</p><p>Based on the answer, ask a slightly more detailed one, and continue digging in until you reach the candidate’s limit.</p><p>Nevertheless, if an applicant has good general experience beyond JS, that’s even better.</p><h3>2. Get Them to Critique Something</h3><p>After testing their JavaScript expertise, go a step further to get them to review something—especially a JavaScript-based technology.</p><p>Here, you should look to see if:</p><p>They get the method signature right</p><p>Their algorithm is reasonable</p><p>They can explain its workings</p><p>They can give some pointers for improvement</p><p>They can find common line-break issues and so on.</p><h3>3. Ask Them to Perform a Quick Task</h3><p>But when doing this, be careful. The task shouldn’t necessarily be about solving some puzzles or problems.</p><p>It’s better to judge using functional code as opposed to abstract modular puzzles with no connection to the actual job in question.</p><p>The task should be simple, but practicable in relation to the job.</p><p>Whatever it is, don’t ask the candidate to write a code on paper or whiteboard.</p><p>The traditional whiteboard coding exercise is a poor indicator of actual coding prowess and a terrible strategy for recruiting devs.</p><p>People don’t write code on paper or whiteboard, they do it with computers using macros, context-sensitive help, auto-completion, and indexed API documentation.</p><p>If you think it’ll take time for candidates to create something during the interview, then it might make sense to ask them to do so before the interview and bring the code on a notebook PC.</p><p>But even then, do not rely totally on the code example. Instead, follow point #4 below to boot.</p><h3>4. Ask to See Their Work</h3><p>Most applicants will come prepared for point #3 above—performing a quick task.</p><p>And if you base your final judgment on how awesome they were at that, you might end up hiring an incompetent developer.</p><p>So before or after the interview, take a few moments to look into the candidate’s code portfolio. It could be open-source or hobby projects.</p><p>Review and discuss the design, coding style, and decisions that went into it.</p><p>If you like the projects, ask the specific features and functionalities the applicant created.</p><p>For example, did the person create the product from scratch or started working on existing code?</p><p>Looking at actual code tells you much more than having candidates write rushed-over, contrived five-liners they already crammed.</p><p>It tells if someone is good realistically, and not just at the interview.</p><h3>Wrapping up</h3><p>To wrap up, here are a few hints to help you even more:</p><p>To identify a good JavaScript developer, you have to know JavaScript yourself and know what questions to ask. Otherwise, you won’t understand what applicants present and may end up embarrassing yourself. I recommend getting help from someone who knows JavaScript.</p><p> Developers aren’t all the same. A reasonable question depends on the candidate’s expertness.</p><p>Discourse is important. So, find a way to engage a conversation.</p><p>Finally, the developer’s personality is just as important as their professionalism, because one bad dude can destroy an entire team forever.</p></div>',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Javascipt Developers",
    caption: "X-Team is a development company of motivated Javascipt programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Javascipt developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Javascipt developers now',
        title: 'Hire Javascript developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Javascript",
    hasFed: true,
    devs: [
      {
        pic: "andrew.jpg",
        name: "Andrew Stratu",
        link: "https://github.com/avantgardian",
        news: [
          {badge: 'course', status: 'completed', label: " Advanced SVG Animation course on FrontEndMasters.com"},
          {badge: 'conference', status: 'attended', label: " SmashingConf in Barcelona with 15 other X-Teamers."},
          {badge: 'course', status: 'read', label: " SurviveJS - React, a top resource on mastering React."}
        ]
      },
      {
        pic: "gianluca.jpg",
        name: "Gianluca Esposito",
        link: "https://github.com/gesposito",
        news: [
          {badge: 'course', status: 'completed', label: " Building React Applications with Idiomatic Redux; course on Egghead."},
          {badge: 'conference', status: 'attended', label: " ReactEurope in Paris with 10 other X-Teamers."},
          {badge: 'code', status: 'submitted', label: " a pull request to GatsbyJS, a React static site generator."}
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
    ],
    button: {
      href: '/hire-developers',
      anchor: 'Hire Javascipt Developers Now',
      title: 'Hire Javascipt developers',
      big: true,
      style: 'red'
    }
  },
  DevQuotes: {
    hasQuotes: false,
    quotes: [],
  },
  CurrentPosts: {
    hasPosts: true,
    tech: "Javascipt",
    posts: [
      {
        title: "JavaScript Trends to Watch in 2017",
        link: 'https://x-team.com/blog/javascript-trends-to-watch-in-2017/',
        text: "Redux creator Dan Abramov asked his massive audience of JS devs on Twitter what the most interesting things in the JS world are. I condensed the huge list of responses to the most popular ones here. It's a very interesting look into the future of JS over the next year."
      },
      {
        title: 'Reactive Programming with Cycle.js',
        link: 'https://x-team.com/blog/reactive-programming-cycle-js/',
        text: 'The following tutorial contains an overview of Material Design UI components with example code for including and customising them in your application. All of them can be used independently from others, so you can treat every section as a reference guide.'
      },
      {
        title: 'Introduction to ReactiveX on Android',
        link: 'https://x-team.com/blog/introduction-reactivex-android/',
        text: 'Reactive programming is the new cool kid in JavaScript town. The simple premise of reacting to changing environment is met with beauty of functional programming. Despite its popularity there aren’t many examples on how to apply it in everyday work.'
      },
      {
        title: 'Include JavaScript Libraries in an Ionic 2 TypeScript Project',
        link: 'https://x-team.com/blog/include-javascript-libraries-in-an-ionic-2-typescript-project/',
        text: "Angular 2 and Ionic 2 are very new developer frameworks. Although not as new, the TypeScript language has been getting a lot of attention as the recommended way to develop with Angular 2 and Ionic 2. TypeScript is a superset to JavaScript that turns it into a typed language. Code is written as TypeScript and then compiled into JavaScript."
      },
      {
        title: 'Setting Up JavaScript Testing Tools for ES6',
        link: 'https://x-team.com/blog/setting-up-javascript-testing-tools-for-es6/',
        text: "Using ES6 (and even far future versions like ES7!) is becoming very easy these days – just set up Babel, and you’re off to the races. If you’re only writing code for NodeJS, you might even get away without Babel, as the native ES6 support is getting very good."
      }
    ]
  },
  Related: {
    RelSkills: [
      {skill: 'react'},
      {skill: 'node'},
      {skill: 'angular'}
    ],
  },
  LandingCta: {
    tech: "Javascript",
    ctaAnchor: "Hire Javascript Developers",
    ctaTitle: "Hire Javascript Developers",
  },
}

export default HireJavascript
