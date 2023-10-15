import axios from 'axios';
import { Soloon } from "./soloon.model";
import * as AstroConfig from "../../config"

export const setOne = async (soloon: Soloon) => {
    return axios.post(AstroConfig.URI + "/soloons", soloon);
};
