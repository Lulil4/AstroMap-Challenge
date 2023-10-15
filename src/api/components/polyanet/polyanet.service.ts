import axios from 'axios';
import { Polyanet } from "./polyanet.model";
import * as AstroConfig from "../../config"

export const setOne = async (polyanet: Polyanet) => {
    return axios.post(AstroConfig.URI + "/polyanets", polyanet);
};
