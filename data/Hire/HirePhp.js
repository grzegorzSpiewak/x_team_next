const HirePhp = {
  tech: "Php",
  TextLanding: {
    hasText: true,
    text: '<h2>About PHP</h2><p><a href="http://php.net">PHP</a> is a general-purpose, server-side scripting language, the relative simplicity and versatility of which, at the time, has arguably been one of the main reasons for the boom of web development as we know it today.</p><p>First appearing in 1994, PHP — recursively short for <em>PHP: Hypertext Preprocessor</em> — now powers innumerable websites, from the smallest blogs to some of the most popular web services in the world.</p><p>While, once upon a time, PHP may have been criticized by some programmers, the current version (stable version 7.1.4) has an incredible improvement over those times, and PHP has grown into a language that can easily compete with others, like Javascript or Ruby, for back-end supremacy. Its frameworks provide good front-end support as well.</p><p>PHP was originally used embedded in HTML, but, nowadays, it is mostly used in the form of (frameworks). It is the <a href="http://githut.info/">4th</a> most active repository programming language on <a href="https://www.github.com">Github</a>, trailing only Javascript, Java, and Python, and, as such, it offers a very wide selection of pre-made libraries you might need for your project. The most important players, however, are PHP Frameworks:</p><h2>Popular frameworks</h2><h3>Wordpress</h3><p>If you have ever read a private blog, there is a good chance it was hosted on the <a href="https://wordpress.org/">Wordpress</a> platform. It is an open-source framework you can use to create a website, blog, or app, with thousands of plugins, themes, extensions, etc. It offers easy installation and configuration and is a great starting point, especially for those that place a higher value on development speed than a solution 100% tailor-made for their use-case.</p><h3>Symfony</h3><p><a href="http://symfony.com">Symfony</a> is a high-performance PHP framework and a set of PHP Components at once. The Symfony philosophy places a high value on best practices, standardization, and interoperability of applications, along with developer satisfaction, which means that building applications with Symfony is a fast and architecturally well-tested process, which offers the best of both worlds — speed <em>and</em> a highly-customized solution for your needs.</p><h3>Laravel</h3><p><a href="https://laravel.com/">Laravel</a> is a “PHP Framework for Web Artisans” and thus places great value on beautiful code. One of its core design points are Bundles, which are a modular packaging system that makes Laravel the best choice for those that want a completely bespoke solution, though at the price of a slightly slower development speed than e.g. Symfony offers.</p><h2>The Stack</h2><p>PHP has historically been found most commonly in the LAMP Stack (Linux, Apache, MySQL, PHP), but, nowadays, it is completely platform-, server-, and database-independent. It can be used to write RESTful servers, which pull data from NoSQL databases and forward them to Javascript-framework-based front-ends, or to write full-stack PHP applications built on top of a PostgreSQL database, using the framework’s own templating engine.</p><h2>Technology</h2><p>PHP is a scripting language that can be used with a stand-alone interpreter or embedded into HTML and served through a web server with the appropriate PHP module — common choices being <a href="https://www.apache.org/">Apache</a> and <a href="https://www.nginx.org/">Nginx</a>.</p><p>When used embedded in HTML, the PHP interpreter will only process the PHP code within the PHP delimiters (most commonly <code>&lt;?php ?&gt;</code>).</p><p>In the last two major versions (5 and 7, 6 was skipped), PHP has added type declaration support to the language for:</p><ul><li>5.0 — classes and interfaces,</li><li>5.1 — arrays,</li><li>5.4 — “callables”,</li><li>7.0 — scalars and function return types.</li></ul><p>PHP is an Object-oriented Programming language (since PHP 3), and with object handling having been completely rewritten in PHP 5, its performance and  feature set have much improved. It uses classical inheritance and, since PHP 5, supports private and protected member variables and methods, abstract classes and methods, final classes and methods, a standard way of declaring constructors and destructors, and interfaces along with multiple interface implementation support.</p><h3>PHP Implementations</h3><p>There are several implementations of PHP. The original implementation, which is also the only complete and most widely used one, is the <a href="http://www.zend.com/en/community/php">Zend Engine</a> interpreter, which compiles PHP code on-the-fly. It is also considered the “reference implementation” of PHP.</p><p>The most popular “competitor” of the Zend Engine is the <a href="http://hhvm.com/">HipHop Virtual Machine</a> — HHVM — created by Facebook, which uses just-in-time compilation to achieve up to 600% performance boosts by compiling PHP into an intermediate bytecode, which is then translated into x64 machine code dynamically at runtime.</p><h2>Conclusion</h2><p>So, is PHP right for you? There can hardly be any doubt. It has been around since the world wide web was still in proverbial diapers and has grown together with it.</p><p>It offers frameworks and even pre-made solutions for just about every situation you could possibly imagine, and while its heavy changes since PHP 5 may cause doubt, whether a PHP developer you are considering is up-to-date with the language development, you can always count on X-Team’s developers to be completely current and well-versed in using everything, including PHP’s latest, most efficient, and most productive features, to ensure your dreams become reality that does not come crashing down with bugs and technical debt.</p><p>And if you are still in doubt whether PHP is right for you, let us know and our experts will be happy to help you reach the final decision.</p>',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> PHP Developers",
    caption: "X-Team is a development company of motivated PHP programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top PHP developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire PHP developers now',
        title: 'Hire PHP developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "PHP",
    hasFed: true,
    devs: [
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
        pic: "sven.jpg",
        name: "Sven Berg Ryen",
        link: "https://github.com/svenbergryen",
        news: [
          {badge: 'conference', status: 'gave a talk called', label: " Staging & Deployment of Content in Drupal; at DrupalCamp Oslo."},
          {badge: 'course', status: 'completed', label: " 4,000+ translations from English to Norwegian Bokål for Drupal 8."},
          {badge: 'code', status: 'contributed to (and maintains)', label: " EU Cookie Compliance module for Drupal 7."}
        ]
      },
      {
        pic: "ben.jpg",
        name: "Ben Ferreira",
        link: "https://medium.com/@benf86",
        news: [
          {badge: 'code', status: 'created a', label: " Serverless CRUD REST API in AWS Lambda and AWS API Gateway."},
          {badge: 'react', status: 'finished', label: " Building React Applications with Idiomatic Redux; course on Egghead."},
          {badge: 'conference', status: 'attended', label: " X-Outpost: Thailand with 6 other X-Teamers."}
        ]
      }
    ],
    button: {
      href: '/hire-developers',
      anchor: 'Hire PHP Developers Now',
      title: 'Hire PHP developers',
      big: true,
      style: 'red'
    },
  },
  DevQuotes: {
    hasQuotes: false,
    quotes: [],
  },
  CurrentPosts: {
    hasPosts: false,
    tech: "PHP",
    posts: [],
  },
  Related: {
    RelSkills: [
      {skill: 'backend'},
      {skill: 'symfony'},
      {skill: 'laravel'}
    ],
  },
  LandingCta: {
    tech: "PHP",
    ctaAnchor: "Hire PHP Developers",
    ctaTitle: "Hire PHP Developers",
  },
}

export default HirePhp
