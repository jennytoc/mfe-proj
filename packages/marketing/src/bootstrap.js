import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById("root"));

// Mount function to start up app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot)
    }
};

export { mount };