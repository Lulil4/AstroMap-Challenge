import { AstroUbication } from "../astro/astro.model";
import { AstroError } from "../error/error.model";

export class Soloon extends AstroUbication{
    color: string;

    constructor(row : number, column : number, color : string){
        super(row, column)
        if (color == ""){
            throw new AstroError("Soloon color in row " + row + " column " + column + " is missing");
        }
        this.color = color;
    }
}
