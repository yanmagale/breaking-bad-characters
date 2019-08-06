import React, { Component } from 'react';
import './characters-list.css';
import Character from '../character/Character';

class CharactersList extends Component {
  render() {
    const { characters } = this.props;
    return (
      <div className="characters-list">
        {characters.map((character, key) => (
          <Character character={character} key={key} />
        ))}
      </div>
    );
  }
}

export default CharactersList;
