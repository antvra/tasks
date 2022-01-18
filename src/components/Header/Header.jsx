import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  onSubmit = (event) => {
    const { value } = this.state;
    const { addTask } = this.props;
    event.preventDefault();
    if (value) {
      addTask(value);
    }
    this.setState({ value: '' });
  };

  onInputChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <form className="header" onSubmit={this.onSubmit}>
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" onChange={this.onInputChange} value={value} />
      </form>
    );
  }
}
