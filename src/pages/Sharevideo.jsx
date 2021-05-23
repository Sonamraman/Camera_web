import React from 'react'
import {
    makeStyles,
    Avatar,
    Button,
    CardHeader,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
  } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from "@material-ui/icons/Add";
import oval1 from "../assest/Oval1.png";
import oval2 from "../assest/Oval2.png";

const useStyle = makeStyles((theme) => ({
    avatar:{
        marginTop:"-6vh",
        marginLeft:"30vw",
        backgroundColor:"#E02020",
        height:"5vh",
        width:"2.5vw"
    },
    head:{
        marginLeft:"9vw",
        marginTop:"0vh",
        fontSize:"17px",
        fontWeight:"bold",
        color:"black"
      },
      subhead:{
          marginLeft:"7vw",
          marginTop:"-0.5vh",
          fontSize:"12px",
          color:"black",
      },
    button:{
      margin: "0vh 13vw 2vh 0",
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

const Sharevideo = ({share,setShare}) => {
    const classes = useStyle();

    const handleShareClose = () => {
        setShare(false)
      };

    return (
        <div>
            <Dialog open={share}>
          <DialogTitle style={{backgroundColor:"rgb(232 232 232)"}}>
              <div className={classes.head}> 
                Share camera video.
              </div>
              <div className={classes.subhead}> 
                You can share this video with your friends
              </div>
            <Avatar aria-label="close" onClick={handleShareClose} className={classes.avatar}>
              <CloseIcon/>
            </Avatar>
          </DialogTitle> 
          <DialogContent>
            <div style={{marginLeft:"2vw"}}>
            <CardHeader
              avatar={<Avatar aria-label="recipe">
                <img alt={oval1} src={oval1}/>
              </Avatar>}
              title="Luis Calvillo"
              subheader="luiscalvillo@gmail.com"
            />
            <CardHeader
              avatar={<Avatar aria-label="recipe">
                <img alt={oval2} src={oval2}/>
              </Avatar>}
              title="Sukhmeet Gorae"
              subheader="sukhmeetgorae@gmail.com"
            />
            <CardHeader
              avatar={<Avatar aria-label="recipe">
                <AddIcon style={{color:"black"}}/>
              </Avatar>}
              title="Add new"
              subheader="example@mail.com"
            />
            </div>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleShareClose} color="primary" className={classes.button}>
              Share
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    )
}

export default Sharevideo
