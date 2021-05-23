import React from "react";
import Drawerr from "../../component/Drawerr";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Typography,Paper } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import WifiIcon from "@material-ui/icons/Wifi";
import Battery90Icon from "@material-ui/icons/Battery90";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Sharevideo from "../Sharevideo";

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
  paper:{
    position:"absolute",
    right:"18vw",
    marginTop: "-5vh",
    height:"80vh",
    width:"48vw",
  },
  play: {
    width: "35vw",
    position:"absolute",
    right:"24vw",
    marginTop: "71vh",
    borderRadius: "25px",
    backgroundColor: "rgb(220 216 216 / 54%)",
  },
}));

const Camerafullscreen = () => {
  const classes = useStyle();

  const [share, setShare] = React.useState(false);

  const handleShareOpen = () => {
    setShare(true);
  };

  return (
    <div className={classes.main}>
      <div className={classes.drawer}>
        <Drawerr />
      </div>
      <div className={classes.home}>
        <div style={{ marginLeft: "2vw", marginTop: "5vh", display:"flex" }}>
            <div style={{justifyContent:"flex-start"}}>
              <Typography variant="h6" fontWeight="bold">
                Home Entrance
              </Typography>
              <Typography variant="small" style={{ display: "flex" }}>
                <FiberManualRecordIcon style={{color:"red"}}/>
                Live
              </Typography>
            </div>
            <Paper className={classes.paper}></Paper>
            <div style={{position: "absolute",right: "3vw", }}>
              <Battery90Icon />
              <div style={{marginLeft:"3vw",marginTop:"-4.5vh"}}>
                <WifiIcon />
              </div>
            </div>
        </div>
        <div className={classes.play}>
          <IconButton onClick={handleShareOpen} style={{ marginLeft: "0.5vw" }} >
            <ShareIcon />
          </IconButton>
          <IconButton style={{ marginLeft: "8.4vw" }}>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton>
            <PauseCircleOutlineIcon />
          </IconButton>
          <IconButton>
            <NavigateNextIcon />
          </IconButton>
          <IconButton style={{ marginLeft: "7vw" }}>
            <FullscreenExitIcon />
          </IconButton>
        </div>
        <Sharevideo share={share} setShare={setShare}/>
      </div>
    </div>
  );
};

export default Camerafullscreen;
