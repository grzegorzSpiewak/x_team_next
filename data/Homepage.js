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
        style: ''
    }
  },

  Hero: {
    title: "Keep<br />Moving<br><i>Forward.</i>",
    caption: "Motivated developers, ready to join your team.",
    layout: "centered",
    style: "home",
    buttons: [
      {
        href: 'https://www.youtube.com/watch?v=P5oVuk5M50s',
        anchor: 'Watch Video',
        title: 'Watch Video',
        overlay: true,
        big: true
      }
    ]
  },

  Video: {
    link: "https://player.vimeo.com/video/201457766?background=1&autoplay=1&loop=1&title=0byline=0&portrait=0",
    width: "1280",
    height: "720",
  },

  Cavalry: {
    title: "We are your<br>cavalry.",
    items: [
      {pic: "dev1.jpg", icon: "people", title: "We'll join your team.", text: "You manage the projects, and our trusted developers join your team full-time."},
      {pic: "dev2.jpg", icon: "contract", title: "Simple, flexible contract.", text: "Scale your team as needed.<br>We bill on a monthly basis."},
      {pic: "dev3.jpg", icon: "graph", title: "We support their growth.", text: "We fund every developer's learning and growth to keep them motivated."}
    ]
  },

  VideoFilter: {
    title: "The right team",
    subtitle: "Kaplan Inc. explains why they chose X-Team.",
    link: "https://www.youtube.com/watch?v=CWvmUmC9Dpk",
  },

  VideoQuote: {
    logo: "static/images/logos/kaplan-logo.png",
    alt: "Kaplan Inc.",
    title: "The right team",
    text: "In this video, Kaplan Inc., one of the largest education companies in the world, explains why they partner with X-Team to build their products.",
    image: "static/images/pics/the-right-team.jpg",
    link: "https://www.youtube.com/watch?v=CWvmUmC9Dpk"
  },

  CheckList: {
    style: 'dark',
    align: 'left',
    title: 'Our <br class="br--desktop">Partner <br>Benefits.',
    itemsTitle: "You'll get...",
    items: [
      {text: "A full-time, scaleable team of trusted developers."},
      {text: "In-depth, daily progress updates (without asking for them). We can also join daily stand-ups."},
      {text: "Dedicated account manager, available any time."},
      {text: "Flexible contracts with simple monthly billing."}
    ]
  },

  Hire10Years: {
    title: "10 years in<br>the making.",
    text: "We train our developers based on our decade’s worth of  knowledge and experience around proactive communication.",
    theme: 'light',
    align: 'right',
    style: 'cutout',
    image: 'dev1',
    ctaHref: '/hire-developers',
    ctaAnchor: 'Hire X-Team',
    ctaTitle: 'Hire X-Team',
    ctaStyle: 'dark'
  },

  NeverStop: {
    title: "Never Stop<br>Learning.",
    text: "We invest in learning and growth for our developers. This helps them maintain their skills and build a motivated attitude that drives your projects forward.",
    theme: 'dark',
    align: 'left',
    style: 'cutout',
    image: 'dev2',
    ctaHref: '/unleash',
    ctaAnchor: 'Learn More',
    ctaTitle: 'Learn More',
    ctaStyle: ''
  },

  Ordinary: {
    title: "Ordinary<br>is not an<br>option.",
    text: "After a decade of hiring developers, we know how separate the ordinary from the extraordinary.",
    theme: 'light',
    align: 'right',
    style: 'cutout',
    image: 'dev3',
    ctaHref: '/our-developers',
    ctaAnchor: 'Learn More',
    ctaTitle: 'Learn More',
    ctaStyle: 'dark'
  },

  Quotes: {
    ctaHref: '/portfolio',
    ctaAnchor: "Past Work",
    ctaTitle: "Portfolio",
    items: [
      { quote: "All the X-Teamers who worked on our team brought something unique to the table and helped create a synergy that's almost impossible to find.", company: 'Danielle Chircop, Kaplan Inc.'}
    ]
  },

  Skills: {
    title: "Ready to assemble.",
    subtitle: "Hire motivated developers who are driven to keep their<br>skills sharp in the most widely adopted technologies today.",
    button: {
      href: '/hire-developers',
			anchor: 'Hire Developers',
			title: 'Hire Developers',
			big: true,
			style: 'dark'
    }
  },

  Hire: {
    title: 'We<br>never<br>hold<br>back.',
    picture: 'pic1',
    ctaHref: '/hire-developers',
    ctaAnchor: 'Hire X-Team',
    ctaTitle: 'Hire X-Team',
    ctaStyle: 'red',
    ctaBig: true
  },

  Subscription: {
    title: "We'll help you unleash.",
    subtitle: "Join the 20,000 developers who subscribe to our newsletter."
  }

}

export default Homepage
