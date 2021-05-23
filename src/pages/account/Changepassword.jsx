import React from 'react'
import { makeStyles, Paper,Typography,Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    paper: {
      width: "40vw",
      height:"85vh",
      padding: theme.spacing(4),
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(7),
    },
    label:{
      opacity: "80%",
      fontSize:"12px",
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
      width: "20vw",
      marginTop: "20vh",
      marginLeft: "8vw",
      color:"white",
      backgroundColor:"#1E82D2",
      '&:hover':{
        backgroundColor: "#1E82D2",
      }
    }
  }));

const Changepassword = ({showpass,setShowpass}) => {
    const classes = useStyle();
    return (
        <div>
            <Paper className={classes.paper}>
            <Typography variant="h6" style={{fontWeight:"bold"}}>Change Password</Typography>
            <form className={classes.form} noValidate>
              <label for="old password" className={classes.label}>Old Password</label><br/>
              <input type="password" id="old" name="old" value="vtrvgtr" className={classes.text}/>
              <div style={{marginTop:"2vh",}}>
              <label for="new password" className={classes.label}>New Password</label><br/>
              <input type="password" id="new" name="new" value="crfvt" className={classes.text}/>
              </div>
              <div style={{marginTop:"2vh",}}>
              <label for="re password" className={classes.label}>Re-Password</label><br/>
              <input type="password" id="re" name="re" value="dvtbtyhn" className={classes.text}/>
              </div>
              <Button variant="contained" className={classes.button} onClick={()=>setShowpass(false)}>
                Save
              </Button>
              </form>
            </Paper>
        </div>
    )
}

export default Changepassword
