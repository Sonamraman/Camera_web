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
  }));

const Changepassword = () => {
    const classes = useStyle();
    return (
        <div>
            <Paper className={classes.paper}>
            <Typography variant="h6" style={{fontWeight:"bold"}}>Change Password</Typography>
            <form className={classes.form} noValidate>
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Old Password"
                type="password"
                value="qwertyu"
                id="password"
                autoComplete="current-password"
              />
               <TextField
                margin="normal"
               
                fullWidth
                name="password"
                label="New Password"
                type="password"
                value="qwertyu"
                id="password"
                autoComplete="current-password"
              />
               <TextField
                margin="normal"
              
                fullWidth
                name="password"
                label="Re Password"
                type="password"
                value="qwertyu"
                id="password"
                autoComplete="current-password"
                
              />
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: "20vw",
                    marginTop:"15vh",
                    marginLeft:"6vw"
                    
                  }}
                >
                 Save
                </Button>
              </form>
            </Paper>
        </div>
    )
}

export default Changepassword
