const HirePython = {
  tech: "Python",
  TextLanding: {
    hasText: false,
    text: '',
    style: "tech-text",
    noText: "noText",
  },
  Hero: {
    title: "Hire Dedicated<br /> Python Developers",
    caption: "X-Team is a development company of motivated Python programmers, architects and consultants from around the world. We provide our developers to companies that need help outsourcing their software projects with top Python developers.",
    layout: 'centered',
    style: 'landing',
    buttons: [
      {
        href: '/hire-developers',
        anchor: 'Hire Python developers now',
        title: 'Hire Python developers',
        big: true
      }
    ]
  },
  DevsFed: {
    tech: "Python",
    hasFed: false,
    devs: [],
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
    hasPosts: true,
    tech: "Python",
    posts: [
      {
        title: 'Supercharge Your Development with Vagrant and Ansible',
        link: 'https://x-team.com/blog/supercharge-development-vagrant-ansible/',
        text: 'Vagrant is well known among developers, and Ansible is well known among DevOps. Together these two guys can be a great setup for nearly every situation.'
      },
      {
        title: 'How To Get Started With Ansible Playbooks',
        link: 'https://x-team.com/blog/how-to-get-started-with-ansible-playbooks/',
        text: 'In this guide, we will be learning about how to use Ansible whilst deploying a simple Flask application on a CentOS 7 machine. We will use the provisioning tool Ansible to carry out this task, instead of running commands one by one. While building our deployment script, we will get the chance to explore a wide array of Ansible’s features and also some best practices.'
      }
    ],
  },
  Related: {
    RelSkills: [
      {skill: 'ruby'},
      {skill: 'go'},
      {skill: 'flask'}
    ],
  },
  LandingCta: {
    tech: "Python",
    ctaAnchor: "Hire Python Developers",
    ctaTitle: "Hire Python Developers",
  },
}

export default HirePython
