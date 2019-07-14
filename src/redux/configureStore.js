import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const storeEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const preLoadedState = {};

const store = createStore(reducers, preLoadedState, storeEnhancers);

export default store;

// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
//
// import clientMiddleware from './clientMiddleware';
// import reducers from './reducers';
// import * as actionCreators from './actions';
//
// export default function configureStore(preloadedState = {}, apolloClient) {
//   const DEV = process.env.NODE_ENV !== 'production';
//   const middleware = [clientMiddleware(apolloClient), thunk];
//   let composeEnhancers = compose;
//
//   if (process.env.BROWSER && DEV) {
//     /* istanbul ignore next */
//     if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
//       composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         actionCreators,
//       });
//     }
//   }
//
//   const store = createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(...middleware)));
//
//   /* istanbul ignore next */
//   if (process.env.NODE_ENV === 'development' && module.hot) {
//     module.hot.accept('./reducers', () => {
//       console.log(store);
//       store.replaceReducers(require('./reducers').default);
//     });
//   }
//
//   return store;
// }
