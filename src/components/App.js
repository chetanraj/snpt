import React, { Component } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Snippets from './Snippets';
import Notification from './Notification';
import { frameworks, types } from '../utils/Constants';
import '../scss/snpt.scss';
import dracula from 'prism-react-renderer/themes/nightOwl';

const defaultCode = `
/*
 * Click on any button on the left
 * Your snpt will appear here
 *
 */

`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      framework: 'react',
      code: defaultCode,
      types: []
    };
  }

  setCode(snpt) {
    this.setState({
      code: defaultCode + snpt
    });

    this.notification.showNotification();
  }

  setFramework(framework) {
    this.setState({ framework });
  }

  render() {
    return (
      <div className="snpt">
        <Notification onRef={ref => (this.notification = ref)} />
        <div className="container">
          <div className="snippets">
            <header>
              <ul className="frameworks">
                {frameworks.map(framework => {
                  return (
                    <li
                      className={
                        this.state.framework === framework ? 'active' : ''
                      }
                      onClick={() => this.setFramework(framework)}
                      key={framework}>
                      {framework}
                    </li>
                  );
                })}
              </ul>
            </header>
            <Snippets
              onClick={this.setCode.bind(this)}
              types={types[this.state.framework]}
            />
            <footer id="footer">{this.state.footerMsg}</footer>
          </div>
          <>
            <Highlight
              className="prism-code"
              {...defaultProps}
              code={this.state.code}
              theme={dracula}
              language="javascript">
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
