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
      width: "1.8vw",
      height: "8vh",
      marginRight: "0.5vw",
      textAlign: "center",
      boxSizing: "border-box",
      border: "none",
      borderBottom: "4px solid #0A0F2D",
      fontSize:"30px",
      fontWeight:"bold",
      color:"#0A0F2D"
    },
    button:{
        margin: "1vh 9vw 5vh 0",
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

const Code = ({open,setOpen}) => {
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
            <div style={{marginLeft:"9.5vw",marginTop:"1vh"}}>
              <form>
              <input type="text" maxlength="1" className={classes.form}/>
              <input type="text" maxlength="1" className={classes.form}/>
              <input type="text" maxlength="1" className={classes.form}/>
              <input type="text" maxlength="1" className={classes.form}/>
              <input type="text" maxlength="1" className={classes.form}/>
              <input type="text" maxlength="1" className={classes.form}/>
              </form>
            </div>
          <DialogContentText style={{marginLeft:"8.5vw",marginTop:"2vh",fontSize:"11px"}}>
            Please enter the 6-digit code sent to you
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" className={classes.button1}>
              Resend Code
            </Button>
            <Button variant="contained" href="/changepass" className={classes.button}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}

export default Code
