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

const Changeemail = ({showemail,setShowemail}) => {
    const classes = useStyle();
    return (
        <div>
          <Paper className={classes.paper}>
            <Typography variant="h6" style={{fontWeight:"bold"}}>Change Email</Typography>
            <form className={classes.form} noValidate>
              <label for="email" style={{ opacity: "80%",fontSize:"12px"}}>Email</label><br/>
              <input type="email" id="email" name="email" value="luckytom@rach" className={classes.text}/>
              <Button
               variant="contained"
               onClick={()=>setShowemail(false)}
               style={{
                width: "20vw",
                marginTop: "40vh",
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

export default Changeemail
