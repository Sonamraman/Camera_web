import React from 'react'
import {
    makeStyles,
    Avatar,Button,
    Dialog,DialogActions,
    DialogContent,DialogContentText,DialogTitle,
  } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const useStyle = makeStyles((theme) => ({
    avatar:{
        marginTop:"1vh",
        marginLeft:"31vw",
        backgroundColor:"#E02020",
        height:"5vh",
        width:"2.5vw"
    },
    head:{
        marginLeft:"10vw",
        marginTop:"1vh",
        fontSize:"20px",
        fontWeight:"bold",
        color:"black"
      },
      subhead:{
          padding:"0 4vw 0",
          marginTop:"-1vh",
          fontSize:"12px",
          color:"black",
      },
    button:{
      margin: "1vh 10vw 5vh 0",
      height:"4.5vh",
      width:"8vw",
      fontSize:"9px",
      backgroundColor: "#1E82D2",
      color: "white",
    },
    button1:{
        margin: "1vh 0vw 5vh 5vw",
        height:"4.5vh",
        width:"8vw",
        fontSize:"9px",
        border: "1px solid #1E82D2",
        color: "#1E82D2",
      }
}))

const Call = ({open,setOpen}) => {
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
          <DialogContentText className={classes.head}>
            Make call to 911 ?
          </DialogContentText>
          <DialogContentText className={classes.subhead}>
          Are you sure that you want to call the 911 emergency service?
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose} className={classes.button1}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleClose} className={classes.button}>
              Make Call
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    )
}

export default Call
