import axios from 'axios';
import { Cometh } from "./cometh.model";
import * as AstroConfig from "../../config"

export const setOne = async (cometh: Cometh) => {
    return axios.post(AstroConfig.URI + "/comeths", cometh);
};