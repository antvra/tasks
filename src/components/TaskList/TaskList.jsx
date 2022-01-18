import React, { Component } from "react";
import PropTypes from "prop-types";
import Task from "../Task/Task";

export default class TaskList extends Component {
  static defaultProps = {
    tasks: [],
  };
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    deleteTask: PropTypes.func.isRequired,
    onToggleCompleted: PropTypes.func.isRequired,
    onEditing: PropTypes.func.isRequired,
  };
  render() {
    const { tasks, deleteTask, onToggleCompleted, onEditing } = this.props;
    return (
      <ul className="todo-list">
        {tasks.map((item) => (
          <Task
            {...item}
            key={item.id}
            deleteTask={(id) => deleteTask(id)}
            onToggleCompleted={(id) => onToggleCompleted(id)}
            onEditing={(id) => onEditing(id)}
          />
        ))}
      </ul>
    );
  }
}
