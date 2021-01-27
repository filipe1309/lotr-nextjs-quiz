import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ButtonSubmit({ className, name }) {
  return (
    <button className={className} type="submit" disabled={name.length === 0}>
      Jogar como: <strong>{name ? name : '??'}</strong>
    </button>
  );
}

ButtonSubmit.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const Button = styled(ButtonSubmit)`
    width: 100%;
    margin-top: 10px;
    font-size: 20px;

    display:block;
    padding:0.35em 1.2em;
    border:0.1em solid #FFFFFF;
    margin:10px 0.3em 0.3em 0;
    border-radius:0.12em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#2b302f;
    text-align:center;
    transition: all 0.2s;
    animation:bouncy 5s infinite linear;
    position:relative;

&:hover {
  color:#000000;
  background-color:#4caf50;
}

&:disabled:hover {
  color:#000000;
  background-color:#f44336;
}

@media all and (max-width:30em){
    display: block;
    margin:0.4em auto;
}

& .bouncy {
  
}
@keyframes bouncy {
  0%{top:0em}
  40%{top:0em}
  43%{top:-0.9em}
  46%{top:0em}
  48%{top:-0.4em}
  50%{top:0em}
  100%{top:0em;}
}
`;

export default Button;
