import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-queen.svg";
import whiteLogo from "../../assets/white-queen.svg";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    // if (this.cell.x <= target.x - 1) {
    //   return false;
    // }
    if (
      this.cell.isEmptyVertical(target) ||
      this.cell.isEmptyDiagonal(target) ||
      this.cell.isEmptyHorizontal(target)
    ) {
      return true;
    }

    return false;
  }
}
