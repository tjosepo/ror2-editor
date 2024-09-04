import React from "react";
import { Challenge } from "../challenges";

import "./challenge-box.scss";

interface Props {
  challenge: Challenge;
  achievements: string[];
  onToggle: (challenge: Challenge, selected: boolean) => void;
}

export default function ChallengeBox({
  challenge,
  achievements,
  onToggle,
}: Props): React.JSX.Element {
  const selected = achievements.includes(challenge.achievement);

  const handleToggle = (): void => {
    onToggle(challenge, !selected);
  };

  return (
    <button
      type="button"
      className={`grid btn ${selected ? "selected" : ""}`}
      onClick={handleToggle}
    >
      <div className="icon">
        <picture>
          <source
            type="image/webp"
            srcSet={`/images/webp/${challenge.icon}.webp`}
          />
          <img
            src={`/images/png/${challenge.icon}.png`}
            alt={`${challenge.name} icon`}
          />
        </picture>
      </div>
      <div className="text">
        <p className="name">{challenge.name}</p>
        <p className="desc">{challenge.description}</p>
      </div>
    </button>
  );
}
