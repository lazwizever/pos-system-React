import {
    Alert,
    Box, Button,
    Checkbox,
    Divider, FormControl,
    FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Snackbar, Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Tabs,
    Typography
} from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';


class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top100Films: [
                { label: 'The Shawshank Redemption', year: 1994 },
                { label: 'The Godfather', year: 1972 },
                { label: 'The Godfather: Part II', year: 1974 },
                { label: 'The Dark Knight', year: 2008 },
                { label: '12 Angry Men', year: 1957 },
            ],

            formData:{
                customerId :'',
                customerName:'',
                customerAddress:'',
                email:'',
                contactNo:'',
            },
        }
    }


    saveCustomer(){
        let formData = this.state.formData

    }



    render() {
        const { classes } = this.props;

        function createData(
            CustomerId,CustomerName,Gender,CustomerAddress,Email,ContactNo,
        ) {
            return { CustomerId, CustomerName, Gender, CustomerAddress,Email,ContactNo};
        }

        const rows = [
            createData('C001', 'Lasa', 'Male', 'Galle','lasa@123','07614741'),
            createData('C002', 'Rashi', 'Female', 'Galle','rashi@123','0766614718'),
            createData('C003', 'Thisandu', 'Male', 'Colombo','thisandu@123','1236478'),
            createData('C004', 'Thisandi', 'Female', 'Colombo','thisandi@123','12348'),
        ];


        return (
            <Fragment>
                <Grid style={{overflow: 'hidden'}}>
                 <Grid className={classes.navTabs}>
                        <Tabs  centered onChange={onchange}>
                            <Tab label="Home"  style={{color:'white',top:'7px'}}/>

                            <Tab label="Customer"  style={{color:'white',top:'7px'}}/>

                            <Tab label="Item" style={{color:'white',top:'7px'}}/>
                        </Tabs>
                    </Grid>


                <Typography variant="h4">
                    Customer Manage
                </Typography>

                <Typography style={{marginTop: '25px'}} >
                    <Divider light/>
                </Typography>

                <Grid container spacing={3} style={{marginTop: '20px'}}>


                    <Grid item lg={4} md={6} sm={6} xm={6} style={{width: '90%'}}>
                        <TextField id="outlined-basic" placeHolder="Customer Id" label="Customer Id" variant="outlined" size="small" style={{width: '80%'}}

                                   onChange={(e) =>{
                                       let formData = this.state.formData
                                       formData.customerId = e.target.value
                                       this.setState({formData})
                                   }}
                        />
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Customer Name" label="Customer Name" variant="outlined" size="small" style={{width: '80%'}}/>
                    </Grid>


                    <Grid>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Male" />
                                <FormControlLabel value="male" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>


                    <Grid item lg={4} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="Customer Address" label="Customer Address" variant="outlined" size="small" style={{width: '80%'}}/>
                    </Grid>


                    <Grid item lg={4} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="E-mail" label="E-mail" variant="outlined" size="small" style={{width: '80%'}}/>
                    </Grid>


                    <Grid item lg={4} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="Contact No" label="Contact No" variant="outlined" size="small" style={{width: '80%'}}/>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end">
                        <Button variant="contained" color="info"
                                onClick={() => {
                                    this.saveCustomer()
                                }}
                        >Success</Button>
                    </Grid>


                    <Grid style={{marginTop:'60px',marginRight:'150px',marginLeft:'30px',width:'100%'}}>
                        <TableContainer >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Customer Id</TableCell>
                                        <TableCell align="right">Customer Name</TableCell>
                                        <TableCell align="right">Gender&nbsp;</TableCell>
                                        <TableCell align="right">Customer Address&nbsp;</TableCell>
                                        <TableCell align="right">E-mail&nbsp;</TableCell>
                                        <TableCell align="right">ContactNo&nbsp;</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.CustomerId}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.CustomerId}
                                            </TableCell>
                                            <TableCell align="right">{row.CustomerName}</TableCell>
                                            <TableCell align="right">{row.Gender}</TableCell>
                                            <TableCell align="right">{row.CustomerAddress}</TableCell>
                                            <TableCell align="right">{row.Email}</TableCell>
                                            <TableCell align="right">{row.ContactNo}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                </Grid>
                </Grid>
            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(Customer)