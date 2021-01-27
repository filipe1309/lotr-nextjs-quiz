import React from 'react';
import styled from 'styled-components';

function InputName({ className, placeholder, setName }) {
  return (
    <input 
      className={className}
      type="text" 
      placeholder={placeholder}
      autofocus="true"
      onChange={function (event) {
        // name = event.target.value;
        setName(event.target.value);
      }}
    />
  );
}

const Input = styled(InputName)`
  display: block;
  width: 100%;
  font-size: 20px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

export default Input;