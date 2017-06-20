const HireAndroid = {
  tech: "Android",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: true,
  },
  Hero: {
    title: "Hire Dedicated<br /> Android Developers",
    caption: "X-Team is a development company of motivated Android programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Android developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Android developers now',
        title: 'Hire Android developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Android",
    hasFed: false,
    devs: [],
    button: {},
  },
  DevQuotes: {
    hasQuotes: false,
    quotes: [],
  },
  CurrentPosts: {
    hasPosts: true,
    tech: "Android",
    posts: [
      {
        title: "The Beginner's Guide to Notifications in Android N",
        link: 'https://x-team.com/blog/beginners-guide-notifications-android-n/',
        text: "Notification API is backwards compatible, but not every new feature is available across all platforms — we'll see how to deal with that using Android's API. In this tutorial we'll create basic notifications and showcase just introduced advanced features in order to make sure your apps are ready for Android N."
      },
      {
        title: 'Android Material Design using Design Support Library',
        link: 'https://x-team.com/blog/android-material-design-using-design-support-library/',
        text: 'The following tutorial contains an overview of Material Design UI components with example code for including and customising them in your application. All of them can be used independently from others, so you can treat every section as a reference guide.'
      },
      {
        title: 'Introduction to ReactiveX on Android',
        link: 'https://x-team.com/blog/introduction-reactivex-android/',
        text: 'ReactiveX, also known as Reactive Extensions or RX, is a library for composing asynchronous and event-based programs by using observable sequences. This is perfect for Android, which is event-driven and user-focused platform.'
      },
      {
        title: 'Android Runtime Permissions',
        link: 'https://x-team.com/blog/android-runtime-permissions/',
        text: "Android operating system is based on Linux. Applications run in their own sandboxes separated from each other, and are strictly controlled by the Operating System. When you tap on an application icon in order to open it (assuming it isn't running in the background already), operating system starts new process, loads the app into memory and then runs it."
      },
      {
        title: 'How To Get Started With Android Programming',
        link: 'https://x-team.com/blog/how-get-started-android-programming/',
        text: "This tutorial will teach you how to setup and run Android project using Android Studio on OS X (Windows and Linux is not much different). It will be a starter project for all other tutorials. Basic concepts of Android and its development process will not be explained in every following tutorial, so please refer to this post as needed."
      }
    ],
  },
  Related: {
    RelSkills: [
      {skill: 'mobile'},
      {skill: 'ios'},
      {skill: 'ionic'}
    ],
  },
  LandingCta: {
    tech: "Android",
    ctaAnchor: "Hire Android Developers",
    ctaTitle: "Hire Android Developers",
  },
}

export default HireAndroid
