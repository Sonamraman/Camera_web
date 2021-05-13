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
        marginLeft:"40vw",
        backgroundColor:"#E02020",
        height:"5vh",
        width:"2.5vw"
    },
    head:{
        marginLeft:"14.3vw",
        marginTop:"1vh",
        fontSize:"20px",
        fontWeight:"bold",
        color:"black"
      },
      subhead:{
          padding:"0 11vw 0",
          marginTop:"-1vh",
          fontSize:"12px",
          color:"black",
          textAlign:"center"
      },
    button:{
      margin: "0vh 18.5vw 8vh",
      height:"4.5vh",
      width:"8vw",
      fontSize:"9px",
      backgroundColor: "#1E82D2",
      color: "white",
    }
}))

const DeviceNotFound = ({open,setOpen}) => {
    const classes = useStyle();

    const handleClose = () => {
        setOpen(false);
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
            Device not found !
          </DialogContentText>
          <DialogContentText className={classes.subhead}>
            We couldn`t find a new device near you, please check the Internet connections on all your devices
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} color="primary" className={classes.button}>
              Try Again
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    )
}

export default DeviceNotFound
