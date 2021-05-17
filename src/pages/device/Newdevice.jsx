import React from "react";
import Drawerr from "../../component/Drawerr";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
} from "@material-ui/core";
import Devicename from "./Devicename";

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
  button:{
    height:"4.5vh",
    width:"16vw",
    fontSize:"10px",
    backgroundColor: "#1E82D2",
    color: "white",
    '&:hover':{
      backgroundColor: "#1E82D2",
    }
  },
}));

const Newdevice = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
        <div style={{ marginLeft: "31vw", marginTop: "2vh" }}>
          <Button variant="contained" className={classes.button}>
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
          <div onClick={handleClickOpen}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Unknown Device
          </Typography>
          </div>
          <Typography variant="caption" style={{ opacity: "0.5" }}>
            #34215678443
          </Typography><br/>
          <Typography variant="caption" style={{ opacity: "0.5" }}>
            Connected by 02:22 PM
          </Typography>
        </div>

        <Devicename open={open} setOpen={setOpen}/>

      </div>
    </div>
  );
};

export default Newdevice;
