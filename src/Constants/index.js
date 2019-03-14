const __ReactImp = `import React from 'react';`;
const __ReactImpDOM = `import ReactDOM from 'react-dom';`;
const __ReactImpComponent = `import React, { Component } from 'react';`;
const __ReactImpPropTypes = `import React, { Component } from 'react';
import PropTypes from 'prop-types';`;
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
const __Vue = `import Vue from 'vue';`;

export const categories = {
    'import': {
      'react': __ReactImp,
      'react-dom': __ReactImpDOM,
      'react-component': __ReactImpComponent,
      'react-prop-types': __ReactImpPropTypes,
      'vue': __Vue
    },
    'react': {
      'react-component': __ReactComponent,
      'componentDidMount': __ComponentDidMount
    },
  }