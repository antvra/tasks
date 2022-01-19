import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const TaskList = ({ tasks, deleteTask, onToggleCompleted, onEditing, editTask }) => (
  <ul className="todo-list">
    {tasks.map((item) => (
      <Task
        {...item}
        key={item.id}
        deleteTask={(id) => deleteTask(id)}
        onToggleCompleted={(id) => onToggleCompleted(id)}
        onEditing={(id) => onEditing(id)}
        editTask={(id, newDescription) => editTask(id, newDescription)}
      />
    ))}
  </ul>
);

TaskList.defaultProps = {
  tasks: [],
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  deleteTask: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onEditing: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskList;
