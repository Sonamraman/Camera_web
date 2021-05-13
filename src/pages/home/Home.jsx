import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  CardHeader,
  Grid,
  Paper,
  Container,
  Typography,
  IconButton,
} from "@material-ui/core";
import Drawerr from "../../component/Drawerr";
import WifiIcon from '@material-ui/icons/Wifi';
import Battery90Icon from '@material-ui/icons/Battery90';
import AddIcon from "@material-ui/icons/Add";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ShareIcon from "@material-ui/icons/Share";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import HomeCar from "../../component/HomeCar";
import Addcamera from "./Addcamera";
import DeviceNotFound from "./DeviceNotFound";
import Sharevideo from "../Sharevideo";

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
  avatar: {
    backgroundColor: "#1E82D2",
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: "80vw",
  },
  homecar: {
    position:"absolute",
    right:"34vw",
    marginTop: "3vh",
    float:"center",
  },
  icon1: {
    position: "absolute",
    right: "1vw",
    marginTop: "4vh",
    color: "#1678f1",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: "50vh",
    width: "50vw",
  },
  play:{
    width:"35vw",
    marginLeft: "5vw",
    marginTop: "27vh",
    borderRadius: "25px",
    backgroundColor:"rgb(207 239 243)" 
  },
}));

const tiers = [
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    title: " Home Entrance",
    subheader: "Live",
  },
];

const Home = () => {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [invisible, setInvisible] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
        <div className={classes.root}>
          <div style={{display:"flex",marginTop:"1.5vh"}}>
            <div onClick={handleClickOpen} style={{justifyContent:"flex-start", marginLeft: "1vw",marginTop:"1vh"}}>
              <Avatar aria-label="recipe" className={classes.avatar} >
                <AddIcon />
              </Avatar>
            </div>
            <div style={{justifyContent:"flex-end", marginLeft: "1vw",}}>
              <Typography variant="h6" style={{fontWeight: "bold",}}>
                My Camera(Home)
              </Typography>
              <Typography variant="small" style={{ opacity: "0.5",}}>
                10 Active Devices
              </Typography>
            </div>
          </div>

          <Addcamera open={open} setOpen={setOpen}/>
          {/* <DeviceNotFound open={open} setOpen={setOpen}/> */}

          <div className={classes.homecar}>
            <HomeCar />
          </div>
          <div className={classes.icon1}>
            <ViewHeadlineIcon />
            <ViewComfyIcon />
          </div>
        </div>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                {tiers.map((tier) => (
                  <Grid container style={{ marginLeft: "1vw", marginTop: "0.5vh",}}>
                    <Grid item>
                      <Typography variant="h6" fontWeight="350">
                        {tier.title}
                      </Typography>
                      <Typography variant="small" style={{display:"flex"}}>
                        <FiberManualRecordIcon/>{tier.subheader}
                      </Typography>
                    </Grid>
                    <Grid item style={{ marginLeft: "28vw", marginTop: "0.5vh",}}>
                      <Battery90Icon/>
                      <div style={{marginLeft:"3vw",marginTop:"-4.5vh"}}>
                       <WifiIcon />
                      </div>
                    </Grid>
                    <div className={classes.play}>
                      <IconButton >
                        <div onClick={handleShareOpen}>
                        <ShareIcon style={{ marginRight: "12vw" }} />
                        </div>
                        <NavigateBeforeIcon />
                        <PauseCircleOutlineIcon />
                        <NavigateNextIcon style={{ marginRight: "12vw" }} />
                        <FullscreenExitIcon style={{ marginRight: "2vw" }} />
                      </IconButton>
                    </div>

                    <Sharevideo share={share} setShare={setShare}/>

                  </Grid>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Home;
