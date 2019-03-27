import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    background: ${props => props.theme.bgLight};
    border: 1px solid ${props => props.theme.grey};
    color: ${props => props.theme.white};
    transition: border-color 0.3s;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.accentColor};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: ${props => props.theme.accentColor};
    color: ${props => props.theme.black};
    border: 0;
    font-size: 1.5rem;
    padding: 0.8rem 1.5rem;
    cursor: pointer;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        ${props => props.theme.bgLight} 0%,
        ${props => props.theme.accentColor} 50%,
        ${props => props.theme.bgLight} 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
