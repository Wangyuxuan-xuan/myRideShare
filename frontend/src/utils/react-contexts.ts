import {PublicAppStore} from "../store/PublicAppStore";
import {PublicAppService} from "../service/PublicAppService";

export interface IPublicAppContext{

    publicAppStore : PublicAppStore;
    publicAppService : PublicAppService;
}

// export const PublicAppContext = IPub