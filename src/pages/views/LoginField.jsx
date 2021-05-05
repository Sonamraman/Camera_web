import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import img from "../../assest/Bitmap.png";
import group from "../../assest/Group.png";
import Button from "@material-ui/core/Button";
import Homecar from "../../component/HomeCar";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import google from "../../assest/google-button.svg";
import facebook from "../../assest/facebook-button.svg";
import insta from "../../assest/instagram-button.svg";
import car from "../../assest/car.jpg";
import { useSelector, useDispatch } from "react-redux";

const LoginField = () => {
  // const [isHouse, setIsHouse] = useState(true);

  const isHouse = useSelector(state => state.isHouse)

  const useStyle = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    image: {
      backgroundImage: `url(${isHouse ? img : car})`,
      backgroundRepeat: "no-repeat",

      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    typo: {
      marginTop: "7vh",
      marginLeft: "15vw",
    },
    typo1: {
      color: "white",
      marginTop: "23vh",
      fontSize: "11px",
      textAlign: "center",
      paddingLeft: "70px",
      paddingRight: "70px",
    },
  }));

  const classes = useStyle();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image}>
          <img
            src={group}
            style={{ marginLeft: "24vw", marginTop: "25vh", width: "7vw" }}
          />
          <Typography
            variant="h6"
            style={{ color: "white", marginTop: "7vh", marginLeft: "22vw" }}
          >
            House Camera App
          </Typography>
          <Typography
            style={{ color: "white", marginLeft: "23vw", fontSize: "12px" }}
          >
            Everything before your eyes
          </Typography>
          <Typography className={classes.typo1}>
            Lorem ipsum dolor sit amet, consectetur and it adipiscing elit, sed
            do eiusmod tem incididunt ut labore et dolore magna enim ad minim
            veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur and it
            adipiscing elit, sed do eiusmod tem incididunt ut labore et dolore
            magna enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit
            amet, consectetur and it adipiscing elit, sed do eiusmod tem
            incididunt ut labore et dolore magna enim ad minim veniam, quis
            nostrud. Lorem ipsum dolor sit amet, consectetur and it adipiscing
            elit, sed do eiusmod tem incididunt ut labore et dolore magna enim
            ad minim veniam, quis nostrud.{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            {/* <Homecar isHouse={isHouse} setIsHouse={setIsHouse}/> */}
            <Homecar />
            <form className={classes.form} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value="dhindsashinu@gmail.com"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value="qwertyu"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Typography className={classes.typo}>or login with</Typography>
              <Grid container style={{ marginTop: "4vh", marginLeft: "13vw" }}>
                <Grid item>
                  <Link href="#" variant="body2">
                    <img
                      alt="facebook"
                      src={facebook}
                      style={{ width: "4vw" }}
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    <img alt="facebook" src={google} style={{ width: "4vw" }} />
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    <img alt="facebook" src={insta} style={{ width: "4vw" }} />
                  </Link>
                  <div style={{ marginTop: "3vh", marginLeft: "-8vw" }}>
                    Need an account?{" "}
                    <Link href="#" variant="body2">
                      "Sign Up"
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginField;
