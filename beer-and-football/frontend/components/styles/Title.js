import styled from 'styled-components';

const Title = styled.h3`
  font-weight: normal;
  font-size: 2rem;
  border-bottom: 1px solid ${props => props.theme.accentColor};
`;

export default Title;
