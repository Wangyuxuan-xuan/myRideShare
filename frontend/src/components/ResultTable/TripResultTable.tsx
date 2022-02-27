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
import {ChangeEvent, useState} from "react";
import {PublicAppService} from "../../service/PublicAppService";
import {PublicAppStore} from "../../store/PublicAppStore";
import {TripResultStore} from "../../store/TripResultStore";
import {TripResultService} from "../../service/TripResultService";
import {Configuration, TripControllerApi} from "../../generated/restclient";
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

function TripResultTable() {

    // const publicAppStore =  new PublicAppStore();
    // const publicAppService = new PublicAppService(publicAppStore);
    //
    // const tripResultStore = publicAppStore.tripResultStore;
    // const tripResultService =  publicAppService.tripResultService;
    //
    // tripResultService.getTripInfo();

    // const apiConfig : Configuration = new Configuration({
    //     basePath: BACKEND_API_URL,
    // });

    const apiConfig : Configuration = new Configuration();
    const tripResultStore = new TripResultStore();
    const tripResultService =  new TripResultService(new TripControllerApi(apiConfig),tripResultStore);


    tripResultService.getTripInfo();

    const trips = tripResultStore.trips;
    console.log("getTripInfo ");
    console.log(tripResultService.getTripInfo())
    console.log(trips);


    let USERS = [];
    let STATUSES = ['Active', 'Pending', 'Blocked'];

    const styleClasses = useStyles();

    for (let i = 0; i < 14; i++) {
        USERS[i] = {
            id : i,
            name: "name here",
            email: "email@email.com",
            phone: "702221134",
            jobTitle: "job title here",
            company: "company name",
            joinDate: "2022-02-22",
            status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
        }
    }


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

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
                            key={row.name}
                        >
                            <TableCell component="th" scope="row">
                                <Grid container>
                                    <Grid item lg = {2}>
                                        <Avatar alt = {row.name} src = "." className = {styleClasses.avatar}/>
                                    </Grid>
                                    <Grid item lg = {10}>
                                        <Typography className={styleClasses.name}>{row.name}</Typography>
                                        <Typography color = "textSecondary" variant = "body2">{row.email}</Typography>
                                        <Typography color = "textSecondary" variant = "body2">{row.phone}</Typography>
                                    </Grid>

                                </Grid>

                            </TableCell>
                            <TableCell>
                                <Typography color = "primary" variant = "subtitle2">{row.jobTitle}</Typography>
                                <Typography color = "primary" variant = "subtitle2">{row.company}</Typography>
                            </TableCell>
                            <TableCell >
                                {row.joinDate}
                            </TableCell>
                            <TableCell>
                                <Typography
                                    className = {styleClasses.status}
                                    style={{
                                        backgroundColor :
                                            ((row.status === 'Active' && 'green') ||
                                                (row.status === 'Pending' && 'blue') ||
                                                (row.status === 'Blocked' && 'orange')) || "red"
                                    }}
                                >
                                    {row.status}
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