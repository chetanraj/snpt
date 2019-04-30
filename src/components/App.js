import React, { Component } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Helmet } from 'react-helmet';
import Snippets from './Snippets';
import { frameworks, types } from '../utils/Constants';
import { IconReact, IconVue } from '../icons/';
import Snpt from '../assets/snpt.png';
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
      footerMsg: '',
      framework: 'react',
      code: defaultCode,
      types: []
    };
  }

  icons = {
    react: IconReact,
    vue: IconVue
  };

  setCode(snpt) {
    this.setState({
      code: defaultCode + snpt,
      footerMsg: 'Snpt copied to clipboard 🎉'
    });

    setTimeout(() => {
      this.setState({
        footerMsg: ''
      });
    }, 3000);
  }

  setFramework(framework) {
    this.setState({ framework });
  }

  renderIcon(framework) {
    // const TagName = this.icons[framework]
    return null;
  }

  render() {
    return (
      <div className="snpt">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Snpt</title>

          <meta name="title" content="Snpt" />
          <meta name="author" content="Chetan Raj <chetan.narian@gmail.com>" />
          <meta name="description" content="Code snippets made easy." />

          <meta property="og:title" content="Snpt - Code snippets made easy." />
          <meta property="og:url" content="https://snpt.netlify.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Code snippets made easy." />
          <meta property="og:image" content={Snpt} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://snpt.netlify.com/" />
          <meta property="twitter:title" content="Snpt" />
          <meta
            property="twitter:description"
            content="Code snippets made easy."
          />
          <meta property="twitter:image" content={Snpt} />

          <meta name="viewport" content="width=device-width, maximum-scale=1" />
        </Helmet>
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
                      key={Math.random()}>
                      {this.renderIcon(framework)}
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
