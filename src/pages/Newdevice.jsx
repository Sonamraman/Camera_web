import React from "react";
import Drawerr from "../component/Drawerr";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
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
    position:"absolute",
    right:"32vw"
  },
}));

const Newdevice = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.drawer}>
        <Drawerr />
      </div>
      <div className={classes.home}>
        <div style={{ marginLeft: "35vw", marginTop: "2vh" }}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            New Device
          </Typography>
          <Typography variant="caption" style={{ opacity: "0.5" }}>
            Camera Found
          </Typography>
        </div>
        <div style={{ marginLeft: "29vw", marginTop: "2vh" }}>
          <Button variant="contained" color="primary" style={{ width: "20vw" }}>
            Connect
          </Button>
        </div>
        <div style={{ marginLeft: "26vw", marginTop: "4vh" }}>
          <video width="350" controls src="https://www.youtube.com/watch?v=8WLeWKLPBSU" type="video/mp4"/>
        </div>
        <div style={{opacity:"0.5", marginLeft:"28vw", marginTop:"2vh", width:"23vw", wordWrap:"normal",}}>
        <Typography variant="caption" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        </div>
        <div style={{ marginLeft: "33vw", marginTop: "5vh" }}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Unknown Device
          </Typography>
          <Typography variant="caption" style={{ opacity: "0.5" }}>
            #34215678443
          </Typography><br/>
          <Typography variant="caption" style={{ opacity: "0.5" }}>
            Connected by 02:22 PM
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Newdevice;
