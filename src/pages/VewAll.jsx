import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";
import img1 from "../assest/home.png";
import img2 from "../assest/car.jpg";
import img3 from "../assest/img2.png";
import img4 from "../assest/img3.png";
import img5 from "../assest/img4.jpeg";
import img6 from "../assest/img5.jpeg";
import img7 from "../assest/img6.png";
import img8 from "../assest/img7.png";
import img9 from "../assest/img8.png";
import ShareIcon from "@material-ui/icons/Share";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Drawerr from "../component/Drawerr";
import Sharevideo from "./Sharevideo";
const tiers = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
  {
    img: img7,
  },
  {
    img: img8,
  },
  {
    img: img9,
  },
];
const useStyle = makeStyles((theme) => ({
  main: {
    display: "flex",
  },
  drawer: {
    justifyContent: "flex-start",
  },
  gridList: {
    width: "100%",
    height: "100%",
    
  },
  icon: {
    color: "#333333",
  },
  play:{
    width:"23vw",
    marginRight: "2vw",
    borderRadius: "25px",
    backgroundColor:"rgba(255, 255, 255, 0.54)",
    blur:"1"
  },
}));
const ViewAll = () => {
  const classes = useStyle();

  const [share, setShare] = React.useState(false);

  const handleShareOpen = () => {
    setShare(true);
  };

  return (
    <div className={classes.main}>
      <div className={classes.drawer}>
        <Drawerr />
      </div>
      <div className={classes.home}>
        <div className={classes.root}>
        <div style={{marginLeft:"2vw",marginTop:"2vh"}}>
           <Typography variant="h6" style={{fontWeight:"bold"}}>View All</Typography>
           <Typography variant="caption" style={{opacity: "0.5"}}>11 Active Devices</Typography>
        </div>
          <GridList cellHeight={160} className={classes.gridList} cols={3} style={{marginTop:"2vh"}}>
            {tiers.map((tier) => (
              <GridListTile>
                <img src={tier.img} />
                <GridListTileBar
                  actionIcon={
                    <div className={classes.play}>
                      <IconButton onClick={handleShareOpen} style={{ marginLeft: "0.5vw" }} >
                        <ShareIcon />
                      </IconButton>
                      <IconButton style={{ marginLeft: "1.6vw" }}>
                        <NavigateBeforeIcon />
                      </IconButton>
                      <IconButton>
                        <PauseCircleOutlineIcon />
                      </IconButton>
                      <IconButton  >
                        <NavigateNextIcon />
                      </IconButton>
                      <IconButton style={{ marginLeft: "1.8vw" }}>
                        <FullscreenExitIcon  />
                      </IconButton>
                    </div>
                  }
                /> 
              </GridListTile>
            ))}
            <Sharevideo share={share} setShare={setShare}/>
          </GridList>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
