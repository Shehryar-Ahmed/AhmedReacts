import React from "react";
import Form from "./forms";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import { useSpring, animated } from "@react-spring/web";
import House from "./houserem.png";

function Contact() {
  const springs = useSpring({
    from: { y: 0 },
    to: [{ y: 10 }, { y: 0 }],
    loop: true,
  });

  return (
    <>
      <div
        style={{
          backgroundColor: "#01233d",
          height: "400px",
          display: "flex",
          //   alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: 23,
            fontWeight: 400,
            display: "flex",

            // alignItems: "center",
            // // justifyContent: "center",
            // textShadow: "3px 4px 4px #000000;",
            color: "white",
            paddingLeft: "130px",
          }}
          fontFamily="unset"
        >
          Our Mission
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 300,
            display: "flex",
            color: "white",
            paddingLeft: "130px",
            paddingTop: "20px",
            maxWidth: "700px",
          }}
          fontFamily="unset"
        >
          Our mission is to enhance business growth of our customers with
          creative design, development and to deliver market defining high
          quality solutions that create value and reliable competitive advantage
          to customers around the globe.
        </Typography>
        <animated.img
          src={House}
          alt="Error: Couldn't find image"
          style={{
            width: "780px",
            height: "440px",
            position: "absolute",
            top: "99px",
            left: "660px",
            ...springs,
          }}
        ></animated.img>
      </div>
      <div
        style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          position: "absolute",
          top: "400px",
          //   paddingLeft: "100px",
          zIndex: "800px",
          backgroundColor: "white",
          marginLeft: "995px",
          //   borderColor: "#cfd0d1",
          //   borderWidth: "2px",
          //   borderRadius: "10px",
          //   borderRightColor: "#cfd0d1",
          //   borderBottomColor: "#cfd0d1",
          //   borderRightWidth: "2px",
          //   borderBottomWidth: "2px",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          //   marginBottom: "300px",
        }}
      >
        <Box
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "30px",

            // borderColor: "#cfd0d1",
            // borderWidth: "3px",
            // borderRadius: "5px",
            //   borderStyle: "groove",
          }}
          sx={{
            width: "400px",
            backgroundColor: "#3f912a",
            height: "409px",
            // borderColor: "#cfd0d1",
            // borderWidth: "0px",
            // borderRadius: "1px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: 21,
              fontWeight: 400,
              display: "flex",

              // alignItems: "center",
              // // justifyContent: "center",
              // textShadow: "3px 4px 4px #000000;",
              color: "white",
              //   paddingLeft: "20px",
              fontFamily: "revert",
              fontStretch: "ultra-expanded",
            }}
          >
            CONTACT INFORMATION
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 400,
              display: "flex",

              // alignItems: "center",
              // // justifyContent: "center",
              // textShadow: "3px 4px 4px #000000;",
              color: "white",
              //   paddingLeft: "20px",
              fontFamily: "unset",
              fontStretch: "ultra-expanded",
              marginTop: "75px",
              //   marginBottom: "50px",
            }}
          >
            <HomeIcon style={{ marginRight: "10px" }} /> House No. 134, Street
            No. 2A, Phase 5A, Ghori Town, Islamabad, Pakistan
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 400,
              display: "flex",

              // alignItems: "center",
              // // justifyContent: "center",
              // textShadow: "3px 4px 4px #000000;",
              color: "white",
              //   paddingLeft: "20px",
              fontFamily: "unset",
              fontStretch: "ultra-expanded",
              marginTop: "30px",
              //   marginBottom: "50px",
            }}
          >
            <Phone style={{ marginRight: "10px" }} /> +92 301 5796078
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 400,
              display: "flex",

              // alignItems: "center",
              // // justifyContent: "center",
              // textShadow: "3px 4px 4px #000000;",
              color: "white",
              //   paddingLeft: "20px",
              fontFamily: "unset",
              fontStretch: "ultra-expanded",
              marginTop: "30px",
              //   marginBottom: "50px",
            }}
          >
            <Email style={{ marginRight: "10px" }} /> princeshehryar6@gmail.com
          </Typography>
          <Facebook
            sx={{
              color: "white",
              marginTop: "70px",
              marginRight: "10px",
              //   fontSize: "large",
            }}
            fontSize="large"
          />
          <Instagram
            sx={{ color: "white", marginTop: "70px" }}
            fontSize="large"
          />
        </Box>
      </div>
      <div
        style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          position: "absolute",
          top: "400px",
          //   paddingLeft: "100px",
          zIndex: "900px",
          backgroundColor: "white",
          marginLeft: "100px",
          borderColor: "#cfd0d1",
          borderWidth: "2px",
          borderRadius: "10px",
          borderRightWidth: "0px",
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "0px",
          //   marginBottom: "300px",
        }}
      >
        <Box
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "30px",
            // borderColor: "#cfd0d1",
            // borderWidth: "3px",
            // borderRadius: "5px",
            //   borderStyle: "groove",
          }}
          sx={{ width: "900px" }}
        >
          <Typography
            sx={{
              fontSize: 21,
              fontWeight: 400,
              display: "flex",

              // alignItems: "center",
              // // justifyContent: "center",
              // textShadow: "3px 4px 4px #000000;",
              color: "black",
              //   paddingLeft: "20px",
              fontFamily: "revert",
              fontStretch: "ultra-expanded",
            }}
          >
            SEND US A MESSAGE
          </Typography>
          <Form></Form>
        </Box>
      </div>

      <div
        style={{
          height: "380px",
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 10,
            marginBottom: "3px",
            // zIndex: "900px",

            // position: "absolute",
            // bottom: "0px",
            // left: "610px",
          }}
        >
          &copy; 2022 Ahmed Reacts All Rights Reserved | Terms and Conditions
        </Typography>
      </div>
    </>
  );
}

export default Contact;
