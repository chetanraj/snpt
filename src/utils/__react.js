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

const __ReactStatelessComponent = `import React from 'react'

const Snpt = (props) => {
  return (
    <div>
    
    </div>
  )
}`;

/*
 * Hooks
 */

const __useState = `const [state, setstate] = useState(initialState)`;

const __useCallback = `useCallback(
  () => {
    callback
  },
  [input],
)
`;

const __useContext = `const context = useContext(contextValue)`;

const __useDebugValue = `useDebugValue(value)`;

const __useEffect = `useEffect(() => {
  effect
  return () => {
    cleanup
  };
}, [input])`;

const __useLayoutEffect = `useLayoutEffect(() => {
  effect
  return () => {
    cleanup
  };
}, [input])`;

const __useMemo = `useMemo(() => function, input)`;

const __useReducer = `const [state, dispatch] = useReducer(reducer, initialState, init)`;

const __useRef = `const ref = useRef(initialValue)`;

export default {
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
    componentStateless: {
      code: __ReactStatelessComponent,
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
  },
  hooks: {
    useState: {
      code: __useState,
      type: 'react'
    },
    useCallback: {
      code: __useCallback,
      type: 'react'
    },
    useContext: {
      code: __useContext,
      type: 'react'
    },
    useDebugValue: {
      code: __useDebugValue,
      type: 'react'
    },
    useEffect: {
      code: __useEffect,
      type: 'react'
    },
    useLayoutEffect: {
      code: __useLayoutEffect,
      type: 'react'
    },
    useMemo: {
      code: __useMemo,
      type: 'react'
    },
    useReducer: {
      code: __useReducer,
      type: 'react'
    },
    useRef: {
      code: __useRef,
      type: 'react'
    }
  }
};
