import React, { Component } from 'react';
import '../scss/App.css';

import Highlight, { defaultProps } from "prism-react-renderer";

//! Theme
import dracula from 'prism-react-renderer/themes/nightOwl';

//! Components
import Snippets from './Snippets';

const defaultCode = `
// Your snpt will appear here

`;

const __ReactImp = `import React from 'react';`;
const __ReactImpDOM = `import ReactDOM from 'react-dom';`;
const __ReactImpComponent = `import React, { Component } from 'react';`;

const __ReactImpPropTypes =
`import React, { Component } from 'react';
import PropTypes from 'prop-types';`

const __ReactComponent =
`import React, { Component } from 'react'

export default class Snpt extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}`

const __ComponentDidMount =
`componentDidMount = () => {
  
}`

const __Vue = `import Vue from 'vue';`;

const categories = {
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      footerMsg: '',
      code: defaultCode
    }
  }

  setCode(snpt) {
    this.setState({
      code: defaultCode + snpt,
      footerMsg: 'Snpt copied to clipboard 👍'
    })

    setTimeout(() => {
      this.setState({
        footerMsg: ''
      })
    }, 3000)
  }

  render() {
    return (
      <div className="snpt">
        <div className="container">
          <div className="snippets">
            <Snippets 
              onClick={this.setCode.bind(this)}
              categories={categories}
            />
            <footer
              id="footer">
              {this.state.footerMsg}
            </footer>
          </div>
          <>
            <Highlight className="prism-code" {...defaultProps} code={this.state.code} theme={dracula} language="javascript">
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </>
        </div>
      </div>
    );
  }
}

export default App;
