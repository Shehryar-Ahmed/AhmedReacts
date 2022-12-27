import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import "../App.css";
import AlternateEmail from "@mui/icons-material/AlternateEmail";
import VpnKey from "@mui/icons-material/VpnKey";
import Ehh from "../contexts/createCont";
import { useEffect } from "react";

export default function InputLogin() {
  let context = React.useContext(Ehh);
  let { emailLogin, setEmailLogin, setPassLogin, passLogin, formRef } = context;
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    const pass = JSON.parse(localStorage.getItem("pass"));
    if (email) {
      setEmailLogin(email);
      setPassLogin(pass);
    }
  });

  return (
    <form ref={formRef}>
      <FormControl variant="standard">
        <Box sx={{ backgroundColor: "#3b6a8f", marginTop: "15px" }}>
          <Input
            sx={{
              height: "47px",
              width: "350px",
              color: "#d7d9db",
            }}
            type="email"
            value={emailLogin}
            onChange={(e) => {
              setEmailLogin(e.target.value);
            }}
            onFocus={() => emailLogin === "Email" && setEmailLogin("")}
            onBlur={() => emailLogin === "" && setEmailLogin("Email")}
            required
            startAdornment={
              <InputAdornment position="start">
                <Box
                  sx={{
                    backgroundColor: "#02234f",

                    height: "47px",
                    width: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    zIndex: "900px",
                  }}
                >
                  <AlternateEmail sx={{ color: "white", fontSize: "30px" }} />
                </Box>
              </InputAdornment>
            }
          />
        </Box>
        <Box sx={{ backgroundColor: "#3b6a8f", marginTop: "15px" }}>
          <Input
            sx={{
              height: "47px",
              width: "350px",
              color: "#d7d9db",
            }}
            type={passLogin === "Password" ? "text" : "password"}
            value={passLogin}
            onChange={(e) => {
              setPassLogin(e.target.value);
            }}
            onFocus={() => passLogin === "Password" && setPassLogin("")}
            onBlur={() => passLogin === "" && setPassLogin("Password")}
            required
            minLength={5}
            startAdornment={
              <InputAdornment position="start">
                <Box
                  sx={{
                    backgroundColor: "#02234f",

                    height: "47px",
                    width: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    zIndex: "900px",
                  }}
                >
                  <VpnKey sx={{ color: "white", fontSize: "30px" }} />
                </Box>
              </InputAdornment>
            }
          />
        </Box>
      </FormControl>
    </form>
  );
}
