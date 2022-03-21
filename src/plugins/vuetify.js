import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    // dark: true,
    themes: {
      light: {
        primary: colors.grey.darken4,
        success: colors.teal.darken1,
        secondary: colors.grey.lighten1,
        accent: colors.teal.lighten2,
        error: colors.red.darken4
      }
    }
  }
})
