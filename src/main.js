// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

Vue.config.productionTip = false;


// Ready translated locale messages
const messages = {
  en: {
    topLevel: {
      message: 'hello',
      'error-message': 'error-message (Hyphen)',
      'error_message': 'error_message (Underscore)',
      linked1: 'linked1: @:topLevel.message',
      linked2: 'linked2: @:topLevel.error-message',
      linked3: 'linked3: @:topLevel.error_message',
    },
    componentInterpolation: {
      messageText: 'Message Level: {0}',
      messageText2: '@:topLevel.message: {0}',
    }
  }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  i18n
});
