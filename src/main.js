// polyfill
import 'babel-polyfill';

import Vue from 'vue';
import App from './App';
import store from './store';

import VueSocketIO from 'vue-socket.io'

const options = { path: '/my-app/' }; //Options object to pass into SocketIO

Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('http://metinseylan.com:1992', options), //options object is Optional
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

Vue.config.devtools = true;

new Vue({
    el: 'body',
    components: { App },
    store: store
});
