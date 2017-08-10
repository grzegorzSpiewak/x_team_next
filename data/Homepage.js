const Homepage = {
  Head: {
    pageTitle: 'Motivated Developers, Ready to Join Your Team',
    metaDescription: "Our trusted developers join your team full-time. We fund every developer's learning and growth to keep them motivated.",
    slug: '/',
    skills: true
  },

  Menu: {
    items: [
      {href: "/", anchor: "Home", title: "Home", currentPage: true},
      {href: "/join", anchor: "Join X-Team", title: "Join X-Team as a Developer"},
      {href: "/our-developers", anchor: "Our Developers", title: "Our Developers"},
      {href: "/unleash", anchor: "Unleash", title: "Unleash"},
      {href: "/blog", anchor: "Blog", title: "X-Team's blog"},
      {href: "/portfolio", anchor: "Portfolio", title: "Our Work"}
    ],
    button: {
        href: '/hire-developers',
        anchor: 'Hire X-Team',
        title: 'Hire X-Team',
        big: false,
        style: 'red'
    },
    currentPage: 'home',
    whiteOnMobile: true,
    landing: false,
  },

  Hero: {
    title: "Keep<br />Moving<br><i>Forward.</i>",
    caption: 'Motivated developers, <br class="br--mobile">ready to join your team.',
    align: 'center',
    buttons: [{
      href: 'https://www.youtube.com/watch?v=P5oVuk5M50s',
      anchor: 'Watch Video',
      title: 'Watch Video',
      overlay: true,
      big: true
    }]
  },

  Video: {
    link: "https://player.vimeo.com/video/201457766?background=1&autoplay=1&loop=1&title=0byline=0&portrait=0",
    width: "1280",
    height: "720",
  },

  Cavalry: {
    title: "We are your cavalry.",
    intro: 'Since 2006, the world’s leading brands have turned <br class="br--desktop"> to X-Team to help them scale their  development teams.',
    actions: [
      {
        href: "/hire-developers/",
        img: "static/images/pics/hire-developers-1.jpg",
        alt: "Developers-working",
        title: "Hire Developers",
        learn: "Learn more",
      },
      {
        href: "/join/",
        img: "static/images/pics/join-x-team.jpg",
        alt: "Developers-standing",
        title: "Work for X-Team",
        learn: "Learn more",
      }
    ]
  },

  Intro: {
    pic: 'pics/remote-developers.jpg',
    align: 'left',
    items: [
      {title: "We'll join your team.", text: "You manage the projects, and our trusted developers join your team full-time."},
      {title: "Simple, flexible contract.", text: "Scale your team as needed. We bill on a monthly basis."},
      {title: "We support their growth.", text: "We fund every developer's learning and growth to keep them motivated."}
    ],
  },

  VideoQuote: {
    logo: "static/images/logos/kaplan-logo.png",
    alt: "Kaplan Inc.",
    title: "The right team",
    text: "In this video, Kaplan Inc., one of the largest education companies in the world, explains why they partner with X-Team to build their products.",
    image: "static/images/pics/the-right-team.jpg",
    link: "https://www.youtube.com/watch?v=CWvmUmC9Dpk"
  },

  Benefits: {
    title: 'Our Partner Benefits.',
    text: "We’ve built partnerships with leading brands that have lasted nearly a decade thanks to level of care & attention we provide.",
    items: [
      {icon: 'team', title: 'Dedicated Team.', text: "A full-time, scaleable team of trusted developers."},
      {icon: 'updates', title: 'Daily Updates.', text: "In-depth, daily progress updates. (Before you even ask for them)"},
      {icon: 'manager', title: 'Account Manager.', text: "Dedicated account manager, available any time."},
      {icon: 'contract', title: 'Flexible Contract.', text: "Flexible contracts with simple monthly billing."}
    ]
  },

  Hire10Years: {
    title: "10 years in<br>the making.",
    text: "We train our developers based on our decade’s worth of  knowledge and experience around proactive communication.",
    align: 'right',
    pic: 'pics/10-years-in-the-making.jpg',
    ctaHref: '/hire-developers/',
    ctaAnchor: 'Hire X-Team',
    ctaTitle: 'Hire X-Team',
    ctaStyle: 'red'
  },

  MotivatedDevs: {
    title: "Motivated<br class='br--desktop'> Developers.",
    text: "We invest in learning and growth for our developers. This helps them maintain their skills and build a motivated attitude that drives your projects forward.",
    align: 'left',
    pic: 'pics/motivated-developers.jpg',
    ctaHref: '/unleash/',
    ctaAnchor: 'Learn More',
    ctaTitle: 'Learn More',
    ctaStyle: 'red'
  },

  Skills: {
    title: "Ready to<br>Assemble.",
    text: "Hire motivated developers who are driven to keep their skills sharp in the most widely adopted technologies today.",
    align: 'skills',
    pic: 'pics/developers-skills.png',
    ctaHref: '/hire-developers/',
    ctaAnchor: 'Hire Developers',
    ctaTitle: 'Hire Developers',
    ctaStyle: 'red'
  },

  Subscription: {
    title: "We'll help you unleash.",
    subtitle: "Join the 20,000 developers who subscribe to our newsletter."
  }
}

export default Homepage
