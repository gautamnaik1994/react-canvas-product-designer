import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import ReduxThunk from 'redux-thunk';
import Router from './routes';

// import reducers from './reducers/';
import ConfigureStore from './store';

const reduxStore = ConfigureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={reduxStore}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(Router);

// Hot Module Replacement API
if (module.hot) {
  // module.hot.accept('./reducers', () => {
  //   const nextRootReducer = require('./reducers/index');
  //   store.replaceReducer(nextRootReducer);
  // });
  module.hot.accept('./routes.js', () => {
    const NextRouter = require('./routes.js').default;
    render(NextRouter);
  });
}
