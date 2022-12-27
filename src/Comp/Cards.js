import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

function Cards(props) {
  let [more, setMore] = useState(false);

  const [style, animate] = useSpring(() => ({ height: "0px" }), []);

  const ref = useRef(null);

  useEffect(() => {
    animate({
      height: (more ? 600 : 200) + "px",
    });
  }, [animate, ref, more]);

  return (
    <div
      className="card"
      style={{
        width: "22rem",
        marginLeft: "50px",
        marginTop: "70px",
      }}
    >
      <img
        className="card-img-top"
        style={{ height: "14rem" }}
        src={props.source}
        alt="Card image cap"
      />
      <animated.div
        className="card-body"
        // style={{ maxHeight: more ? "" : "200px", overflow: "hidden" }}
        style={{ overflow: "hidden", ...style }}
        ref={ref}
      >
        <h2
          className="card-title"
          style={{ fontSize: 22, fontWeight: 600, marginBottom: "10px" }}
        >
          {props.title}
        </h2>
        <p className="card-text">
          {more ? props.text : props.text.slice(0, 150) + "...."}
        </p>
        {more ? (
          <button
            className="btn btn-primary card-img-btm"
            style={{ marginTop: "30px" }}
            onClick={() => setMore(false)}
            id="scroller"
          >
            Read Less
          </button>
        ) : (
          <button
            overflow="scroll"
            className="btn btn-primary my-2"
            onClick={() => {
              setMore(true);
              setTimeout(() => window.scrollTo(0, 200), 300);
            }}
          >
            Read More
          </button>
        )}
      </animated.div>
    </div>
  );
}

export default Cards;
