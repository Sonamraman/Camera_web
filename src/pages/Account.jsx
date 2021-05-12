import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawerr from "../component/Drawerr";
import {
  Avatar,
  IconButton,
  Button,
  Paper,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import profile from "../assest/avatar.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from '@material-ui/icons/Close';
import Pin from "../component/Pin";

const useStyle = makeStyles((theme) => ({
  main: {
    display: "flex",
    background: "#1E82D2",
    height: "40vh",
  },
  drawer: {
    justifyContent: "flex-start",
  },
  root: {
    background: "blue",
  },
  paper: {
    height:"85vh",
    width: "20vw",
    marginTop: "4vh",
    marginLeft: "3vw",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    font:"revert !important",
    paddingBottom:"0.8vh",
    width: "100%",
    marginTop: "4px",
    marginLeft:"-1px",
    boxSizing: "border-box",
    border: "none",
    borderBottom: "1px solid grey",
    opacity: "0.8",
  },
  detail: {
    marginLeft:"1vw",
    marginTop:"1.6vh",
    marginRight:"1vw",
  },
}));

const Account = () => {
  const classes = useStyle();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log("open")
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.main}>
      <div className={classes.drawer}>
        <Drawerr />
      </div>
      <div className={classes.home}>
        <Typography variant="h5" style={{fontWeight: "bold", color: "white", marginLeft: "3vw", marginTop: "3vh" }}>
          Account
        </Typography>
        <Paper className={classes.paper}>
        <div>
          <Avatar src={profile}
            style={{height: "20vh",width: "11vw",marginLeft: "4vw",marginTop: "3.5vh",}}
          />
          <Typography variant="h5" style={{marginLeft: "4vw",fontWeight: "bold",}}>
            Tomas Wilson
          </Typography>
          <Typography variant="small" style={{ marginLeft: "6vw", opacity: "0.5",textAlign: "center", }}>
            luckytom@rach
          </Typography>
        </div>
        <div onClick={handleClickOpen} style={{marginLeft:"1vw",marginRight:"1vw",marginTop:"2vh"}}>
          <label for="fname" style={{ opacity: "0.6",fontSize:"12px"}}>Name</label>
          <input type="text" id="fname" name="fname" value="Tomas Wilson" className={classes.text}/>
        </div>
        <div style={{marginLeft:"1vw",marginRight:"1vw"}}>
          <label for="fname" style={{ opacity: "0.6",fontSize:"12px"}}>Email</label>
          <input type="email" id="fname" name="fname" value="luckytom@rach" className={classes.text}/>
        </div>
        <div style={{marginTop:"1vh",marginLeft:"1vw", marginRight:"1vw",marginBottom:"0.8vh"}}>
          <Typography variant="caption">
            Change Password
          </Typography>
          <IconButton href="/changepassword" style={{marginLeft:"14.9vw",marginTop:"-6vh", color:"black", }}>
            <ArrowForwardIosIcon style={{ fontSize: 15 }}/>
          </IconButton>
          <hr style={{marginTop:"-1.7vh"}}/>
        </div>
        <div style={{height:"4vh", weidth:"7vw", marginTop:"0vh",background:"#ECECEC"}}></div>
          <div className={classes.detail}>
            <Typography variant="caption" >
              Pin Code
            </Typography>
            <hr />
            <div style={{marginTop:"-1vh"}} onClick={handleClickOpen}>
              <Typography variant="caption" >
                Change Pin Code
              </Typography>
              <IconButton style={{marginLeft:"7.2vw", color:"black", }}>
                <ArrowForwardIosIcon style={{ fontSize: 15 }}/>
              </IconButton>
              <hr style={{marginTop:"-0.5vh"}}/>
            </div>

            <Pin open={open} setOpen={setOpen}/>

            <div style={{marginTop:"-1vh"}}>
              <Typography variant="caption">
                Support
              </Typography>
              <IconButton href="/support" style={{marginLeft:"11.51vw", color:"black", }}>
                <ArrowForwardIosIcon style={{ fontSize: 15 }}/>
              </IconButton>
              <hr style={{marginTop:"-0.8vh"}}/>
            </div>
            <div style={{marginTop:"-1.1vh"}}>
              <Typography variant="caption" style={{marginTop:"-1vh"}}>
                Logout
              </Typography>
              <IconButton href="/logout" style={{marginLeft:"11.96vw", color:"black", }}>
                <ArrowForwardIosIcon style={{ fontSize: 15 }}/>
              </IconButton>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Account;
