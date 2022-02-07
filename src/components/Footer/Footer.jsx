import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter';

const Footer = ({ tasks, deleteTask, leftCount, changeFilter, filterProp }) => {
  const callDeleteForAll = () => {
    const ids = tasks.filter((item) => !item.active).map((item) => item.id);
    ids.forEach((id) => deleteTask(id));
  };

  return (
    <footer className="footer">
      <span className="todo-count">{leftCount} items left</span>
      <TasksFilter changeFilter={(filterProp) => changeFilter(filterProp)} filterProp={filterProp} />
      <button type="button" className="clear-completed" onClick={callDeleteForAll}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  leftCount: 0,
  filterProp: 'all',
};

Footer.propTypes = {
  leftCount: PropTypes.number,
  filterProp: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTask: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Footer;
