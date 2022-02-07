import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ addTask }) => {
  const [state, changeState] = useState({
    value: '',
    min: '',
    sec: '',
  });

  const onSubmit = (event) => {
    const { value, min, sec } = state;
    event.preventDefault();
    if (value.trim()) {
      addTask(value, min, sec);
    }
    changeState({ value: '', min: '', sec: '' });
  };

  const onInputTextChange = (event) => {
    changeState((prev) => ({ ...prev, value: event.target.value }));
  };

  const onInputMinChange = (event) => {
    changeState((prev) => ({ ...prev, min: event.target.value }));
    if (event.target.value > 9999) {
      changeState((prev) => ({ ...prev, min: '9999' }));
    }
    if (event.target.value < 0) {
      changeState((prev) => ({ ...prev, min: '' }));
    }
  };

  const onInputSecChange = (event) => {
    changeState((prev) => ({ ...prev, sec: event.target.value }));
    if (event.target.value > 59) {
      changeState((prev) => ({ ...prev, sec: '59' }));
    }
    if (event.target.value < 0) {
      changeState((prev) => ({ ...prev, sec: '' }));
    }
  };

  const { value, min, sec } = state;
  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form" onSubmit={onSubmit}>
        <label style={{ display: 'contents' }}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={onInputTextChange}
            value={value}
            required
          />
        </label>
        <label style={{ display: 'contents' }}>
          <input
            type="number"
            className="new-todo-form__timer"
            placeholder="Min"
            min="0"
            max="9999"
            onChange={onInputMinChange}
            value={min}
            required
          />
        </label>
        <label style={{ display: 'contents' }}>
          <input
            type="number"
            className="new-todo-form__timer"
            placeholder="Sec"
            min="0"
            max="59"
            onChange={onInputSecChange}
            value={sec}
            required
          />
        </label>
        <button type="submit" aria-label="btn" className="hidden" />
      </form>
    </header>
  );
};
export default Header;

Header.propTypes = {
  addTask: PropTypes.func.isRequired,
};
