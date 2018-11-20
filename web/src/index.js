import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom';
import App from './App';
import './assets/styles/base.scss';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

const rootElement = document.getElementById('root');

const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
    <HashRouter>
      <Component />
    </HashRouter>
  </Provider>,
    rootElement
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./', () => {
    const NextApp = require('./').default
    renderApp(NextApp);
  });
}

registerServiceWorker();