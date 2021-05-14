import React from 'react'
import { Grid, makeStyles, Typography } from "@material-ui/core";
import img from "../../assest/home.png";
import group from "../../assest/Group.png";
import Button from "@material-ui/core/Button";
import Homecar from "../../component/HomeCar";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import google from "../../assest/google-button.png";
import facebook from "../../assest/facebook-button.svg";
import insta from "../../assest/instagram-button.svg";
import car from "../../assest/car.jpg";
import { useSelector, useDispatch } from "react-redux";
import Forgetpassword from './Forgetpassword';

const Login = () => {

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
      width: "100%",
      marginTop: "4vh",
      paddingLeft: "3vw",
      paddingRight: "3vw",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    typo: {
      marginTop: "6vh",
      marginLeft: "12vw",
      fontSize:"12px"
    },
    content: {
      color: "white",
      marginTop: "20vh",
      fontSize: "11px",
      textAlign: "center",
      paddingLeft: "6vw",
      paddingRight: "6vw",
    },
  }));

  const classes = useStyle();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
            style={{ color: "white", marginTop: "5vh", marginLeft: "20vw",fontWeight:"bold"}}
          >
            House Camera App
          </Typography>
          <Typography
            style={{ color: "white", marginLeft: "21vw", fontSize: "12px" }}
          >
            Everything before your eyes
          </Typography>
          <Typography className={classes.content}>
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
          <div style={{marginTop:"-5vh"}}>
            {/* <Homecar isHouse={isHouse} setIsHouse={setIsHouse}/> */}
            <Homecar />
            </div>
            <form className={classes.form} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value=""
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
                value=""
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
              <Link href="/forgetpassword" variant="body2" style={{color:"#0091FF"}}>
                Forgot password?
              </Link>
              <Typography className={classes.typo}>or login with</Typography>
              <div style={{display:"flex",marginTop: "2vh", marginLeft: "7.5vw"}}>
              <Link href="#" variant="body2">
                <img alt="facebook" src={facebook} style={{ width: "4vw" }} />
              </Link>
              <Link href="#" variant="body2">
                <img alt="google" src={google} style={{ width: "4vw" ,marginLeft:"1vw"}} />
              </Link>
              <Link href="#" variant="body2">
                <img alt="insta" src={insta} style={{ width: "4vw" ,marginLeft:"1vw"}} />
              </Link>
              </div>
              <div style={{ marginTop: "10vh",fontSize:"12px"}}>
                Need an account?{" "}
                <Link href="/signup" variant="body2" style={{color:"#0091FF"}}>
                  Signup
                </Link>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Login
