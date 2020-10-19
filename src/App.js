import React from "react";
import axios from "axios";
import AddInput from "./components/AddInput";
import Groups from "./components/Groups";

class App extends React.Component {
  state = {
    names: [],
  };

  componentDidMount() {
    axios.get("http://localhost:4000/employees/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          names: response.data.map((employee) => employee.name),
        });
      }
    });
  }

  onAddName = (name) => {
    // api call to db to post name from AddInput
    const newName = {
      name,
    };
    console.log(newName);
    axios
      .post("http://localhost:4000/employees/add", newName)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  render() {
    return (
      <div className="ui page containter">
        <AddInput onAddName={this.onAddName} />
        <br />
        <br />
        <br />
        <Groups names={this.state.names} />
      </div>
    );
  }
}

export default App;
