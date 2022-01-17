import React, { Component } from "react";

export default class Task extends Component {
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
            <span className="created">{time}</span>
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
