import React from "react";
import Drawerr from "../../component/Drawerr";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, TextField } from "@material-ui/core";
import phones from "../../assest/phones.png";
import google from "../../assest/GooglePlay.png";
import apple from "../../assest/AppStore.png";

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
  content: {
    position: "absolute",
    right: "22vw",
    marginLeft: "2vw",
    marginTop: "7vh",
  },
  icon: {
    position: "absolute",
    right: "33vw",
    marginLeft: "2vw",
    marginTop: "25vh",
  },
  img: {
    position: "absolute",
    right: "20vw",
    marginTop: "40vh",
  },
}));

const Subscription2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.drawer}>
        <Drawerr />
      </div>
      <div className={classes.home}>
        <div className={classes.content}>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", marginLeft: "7vw", color:"white"}}
          >
            Get our Mobile Application !
          </Typography>
          <div
            style={{
              marginTop: "1.6vh",
              width: "40vw",
              wordWrap: "normal",
              textAlign: "center",
              color:"white"
            }}
          >
            <Typography variant="caption">
              Lorem ipsum dolor sit amet, consectetur and it adipiscing elit,
              sed do eiusmod tem incididunt ut labore et dolore magna enim ad
              minim veniam, quis nostrud.
            </Typography>
          </div>
        </div>
        <div container className={classes.icon}>
        <img src={apple} alt="apple" height="36vh"/>
        <img src={google} alt="google" height="36vh" style={{marginLeft:"1vw"}}/>
        </div>
        <div className={classes.img}>
          <img src={phones} alt="phones" height="377vh" />
        </div>
      </div>
    </div>
  );
};

export default Subscription2;
