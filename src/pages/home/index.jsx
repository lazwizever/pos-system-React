import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Link, Tab, Tabs, Typography} from "@mui/material";
import food_icon from "../../assets/img/food.png";
import food_logo from "../../assets/img/food_logo.png";
import img2 from "../../assets/img/img2.png";
import * as React from 'react';
import Customer from "../customer";


class HomePage extends Component {
    constructor(props) {
        super(props);
    }



render() {
        const {classes} = this.props

    return(
            <Grid style={{overflow:'hidden'}}>
                <Grid className={classes.navTabs}>
                    <Tabs  centered onChange={onchange}>
                        <Tab label="Home" href ="/" style={{color:'white',top:'7px'}}/>

                        <Tab label="Customer"  href ="Customer" style={{color:'white',top:'7px'}}/>

                        <Tab label="Item" href ="Item" style={{color:'white',top:'7px'}}/>
                    </Tabs>
                </Grid>


                <Grid item lg={6} md={6} sm={6} xm={6}>
                    <Card sx={{ maxWidth: 1550,maxHeight:3000}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="450px"
                                image={food_icon}
                                alt=""
                            />

                            <CardContent style={{height:'150px'}}>
                                <Typography gutterBottom variant="h2" component="div" style={{alignItems:'center',justifyContent:'center',display:'flex',fontWeight:'bold'}} >
                                    Food Corner
                                    <img src={food_logo} style={{width:'150px',height:'110px'}} alt=""/>
                                </Typography>
                                <Typography variant="h6" color="text.secondary" style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                                    Welcome to Food Corner...! We serve only the freshest ingredients
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>


            </Grid>
        )
    }
}

export default withStyles(styleSheet)(HomePage)