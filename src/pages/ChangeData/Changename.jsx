import React from "react";
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
}));

const Changename = () => {
  const classes = useStyle();

  return (
    <div>
      <Paper className={classes.paper}>
        <Typography variant="h6" style={{fontWeight:"bold"}}>Change Name</Typography>
        <form className={classes.form} noValidate>
          <TextField
            marginLeft="normal"
            value="Tomas Wilson"
            id="name"
            fullWidth
            label="NAME"
            name="name"
            className={classes.text}
            autoComplete="name"
          />
          <Button
            variant="contained"
            style={{
              width: "20vw",
              marginTop: "40vh",
              marginLeft: "8vw",
              color:"white",
              backgroundColor:"#2168A0"
            }}
          >
            Save
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Changename;
