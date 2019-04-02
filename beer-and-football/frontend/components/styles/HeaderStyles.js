import styled from 'styled-components';

const HeaderStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-direction: column;

  img {
    width: 80px;
  }

  p.sub-title {
    font-size: 2rem;
    font-weight: normal;
    letter-spacing: 1.1;
    margin-top: 0;
  }

  p.login-name {
    position: absolute;
    top: 0;
    right: 15px;
  }
`;
export default HeaderStyles;
