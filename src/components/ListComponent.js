import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormComponent from "./FormComponent"

const ListComponent = (props) => {
 
  const eachItem = props.item.map((elem) => {
      const style= { display: "inline", padding: 2 }
    return (
      <div style={{display: "flex", maxWidth: 400,
      justifyContent: "space-between",margin: "auto",alignItems: "center"}} className="hover-list">
        <h4 style={style}>{elem.title}</h4>
        <p style={style}>{elem.dateStart}</p>
        <p style={style}>{elem.dateEnd}</p>
        <h4 style={style}>{elem.description}</h4>
        <div className="hover-list--on">
            <Checkbox 
            onChange={()=> props.handleChange(elem.key)}
            inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          </div>
      </div>
    );
  });
  return <div style={{ padding: 10 }}>{eachItem}
  
  </div>;
};

export default ListComponent;
