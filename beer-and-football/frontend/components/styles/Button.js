import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.accentColor};
  color: ${props => props.theme.black};
  cursor: pointer;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  padding: 0.8rem 1.5rem;
  transition: all 0.5s;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }
`;

export default Button;
