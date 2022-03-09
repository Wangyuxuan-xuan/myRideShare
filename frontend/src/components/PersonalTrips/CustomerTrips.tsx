// import faker from "@types/faker";
import {makeStyles} from '@material-ui/core/styles';
import {CustomerDTO, TripDTO} from "../../generated/restclient";
import {UserProfileService} from "../../service/UserProfileService";
import {ChangeEvent, useEffect, useState} from "react";
import {
    Avatar,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell, TableContainer,
    TableFooter,
    TableHead, TablePagination,
    TableRow,
    Typography
} from "@material-ui/core";

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

interface CustomerTripProps {
    userProfileService : UserProfileService,
    currentCustomerDTO : CustomerDTO | undefined,
    tripDTOs : TripDTO[] | undefined
}
function CustomerTrips({tripDTOs : trips,currentCustomerDTO,userProfileService} : CustomerTripProps) {

    const {userProfileStore} = userProfileService;
    let tripIds : number[] = [];

    const styleClasses = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [tripTable , setTripTable] = useState<tripTable[]>([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const getData = async () => {
            return await userProfileService.getTripsForCustomer();
        }

        if(currentCustomerDTO !== undefined){
            userProfileStore.customerDTO = currentCustomerDTO;
            getData().then((res) => {
                if (res){
                    const customerTrips = userProfileStore.customerTrips;

                    console.log("customerTrips");
                    console.log(customerTrips);

                    if(customerTrips){
                        customerTrips.map((customerTrip) => {
                            const tripId = customerTrip.tripId;
                            if(tripId){
                                tripIds.push(tripId);
                            }
                        })
                    }

                    console.log("customer tripIds")
                    console.log(tripIds);

                    if(trips){
                        trips = trips.filter((tripDTO) => {
                            const tripId = tripDTO.tripId;
                            if (tripId){
                                console.log(tripId + " " +tripIds.includes(tripId));
                                return tripIds.includes(tripId);
                            }
                            console.log(tripId + " false");
                            return false;
                        })
                    }else {
                        console.log("did not filter");
                    }

                    console.log("tripDTOs after filter")
                    console.log(trips);
                    if (trips !== undefined){
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
                        setIsLoading(true);
                    }

                }
            })

        }
    },[tripIds,tripTable])

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return(
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
                                    // navigate(`/trip/${row.id}`);

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
    )
}

export default CustomerTrips;