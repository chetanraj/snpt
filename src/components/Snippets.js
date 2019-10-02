import React, { Component } from 'react';

export default class Snippets extends Component {
  setCode(category) {
    //! Set the code to clipboard
    this.copyToClipboard(category.code);
    this.props.onClick(category.code);
  }

  copyToClipboard(code) {
    const textField = document.createElement('textarea');
    textField.innerHTML = code;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }

  render() {
    const { types } = this.props;

    return (
      <>
        {Object.keys(types).map(framework => {
          return (
            <div key={framework}>
              <h2>{framework}</h2>
              {Object.keys(types[framework]).map(subtype => {
                const __subtype = types[framework][subtype];
                return (
                  <button
                    id={subtype}
                    key={`${framework}-${subtype}`}
                    className="btn-white"
                    onClick={() => this.setCode(__subtype)}>
                    {subtype}
                  </button>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }
}
