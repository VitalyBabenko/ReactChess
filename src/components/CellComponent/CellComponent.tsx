import { FC, useCallback } from "react";
import { Cell } from "../../models/Cell";
import CellMarkComponent from "../CellMark/CellMark";
import style from "./CellComponent.module.scss";

interface CellProps {
  cell: Cell;
  click: (cell: Cell) => void;
  selected: boolean;
}

const CellComponent: FC<CellProps> = ({ cell, click, selected }) => {
  const getCellClassName = () => {
    const isTarget = cell.available && cell.figure;
    const isAvailable = cell.available && !cell.figure;
    if (isTarget) return style.target;
    if (isAvailable) return `${style.available} ${style[cell.color]}`;
    if (selected) return style.selected;
    return style[cell.color];
  };

  return (
    <div onClick={() => click(cell)} className={getCellClassName()}>
      <CellMarkComponent x={cell.x} y={cell.y} color={cell.color} />
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={`${cell?.figure.name}`} />
      )}
    </div>
  );
};

export default CellComponent;
