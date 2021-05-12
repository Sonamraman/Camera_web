import React from "react";
import Drawerr from "../component/Drawerr";
import { makeStyles } from "@material-ui/core/styles";
import img1 from "../assest/img1.png";
import { Grid, IconButton, Typography } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import WifiIcon from "@material-ui/icons/Wifi";
import Battery90Icon from "@material-ui/icons/Battery90";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyle = makeStyles((theme) => ({
  drawer: {
    justifyContent: "flex-start",
  },
  main: {
    display: "flex",
  },
  home: {
    justifyContent: "flex-end",
  },
  play: {
    width: "fit-content",
    marginLeft: "-26vw",
    marginTop: "38vh",
    borderRadius: "25px",
    backgroundColor: "rgb(220 216 216 / 54%)",
  },
}));
const tiers = [
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    heading: "Living Room",
    title: " People was detected",
    content: "Lorem ipsum dolor sit amet. ",
  },
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    heading: "Bedroom",
    title: " People was detected",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    heading: "Kitchen",
    title: " People was detected",
    content: "Lorem ipsum dolor sit amet.",
  },
];

const CameraScreen = () => {
  const classes = useStyle();
  return (
    <div className={classes.main}>
      <div className={classes.drawer}>
        <Drawerr/>
      </div>
      <div className={classes.home}>
        <div className={classes.root}>
        <Typography variant="h5" style={{ marginLeft: "3vw" ,marginTop:"2vh",fontWeight:"bold"}}>
          House Enternce
        </Typography>
        <Typography style={{ opacity: "70%", marginLeft: "3vw" }}>
          11 Active Notifications
        </Typography>
        </div>
        <Grid container>
          <Grid item style={{marginLeft:"3vw",marginTop: "6vh",}}>
            <img src={img1} style={{height: "52vh",weidth: "52vw",}}/>
            <Grid container style={{ marginLeft: "2vw", marginTop: "-51vh" }}>
              <Grid item>
                <Typography variant="h6" fontWeight="350">
                  Home Entrance
                </Typography>
                <Typography variant="small" style={{ display: "flex" }}>
                  <FiberManualRecordIcon />
                  Live
                </Typography>
              </Grid>
              <Grid item style={{ marginLeft: "15vw", marginTop: "2vh" }}>
                <Battery90Icon />
                <div style={{marginLeft:"3vw",marginTop:"-4.5vh"}}>
                <WifiIcon />
                </div>
              </Grid>
              <div className={classes.play}>
                <IconButton style={{color:"black" }} >
                  <ShareIcon style={{ marginRight: "6vw" }} />
                  <NavigateBeforeIcon />
                  <PauseCircleOutlineIcon />
                  <NavigateNextIcon style={{ marginRight: "6vw" }} />
                  <FullscreenExitIcon style={{ marginRight: "0vw" }} />
                </IconButton>
              </div>
            </Grid>
          </Grid>
          <Grid item style={{marginLeft:"10.5vw"}}>
          <Typography variant="h6" style={{fontWeight:"bold"}}>
          Last Activity
          </Typography>
          {tiers.map((tier) => (
            <div style={{marginTop:"1vh"}}>
              <video width="400" controls src={tier.video} type="video/mp4" />
            </div>
          ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CameraScreen;
