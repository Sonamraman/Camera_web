import React, { useState } from "react";
import { Grid, makeStyles, Typography,Button, TextField,Link,Paper} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Homecar from "../component/HomeCar";
import car from "../assest/car.jpg";
import img from "../assest/home.png";
import group from "../assest/Group.png";
import * as Validation from "../utility/validation";
import { useHistory } from "react-router";

const Signup = () => {
  const isHouse = useSelector((state) => state.isHouse);

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
      marginTop: "2vh",
      paddingLeft: "2vw",
      paddingRight: "2vw",
    },
    submit: {
      marginTop: "3.4vh",
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
    name: "",
    email: "",
    password: "",
    pincode: "",
    emptyErr: "",
  };

  const [data, setData] = useState(initialData);
  const [errData, seterrData] = useState(initialData);
  const history = useHistory();

  const submit = (event) => {
    event.preventDefault();
    // history.push("/home");

    if (data.email === "" || data.password === "" || data.pincode === ""|| data.name === "") {
      seterrData({ ...errData, emptyErr: "All fields are required" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    switch (name) {
      case "email":
        if (Validation.validateEmail(value)) {
          seterrData({ ...errData, email: "" });
        } else {
          seterrData({ ...errData, email: "Please Enter A Valid Email" });
        }
        break;
      case "password":
        if (Validation.validatePassword(value)) {
          seterrData({ ...errData, password: "" });
        } else {
          seterrData({ ...errData, password: "Please Enter A Valid Password" });
        }
        break;
      case "pincode":
        if (Validation.validatePincode(value)) {
          seterrData({ ...errData, pincode: "" });
        } else {
          seterrData({ ...errData, pincode: "Please Enter A Valid Pincode" });
        }
      break;
    }
  };


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
            style={{ color: "white", marginTop: "5vh", marginLeft: "21vw",fontWeight:"bold"}}
          >
            House Camera App
          </Typography>
          <Typography
            style={{ color: "white", marginLeft: "22vw", fontSize: "12px" }}
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
            <Homecar />
            </div>
            <form className={classes.form} noValidate>
            <Typography component="h1" variant="h5" style={{fontWeight:"bold",float:"left"}}>
              Sign Up
            </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email "
                name="email"
                onChange={(e) => handleInputChange(e)}
                autoComplete="email"
              />
              <small style={{ color: "red" }}>{errData.email || ""}</small>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={(e) => handleInputChange(e)}
                id="password"
                autoComplete="current-password"
              />
              <small style={{ color: "red" }}>{errData.password || ""}</small>
              <TextField
                margin="normal"
                required
                fullWidth
                id="pincode"
                onChange={(e) => handleInputChange(e)}
                label="Pincode "
                name="pincode"
                autoComplete="pincode"
              />
              <small style={{ color: "red" }}>{errData.pincode}</small>
              <Button
                type="submit"
                href="/home"
                fullWidth
                variant="contained"
                color="primary"
                onClick={(event) => submit(event)}
                className={classes.submit}
              >
                Sign Up
              </Button>
              <small style={{ color: "red" }}>{errData.emptyErr }</small>
              <div style={{marginTop:"3vh",fontSize:"12px"}}>
                Already have an account? {" "}
                <Link href="/" variant="body2" style={{color:"#0091FF"}}>
                  Login
                </Link>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
