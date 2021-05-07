import React from "react";
import uniqid from "uniqid";
import Checkbox from "@material-ui/core/Checkbox";
import ButtonComponent from "./ButtonComponent";

class ListInfoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      informations: [
        {
          title: "Name",
          info: "Sofian Bettayeb",
          key: uniqid(),
          checked: false,
        },
        {
          title: "Address",
          info: "sagerstrasse 19",
          key: uniqid(),
          checked: false,
        },
        {
          title: "Telephone",
          info: "07.87.76.65.54",
          key: uniqid(),
          checked: false,
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.remove = this.remove.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updateInformation = prevState.informations.map((information) => {
        if (information.key === id) {
          return {
            ...information,
            checked: !information.checked,
          };
        }
        return information;
      });
      return {
        informations: updateInformation,
      };
    });
  }
  remove() {
    this.setState({
      informations: this.state.informations.filter(
        (item) => item.checked === false
      ),
    });
  }


  render() {
    const info = this.state.informations.map((item) => {
      return (
        <div>
          <li
            style={{
              maxWidth: 300,
              display: "flex",
              justifyContent: "space-between",
              margin: "auto",
            }}
            className="hover-list"
          >
            <p>
              {item.title} : {item.info}
            </p>
            <div className="hover-list--on">
              <Checkbox
                onChange={() => this.handleChange(item.key)}
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
            </div>
          </li>
        </div>
      );
    });

  

    return (
      <div>
        {info}
        <ButtonComponent remove={this.remove} add={this.add} />
      </div>
    );
  }
}

export default ListInfoComponent;
