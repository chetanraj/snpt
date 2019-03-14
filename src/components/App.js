import React, { Component } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import Snippets from './Snippets'
import { frameworks, types } from '../utils/Constants'

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

  componentDidMount = () => {
    let __types = types

    console.log(__types[this.state.framework])
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
