import React, { Component } from 'react';
import Button from './Button';
import { SnptConsumer } from './SnptContext';

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
    return (
      <SnptConsumer>
        {props =>
          Object.keys(props.types).map(framework => {
            return (
              <div key={framework}>
                <h2>{framework}</h2>
                {Object.keys(props.types[framework]).map((subtype, index) => {
                  const __subtype = props.types[framework][subtype];
                  return (
                    <Button
                      key={index}
                      label={subtype}
                      onClick={() => this.setCode(__subtype)}
                    />
                  );
                })}
              </div>
            );
          })
        }
      </SnptConsumer>
    );
  }
}
