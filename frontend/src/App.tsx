import PublicApp, {IPublicProps} from "./PublicApp";
import {PublicAppService} from "./service/PublicAppService";
import {useEffect, useState} from "react";
import {Configuration} from "./generated/restclient";
import {PublicAppStore} from "./store/PublicAppStore";
import {InitDialog} from "./components/InitDialog/InitDialog";
import {Observer} from "mobx-react-lite";

export function App(){
    const [apiConfig] = useState(
        () =>
            new Configuration()
    );

    const [publicAppStore] = useState(() => new PublicAppStore());
    const [publicAppService, setPublicAppService] = useState<PublicAppService | null>(null);

    useEffect(() => {
        setPublicAppService(new PublicAppService(apiConfig,publicAppStore))
    },[apiConfig,publicAppStore])

    if(!publicAppService){
        return <InitDialog/>
    }
    const publicProps : IPublicProps = {
        services : publicAppService
    }

    return (
        <Observer>
            {() => {
                return <PublicApp {...publicProps}/>
            }}
        </Observer>

    )


}