import axios from 'axios';
import * as AstroConfig from "../../config"

export const getGoalMap = async () => {
    return axios.get( AstroConfig.URI + "/map/" + AstroConfig.CANDIDATE_ID + "/goal");
};