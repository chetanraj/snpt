import React, { Component } from 'react';
import { SnptConsumer } from './SnptContext';

export default class Snpt extends Component {
  render() {
    return (
      <SnptConsumer>
        {props => {
          return (
            <header className="header">
              <ul className="frameworks">
                {props.frameworks.map(__framework => {
                  return (
                    <li
                      className={
                        props.framework === __framework
                          ? `${__framework} active`
                          : __framework
                      }
                      onClick={() => this.props.onClick(__framework)}
                      key={__framework}>
                      {__framework}
                    </li>
                  );
                })}
              </ul>
            </header>
          );
        }}
      </SnptConsumer>
    );
  }
}
