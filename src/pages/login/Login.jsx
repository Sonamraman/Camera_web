import React, { useState }  from 'react'
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
import { useSelector} from "react-redux";
import { useHistory } from "react-router";
import * as Validation from "../../utility/validation";

const Login = () => {

  // const [isHouse, setIsHouse] = useState(true);

  const isHouse = useSelector(state => state.houseCar.isHouse)

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
      paddingLeft: "2vw",
      paddingRight: "2vw",
    },
    submit: {
      marginTop: "3.2vh",
    },
    typo: {
      marginTop: "4vh",
      marginLeft: "16vw",
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

  const initialData = {
    email: "",
    password: "",
    emptyErr: "",
  };

  const classes = useStyle();

  const [data, setData] = useState(initialData);
  const [errData, seterrData] = useState(initialData);
  const history = useHistory();

  const submit = async (event) => {
    history.push("/home");
    event.preventDefault();

    // // console.log("Api Called");
    // const response = await fetch("http://93.188.167.68:4500/api/users/login", {
    //   method: "POST",
    //   body: JSON.stringify({ email: data.email, password: data.password }),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     // "x-access-token": localStorage.token,
    //   },
    // });

    // const responseObj = await response.json();

    // console.log(responseObj);
    // const newObj = { firstName: responseObj.data.firstName };
    // console.log(newObj);

    // if (responseObj.isSuccess == true) {
    //   localStorage.token = responseObj.data.token;
    //   localStorage.id = responseObj.data.id;
    //   history.push("/home");
    // }

    if (data.email === "" || data.password === "") {
      seterrData({ ...errData, emptyErr: "All fields are required" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    switch (name) {
      case "email": {
        if (Validation.validateEmail(value)) {
          seterrData({ ...errData, email: "" });
        } else {
          seterrData({ ...errData, email: "Please Enter A Valid Email" });
        }
        break;
      }
      case "password": {
        if (Validation.validatePassword(value)) {
          seterrData({ ...errData, password: "" });
        } else {
          seterrData({ ...errData, password: "Please Enter A Valid Password" });
        }
        break;
      }
      default:{}
    }
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image}>
          <img alt="group"
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
            ad minim veniam, quis nostrud.
            
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
          <div style={{marginTop:"-4vh"}}>
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
                value={data.email}
                autoComplete="email"
                onChange={(e) => handleInputChange(e)}
                autoFocus
              />
              <small style={{ color: "red" }}>{errData.email || ""}</small>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={data.password || ""}
                id="password"
                onChange={(e) => handleInputChange(e)}
                autoComplete="current-password"
              />
              <small style={{ color: "red" }}>{errData.password}</small>
              <br/>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button 
                type="submit"
                fullWidth variant="contained" 
                color="primary" 
                onClick={(event) => submit(event)}
                herf="/home"
                className={classes.submit}
              >
                Sign In
              </Button>
              <small style={{ color: "red" }}>{errData.emptyErr}</small>
              <br/>
              <div style={{marginTop:"1vh"}}>
              <Link href="/forgetpassword" variant="body2" style={{color:"#0091FF"}}>
                Forgot password?
              </Link>
              </div>
              <Typography className={classes.typo}>or login with</Typography>
              <div style={{display:"flex",marginTop: "2vh", marginLeft: "12vw"}}>
              <Link href="/facebook" variant="body2">
                <img alt="facebook" src={facebook} style={{ width: "4vw" }} />
              </Link>
              <Link href="/google" variant="body2">
                <img alt="google" src={google} style={{ width: "4vw" ,marginLeft:"1vw"}} />
              </Link>
              <Link href="/insta" variant="body2">
                <img alt="insta" src={insta} style={{ width: "4vw" ,marginLeft:"1vw"}} />
              </Link>
              </div>
              <div style={{ marginTop: "4vh",fontSize:"12px"}}>
                Need an account? {" "}
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
