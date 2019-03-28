import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import GamePanelStyle from './styles/GamePanelStyles';
import Button from './styles/Button';

class GamePanel extends Component {
  render() {
    const { game } = this.props;
    return (
      <GamePanelStyle>
        <header className="game-panel__header">
          <p className="game-panel__main-header">{game.city}</p>
          <p className="game-panel__sub-header">
            {game.date} {game.hour}
          </p>
        </header>
        <section className="game-panel__info">
          <p className="game-panel__players">
            Liczba potrzebnych graczy: <span>{game.players}</span>
          </p>
        </section>
        <footer className="game-panel__btn">
          <Link
            href={{
              pathname: '/game',
              query: { id: game.id }
            }}
          >
            <Button fullWidth>Szczegóły</Button>
          </Link>
        </footer>
      </GamePanelStyle>
    );
  }
}

GamePanel.propTypes = {
  game: PropTypes.object.isRequired
};

export default GamePanel;
