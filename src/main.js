import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// custom filter globally
app.config.globalProperties.$filters = {
    snippet(value) {
        if (!value || typeof value !== 'string') return '';
        return value.slice(0, 40);
    },
}
app.mount('#app')