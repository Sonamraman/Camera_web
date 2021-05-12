import React from 'react'
import { makeStyles, Paper,Typography,TextField,Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    paper: {
      width: "40vw",
      height:"85vh",
      padding: theme.spacing(4),
    },
    text: {
      marginTop: "3vh",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(7),
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
  }));

const Changepassword = ({showpass,setShowpass}) => {
    const classes = useStyle();
    return (
        <div>
            <Paper className={classes.paper}>
            <Typography variant="h6" style={{fontWeight:"bold"}}>Change Password</Typography>
            <form className={classes.form} noValidate>
              <label for="old password" style={{ opacity: "80%",fontSize:"12px"}}>Old Password</label><br/>
              <input type="password" id="old" name="old" value="vtrvgtr" className={classes.text}/>
              <div style={{marginTop:"2vh",}}>
              <label for="new password" style={{marginTop:"5vh", opacity: "80%",fontSize:"12px"}}>New Password</label><br/>
              <input type="password" id="new" name="new" value="crfvt" className={classes.text}/>
              </div>
              <div style={{marginTop:"2vh",}}>
              <label for="re password" style={{ opacity: "80%",fontSize:"12px"}}>Re-Password</label><br/>
              <input type="password" id="re" name="re" value="dvtbtyhn" className={classes.text}/>
              </div>
              <Button
                variant="contained"
                onClick={()=>setShowpass(false)}
                style={{
                  width: "20vw",
                  marginTop: "20vh",
                  marginLeft: "8vw",
                  color:"white",
                  backgroundColor:"#2168A0"
                }}>
                 Save
                </Button>
              </form>
            </Paper>
        </div>
    )
}

export default Changepassword
