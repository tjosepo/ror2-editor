import { Challenge } from "../challenges";
import "./challenge-box.scss";

export default function ChallengeBox({
  challenge,
  achievements,
  onClick,
}: {
  challenge: Challenge;
  achievements: String[];
  onClick: Function;
}) {
  let selected = achievements.includes(challenge.achievement);

  return (
    <button
      type="button"
      className={`grid ${selected ? "selected" : ""}`}
      onClick={(e) => {
        onClick(!selected);
      }}
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
