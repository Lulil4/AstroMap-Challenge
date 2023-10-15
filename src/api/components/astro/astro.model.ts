import { CANDIDATE_ID } from "../../config";
import { AstroError } from "../error/error.model";

export class AstroUbication{
    candidateId: string;
    row: number;
    column: number;

    constructor(row : number, column : number){
        if (row < 0){
            throw new AstroError("Astro row is negative");
        }
        
        if (column < 0){
            throw new AstroError("Astro column is negative");
        }

        this.row = row;
        this.column = column;
        this.candidateId = CANDIDATE_ID;
     
    }
}