import { FC } from "react";
import { Colors } from "../../models/Colors";
import style from "./CellMark.module.scss";

interface CellMarkProps {
  x: number;
  y: number;
  color: Colors;
}

const CellMark: FC<CellMarkProps> = ({ x, y, color }) => {
  const lettersMark = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const getMirrorColor = (color: Colors) => {
    return color === "white" ? "#b7c0d8" : "#e8edf9";
  };

  return (
    <>
      {x === 0 && (
        <span style={{ color: getMirrorColor(color) }} className={style.number}>
          {8 - y}
        </span>
      )}
      {y === 7 && (
        <span style={{ color: getMirrorColor(color) }} className={style.letter}>
          {lettersMark[x]}
        </span>
      )}
    </>
  );
};

export default CellMark;
