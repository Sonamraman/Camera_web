import React, { useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Drawerr from "../component/Drawerr";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const useStyle = makeStyles((theme) => ({
  main: {
    display: "flex",
  },
  drawer: {
    justifyContent: "flex-start",
  },
  root: {
    justifyContent: "flex-end",
    marginLeft: "2vw",
  },
  calender: {
    backgroundColor:"#1678f1",
    height: "100vh",
    marginLeft:"5vw",
  },
}));
const tiers = [
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    heading: "Living Room",
    time: "00:10AM",
    title: " People was detected",
    content: "Lorem ipsum dolor sit amet. ",
  },
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    heading: "Bedroom",
    time: "00:10AM",
    title: " People was detected",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    video: "https://www.youtube.com/watch?v=8WLeWKLPBSU",
    heading: "Kitchen",
    time: "00:10AM",
    title: " People was detected",
    content: "Lorem ipsum dolor sit amet.",
  },
];
const Activity = () => {
  const classes = useStyle();
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <div className={classes.main}>
      <div className={classes.drawer}>
        <Drawerr/>
      </div>
      <div className={classes.root}>
        <div style={{display:"flex"}}>
          <div style={{ marginTop: "3vh" ,justifyContent:"flex-start"}}>
            <Typography variant="h5">Last Activity</Typography>
            <Typography variant="small" style={{ opacity: "0.5" }}>
              September
            </Typography>
            {tiers.map((tier) => (
              <div style={{marginTop: "2vh" ,display:"flex", justifyContent:"space-between"}}>
                <div >
                  <video width="300" controls src={tier.video} type="video/mp4">
                    {" "}
                  </video>
                </div>
                  <div style={{marginLeft:"2vw"}}>
                    <Typography variant="h6" style={{fontWeight:"bold"}}>{tier.heading}</Typography>
                    <Typography >{tier.title}</Typography>
                    <Typography variant="caption">{tier.content}</Typography>
                  </div>
                  <div style={{ marginLeft: "4vw" }}>
                    <Typography variant="h6" style={{opacity: "0.5" }}>{tier.time}</Typography>
                  </div>
              </div>
            ))}
          </div>
          <div className={classes.calender} style={{justifyContent:"flex-end",}}>
            <Typography variant="h6" style={{fontWeight:"bold",marginTop:"2vh",marginLeft:"1vw"}}>Choose Day</Typography>
            <div style={{marginTop:"2vh",}}>
              <Calendar value={dateState} onChange={changeDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
