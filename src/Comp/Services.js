import React from "react";
import { Typography } from "@mui/material";
import Cards from "./Cards";
import web from "./Web-Development-Concept-1.webp";
import app from "./apps.jpeg";
import soft from "./soft.jpeg";

function Services() {
  let services = [
    {
      title: "Web Development",
      source: web,
      text: "Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks. In a broader sense, web development encompasses all the actions, updates, and operations required to build, maintain and manage a website to ensure its performance, user experience, and speed are optimal.",
    },
    {
      title: "App Development",
      source: app,
      text: "Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources. Hence, the mobile development process involves creating installable software bundles (code, binaries, assets, etc.) , implementing backend services such as data access with an API, and testing the application on target devices.",
    },
    {
      title: "Software Development",
      source: soft,
      text: "Software development is the collective processes involved in creating software programs, embodying all the stages throughout the systems development life cycle. Based upon the market requirements,senior software developers create an architecture for the products alongwith functional and design specifications. Then the development processstarts. After the initial development phase, software testing begins, andmany times it is done in parallel with the development process. Documen-tation is also part of the development process because a product cannot bebrought to market without manuals. Once development and testing aredone, the software is released and the support cycle begins. This phasemay include bug fixes and new releases.",
    },
  ];

  return (
    <div>
      <div>
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textShadow: "3px 4px 4px #808080;",
            color: "#000000",
          }}
          fontFamily="unset"
        >
          OUR SERVICES
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "-100px",
        }}
      >
        {services.map((serve) => {
          return (
            <Cards
              text={serve.text}
              source={serve.source}
              title={serve.title}
            ></Cards>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
