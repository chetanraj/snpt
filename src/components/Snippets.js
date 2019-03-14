import React, { Component } from 'react'

export default class Snippets extends Component {
  setCode(code) {
    //! Set the code to clipboard
    this.copyToClipboard(code)
    this.props.onClick(code)
  }

  copyToClipboard(code) {
    const textField = document.createElement('textarea')
    textField.innerText = code
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  render() {
    return (
      <>
        {Object.keys(this.props.categories).map(category => {
          return (
            <div key={Math.random()}>
              <h2 key={Math.random()}>{category}</h2>
              {Object.keys(this.props.categories[category]).map(type => {
                console.log(type)

                return (
                  <button
                    id={type}
                    key={Math.random()}
                    className="btn-white"
                    onClick={() =>
                      this.setCode(this.props.categories[category][type])
                    }>
                    {type}
                  </button>
                )
              })}
            </div>
          )
        })}
      </>
    )
  }
}
