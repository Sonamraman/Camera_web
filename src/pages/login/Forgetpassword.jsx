import React from 'react'
import {
    makeStyles,
    Paper,Button,Typography,
  } from "@material-ui/core";
import Code from './Code';

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
        marginLeft:"10vw",
        marginTop:"2vh",
        fontSize:"20px",
        fontWeight:"bold"
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
      margin: "25vh 0 1vh 8vw",
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
        margin: "25vh 0 1vh 7vw",
        height:"4.5vh",
        width:"8vw",
        fontSize:"9px",
        backgroundColor: "#1E82D2",
        color: "white",
        '&:hover':{
          backgroundColor: "#1E82D2",
        }
      }
}))

const Forgetpassword = () => {
    const classes = useStyle();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
            <Typography className={classes.head}>
               Please enter your Email
            </Typography>
            <div style={{margin:"0 6vw 0",}}>
              <form className={classes.form}>
              <label for="email" style={{ opacity: "80%",fontSize:"12px"}}>Email</label><br/>
              <input type="email" id="email" name="email" value="luckytom@rach" className={classes.text}/>
              </form>
            </div>
            <Button variant="contained" onClick={handleClickOpen} className={classes.button}>
              Send Code
            </Button>
            <Button variant="contained" href="/" className={classes.button1}>
              Login
            </Button>

            <Code open={open} setOpen={setOpen} />

         </Paper>
        </div>
    )
}

export default Forgetpassword
