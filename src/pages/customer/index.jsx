import {Divider, Typography} from "@mui/material";
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
            ]
        }

    }


    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography variant="h4">
                    Customer Manage
                </Typography>

                <Typography style={{marginTop: '25px'}} >
                    <Divider light/>
                </Typography>

                <Grid container spacing={3} style={{marginTop: '20px'}}>

                    <Grid item lg={3} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Customer Id" label="Customer Id" variant="outlined" size="small" style={{width: '50%'}} />
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="Customer Name" label="Customer Name" variant="outlined" size="small" style={{width: '60%'}}/>
                    </Grid>


                    {/*<Grid item lg={6} md={6} sm={6} xm={6}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="fav movie" />}
                            getOptionLabel={
                                (option) => option.label
                            }
                            onChange={(e, value) => {
                                console.log(value.label + " " + value.year);
                            }}
                            size="small"
                            style={{ width: '50%' }}
                        />
                    </Grid>*/}


                    <Grid item lg={5} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="Customer Address" label="Customer Address" variant="outlined" size="small" style={{width: '90%'}}/>
                    </Grid>


                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="Customer Address" label="Customer Address" variant="outlined" size="small" style={{width: '50%'}}/>
                    </Grid>

                </Grid>

            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(Customer)