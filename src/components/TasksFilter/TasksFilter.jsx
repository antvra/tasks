import React from 'react';
import PropTypes from 'prop-types';

const TasksFilter = ({ changeFilter, filterProp }) => (
  <ul className="filters">
    <li>
      <button type="button" className={filterProp === 'all' ? 'selected' : null} onClick={() => changeFilter('all')}>
        All
      </button>
    </li>
    <li>
      <button
        type="button"
        className={filterProp === 'active' ? 'selected' : null}
        onClick={() => changeFilter('active')}
      >
        Active
      </button>
    </li>
    <li>
      <button
        type="button"
        className={filterProp === 'completed' ? 'selected' : null}
        onClick={() => changeFilter('completed')}
      >
        Completed
      </button>
    </li>
  </ul>
);

TasksFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filterProp: PropTypes.func.isRequired,
};

export default TasksFilter;
