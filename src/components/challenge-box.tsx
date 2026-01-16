import React from "react";
import { Challenge } from "../data/types";

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
      className={`grid ${selected ? "selected" : ""}`}
      onClick={handleToggle}
    >
      <div className="icon">
        <img
          src={challenge.image}
          alt={`${challenge.name} icon`}
          loading="lazy"
        />
      </div>
      <div className="text">
        <p className="name">{challenge.name}</p>
        <p className="desc">{challenge.description}</p>
      </div>
    </button>
  );
}
