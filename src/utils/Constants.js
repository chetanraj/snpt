/*
 * React
 */
const __ReactImp = `import React from 'react';`;
const __ReactImpDOM = `import ReactDOM from 'react-dom';`;
const __ReactImpComponent = `import React, { Component } from 'react';`;
const __ReactImpReactAndPropTypes = `import React, { Component } from 'react';
import PropTypes from 'prop-types';`;
const __ReactImpPropTypes = `import PropTypes from 'prop-types';`;
const __ReactComponent = `import React, { Component } from 'react'

export default class Snpt extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}`;
const __ComponentDidMount = `componentDidMount = () => {
  
}`;
const __ShouldComponentUpdate = `shouldComponentUpdate(nextProps, nextState) {
  
}`;
const __ComponentDidUpdate = `componentDidUpdate(prevProps, prevState) {
  
}`;
const __ComponentWillUnMount = `componentWillUnmount = () => {
  
}`;

const __constructor = `constructor(props) {
  super(props);

}`;
const __constructorWithState = `constructor(props) {
  super(props);

  this.state = {
     
  }
}`;
const __state = `this.state = {}`;
const __setState = `this.setState({ })`;

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

/*
 * Vue
 */
const __VueImp = `import Vue from 'vue';`;

/*
 * Axios
 */
const __AxiosGET = `axios.get('')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`;

const __AxiosPOST = `axios.post('', { })
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`;

const __AxiosPUT = `axios.put('', { })
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`;

const __AxiosPATCH = `axios.patch('', { })
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`;

const __AxiosDELETE = `axios.delete('')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`;

export const types = {
  react: {
    import: {
      react: {
        code: __ReactImp
      },
      'react-dom': {
        code: __ReactImpDOM
      },
      'react-component': {
        code: __ReactImpComponent
      },
      'prop-types': {
        code: __ReactImpPropTypes
      },
      'react-prop-types': {
        code: __ReactImpReactAndPropTypes
      }
    },
    'components, state': {
      component: {
        code: __ReactComponent,
        type: 'react'
      },
      constructor: {
        code: __constructor,
        type: 'react'
      },
      constructorWithState: {
        code: __constructorWithState,
        type: 'react'
      },
      state: {
        code: __state,
        type: 'react'
      },
      setState: {
        code: __setState,
        type: 'react'
      },
      componentDidMount: {
        code: __ComponentDidMount,
        type: 'react'
      },
      shouldComponentUpdate: {
        code: __ShouldComponentUpdate,
        type: 'react'
      },
      componentDidUpdate: {
        code: __ComponentDidUpdate,
        type: 'react'
      },
      componentWillUnmount: {
        code: __ComponentWillUnMount,
        type: 'react'
      }
    }
  },
  redux: {
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
  },
  vue: {
    import: {
      vue: {
        code: __VueImp
      }
    }
  },
  axios: {
    'HTTP methods': {
      get: {
        code: __AxiosGET
      },
      post: {
        code: __AxiosPOST
      },
      put: {
        code: __AxiosPUT
      },
      patch: {
        code: __AxiosPATCH
      },
      delete: {
        code: __AxiosDELETE
      }
    }
  }
};

export const frameworks = ['react', 'redux', 'vue', 'axios'];
