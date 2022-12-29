import React from "react";
import App from "./App";
import './App.css'

const TextboxList = ({ textboxes }) => {
  return (
    <div className="textbox-list">
      {textboxes.map((textbox, index) => (
        <div
          className="textbox"
          style={{
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            marginLeft: "1rem"
          }}
        >
          {textbox}
        </div>
      ))}
    </div>
  );
};

export default TextboxList;
