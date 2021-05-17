import React from 'react'
import {
    makeStyles,
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const useStyle = makeStyles((theme) => ({
    avatar:{
        marginTop:"1vh",
        marginLeft:"30vw",
        backgroundColor:"#E02020",
        height:"5vh",
        width:"2.5vw"
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(2),
    },
    text: {
      paddingBottom:"0.8vh",
      width: "100%",
      marginTop: "9px",
      marginLeft:"-1px",
      boxSizing: "border-box",
      border: "none",
      borderBottom: "1px solid grey",
      opacity:"0.8",
      fontWeight:"bold",
      fontSize:"20px"
    },
    button:{
        margin: "4vh 13vw 5vh",
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

const Devicename = ({open,setOpen}) => {
    const classes = useStyle();

    const handleClose = () => {
        setOpen(false)
      };


    return (
        <div>
            <Dialog open={open}>
          <DialogTitle>
            <Avatar aria-label="close" onClick={handleClose} className={classes.avatar}>
              <CloseIcon/>
            </Avatar>
          </DialogTitle> 
          <DialogContent>
            <div style={{margin:"-2vh 6vw 0"}}>
              <form className={classes.form}>
              <label for="fname" style={{ opacity: "80%",fontSize:"12px"}}>Device Name</label><br/>
              <input type="text" id="fname" name="fname" value="House Enterance" className={classes.text}/>
              </form>
            </div>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} className={classes.button}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    )
}

export default Devicename
