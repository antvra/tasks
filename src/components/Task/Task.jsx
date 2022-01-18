import React, { Component } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import PropTypes from "prop-types";

export default class Task extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    deleteTask: PropTypes.func.isRequired,
    onToggleCompleted: PropTypes.func.isRequired,
    onEditing: PropTypes.func.isRequired,
    editing: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
  };
  render() {
    const {
      id,
      description,
      time,
      deleteTask,
      onToggleCompleted,
      onEditing,
      editing,
      active,
    } = this.props;

    let date = formatDistanceToNow(time, {
      includeSeconds: true,
    });

    let classNames = "";

    if (!active) {
      classNames += " completed";
    }
    if (active) {
      classNames += " active";
    }
    if (editing) {
      classNames += " editing";
    }
    return (
      <li className={classNames}>
        <div className="view">
          <input
            checked={!active}
            className="toggle"
            type="checkbox"
            onChange={() => onToggleCompleted(id)}
          />
          <label>
            <span className="description">{description}</span>
            <span className="created">{date}</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={() => onEditing(id)}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={() => deleteTask(id)}
          ></button>
        </div>
        {editing && (
          <input
            type="text"
            className="edit"
            defaultValue="Editing task"
          ></input>
        )}
      </li>
    );
  }
}
