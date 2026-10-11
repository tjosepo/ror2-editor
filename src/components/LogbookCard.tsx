import { Book } from "lucide-react";
import type { LogbookEntry } from "../data/types";
import "./logbook.scss";

interface LogbookCardProps {
  entry: LogbookEntry;
  isUnlocked: boolean;
  onToggle: (entry: LogbookEntry, enabled: boolean) => void;
  linkedChallengeCount?: number;
}

export function LogbookCard({
  entry,
  isUnlocked,
  onToggle,
}: LogbookCardProps) {
  const handleToggle = () => {
    onToggle(entry, !isUnlocked);
  };

  const imageUrl = entry.image;

  return (
    <div
      onClick={handleToggle}
      className={`ror-card-grid ${isUnlocked ? "unlocked" : "locked"}`}
    >
      <div className="icon-container">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={entry.name}
            loading="lazy"
          />
        ) : (
          <Book
            size={32}
            className={isUnlocked ? "text-ror-text-main" : "text-ror-text-dim"}
          />
        )}
      </div>

      <div className="text-content">
        <h4 className="name-text">
          {entry.name}
        </h4>
        {entry.description && (
          <p className="desc-text">
            {entry.description}
          </p>
        )}
      </div>
    </div>
  );
}
