import React from 'react'
import {
    makeStyles,
    Avatar,
    Button,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const useStyle = makeStyles((theme) => ({
    avatar:{
        marginTop:"-6vh",
        marginLeft:"30vw",
        backgroundColor:"#E02020",
        height:"5vh",
        width:"2.5vw"
    },
    head:{
        marginTop:"1vh",
        textAlign:"center",
        fontSize:"20px",
        fontWeight:"bold"
    },
    subhead:{
        textAlign:"center",
        fontSize:"12px",
        fontWeight:"bold",
    },
    button:{
      margin: "0vh 6vw 4vh",
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
        margin: "0vh 6vw 4vh",
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

const Logout = ({openLog,setOpenLog}) => {
    const classes = useStyle();

    const handleClose = () => {
        setOpenLog(false)
      };
      
    return (
        <div>
          <Dialog open={openLog}>
          <DialogTitle>
            <Typography className={classes.head}>LogOut</Typography>
            <Avatar aria-label="close" onClick={handleClose} className={classes.avatar}>
              <CloseIcon/>
            </Avatar>
          </DialogTitle> 
          <DialogContent>
          <DialogContentText className={classes.subhead}>
            Are you sure you want to logout?
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" href="/" className={classes.button}>
              Yes
            </Button>
            <Button variant="contained" onClick={handleClose} className={classes.button1}>
              No
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    )
}

export default Logout
