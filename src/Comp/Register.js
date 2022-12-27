import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Person from "@mui/icons-material/Person";
import InputWithIcon from "./Inputs";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bg from "./bg.png";
import Ehh from "../contexts/createCont";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  let context = React.useContext(Ehh);
  let { fName, email, pass, cPass, errMsg, ChngErrMsg } = context;
  let [Check, setCheck] = useState(true);

  let Submitted = () => {
    if (
      fName === "" ||
      email === "" ||
      pass === "" ||
      cPass === "" ||
      fName === "Full Name" ||
      email === "Email" ||
      pass === "Password" ||
      cPass === "Confirm Password"
    )
      ChngErrMsg("Please fill out all the fields");
    else if (fName.length < 5)
      ChngErrMsg("Full Name must be atleast 4 characters");
    else if (pass.length < 5)
      ChngErrMsg("Password must be atleast 4 characters");
    else if (pass !== cPass) ChngErrMsg("The passwords do not match");
    else if (!/\S+@\S+\.\S+/.test(email)) {
      ChngErrMsg("Email Invalid");
    } else {
      ChngErrMsg("");
      if (Check) {
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("pass", JSON.stringify(pass));
      }
      navigate("/Services");
    }

    setTimeout(() => {
      ChngErrMsg("");
    }, 4000);
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Hanken Grotesk", "Montserrat"],
      },
    });
  }, []);

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
          top: "106px",
          zIndex: "100px",
        }}
      >
        <Person sx={{ color: "white", fontSize: "90px" }} />
      </Box>
      <Box
        sx={{
          borderRadius: "25px",
          backgroundColor: "rgba(237,235,235,0.6)",
          marginTop: "-120px",
          width: "500px",
          height: "390px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <InputWithIcon />
        <FormControlLabel
          sx={{
            marginRight: "190px",
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
              Remember Me
            </Typography>
          }
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "left",
            justifyContent: "left",
            flexDirection: "column",
            marginLeft: "200px",
            zIndex: "900px",
            position: "absolute",
            top: "477px",
          }}
        >
          <Typography
            style={{ fontFamily: "Hanken Grotesk", color: "#3b6a8f" }}
          >
            Already registered?
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
              to="/Login"
            >
              Login
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
        Register
      </Button>
      {errMsg !== "" && (
        <Typography style={{ color: "red" }}>{errMsg}</Typography>
      )}
    </div>
  );
}

export default Register;
