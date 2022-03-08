import TripResultTable from "../ResultTable/TripResultTable";
import "./Result.css"
import {TripResultService} from "../../service/TripResultService";

interface ResultPageProps{
    tripResultService : TripResultService;
}

function Result(props : ResultPageProps) {

    return(
        <div className="result-table">
            <TripResultTable tripResultService={props.tripResultService} />
        </div>
    )
}

export default Result