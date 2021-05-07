import React from "react";
import ButtonComponent from "./ButtonComponent";
import TitleSection from "./TitleSection";
import ListInfoComponent from "./ListInfoComponent";

class PersonalInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Personal Info",
    };
  }

  

  render() {
    return (
      <div>
        <TitleSection title={this.state.title} />
        <ListInfoComponent />
      </div>
    );
  }
}

export default PersonalInfo;
