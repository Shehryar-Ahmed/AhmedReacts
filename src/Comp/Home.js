import { Typography } from "@mui/material";
import * as React from "react";
import Digital from "./digital.png";
import { useSpring, animated } from "@react-spring/web";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const springs = useSpring({
    from: { y: 0 },
    to: [{ y: 10 }, { y: 0 }],
    loop: true,
  });

  return (
    <>
      <Typography
        sx={{
          fontSize: 40,
          fontWeight: 500,
          position: "absolute",
          top: "320px",
          left: "150px",
        }}
        fontFamily="inherit"
      >
        Grow Your Business With
      </Typography>
      <Typography
        sx={{
          fontSize: 40,
          fontWeight: 500,
          position: "absolute",
          top: "359px",
          left: "150px",
          color: "#d45b0b",
          my: "1px",
          letterSpacing: 2,
        }}
        fontFamily="unset"
      >
        AHMEDREACTS
      </Typography>
      <TypeAnimation
        sequence={["The time to digitalize is here", () => {}]}
        wrapper="div"
        cursor={true}
        repeat={false}
        speed={50}
        style={{
          fontSize: 20,
          position: "absolute",
          top: "420px",
          left: "150px",
        }}
        fontFamily="inherit"
      />
      <animated.img
        src={Digital}
        alt="Error: Couldn't find image"
        style={{
          width: "800px",
          height: "540px",
          position: "absolute",
          top: "105px",
          left: "570px",
          ...springs,
        }}
      ></animated.img>
      <Button
        variant="outlined"
        size="medium"
        sx={{
          position: "absolute",
          top: "470px",
          left: "150px",
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "#139cd6",
          "&:hover": { backgroundColor: "#139cd6", color: "white" },
          color: "#139cd6",
        }}
        disableRipple
        disableFocusRipple
        onClick={() => navigate("/Login")}
      >
        Get Started
      </Button>
      <Typography
        sx={{
          fontSize: 10,
          position: "absolute",
          bottom: "20px",
          left: "610px",
        }}
      >
        &copy; 2022 Ahmed Reacts All Rights Reserved | Terms and Conditions
      </Typography>
    </>
  );
}

export default Home;
