import React, { Component } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import * as Sentry from '@sentry/browser';

//! Other Components
import GitHubCorner from './GitHubCorner';
import Header from './Header';
import Notification from './Notification';
import Snippets from './Snippets';
import { SnptProvider } from './SnptContext';

import { Frameworks, types } from '../utils/Constants';

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

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="modal-close" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </section>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      frameworks: ['react', 'redux', 'vue', 'styled-components'],
      framework: 'react',
      code: defaultCode,
      types: [],
      _showModal: false
    };
  }

  componentDidMount() {
    this.selectedCheckboxes = new Set();
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

  showSelectFrameworksModal() {
    this.showModal();
  }

  selectFramework(event) {
    const selectedFramework = event.target.value;

    let _frameworks = [...this.state.frameworks];

    if (_frameworks.indexOf(selectedFramework) >= 0) {
      let idx = _frameworks.indexOf(selectedFramework);
      _frameworks.splice(idx, 1);
    } else {
      _frameworks.push(selectedFramework);
    }

    this.setState({
      frameworks: _frameworks
    });
  }

  showModal() {
    this.setState({ _showModal: true });
  }

  hideModal() {
    this.setState({ _showModal: false });
  }

  isFrameworkselected(framework) {
    const { frameworks } = this.state;
    return frameworks.indexOf(framework) >= 0;
  }

  shouldFrameworkBeDisabled(framework) {
    const needToDisable = ['react', 'vue'];
    return needToDisable.indexOf(framework) >= 0;
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
          <GitHubCorner />
          <Notification onRef={ref => (this.notification = ref)} />
          <div className="container">
            <div className="snippets">
              <Header
                showSelectFrameworksModal={this.showSelectFrameworksModal.bind(
                  this
                )}
                onClick={this.setFramework.bind(this)}
              />
              <Modal
                show={this.state._showModal}
                handleClose={this.hideModal.bind(this)}>
                <h3 className="m0 p0">Choose frameworks/libraries</h3>
                <p>
                  {Frameworks.map(framework => {
                    return (
                      <React.Fragment key={`f-${framework}`}>
                        <input
                          key={`key-${framework}`}
                          id={`select-${framework}`}
                          checked={this.isFrameworkselected(framework)}
                          disabled={this.shouldFrameworkBeDisabled(framework)}
                          type="checkbox"
                          onChange={this.selectFramework.bind(this)}
                          value={framework}
                          name="framework"
                        />
                        <label htmlFor={`select-${framework}`}>
                          {framework}
                        </label>
                      </React.Fragment>
                    );
                  })}
                </p>
              </Modal>
              <Snippets
                framework={this.state.framework}
                onClick={this.setCode.bind(this)}
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
