import {Configuration} from "../generated/restclient";
import {BACKEND_API_URL} from "./config";

export function generateApiPath(path: string) {
    return BACKEND_API_URL + path;
}

export function createApiConfig() {
    return new Configuration({
        basePath: BACKEND_API_URL,
    });
}