import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
  };

  state = {
    value: '',
    min: '',
    sec: '',
  };

  onSubmit = (event) => {
    const { value, min, sec } = this.state;
    const { addTask } = this.props;
    event.preventDefault();
    if (value.trim()) {
      addTask(value, min, sec);
    }
    this.setState({ value: '', min: '', sec: '' });
  };

  onInputTextChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onInputMinChange = (event) => {
    this.setState({ min: event.target.value });
    if (event.target.value > 9999) {
      this.setState({ min: '9999' });
    }
    if (event.target.value < 0) {
      this.setState({ min: '' });
    }
  };

  onInputSecChange = (event) => {
    this.setState({ sec: event.target.value });
    if (event.target.value > 59) {
      this.setState({ sec: '59' });
    }
    if (event.target.value < 0) {
      this.setState({ sec: '' });
    }
  };

  render() {
    const { value, min, sec } = this.state;
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onInputTextChange}
            value={value}
            required
          />
          <input
            type="number"
            className="new-todo-form__timer"
            placeholder="Min"
            min="0"
            max="9999"
            onChange={this.onInputMinChange}
            value={min}
            required
          />
          <input
            type="number"
            className="new-todo-form__timer"
            placeholder="Sec"
            min="0"
            max="59"
            onChange={this.onInputSecChange}
            value={sec}
            required
          />
          <button type="submit" aria-label="btn" className="hidden" />
        </form>
      </header>
    );
  }
}
