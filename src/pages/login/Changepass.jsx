import React from 'react'
import { makeStyles, Paper,Typography,Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root:{
        background:"#1E82D2",
        height:"100vh",
        width:"100vw",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display:"flex"
    },
    paper: {
        marginLeft:"30vw",
        marginTop:"15vh",
        width: "40vw",
        height:"60vh",
        padding: theme.spacing(4),
      },
      head:{
        marginLeft:"12vw",
        marginTop:"2vh",
        fontSize:"20px",
        fontWeight:"bold"
      },
    text: {
      paddingBottom:"0.8vh",
      width: "100%",
      marginTop: "9px",
      marginLeft:"-1px",
      boxSizing: "border-box",
      border: "none",
      borderBottom: "1px solid grey",
      fontWeight:"bold",
      fontSize:"20px"
    },
    button:{
        margin: "12vh 0 1vh 8vw",
        height:"4.5vh",
        width:"8vw",
        fontSize:"9px",
        backgroundColor: "#1E82D2",
        color: "white",
        '&:hover':{
          backgroundColor: "#1E82D2",
        }
      },
      button1:{
          margin: "12vh 0 1vh 7vw",
          height:"4.5vh",
          width:"8vw",
          fontSize:"9px",
          backgroundColor: "#1E82D2",
          color: "white",
          '&:hover':{
            backgroundColor: "#1E82D2",
          }
        }
  }));

const Changepass = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
            <Typography className={classes.head}>Change Password</Typography>
            <form style={{margin:"4vh 6vw 0",}}>
              <label for="new password" style={{marginTop:"5vh", opacity: "80%",fontSize:"12px"}}>New Password</label><br/>
              <input type="password" id="new" name="new" value="" className={classes.text}/>
              <div style={{marginTop:"2vh",}}>
              <label for="re password" style={{ opacity: "80%",fontSize:"12px"}}>Confirm-Password</label><br/>
              <input type="password" id="re" name="re" value="" className={classes.text}/>
              </div>
              </form>
              <Button variant="contained" href="/" className={classes.button}>
              Save
            </Button>
            <Button variant="contained" href="/" className={classes.button1}>
              Cancel
            </Button>
            </Paper>
        </div>
    )
}

export default Changepass
