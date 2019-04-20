import React, { Component } from 'react';

export default class Snippets extends Component {
  setCode(category) {
    //! Set the code to clipboard
    this.copyToClipboard(category.code);
    this.props.onClick(category.code);
  }

  copyToClipboard(code) {
    const textField = document.createElement('textarea');
    textField.innerText = code;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }

  render() {
    return (
      <>
        {Object.keys(this.props.types).map(framework => {
          return (
            <div key={Math.random()}>
              <h2 key={Math.random()}>{framework}</h2>
              {Object.keys(this.props.types[framework]).map(subtype => {
                return (
                  <>
                    <button
                      id={subtype}
                      key={Math.random()}
                      className="btn-white"
                      onClick={() =>
                        this.setCode(this.props.types[framework][subtype])
                      }>
                      {subtype}
                    </button>
                  </>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }
}
