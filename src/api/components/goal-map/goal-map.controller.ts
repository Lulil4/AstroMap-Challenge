import {Request, Response} from 'express';
import * as astroService from "./goal-map.utils";
import { AstroError } from '../error/error.model';

export const getGoal = async (req: Request, res: Response) => {
    try{
        await astroService.buildGoal();
        return res.status(201).send("Shape ready");
    }catch(error: any){
        if (error instanceof AstroError){
            return res.status(206).send(error.getMessage());
        }
        return res.status(206).send(error.response.data.message || error.response.data.reason);
    }
}