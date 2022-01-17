import React, { Component } from "react";
import Task from "../Task/Task";

export default class TaskList extends Component {
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
