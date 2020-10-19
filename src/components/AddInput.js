import React from "react";

class AddInput extends React.Component {
  state = { term: "" };

  onAddClick = () => {
    this.props.onAddName(this.state.term);
  };

  render() {
    return (
      <div className="ui action input">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => this.setState({ term: e.target.value })}
        />
        <button className="ui button" onClick={this.onAddClick}>
          Add
        </button>
      </div>
    );
  }
}

export default AddInput;
