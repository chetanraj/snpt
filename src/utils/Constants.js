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

/*
 * Vue
 */
const __VueImp = `import Vue from 'vue';`;
const __VueDefault = `<template>
  <div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>`;
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
      }
    }
  },
  vue: {
    import: {
      vue: {
        code: __VueImp
      },
      'default-vue': {
        code: __VueDefault
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
      }
    }
  }
};

export const frameworks = ['react', 'redux', 'vue', 'axios'];
