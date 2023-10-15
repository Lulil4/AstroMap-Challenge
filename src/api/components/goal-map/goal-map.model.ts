import { Cometh } from "../cometh/cometh.model";
import { Polyanet } from "../polyanet/polyanet.model";
import { Soloon } from "../soloon/soloon.model";
import { AstroUbication } from "../astro/astro.model";

export class AstroMap {
    astros: (AstroUbication | Polyanet | Soloon | Cometh)[] = [];

    constructor(astros: (Polyanet | Soloon | Cometh)[]) {
        this.astros = astros;
    }
}