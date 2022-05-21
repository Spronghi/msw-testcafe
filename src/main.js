import { createApp } from 'vue'
import { worker } from './stubs'
import App from './App.vue'

;(async () => {
  await worker.start({
    findWorker: (scriptURL) => scriptURL.includes('mockServiceWorker')
  });

  createApp(App).mount('#app')
})()

