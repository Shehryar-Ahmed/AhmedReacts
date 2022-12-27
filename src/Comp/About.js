import React from "react";
import { useSpring, animated } from "@react-spring/web";
import House from "./houserem.png";
import { Typography } from "@mui/material";
import WebFont from "webfontloader";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Hanken Grotesk"],
      },
    });
  }, []);

  //   useEffect(()=>{fetch("EgLQdkh0x43LKN91iS2bRJ5Bh0Gn6hd4")})

  const springs = useSpring({
    from: { y: 0 },
    to: [{ y: 10 }, { y: 0 }],
    loop: true,
  });
  return (
    <div>
      <Typography
        style={{
          fontSize: 21,
          position: "absolute",
          top: "360px",
          left: "150px",
          fontFamily: "Hanken Grotesk",
        }}
        // fontFamily="unset"
      >
        We are a team of certified developers residing in Islamabad, Pakistan
      </Typography>
      <animated.img
        src={House}
        alt="Error: Couldn't find image"
        style={{
          width: "780px",
          height: "440px",
          position: "absolute",
          top: "199px",
          left: "660px",
          ...springs,
        }}
      ></animated.img>
    </div>
  );
}

export default About;
