const __ReactImp = `import React from 'react';`
const __ReactImpDOM = `import ReactDOM from 'react-dom';`
const __ReactImpComponent = `import React, { Component } from 'react';`
const __ReactImpPropTypes = `import React, { Component } from 'react';
import PropTypes from 'prop-types';`
const __ReactComponent = `import React, { Component } from 'react'

export default class Snpt extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}`
const __ComponentDidMount = `componentDidMount = () => {
  
}`
const __state = `this.state = {}`
const __setState = `this.setState({ 
  key: value
})`

const __VueImp = `import Vue from 'vue';`

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
      'react-prop-types': {
        code: __ReactImpPropTypes
      }
    },
    'components, state': {
      'react-component': {
        code: __ReactComponent,
        type: 'react'
      },
      componentDidMount: {
        code: __ComponentDidMount,
        type: 'react'
      },
      state: {
        code: __state,
        type: 'react'
      },
      setState: {
        code: __setState,
        type: 'react'
      }
    }
  },
  vue: {
    import: {
      vue: {
        code: __VueImp
      }
    }
  }
}

export const frameworks = ['react', 'vue']
