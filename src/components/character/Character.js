import React, { Component } from 'react';
import './character.css';

class Character extends Component {
  render() {
    const { character } = this.props;
    return (
      <div className="character">
        <img
          className="character__image"
          src={character.img}
          alt={`A description to ${character.name}`}
        />
        <div
          className={
            character.status === 'Alive'
              ? 'status status__alive'
              : 'status status__dead'
          }
        >
          {character.status}
        </div>
        <div className="character__informations">
          <p className="character__informations--text"> {character.name} </p>
          <p className="character__informations--text">{character.birthday}</p>
          <p className="character__informations--text">
            {character.occupation.join(',')}
          </p>
        </div>
      </div>
    );
  }
}

export default Character;

/*appearance: (5)[(1, 2, 3, 4, 5)];
birthday: '09-07-1958';
char_id: 1;
img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg';
name: 'Walter White';
nickname: 'Heisenberg';
occupation: (2)[('High School Chemistry Teacher', 'Meth King Pin')];
portrayed: 'Bryan Cranston';
status: 'Presumed dead';*/
