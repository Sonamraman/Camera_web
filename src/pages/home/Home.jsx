import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
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

const tiers = [
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    title: "Home Entrance",
    subheader: "Live",
  },
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    title: "Kitchen",
    subheader: "Live",
  },
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    title: "Bedroom",
    subheader: "Live",
  },
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    title: "Kitchen 2",
    subheader: "Live",
  },
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    title: "Guest Room",
    subheader: "Live",
  },
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    title: "Terrace",
    subheader: "Live",
  },
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    title: "Hall",
    subheader: "Live",
  },
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    title: "Bedroom 2",
    subheader: "Live",
  },
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    title: "Guest Room 2",
    subheader: "Live",
  },
];

const Home = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [share, setShare] = React.useState(false);

  const handleShareOpen = () => {
    setShare(true);
  };

  const [toggle, setToggle] = React.useState(true)

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
    icons: {
      display:"flex",
      position: "absolute",
      right: "1vw",
      marginTop: "1vh",
    },
    container: {
      paddingTop: theme.spacing(2),
    },
    icon1:{
      color: toggle ? "#1678f1":"#979797",
    },
    icon2:{
      color: !toggle ? "#1678f1":"#979797",
      marginLeft:"-2vh",
    },
    item1:{
      margin:"2vh 0 0 "
    },
    item2:{
      display:"flex",
      flexWrap: "wrap",
      margin:"2vh 2vw 0 0"
    },
    paper1: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
      height: "50vh",
      width: "50vw",
    },
    paper2: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
      height: "30vh",
      width: "23vw",
    },
    headicon1:{
      marginLeft:"30vw",
      marginTop: "1vh",
    },
    headicon2:{
      marginLeft:"4vw",
      marginTop: "0.8vh",
    },
    play1:{
      width:"fit-content",
      marginLeft:"5.5vw",
      marginTop: "27vh",
      borderRadius: "25px",
      backgroundColor:"rgb(207 239 243)" 
    },
    play2:{
      width:"fit-content",
      marginLeft:"0vw",
      marginTop: "10vh",
      borderRadius: "25px",
      backgroundColor:"rgb(207 239 243)" 
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.drawer}>
        <Drawerr/>
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

          <div className={classes.icons}>
            <IconButton onClick = {()=>setToggle(true)} className={classes.icon1}>
              <ViewHeadlineIcon />
            </IconButton>
            <IconButton onClick = {()=>setToggle(false)} className={classes.icon2}>
              <ViewComfyIcon />
            </IconButton>
          </div>

        </div>


        <Container maxWidth="lg" className={classes.container}>
          <div className={toggle ? classes.item1 : classes.item2}>
            {tiers.map((tier) => (
              <div style={{marginTop:"2vh", marginRight:"1.5vw"}}>
                <Paper className={toggle ? classes.paper1 : classes.paper2}>
                  <Grid container  style={{ marginLeft: toggle ? "1vw" : "0.5vw", marginTop: toggle ? "0.5vh" : "-1.3vh",}}>
                    <Grid item>
                      <Typography variant="h6" fontWeight="350">
                        {tier.title}
                      </Typography>
                      <Typography variant="small" style={{display:"flex"}}>
                        <FiberManualRecordIcon style={{color:"green"}} />{tier.subheader}
                      </Typography>
                    </Grid>
                    <Grid item className={toggle ? classes.headicon1 : classes.headicon2}>
                      <Battery90Icon/>
                      <div style={{marginLeft:"3vw",marginTop:"-4.5vh"}}>
                       <WifiIcon />
                      </div>
                    </Grid>
                    <div className={toggle ? classes.play1 : classes.play2}>
                      <IconButton onClick={handleShareOpen} style={{ marginLeft: toggle ? "0.5vw" : "0vw" }} >
                        <ShareIcon />
                      </IconButton>
                      <IconButton style={{ marginLeft: toggle ? "8vw" : "1vw" }}>
                        <NavigateBeforeIcon />
                      </IconButton>
                      <IconButton>
                        <PauseCircleOutlineIcon />
                      </IconButton>
                      <IconButton>
                        <NavigateNextIcon />
                      </IconButton>
                      <IconButton style={{ marginLeft: toggle ? "7vw" : "0.5vw" }}>
                        <FullscreenExitIcon />
                      </IconButton>
                    </div>
                  </Grid>
                </Paper>
              </div>
            ))} 
          </div>
        </Container>
      <Sharevideo share={share} setShare={setShare}/>
      </div>
    </div>
  );
};

export default Home;
