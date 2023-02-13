import { FC } from "react";
import { Figure } from "../../models/figures/Figure";
import { Player } from "../../models/Player";
import style from "./PlayerComponent.module.scss";
import Timer from "../Timer/Timer";

interface PlayerComponentProps {
  player: Player | null;
  lostFigures: Figure[];
  currentPlayer: Player | null;
}

const PlayerComponent: FC<PlayerComponentProps> = (props) => {
  const { player, lostFigures, currentPlayer } = props;

  return (
    <div className={style.player}>
      <p>{player?.color + " player"}</p>

      <div className={style.lost}>
        {lostFigures.map((figure) => (
          <div key={figure.id}>{figure.logo && <img src={figure.logo} />}</div>
        ))}
      </div>

      <Timer isCounting={currentPlayer?.color === player?.color} />
    </div>
  );
};

export default PlayerComponent;
