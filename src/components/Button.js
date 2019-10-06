import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 0 none;
  background: #fff;
  box-shadow: 0px 3px 3px 0 rgba(37, 40, 122, 0.09);
  padding: 1em;
  border-radius: 4px;
  font-size: 16px;
  margin: 0.4em;
  cursor: pointer;
  outline: none;
`;

const Button = props => (
  <StyledButton id={props.label} key={Math.random()} onClick={props.onClick}>
    {props.label}
  </StyledButton>
);

export default Button;
