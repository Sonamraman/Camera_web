import React from "react";
import {
  makeStyles,
  Avatar,
  Button,
  Paper,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyle = makeStyles((theme) => ({
  head:{
    color:"black",
    fontWeight:"bold", 
    marginLeft: "15.6vw", 
    marginTop: "4vh", 
    fontSize: "22px" 
  },
  avatar:{
    marginTop: "-7vh",
    marginLeft: "40vw",
    backgroundColor: "#E02020",
    height: "5vh",
    width: "2.5vw",
  },
  form: {
    width: "2vw",
    height: "8vh",
    marginRight: "1vw",
    textAlign: "center",
    boxSizing: "border-box",
    border: "none",
    borderBottom: "4px solid #0A0F2D",
    fontSize: "40px",
    fontWeight: "bold",
    color: "#0A0F2D",
  },
  input:{
    backgroundColor: "#C7C7C7",
    borderColor: "#C7C7C7",
    borderRadius: "3px",
    height: "4vh",
    width: "18vw",
    fontSize: "9px",
  },
  button:{
    backgroundColor: "#0A0F2D",
    color: "white",
    border: "none",
    borderRadius: "2px",
    height: "4vh",
    width: "10vw",
    fontSize: "9px",
    '&:hover':{
      backgroundColor: "#0A0F2D",
    }
  },
  or:{
    color:"black", 
    marginLeft: "20.3vw", 
    marginTop: "1vh", 
    fontSize: "9px" 
  },
  link:{
    margin: "-3vh 20.3vw 2vh",
    height: "4.5vh",
    width: "8vw",
    fontSize: "9px",
    color: "#0091FF",
  },
}));

const Share = ({ opendialog, setOpendialog }) => {
  const classes = useStyle();

  const handleClose = () => {
    setOpendialog(false);
  };

  return (
    <div>
      <Dialog open={opendialog}>
        <DialogTitle>
          <div className={classes.head} >
          Share the app
          </div>
          <Avatar aria-label="close" onClick={handleClose} className={classes.avatar}>
            <CloseIcon />
          </Avatar>
        </DialogTitle>
        <DialogContent>
          <div style={{textAlign: "center",fontSize: "12px",}}>
            <Link style={{color: "#0091FF",}}>
              https://www.google.com/search?q=mobile+sharing+browser+ui&rlz=1C5CHFA_enUA921UA921&sxsrf
            </Link>
          </div>
          <div style={{ marginLeft: "7vw", marginTop: "9vh" }}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              height="5vh"
              width="10vw"
              className={classes.input}
            />
            <Button onClick={handleClose} className={classes.button}>
              Share link
            </Button>
          </div>
          <DialogContentText className={classes.or}>
            or
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link className={classes.link}>
            Copy Link
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Share;
