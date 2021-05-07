import React from "react";
import TitleSection from "./TitleSection";
import ButtonComponent from "./ButtonComponent";
import ListComponent from "./ListComponent";
import uniqid from "uniqid"
import FormComponent from "./FormComponent";

class EducationalXp extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Education info",
      showForm: false,
      informations: [
        {
          title: "Nestle",
          dateStart: "2018",
          dateEnd: "2021",
          description: "this is a very cool",
          checked: false,
          key: uniqid()
        },
        {
          title: "Legartis",
          dateStart: "2014",
          dateEnd: "2020",
          description: "this is a mega cool",
          checked: false,
          key: uniqid()
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this)
    this.remove = this.remove.bind(this)
    this.handleShowForm = this.handleShowForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleShowForm() {
    this.setState({ showForm: true });
  }

  handleSubmit(e) {
    const newItem = {
      title: e.target[0].value ,
      dateStart: e.target[1].value,
      dateEnd: e.target[2].value,
      description: e.target[3].value,
      checked: false,
      key: uniqid(),
    }
    this.setState(
      {
        title: "Practical info",
        showForm: false,
        informations: this.state.informations.concat(newItem)
      }
  )
}

  render() {
    let form;
    if (this.state.showForm) {
      form = <FormComponent onSubmit={this.handleSubmit}/>;
    }
    return (
      <div>
        <TitleSection title={this.state.title} />
        <ListComponent  item={this.state.informations}
          handleChange={this.handleChange} />
          {form}
        <ButtonComponent remove={this.remove}
        add={this.handleShowForm}
        />
      </div>
    );
  }
}

export default EducationalXp;
