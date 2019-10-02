/*
 * Redux
 */
const __ReduxImp = `import { connect } from 'react-redux';`;

const __ReduxCombineReducersImport = `import { combineReducers } from 'redux';`;
const __ReduxCreateStoreImport = `import { createStore } from 'redux';`;

const __ReduxConfigureStore = `import { combineReducers, createStore } from 'redux';
import reducer1 from './reducer1';
import reducer2 from './reducer2';

export default function configureStore (initialState = {}) {
    const reducers = {
        reducer1: reducer1,
        reducer2: reducer2,
    };

    const rootReducer = combineReducers({
        ...reducers,
        // Add any other if needed like routing.
    });

    return createStore(rootReducer, initialState);
}`;

const __ReduxAddToReact = `import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
);`;

const __ReduxSimpleActionCreator = `const incrementCountType = 'INCREMENT_COUNT';
const decrementCountType = 'DECREMENT_COUNT';

const initialState = { count: 0 };

export const actionCreators = {
  increment: () => ({ type: incrementCountType }),
  decrement: () => ({ type: decrementCountType })
};`;

const __ReduxSimpleReducer = `const incrementCountType = 'INCREMENT_COUNT';
const decrementCountType = 'DECREMENT_COUNT';

const initialState = { count: 0 };

export const actionCreators = {
  increment: () => ({ type: incrementCountType }),
  decrement: () => ({ type: decrementCountType })
};

export const reducer = (state, action) => {
  switch (action.type) {
    case incrementCountType: return { ...state, count: state.count + 1 };
    case decrementCountType: return { ...state, count: state.count - 1 };
  }
  return state || initialState;
};`;

const __ReduxSimpleContainer = `import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Counter = props => (
  <div>
    <h1>Counter</h1>

    <p>Current count: <strong>{props.count}</strong></p>

    <button onClick={props.increment}>Increment</button>
  </div>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);`;

export default {
  import: {
    redux: {
      code: __ReduxImp
    },
    combineReducer: {
      code: __ReduxCombineReducersImport
    },
    createStore: {
      code: __ReduxCreateStoreImport
    }
  },
  configure: {
    configureStore: {
      code: __ReduxConfigureStore
    },
    addToReactApp: {
      code: __ReduxAddToReact
    },
    simpleActionCreator: {
      code: __ReduxSimpleActionCreator
    },
    simpleReducer: {
      code: __ReduxSimpleReducer
    },
    simpleContainer: {
      code: __ReduxSimpleContainer
    }
  }
};
