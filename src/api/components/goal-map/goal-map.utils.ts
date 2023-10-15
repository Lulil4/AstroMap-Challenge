import {AstroUbication } from "../astro/astro.model";
import { Cometh } from "../cometh/cometh.model";
import { Soloon } from "../soloon/soloon.model";
import { Polyanet } from "../polyanet/polyanet.model";
import { getGoalMap } from "./goal-map.service";
import { AstroMap } from "./goal-map.model";
import { AstroError } from "../error/error.model";
import * as polyanetBuilder from "../polyanet/polyanet.service";
import * as soloonBuilder from "../soloon/soloon.service";
import * as comethBuilder from "../cometh/cometh.service";

export const POLYANET = "polyanet"
export const SOLOON = "soloon"
export const COMETH = "cometh"
export const SPACE = "space"

export const buildGoal = async () => {
    try{
        const astroMap : AstroMap = await goalMapToArrayAdapter();
        for (const astro of astroMap.astros) {
            switch(astro.constructor){
                case Polyanet:
                    const polyanet = astro as Polyanet;
                    await polyanetBuilder.setOne(polyanet)
                break;
                case Soloon:
                    const soloon = astro as Soloon;
                    await soloonBuilder.setOne(soloon)
                break;
                case Cometh:
                    const cometh = astro as Cometh;
                    await comethBuilder.setOne(cometh)
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    }
   catch(error: any){
    throw error;
   }
};

const goalMapToArrayAdapter = async () : Promise<AstroMap> => {
    try{
        const response = await getGoalMap();
        const goalMapObj: string[][] = JSON.parse(JSON.stringify(response.data.goal));
        var astroMap: AstroMap = new AstroMap([]);
    
        await goalMapObj.forEach((row, rowIndex) => {     
            const astrosFoundInRow : any[] = row.map((astroProperties, columnIndex) => {
                return getAstroByProperties(rowIndex, columnIndex, astroProperties)
            });
            astroMap.astros.push(...astrosFoundInRow)
        });
    
        return astroMap
    }
    catch(error: any){
        throw error;
    }
};

const getAstroByProperties = (row : number, column : number, astroProperties : string) : AstroUbication | Polyanet | Soloon | Cometh => {
    try{
        let astroName : string = astroProperties.toLowerCase();
        let astroCharacteristic: string = "";
        
        if (astroProperties.includes("_")){
            const astroCharacteristicAndType : string[] = astroProperties.toLowerCase().split("_");
            astroCharacteristic = astroCharacteristicAndType[0];
            astroName = astroCharacteristicAndType[1];
        }
    
        switch(astroName){
            case POLYANET:
                return new Polyanet(row, column);
            case SOLOON:
                return new Soloon(row, column, astroCharacteristic);
            case COMETH:
                return new Cometh(row, column, astroCharacteristic);
            case SPACE:
                return new AstroUbication(row, column);
            default: 
                throw new AstroError("Astro characteristics from goal map in row " + row + " column " + column + " is empty");
        }
    }
    catch(error: any){
        throw error;
    }
};