import Ehh from "./createCont";
import { useRef, useState } from "react";

const OurConts = (props) => {
  let [fName, setfName] = useState("Full Name");
  let [email, setEmail] = useState("Email");
  let [pass, setPass] = useState("Password");
  let [errMsg, setErrMsg] = useState("");
  let [emailLogin, setEmailLogin] = useState("Email");
  let [passLogin, setPassLogin] = useState("Password");
  let [errMsgLogin, setErrMsgLogin] = useState("");
  let [cPass, setcPass] = useState("Confirm Password");
  let [fNameErr, setfNameErr] = useState(false);
  let [emailErr, setEmailErr] = useState(false);
  let [passErr, setPassErr] = useState(false);
  let [cPassErr, setcPassErr] = useState(false);
  let formRef = useRef(null);

  let ChngErrMsg = (msg) => {
    setErrMsg(msg);
  };
  let ChngErrMsgLogin = (msg) => {
    setErrMsgLogin(msg);
  };

  return (
    <Ehh.Provider
      value={{
        fName,
        setfName,
        email,
        setEmail,
        setPass,
        setcPass,
        pass,
        cPass,
        formRef,
        fNameErr,
        setfNameErr,
        emailErr,
        setEmailErr,
        setPassErr,
        setcPassErr,
        passErr,
        cPassErr,
        errMsg,
        setErrMsg,
        ChngErrMsg,
        emailLogin,
        passLogin,
        errMsgLogin,
        ChngErrMsgLogin,
        setEmailLogin,
        setPassLogin,
        setErrMsgLogin,
      }}
    >
      {props.children}
    </Ehh.Provider>
  );
};
export default OurConts;
