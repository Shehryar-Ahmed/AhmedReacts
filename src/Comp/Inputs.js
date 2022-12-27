import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Person from "@mui/icons-material/Person";
import "../App.css";
import AlternateEmail from "@mui/icons-material/AlternateEmail";
import VpnKey from "@mui/icons-material/VpnKey";
import Ehh from "../contexts/createCont";

export default function InputWithIcon() {
  let context = React.useContext(Ehh);
  let {
    fName,
    setfName,
    email,
    setEmail,
    setPass,
    setcPass,
    pass,
    cPass,
    formRef,
  } = context;

  return (
    <form ref={formRef}>
      <FormControl variant="standard">
        <Box sx={{ backgroundColor: "#3b6a8f", marginTop: "30px" }}>
          <Input
            sx={{
              height: "47px",
              width: "350px",
              color: "#d7d9db",
            }}
            type="text"
            value={fName}
            onChange={(e) => {
              setfName(e.target.value);
              // fName === ""
              //   ? setfNameErr(true) && setErrMsg()
              //   : setfNameErr(false);
            }}
            onFocus={() => fName === "Full Name" && setfName("")}
            onBlur={() => fName === "" && setfName("Full Name")}
            required={true}
            minLength={4}
            // error={fNameErr}
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
                  <Person sx={{ color: "white", fontSize: "40px" }} />
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
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onFocus={() => email === "Email" && setEmail("")}
            onBlur={() => email === "" && setEmail("Email")}
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
            type={pass === "Password" ? "text" : "password"}
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            onFocus={() => pass === "Password" && setPass("")}
            onBlur={() => pass === "" && setPass("Password")}
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
        <Box
          sx={{
            backgroundColor: "#3b6a8f",
            marginTop: "15px",
            marginBottom: "30px",
          }}
        >
          <Input
            sx={{
              height: "47px",
              width: "350px",
              color: "#d7d9db",
            }}
            type={cPass === "Confirm Password" ? "text" : "password"}
            value={cPass}
            onChange={(e) => {
              setcPass(e.target.value);
            }}
            onFocus={() => cPass === "Confirm Password" && setcPass("")}
            onBlur={() => cPass === "" && setcPass("Confirm Password")}
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
