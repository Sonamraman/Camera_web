import { Grid, makeStyles, Typography } from "@material-ui/core";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import React,{useState} from "react";

const useStyle = makeStyles((theme) => ({
    root1: {
        height: "100vh",
      },
  video: {
    width: "100%",
    height: "auto",
  },
  root: {
    marginLeft: "30vw",
    marginTop: "5vh",
  },
  typo: {
    marginLeft: "30vw",
  },
  content: {
    marginTop: "7vh",
  },
  calen:{
    background:" borderBox",
      height:"100%"
  }
}));
const tiers=[
    {
        video:"https://www.youtube.com/watch?v=8WLeWKLPBSU",
        heading:"Living Room",
        title:" People was detected",
        content:"Lorem ipsum dolor sit amet. "
    },
    {
        video:"https://www.youtube.com/watch?v=8WLeWKLPBSU",
        heading:"Bedroom",
        title:" People was detected",
        content:"Lorem ipsum dolor sit amet."
    },
    {
        video:"https://www.youtube.com/watch?v=8WLeWKLPBSU",
        heading:"Kitchen",
        title:" People was detected",
        content:"Lorem ipsum dolor sit amet."
    }
]
const Activity = () => {
  const classes = useStyle();
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <div className={classes.root1}>
      
     
       <Grid container spacing={3}>
           
           <Grid item>
           <Typography variant="h5" className={classes.typo}>
        {" "}
        Last Activity
      </Typography>
      <Typography
        variant="small"
        className={classes.typo}
        style={{ opacity: "0.5" }}
      >
    
        September
      </Typography>
           { tiers.map((tier)=>(
      <Grid container spacing={10}>
        <Grid item className={classes.root}>
        <video width="400" controls
         src={tier.video} type="video/mp4"> </video>
       </Grid>
       <Grid item  className={classes.content}>
       <Typography>{tier.heading}</Typography>
       <Typography>{tier.title}</Typography>
       <Typography>{tier.content}</Typography>
      
       </Grid>
       </Grid>
       ))};
           </Grid>
           <div className={ classes.calen}>
               <Typography>Choose Day</Typography>
           <Grid item  >
             <Calendar  value={dateState}
             onChange={changeDate} />
             </Grid>
           </div>
      </Grid>
     
      
    </div>
  );
};

export default Activity;
