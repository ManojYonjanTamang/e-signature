import React, { useState } from "react";
import Title from "./Title";

const EsignatureApp = () => {
  const [name, setName] = useState("Your Signature");
  const [date, setDate] = useState("DoB");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px solid",
    outline: "none",
    padding: ".35rem 0",
  };

  document.body.style.background = "#eee";

  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title classes={"subtitle mb-4"} text={date} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iure
        laborum corporis architecto earum laudantium cupiditate quaerat commodi
        voluptatibus beatae praesentium velit accusantium, vero rerum. Natus
        minima laudantium quae! Architecto?
      </p>
      <div
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "20vh",
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleChangeDate}
        />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleChangeName}
        />
      </div>
    </div>
  );
};

export default EsignatureApp;
