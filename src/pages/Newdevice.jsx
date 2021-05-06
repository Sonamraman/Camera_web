import React from 'react'
import Drawerr from "../component/Drawerr";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  CardHeader,
  Grid,
  Paper,
  Container,
  Typography,
  IconButton,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
      },
      drawer: {
        justifyContent: "flex-start",
      },
      home: {
        justifyContent: "flex-end",
      },
}))

const Newdevice = () => {
    const classes=useStyles()
    return (
        <div className={classes.main}>
           <div className={classes.drawer}>
             <Drawerr />
           </div>
           <div className={classes.home}>
           <div style={{marginLeft:"35vw",marginTop:"2vh"}}>
           <Typography variant="h6" style={{fontWeight:"bold"}}>New Device</Typography>
           <Typography variant="caption" style={{opacity: "0.5"}}>Camera Found</Typography>
           </div>
           <div style={{marginLeft:"29vw",marginTop:"2vh"}}>
           <Button variant="contained" color="primary" style={{width:"20vw"}}>Connect </Button>
           </div>
           </div>
        </div>
        
    )
}

export default Newdevice
