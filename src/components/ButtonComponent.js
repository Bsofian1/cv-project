import React from "react";
import Button from "@material-ui/core/Button";

function ButtonComponent(props) {
  return (
    <div
      className="btn-wrapper"
      style={{
        maxWidth: 300,
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
      }}
    >
      <Button variant="contained" color="primary" onClick={() => props.add()}>
        ADD
      </Button>
      <Button variant="contained" color="secondary" onClick={() => props.remove()}>
        Delete
      </Button>
    </div>
  );
}

export default ButtonComponent;
