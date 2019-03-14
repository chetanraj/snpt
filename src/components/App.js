import React, { Component } from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import Snippets from './Snippets';
import {categories} from '../Constants'

import '../scss/App.css';
import dracula from 'prism-react-renderer/themes/nightOwl';

const defaultCode = `
// Your snpt will appear here

`;

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
      footerMsg: 'Snpt copied to clipboard 🎉'
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
