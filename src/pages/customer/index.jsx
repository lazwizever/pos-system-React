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
                            <Tab label="Home"  href ="/" style={{color:'white',top:'7px'}}/>

                            <Tab label="Customer" href ="Customer"  style={{color:'white',top:'7px'}}/>

                            <Tab label="Item" href ="Item" style={{color:'white',top:'7px'}}/>
                        </Tabs>
                    </Grid>


                <Typography variant="h4" style={{paddingTop: '5px'}}>
                    Customer Manage
                </Typography>

                <Typography style={{marginTop: '25px'}} >
                    <Divider light/>
                </Typography>

                <Grid container spacing={3} style={{paddingTop: '20px',left:0,right:0,top:0,bottom:0,margin:"auto"}}>


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
                        <Grid style={{marginRight: '6vw'}}>
                            <Button variant="contained" color="success" style={{margin: '1vh'}}
                                    onClick={() => {
                                        this.saveCustomer()
                                    }}
                            >Save</Button>

                            <Button variant="contained" color="warning" style={{margin: '1vh'}}>Update</Button>
                            <Button variant="contained" color="error" style={{margin: '1vh'}}>Delete</Button>
                            <Button variant="contained" color="info" style={{margin: '1vh'}}>Cancel</Button>
                        </Grid>

                    </Grid>



                    <Grid style={{paddingTop:'5vh',width:'95%',left:0,right:0,top:0,bottom:0,margin:"auto"}}>
                        <TableContainer >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Customer Id</TableCell>
                                        <TableCell align="center">Customer Name</TableCell>
                                        <TableCell align="center">Gender</TableCell>
                                        <TableCell align="center">Customer Address&nbsp;</TableCell>
                                        <TableCell align="center">E-mail&nbsp;</TableCell>
                                        <TableCell align="center">ContactNo&nbsp;</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.CustomerId}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center" component="th" scope="row">
                                                {row.CustomerId}
                                            </TableCell>
                                            <TableCell align="center">{row.CustomerName}</TableCell>
                                            <TableCell align="center">{row.Gender}</TableCell>
                                            <TableCell align="center">{row.CustomerAddress}</TableCell>
                                            <TableCell align="center">{row.Email}</TableCell>
                                            <TableCell align="center">{row.ContactNo}</TableCell>

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