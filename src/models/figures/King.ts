import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-king.svg";
import whiteLogo from "../../assets/white-king.svg";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }
  // TODO: make check logic

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    if (
      this.cell.isEmptyVertical(target) ||
      this.cell.isEmptyDiagonal(target) ||
      this.cell.isEmptyHorizontal(target)
    ) {
      if (
        this.cell.x + 1 === target.x ||
        this.cell.x - 1 === target.x ||
        this.cell.y + 1 === target.y ||
        this.cell.y - 1 === target.y
      ) {
        return true;
      }
    }

    return false;
  }
}
