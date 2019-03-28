import styled from 'styled-components';

const GamePanel = styled.article`
  background: ${props => props.theme.bgLight};
  box-shadow: ${props => props.theme.bs};
  .game-panel__header {
    padding: 15px;
    border-bottom: 1px solid ${props => props.theme.grey};
    margin: 0;
    .game-panel__main-header {
      font-size: 2rem;
      margin: 0;
    }

    .game-panel__sub-header {
      margin: 0;
    }
  }

  .game-panel__info {
    padding: 15px;
    border-bottom: 1px solid ${props => props.theme.grey};

    .game-panel__players {
      background: ${props => props.theme.bgDark};
      margin: 0;
      padding: 10px;
      span {
        color: ${props => props.theme.accentColor};
      }
    }
  }

  .game-panel__btn {
    padding: 15px;
  }
`;

export default GamePanel;
