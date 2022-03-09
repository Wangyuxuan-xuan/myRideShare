// import faker from "@types/faker";
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
} from '@material-ui/core';
import {ChangeEvent, useEffect, useState} from "react";
import {PublicAppService} from "../../service/PublicAppService";
import {PublicAppStore} from "../../store/PublicAppStore";
import {TripResultStore} from "../../store/TripResultStore";
import {TripResultService} from "../../service/TripResultService";
import {Configuration, TripControllerApi, TripDTO} from "../../generated/restclient";
import {BACKEND_API_URL} from "../../utils/config";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    table : {
        minWidth : 650
    },
    tableContainer : {
        borderRadius : 15,
        margin : "10px 10px",
        // maxWidth : 950
        width : "-moz-fit-content"
    },
    tableHeaderCell : {
        fontWeight : "bold",
        backgroundColor : theme.palette.primary.dark,
        color :  theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar : {
        backgroundColor : theme.palette.primary.light,
        color :  theme.palette.getContrastText(theme.palette.primary.light)
    },
    name : {
        fontWeight : "bold",
        color : theme.palette.secondary.dark
    },

    status : {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }

}));

interface tripTable {
    id : number | undefined;
    driverName: string | undefined;
    startLocation: string| undefined;
    endLocation: string| undefined;
    startTime: string| undefined;
    endTime: string| undefined;
    driverRate: number| undefined;
    price: any| undefined;
}

interface TripTableProps{
    tripResultService : TripResultService,
}

function TripResultTable({tripResultService} : TripTableProps) {

    const navigate = useNavigate();

    const {tripResultStore} = tripResultService;

    const styleClasses = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [tripTable , setTripTable] = useState<tripTable[]>([])
    const [loading, setLoading] = useState(false);

    let trips : TripDTO[] | null = null;

    useEffect(() => {

        const getTrips = async () => {

            const success = await tripResultService.getTripInfo();
            trips = await tripResultStore.trips;
            // console.log(trips);
            return success;
        }

        getTrips().then((res)=> {
            if (res){
                if (trips === undefined ||trips === null){
                    console.log("trips is null");
                }else {
                    // console.log(trips.length);

                    for (let i = 0; i < trips.length; i++) {
                        tripTable[i] = {
                            id : trips[i].tripId,
                            driverName: trips[i].driverName,
                            startLocation: trips[i].startLocation,
                            endLocation: trips[i].endLocation,
                            startTime: trips[i].startTime,
                            endTime: trips[i].endTime,
                            driverRate: trips[i].driverCurrentRate,
                            price: trips[i].price,
                        }
                    }
                    setLoading(true);
                    // console.log(tripTable);
                }
            }else {
                console.log("no data");
            }
        })
        // console.log("use effect ran");
    },[trips,tripTable])



    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <TableContainer component={Paper} className = {styleClasses.tableContainer}>
            <Table className = {styleClasses.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className = {styleClasses.tableHeaderCell}>Driver Info</TableCell>
                        <TableCell className = {styleClasses.tableHeaderCell}>Duration</TableCell>
                        <TableCell className = {styleClasses.tableHeaderCell}>Driver rate</TableCell>
                        <TableCell className = {styleClasses.tableHeaderCell}>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tripTable
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => (
                        <TableRow
                            key={row.id}
                            hover = {true}
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(`/trip/${row.id}`);

                            }}
                        >
                            <TableCell component="th" scope="row">
                                <Grid container>
                                    <Grid item lg = {2}>
                                        <Avatar alt = {row.driverName} src = "." className = {styleClasses.avatar}/>
                                    </Grid>
                                    <Grid item lg = {10}>
                                        <Typography className={styleClasses.name}>{row.driverName}</Typography>
                                        <Typography color = "textSecondary" variant = "body2">{row.startLocation}</Typography>
                                        <Typography color = "textSecondary" variant = "body2">{row.endLocation}</Typography>
                                    </Grid>

                                </Grid>

                            </TableCell>
                            <TableCell>
                                <Typography color = "primary" variant = "subtitle2">{row.startTime}</Typography>
                                <Typography color = "primary" variant = "subtitle2">{row.endTime}</Typography>
                            </TableCell>
                            <TableCell >
                                {row.driverRate}
                            </TableCell>
                            <TableCell>
                                <Typography
                                    className = {styleClasses.status}
                                    style={{
                                        backgroundColor :
                                            ((row.price === 'Active' && 'green') ||
                                                (row.price === 'Pending' && 'blue') ||
                                                (row.price === 'Blocked' && 'orange')) || "red"
                                    }}
                                >
                                    {row.price}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[5,10,15]}
                        component="div"
                        count={tripTable.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default TripResultTable;