import React,{useState} from "react";
import {Grid, Button} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import { makeStyles } from "@material-ui/core/styles";
import {useSelector, useDispatch} from 'react-redux'
import { changeMode } from "../redux/action";

// const HomeCar = ({isHouse,setIsHouse}) => {
   
  const HomeCar = () => {
  
  const isHouse = useSelector(state => state.isHouse)
  const dispatch = useDispatch()

  const useStyles = makeStyles((theme) => ({
    root:{
      display:"flex",
      justifySelf:"center"
    },
    home: {
      backgroundColor: !isHouse ? "#1678f1":"#2727ef",
      color: "white",
      padding:"5px 40px",
      '&:hover':{
        backgroundColor: !isHouse ? "#1678f1":"#2727ef"
      }
    },
    car: {
      backgroundColor: isHouse ? "#1678f1":"#2727ef",
      color: "white",
      padding:"5px 40px",
      '&:hover':{
        backgroundColor: isHouse ? "#1678f1":"#2727ef"
      }
    },
  }));
  const classes = useStyles();
  return (
    <>
    <Grid container justify="center" component="main" className={classes.root}>

    {/* <Button className={classes.home} disableRipple={true} onClick = {()=>setIsHouse(!isHouse)}><HomeIcon /></Button>
    <Button className={classes.car} onClick = {()=>setIsHouse(!isHouse)}><DirectionsCarIcon /></Button> */}

    <Button className={classes.home}  onClick = {()=>dispatch(changeMode())}><HomeIcon /></Button>
    <Button className={classes.car} onClick = {()=>dispatch(changeMode())}><DirectionsCarIcon /></Button>
    </Grid>
    </>
  );
};

export default HomeCar;