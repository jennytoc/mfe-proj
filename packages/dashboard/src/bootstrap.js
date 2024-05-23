import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to start up app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// If in dev mode and isolated, then call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');
    
    if (devRoot) {
        mount(devRoot);
    }
};

export { mount };