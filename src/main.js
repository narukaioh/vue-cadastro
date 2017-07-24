'use strict'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate'
import { VueMaskDirective } from 'v-mask'
import VeeValidateMessagesBR from "vee-validate/dist/locale/pt_BR";

Validator.installDateTimeValidators(moment)

VeeValidate.Validator.addLocale(VeeValidateMessagesBR);
Vue.use(VeeValidate, {locale: 'pt_BR'});

Vue.directive('mask', VueMaskDirective)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
