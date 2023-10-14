export default defineAppConfig({
  alpine: {
    title: '23jjl',
    description: 'Showcase of a college student, developer, designer, philosopher, and Lutheran.',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: true,

        // our github repository
        repository: '/',

        text: '23jjl'
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '',
      instagram: '',
      linkedin: '',      
      
      github: 'dev23jjl',
      youtube: '@dev23jjl',
      substack: {
        icon: 'simple-icons:substack',
        label: 'Substack',
        href: 'https://23jjl.substack.com/',
      },
      discord: {
        icon: 'simple-icons:discord',
        label: 'Discord',
        href: 'https://discordapp.com/users/23jjl',
      },
      mail: {
        icon: 'heroicons-solid:envelope',
        label: 'Mail',
        href: 'mailto:dev23jjl@skiff.com',
    },
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})