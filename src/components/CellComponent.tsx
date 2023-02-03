import { FC, useCallback } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  click: (cell: Cell) => void;
  selected: boolean;
}

const CellComponent: FC<CellProps> = ({ cell, click, selected }) => {
  const getCellClassName = useCallback(() => {
    const result = ["cell", cell.color];
    if (cell.available && cell.figure) result.push("target");
    if (selected) result.push("selected");
    return result.join(" ");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cell.available, cell.figure, selected]);

  return (
    <div onClick={() => click(cell)} className={getCellClassName()}>
      {cell.available && !cell.figure && <div className={"available"}></div>}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={`${cell?.figure.name}`} />
      )}
    </div>
  );
};

export default CellComponent;
