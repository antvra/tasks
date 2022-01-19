import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter';

export default class Footer extends Component {
  static defaultProps = {
    leftCount: 0,
    filterProp: 'all',
  };

  static propTypes = {
    leftCount: PropTypes.number,
    filterProp: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteTask: PropTypes.func.isRequired,
    changeFilter: PropTypes.func.isRequired,
  };

  callDeleteForAll = () => {
    const { tasks, deleteTask } = this.props;
    const ids = tasks.filter((item) => !item.active).map((item) => item.id);
    ids.forEach((id) => deleteTask(id));
  };

  render() {
    const { leftCount, changeFilter, filterProp } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{leftCount} items left</span>
        <TasksFilter changeFilter={(filterProp) => changeFilter(filterProp)} filterProp={filterProp} />
        <button type="button" className="clear-completed" onClick={this.callDeleteForAll}>
          Clear completed
        </button>
      </footer>
    );
  }
}
