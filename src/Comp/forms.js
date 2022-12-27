import React from "react";
import { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Send from "@mui/icons-material/Send";

function Form() {
  let [fName, setfName] = useState("");
  let [email, setEmail] = useState("");
  let [numb, setNumb] = useState("");
  let [msg, setMsg] = useState("");
  let [enter, setEnter] = useState(false);

  return (
    <form>
      <div className="form-group my-3">
        <label className="my-2" htmlFor="fullName">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Enter Full Name"
          value={fName}
          onChange={(e) => {
            setfName(e.target.value);
          }}
          required
          minLength={4}
          style={{ width: "400px", borderWidth: "2px" }}
        />
      </div>

      <div className="form-group my-3" style={{ paddingTop: "20px" }}>
        <label className="my-2" htmlFor="exampleInputEmail1">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          style={{ width: "400px", borderWidth: "2px" }}
        />
      </div>
      <div className="form-group my-3" style={{ paddingTop: "20px" }}>
        <label className="my-2" htmlFor="contact">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="contact"
          placeholder="Contact Number"
          value={numb}
          onChange={(e) => {
            const result = e.target.value.replace(/\D/g, "");
            setNumb(result);
          }}
          required
          style={{ width: "400px", borderWidth: "2px" }}
        />
      </div>
      <div
        className="my-2 form-group"
        style={{ position: "absolute", top: "68px", right: "30px" }}
      >
        <label className="my-2" htmlFor="exampleFormControlTextarea1">
          Your Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          required
          minLength={5}
          style={{
            width: "400px",
            borderWidth: "2px",
          }}
        ></textarea>
        <Fab
          color="primary"
          aria-label="add"
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: !enter ? "#3168e8" : "#01233d",
            marginLeft: "335px",
            marginTop: "55px",
          }}
          onMouseEnter={() => setEnter(true)}
          onMouseLeave={() => setEnter(false)}
          size="large"
        >
          <Send />
        </Fab>
      </div>
    </form>
  );
}

export default Form;
