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

const useStyles = makeStyles((theme) => ({
    table : {
        minWidth : 650
    },
    tableContainer : {
        borderRadius : 15,
        margin : "10px 10px",
        maxWidth : 950
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
let STATUSES = ['Active', 'Pending', 'Blocked'];

interface USERS {
    id : number ;
    driverName: string | undefined;
    startLocation: string| undefined;
    endLocation: string| undefined;
    startTime: string| undefined;
    endTime: string| undefined;
    driverRate: number| undefined;
    price: any| undefined;
}

function TripResultTable() {

    const publicAppStore =  new PublicAppStore();
    const publicAppService = new PublicAppService(publicAppStore);

    const tripResultStore = publicAppStore.tripResultStore;
    const tripResultService =  publicAppService.tripResultService;

    const styleClasses = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // let USERS: any[] = [];
    const [USERS , setUSERS] = useState<USERS[]>([])



    let trips : TripDTO[] | null ;
    // const [trips , setTrips] = useState<TripDTO[] | null>();
    const [loading , setLoading] = useState(false);

    useEffect(() => {

        const getTrips = async () => {

            const success = await tripResultService.getTripInfo();
            trips = await tripResultStore.trips;
            console.log(trips);
            return success;
        }

        getTrips().then((res)=> {
            if (res){
                if (trips === undefined ||trips === null){
                    console.log("trips is null");
                }else {
                    console.log(trips.length);

                    for (let i = 0; i < 14; i++) {
                        USERS[i] = {
                            id : i,
                            driverName: "driver name " + trips[0].driverId,
                            startLocation: trips[0].startLocation,
                            endLocation: trips[0].endLocation,
                            startTime: trips[0].startTime,
                            endTime: trips[0].endTime,
                            driverRate: trips[0].driverRate,
                            price: trips[0].price,
                        }
                    }
                    setLoading(true);
                    console.log(USERS);
                }
            }else {
                console.log("no data")
            }
        })


        console.log("use effect ran")


    })



    //
    // for (let i = 0; i < 14; i++) {
    //     USERS[i] = {
    //         id : i,
    //         name: trip.startLocation,
    //         email: "email@email.com",
    //         phone: "702221134",
    //         jobTitle: "job title here",
    //         company: "company name",
    //         joinDate: "2022-02-22",
    //         status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    //     }
    // }





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
                        <TableCell className = {styleClasses.tableHeaderCell}>User Info</TableCell>
                        <TableCell className = {styleClasses.tableHeaderCell}>Job Info</TableCell>
                        <TableCell className = {styleClasses.tableHeaderCell}>Joining date</TableCell>
                        <TableCell className = {styleClasses.tableHeaderCell}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {USERS
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => (
                        <TableRow
                            key={row.driverName}
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
                        count={USERS.length}
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