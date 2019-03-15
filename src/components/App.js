import React, { Component } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import Snippets from './Snippets'
import { frameworks, types } from '../utils/Constants'
import { IconReact, IconVue } from '../icons/'
import '../scss/App.css'
import dracula from 'prism-react-renderer/themes/nightOwl'

const defaultCode = `
// Your snpt will appear here

`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      footerMsg: '',
      framework: 'react',
      code: defaultCode,
      types: []
    }
  }

  icons = {
    react: IconReact,
    vue: IconVue
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

  setFramework(framework) {
    this.setState({ framework })
  }

  renderIcon(framework) {
    const TagName = this.icons[framework]
    return <TagName className={`svg-icon-${framework}`} />
  }

  render() {
    return (
      <div className="snpt">
        <div className="container">
          <div className="snippets">
            <header>
              <ul className="frameworks">
                {frameworks.map(framework => {
                  return (
                    <li
                      className={
                        this.state.framework == framework ? 'active' : ''
                      }
                      onClick={() => this.setFramework(framework)}
                      key={Math.random()}>
                      {this.renderIcon(framework)}
                      {framework}
                    </li>
                  )
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
    )
  }
}

export default App
