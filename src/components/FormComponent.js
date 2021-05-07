import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormComponent = (props) => {

    const size= { maxWidth: 100, padding: 5 }
    return (
      <form onSubmit={props.onSubmit} noValidate autoComplete="off">
        <TextField style={size} id="standard-basic" label="Company" name="company" />
        <TextField style={size} id="standard-basic" label="Start" name="start"  />
        <TextField style={size} id="standard-basic" label="Finish"  name="finish" />
        <TextField style={size} id="standard-basic" label="Comment"  name="comment" />
        <Button variant="contained" color="primary" type="submit" value="Submit">Submit</Button>
      </form>
    );

};

export default FormComponent;
