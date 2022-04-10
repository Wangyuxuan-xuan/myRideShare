import SearchBar from "../searchBar/sarchBar";
import {TripResultService} from "../../service/TripResultService";
import "./SearchPage.css"
interface SearchProps{
    services : TripResultService;
}

function Search({services} : SearchProps) {

    return(
        <>
            <div className= "search-bar-outer">
                <SearchBar tripResultService={services}/>
            </div>

        </>

    )
}

export default Search;