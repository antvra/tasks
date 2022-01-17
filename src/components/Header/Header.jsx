import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
  };

  state = {
    value: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.value);
    this.setState({ value: "" });
  };

  onInputChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <form className="header" onSubmit={this.onSubmit}>
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onInputChange}
          value={this.state.value}
        />
      </form>
    );
  }
}
