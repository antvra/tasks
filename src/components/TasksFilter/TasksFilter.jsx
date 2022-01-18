import React, { Component } from 'react';

export default class TasksFilter extends Component {
  render() {
    const { changeFilter, filterProp } = this.props;
    return (
      <ul className="filters">
        <li>
          <button className={filterProp === 'all' ? 'selected' : null} onClick={() => changeFilter('all')}>
            All
          </button>
        </li>
        <li>
          <button className={filterProp === 'active' ? 'selected' : null} onClick={() => changeFilter('active')}>
            Active
          </button>
        </li>
        <li>
          <button className={filterProp === 'completed' ? 'selected' : null} onClick={() => changeFilter('completed')}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
