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
    form:{
      width: "2vw",
      height: "8vh",
      marginRight: "1vw",
      textAlign: "center",
      boxSizing: "border-box",
      border: "none",
      borderBottom: "4px solid #0A0F2D",
      fontSize:"40px",
      fontWeight:"bold",
      color:"#0A0F2D"
    },
    button:{
      margin: "0vh 13vw 5vh",
      height:"4.5vh",
      width:"8vw",
      fontSize:"9px",
      backgroundColor: "#1E82D2",
      color: "white",
    }
}))

const Pin = ({open,setOpen}) => {
    const classes = useStyle();

    const handleClose = () => {
        setOpen(false)
        console.log("close")
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
            <div style={{marginLeft:"11.2vw",marginTop:"1vh"}}>
              <form>
              <input type="text" maxlength="1" className={classes.form}/>
              <input type="text" maxlength="1" className={classes.form}/>
              <input type="text" maxlength="1" className={classes.form}/>
              <input type="text" maxlength="1" className={classes.form}/>
              </form>
            </div>
          <DialogContentText style={{marginLeft:"13vw",marginTop:"2vh",fontSize:"10px"}}>
            Please type your PIN
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} className={classes.button}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}

export default Pin
