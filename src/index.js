import Launcher from './Launcher.vue'
import VTooltip from 'v-tooltip'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const defaultComponentName = 'beautiful-chat'

const Plugin = {
  install(Vue, options = {}) {
    /**
     * Makes sure that plugin can be installed only once
     */
    if (this.installed) {
      return
    }

    this.installed = true
    this.event = new Vue()
    this.dynamicContainer = null
    this.componentName = options.componentName || defaultComponentName
    /**
     * Plugin API
     */
    Vue.prototype.$chat = {
      _setDynamicContainer(dynamicContainer) {
        Plugin.dynamicContainer = dynamicContainer
      }
    }
    /**
     * Sets custom component name (if provided)
     */
    Vue.component(this.componentName, Launcher)
    Vue.use(VTooltip)
    // Install BootstrapVue
    Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
    Vue.use(IconsPlugin)
  }
}

export default Plugin
