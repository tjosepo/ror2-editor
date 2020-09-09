import React from 'react';
import { Challenge } from '../challenges';
import './challenge-box.scss';

export default function ChallengeBox({ challenge, selected, onClick }: { challenge: Challenge, selected: boolean, onClick: Function }) {

  return (
    <button
      type="button"
      className={`grid ${selected ? "selected" : ""}`}
      onClick={(e) => onClick(!selected)}>
      <div className="icon">
        <img src={challenge.icon} alt={`${challenge.name} description`} />
      </div>
      <div className="text">
        <p className="name">{challenge.name}</p>
        <p className="desc">{challenge.description}</p>
      </div>
    </button>
  );
}