import React from "react";
import { makeStyles, Paper,Typography,TextField,Button } from "@material-ui/core";

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
    marginTop: "40vh",
    marginLeft: "8vw",
    color:"white",
    backgroundColor:"#1E82D2"
  }
}));

const Changename = ({showname,setShowname}) => {
  const classes = useStyle();

  return (
    <div>
      <Paper className={classes.paper}>
        <Typography variant="h6" style={{fontWeight:"bold"}}>Change Name</Typography>
        <form className={classes.form} noValidate>
          <label for="fname" style={{ opacity: "80%",fontSize:"12px"}}>Name</label><br/>
          <input type="text" id="fname" name="fname" value="Tomas Wilson" className={classes.text}/>
          <Button variant="contained" className={classes.button} onClick={()=>setShowname(false)}>
            Save
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Changename;
