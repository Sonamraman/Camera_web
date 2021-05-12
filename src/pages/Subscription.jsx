import React from "react";
import Drawerr from "../component/Drawerr";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, TextField } from "@material-ui/core";
import iphone from "../assest/iPhone.png";
import samssung from "../assest/Samssung.png";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    background:"linear-gradient(#95B1C2, #253F4D)"
  },
  drawer: {
    justifyContent: "flex-start",
  },
  home: {
    justifyContent: "flex-end",
  },
  img: {
    position: "absolute",
    right: "29vw",
  },
  content: {
    position: "absolute",
    right: "24vw",
    marginLeft: "2vw",
    marginTop: "61vh",
  },
  input: {
    position: "absolute",
    right: "30vw",
    marginLeft: "2vw",
    marginTop: "78vh",
    '& placeholder' : {
      color:"white"
      },
  },
  
}));

const Subscription = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.drawer}>
        <Drawerr />
      </div>
      <div className={classes.home}>
        <div style={{color:"white", marginLeft: "2vw", marginTop: "2vh" }}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Subscription
          </Typography>
          <Typography variant="caption" style={{ opacity: "0.5" }}>
            Camera Found
          </Typography>
        </div>
        <div className={classes.img}>
          <img src={iphone} alt="iPhone" height="380vh" />
          <img
            src={samssung}
            alt="samssung"
            height="410vh"
            style={{ marginTop: "-7vh" }}
          />
        </div>
        <div className={classes.content}>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", marginLeft: "7vw" }}
          >
            Get our Mobile Application !
          </Typography>
          <div
            style={{
              opacity: "0.5",
              marginTop: "1.6vh",
              width: "40vw",
              wordWrap: "normal",
              textAlign: "center",
            }}
          >
            <Typography variant="caption">
              Lorem ipsum dolor sit amet, consectetur and it adipiscing elit,
              sed do eiusmod tem incididunt ut labore et dolore magna enim ad
              minim veniam, quis nostrud.
            </Typography>
          </div>
        </div>
        <div className={classes.input}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email Address"
            height="5vh"
            width="10vw"
            style={{
                backgroundColor: "rgb(108 135 151)",
                borderColor:"#C7C7C7",
                borderRadius:"3px",
                height:"4vh",
                width:"18vw",
                fontSize:"9px",
                
              }}
          />
          <input
            type="submit"
            value="Subscribe Now"
            style={{
              marginLeft: "1vw",
              backgroundColor: "#0A0F2D",
              color: "white",
              border:"none",
              borderRadius:"2px",
              height:"4vh",
              width:"10vw",
              fontSize:"9px"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
