import React, { Component } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import * as Sentry from '@sentry/browser';

//! Other Components
import Header from './Header';
import Snippets from './Snippets';
import { SnptProvider } from './SnptContext';
import Notification from './Notification';

import { frameworks, types } from '../utils/Constants';

import '../scss/snpt.scss';
import dracula from 'prism-react-renderer/themes/nightOwl';

//! Initialise sentry
Sentry.init({
  dsn: 'https://13b7c634a2d242b4b8ac670473174e72@sentry.io/1768862'
});

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
      frameworks,
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
    let { framework, frameworks } = this.state;

    //* From the context
    const frameworkContext = {
      framework,
      frameworks,
      types: types[framework]
    };

    return (
      <SnptProvider value={frameworkContext}>
        <div className="snpt">
          <Notification onRef={ref => (this.notification = ref)} />
          <div className="container">
            <div className="snippets">
              <Header onClick={this.setFramework.bind(this)} />
              <Snippets onClick={this.setCode.bind(this)} />
              <footer id="footer">{this.state.footerMsg}</footer>
            </div>
            <>
              <Highlight
                className="prism-code"
                {...defaultProps}
                code={this.state.code}
                theme={dracula}
                language="javascript">
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps
                }) => (
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
      </SnptProvider>
    );
  }
}

export default App;
