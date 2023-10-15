import { AstroUbication } from "../astro/astro.model";
import { AstroError } from "../error/error.model";

export class Cometh extends AstroUbication{
    direction: string;

    constructor(row : number, column : number, direction : string){
        super(row, column)
        if (direction == ""){
            throw new AstroError("Cometh direction in row " + row + " column " + column + " is missing");
        }
        this.direction = direction;
    }
}