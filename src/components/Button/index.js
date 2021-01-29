import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  font-size: 20px;
  cursor: pointer;

  display:block;
  padding:0.35em 1.2em;
  margin:10px 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color: ${({ theme }) => theme.colors.primary};
  text-align:center;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;

&.bouncy:hover {
  background-color: ${({ theme }) => theme.colors.success};
}

&:disabled:hover {
  background-color: ${({ theme }) => theme.colors.wrong};
  cursor: not-allowed;
}

@media all and (max-width:30em) {
  display: block;
  margin: 0.4em auto;
}

&.bouncy {
  transition: all 0.2s;
  animation:bouncy 5s infinite linear;
  position:relative;
}

@keyframes bouncy {
  0% { top:0em; }
  40% { top:0em; }
  43% { top:-0.9em; }
  46% { top:0em; }
  48% { top:-0.4em; }
  50% { top:0em; }
  100% { top:0em; }
}
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
