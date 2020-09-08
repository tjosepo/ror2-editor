import React from 'react';
import { Challenge } from '../challenges';
import Checkbox from './checkbox';
import './challenge-box.scss';

export default function ChallengeBox({ challenge, selected, onChange }: { challenge: Challenge,selected: boolean, onChange: Function }) {

  return (
    <div className="grid">
      <div className="icon">
        <img src={challenge.icon} alt={`${challenge.name} description`} />
      </div>
      <div className="text">
        <p className="name">{challenge.name}</p>
        <p className="desc">{challenge.description}</p>
      </div>
      <Checkbox
        checked={selected}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      />
    </div>
  );
}