import styled from 'styled-components';

const Button = styled.a`
  background: ${props => props.theme.accentColor};
  color: ${props => props.theme.black};
  cursor: pointer;
  text-transform: uppercase;
  padding: 0.6rem 1.5rem;
  transition: all 0.5s;
  text-align: center;
  font-weight: normal;
  letter-spacing: 0.9;
  display: ${props => (props.fullWidth ? 'block' : 'inline-block')};
  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }
`;

export default Button;
