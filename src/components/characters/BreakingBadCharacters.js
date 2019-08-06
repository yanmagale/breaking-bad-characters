import React, { Component } from 'react';
import { setCharacters } from '../../actions';
import CharactersList from '../characters-list/CharactersList';
import { connect } from 'react-redux';
import './breaking-bad-characters.css';
import logo from '../../images/breaking-bad-logo.png';

class BreakingBadCharacters extends Component {
  constructor(props) {
    super(props);
    this.updateCharacters = this.updateCharacters.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    const { characters } = this.props;
    return (
      <div className="container">
        <header>
          <img
            className="header__logo"
            src={logo}
            alt="Breaking bad application logo"
          />
        </header>
        <h2>Personagens</h2>
        <CharactersList characters={characters} />
      </div>
    );
  }

  updateCharacters(characters) {
    let { dispatch } = this.props;
    let action = setCharacters(characters);
    dispatch(action);
  }

  getCharacters() {
    fetch('https://www.breakingbadapi.com/api/characters')
      .then(response => response.json())
      .then(data => this.updateCharacters(data))
      .catch(error => new Error('erro at get characters', error));
  }
}

const mapStateToProps = store => ({
  characters: store.charactersState.characters,
});

export default connect(mapStateToProps)(BreakingBadCharacters);
