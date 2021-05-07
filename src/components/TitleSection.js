import React from "react";

function TitleSection(props) {
  return (
    <div className="section-wrapper" style={{ justifyContent: "center" }}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default TitleSection;
