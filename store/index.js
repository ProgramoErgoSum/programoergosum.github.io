import metas from '~/store/api/v1/metas.json'

const state = () => ({
  drawer: false,
  metas,
  topNavigation: [
    {
      title: 'Tutoriales de programación',
      icon: '',
      class: '',
      href: 'https://www.programoergosum.com'
    },
    {
      title: 'Plataforma STEM',
      icon: '',
      class: '',
      href: 'https://www.aprendeprogramando.es'
    },
    {
      title: 'Donaciones',
      icon: 'mdi-paypal',
      class: 'primary',
      href:
        'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7N56RY2QKJJDS&source=url'
    }
    /*
    {
      title: 'Centros',
      icon: 'mdi-school',
      to: '/centros'
    },
    {
      title: 'Colabora',
      icon: 'mdi-account-heart-outline',
      to: '/colabora'
    }
    */
  ],
  navigation: [
    {
      title: 'Asociación',
      icon: '',
      to: '/asociacion'
    },
    /*
    {
      title: 'Extraescolares',
      icon: '',
      to: '/actividades'
    },
    */
    {
      title: 'Formación del profesorado',
      icon: '',
      to: '/formaciones'
    },
    {
      title: 'Centros',
      icon: '',
      to: '/centros'
    },
    {
      title: 'Colabora',
      icon: '',
      to: '/colabora'
    },
    {
      title: 'Blog',
      icon: '',
      to: '/blog'
    }
  ],
  mobile: [
    {
      title: 'Asociación',
      icon: 'mdi-information-variant',
      to: '/',
      items: [
        {
          title: 'Nosotros',
          icon: '',
          to: '/asociacion'
        },
        {
          title: 'Extraescolares',
          icon: '',
          to: '/actividades'
        },
        {
          title: 'Blog',
          icon: '',
          to: '/blog'
        },
        {
          title: 'Contacto',
          icon: '',
          to: '/contacto'
        }
      ]
    },
    {
      title: 'Tutoriales',
      icon: 'mdi-code-tags',
      href: 'https://www.programoergosum.com'
    },
    {
      title: 'Plataforma STEM',
      icon: 'mdi-language-python',
      href: 'https://www.aprendeprogramando.es'
    },
    {
      title: 'Formación profesores',
      icon: 'mdi-school',
      to: '/formaciones'
    },
    {
      title: 'Colabora',
      icon: 'mdi-account-heart-outline',
      to: '/colabora'
    },
    {
      title: 'Centros',
      icon: 'mdi-school',
      to: '/centros'
    }
  ]
})

const getters = {
  metas: state => state.metas,
  topNavigation: state => state.topNavigation,
  navigation: state => state.navigation,
  mobile: state => state.mobile
}

const actions = {}

const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer)
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
