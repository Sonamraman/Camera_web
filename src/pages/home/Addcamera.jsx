import React from 'react'
import {
    makeStyles,
    Avatar,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    CircularProgress
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
    head:{
      marginLeft:"11vw",
      marginTop:"-1vh",
      fontSize:"20px",
      fontWeight:"bold",
      color:"black"
    },
    subhead:{
        marginLeft:"8vw",
        marginTop:"-1vh",
        fontSize:"12px",
        color:"black"
    },
    progress: {
        marginTop:"-1vh",
        marginRight:"16vw",
        marginBottom:"8vh"
      },
}))

const Addcamera = ({open,setOpen}) => {
    const classes = useStyle();

    const handleClose = () => {
        setOpen(false)
        console.log("close")
      };

    return (
        <div>
           <Dialog open={open}>
          <DialogTitle>
            <Avatar aria-label="close" onClick={handleClose} className={classes.avatar} style={{}}>
              <CloseIcon/>
            </Avatar>
          </DialogTitle> 
          <DialogContent>
          <DialogContentText className={classes.head}>
            Connection !
          </DialogContentText>
          <DialogContentText className={classes.subhead}>
            Please wait, searching for active camera
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div className={classes.progress}>
              <CircularProgress color="grey"/>
            </div>
          </DialogActions>
        </Dialog>
        </div>
    )
}

export default Addcamera
