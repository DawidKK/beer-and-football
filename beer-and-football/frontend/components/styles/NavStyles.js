import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  font-size: 2rem;
  list-style: none;
  background: ${props => props.theme.bgLight};
  box-shadow: ${props => props.theme.bs};
  a {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1em;
    cursor: pointer;
    color: ${props => props.theme.white};
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:after {
      height: 2px;
      background: ${props => props.theme.accentColor};
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
