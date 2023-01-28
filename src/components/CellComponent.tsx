import { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  click: (cell: Cell) => void;
  selected: boolean;
}

const CellComponent: FC<CellProps> = ({ cell, click, selected }) => {
  return (
    <div
      onClick={() => click(cell)}
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      style={{ background: cell.available && cell.figure ? "green" : "" }}
    >
      {cell.available && !cell.figure && <div className={"available"}></div>}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={`${cell?.figure.name}`} />
      )}
    </div>
  );
};

export default CellComponent;
