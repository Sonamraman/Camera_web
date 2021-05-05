import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Avatar, CardHeader, Grid} from "@material-ui/core";
import Drawerr from "../../component/Drawerr";
import AddIcon from "@material-ui/icons/Add";
import HomeCar from "../../component/HomeCar";

const useStyles = makeStyles((theme) => ({
  homecar: {
    marginLeft: "2vw",
    marginTop: "3vh",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [invisible, setInvisible] = React.useState(false);

  return (
    <div>
      {/* <Drawerr /> */}
      <Grid container>
        <Grid item>
        <CardHeader
              style={{ color: "black" }}
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <AddIcon />
                </Avatar>
              }
              title="My Camera(Home)"
              subheader="10 Active Devices"
            /> 
        </Grid>
        <Grid item>
        <HomeCar className={classes.homecar}/>
        </Grid>
      </Grid>
      
           
    </div>
  );
};

export default Home;
