import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

const Task = ({ id, description, time, deleteTask, onToggleCompleted, onEditing, editing, active, editTask }) => {
  const onInputChange = (event) => {
    if (event.keyCode === 13) {
      const description = event.target.value;
      if (description.trim()) {
        editTask(id, description);
      }
      onEditing(id);
    } else if (event.keyCode === 27) {
      onEditing(id);
    }
  };

  const date = formatDistanceToNow(time, {
    includeSeconds: true,
  });

  let classNames = '';

  if (!active) {
    classNames += ' completed';
  }
  if (active) {
    classNames += ' active';
  }
  if (editing) {
    classNames += ' editing';
  }
  return (
    <li className={classNames}>
      <div className="view">
        <input id={id} checked={!active} className="toggle" type="checkbox" onChange={() => onToggleCompleted(id)} />
        <label htmlFor={id}>
          <span className="description">{description}</span>
          <span className="created">{date}</span>
        </label>
        <button aria-label="edit btn" type="button" className="icon icon-edit" onClick={() => onEditing(id)} />
        <button aria-label="delete btn" type="button" className="icon icon-destroy" onClick={() => deleteTask(id)} />
      </div>
      {editing && (
        <label style={{ padding: 0 }}>
          <input type="text" className="edit" defaultValue={description} onKeyDown={onInputChange} />
        </label>
      )}
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  deleteTask: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onEditing: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default Task;
