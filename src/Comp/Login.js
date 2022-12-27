import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bg from "./bg.png";
import Ehh from "../contexts/createCont";
import { useNavigate } from "react-router-dom";
import InputLogin from "./InputLogin";

function Login() {
  const navigate = useNavigate();
  let context = React.useContext(Ehh);
  let { emailLogin, passLogin, errMsgLogin, ChngErrMsgLogin } = context;

  let Submitted = () => {
    if (
      emailLogin === "" ||
      passLogin === "" ||
      emailLogin === "Email" ||
      passLogin === "Password"
    )
      ChngErrMsgLogin("Please fill out all the fields");
    else if (!/\S+@\S+\.\S+/.test(emailLogin)) {
      ChngErrMsgLogin("Email Invalid");
    } else {
      ChngErrMsgLogin("");
      navigate("/Services");
    }

    setTimeout(() => {
      ChngErrMsgLogin("");
    }, 4000);
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Hanken Grotesk", "Montserrat"],
      },
    });
  }, []);

  let [Check, setCheck] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#023963",
          borderRadius: "50px",
          height: "100px",
          width: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          left: "710px",
          top: "156px",
          zIndex: "100px",
        }}
      >
        <LoginIcon sx={{ color: "white", fontSize: "60px" }} />
      </Box>
      <Box
        sx={{
          borderRadius: "25px",
          backgroundColor: "rgba(237,235,235,0.6)",
          marginTop: "-120px",
          width: "500px",
          height: "290px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <InputLogin />
        <FormControlLabel
          sx={{
            marginRight: "228px",
            marginTop: "35px",
            color: "#3b6a8f",
            zIndex: "200px",
          }}
          control={
            <Checkbox checked={Check} onChange={() => setCheck(!Check)} />
          }
          label={
            <Typography
              style={{
                fontSize: 15,
                fontFamily: "Montserrat",
                fontWeight: 500,
                letterSpacing: 1,
              }}
            >
              Keep Me <br />
              Logged In
            </Typography>
          }
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "left",
            justifyContent: "left",
            flexDirection: "column",
            marginLeft: "175px",
            zIndex: "900px",
            position: "absolute",
            top: "412px",
          }}
        >
          <Typography
            style={{ fontFamily: "Hanken Grotesk", color: "#3b6a8f" }}
          >
            Haven't registered yet?
          </Typography>
          <Typography
            style={{ fontFamily: "Hanken Grotesk", color: "#3b6a8f" }}
          >
            Click here to{" "}
            <Link
              style={{
                textDecorationLine: "underline",
                color: "#0c8ced",
                fontFamily: "Hanken Grotesk",
              }}
              to="/Register"
            >
              Register
            </Link>
          </Typography>
        </Box>
      </Box>
      <Button
        type="submit"
        sx={{
          borderRadius: "25px",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          background: "linear-gradient(rgba(59,106,143,0.4),transparent)",
          backgroundColor: "rgba(245,242,242,0.7)",
          width: "400px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            background: "linear-gradient(rgba(245,242,242,1),transparent)",
            backgroundColor: "rgba(59,106,143,0.1)",
          },
          color: "black",
          fontFamily: "Montserrat",
        }}
        disableRipple
        disableFocusRipple
        onClick={Submitted}
      >
        Login
      </Button>
      {errMsgLogin !== "" && (
        <Typography style={{ color: "red" }}>{errMsgLogin}</Typography>
      )}
    </div>
  );
}

export default Login;
