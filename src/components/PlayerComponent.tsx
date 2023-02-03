import { FC } from "react";
import { Figure } from "../models/figures/Figure";
import { Player } from "../models/Player";
import Timer from "./Timer";

interface PlayerComponentProps {
  player: Player | null;
  lostFigures: Figure[];
  currentPlayer: Player | null;
}

const PlayerComponent: FC<PlayerComponentProps> = (props) => {
  const { player, lostFigures, currentPlayer } = props;

  return (
    <div className="player">
      <p>{player?.color + " player"}</p>
      <div className="lost">
        {lostFigures.map((figure) => (
          <div key={figure.id}>{figure.logo && <img src={figure.logo} />}</div>
        ))}
      </div>

      <Timer
        className={[
          "timer",
          currentPlayer?.color === player?.color ? "active" : "",
        ].join(" ")}
        isCounting={currentPlayer?.color === player?.color}
      />
    </div>
  );
};

export default PlayerComponent;
