import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'app1', // app name registered
    entry: '//localhost:7100',
    container: '#subapp-container',
    activeRule: '/app1',
  },
  {
    name: 'app2',
    entry: '//localhost:7200',
    container: '#subapp-container',
    activeRule: '/app2',
  },
]);

start();
createApp(App).mount('#app')
