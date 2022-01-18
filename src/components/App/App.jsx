import React, { Component } from 'react';
import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';

export default class App extends Component {
  maxId = 100;
  state = {
    tasks: [this.createTask('Completed task'), this.createTask('Editing task'), this.createTask('Active task')],
    filterProp: 'all',
  };

  changeFilter = (filterProp) => {
    this.setState({
      filterProp,
    });
  };

  createTask(text) {
    const date = Date.now();
    return {
      description: text,
      time: date,
      id: this.maxId++,
      editing: false,
      active: true,
    };
  }

  addTask = (text, date) => {
    const newItem = this.createTask(text, date);
    this.setState(({ tasks }) => {
      const newArr = [...tasks, newItem];
      return {
        tasks: newArr,
      };
    });
  };

  deleteTask = (id) => {
    this.setState(({ tasks }) => {
      const i = tasks.findIndex((el) => el.id === id);
      const newTasks = [...tasks.slice(0, i), ...tasks.slice(i + 1)];
      return {
        tasks: newTasks,
      };
    });
  };

  toggleProps(arr, id, propName) {
    const i = arr.findIndex((el) => el.id === id);
    const oldTask = arr[i];
    const newTask = { ...oldTask, [propName]: !oldTask[propName] };
    return [...arr.slice(0, i), newTask, ...arr.slice(i + 1)];
  }

  onToggleCompleted = (id) => {
    this.setState(({ tasks }) => {
      return {
        tasks: this.toggleProps(tasks, id, 'active'),
      };
    });
  };

  onEditing = (id) => {
    this.setState(({ tasks }) => {
      return {
        tasks: this.toggleProps(tasks, id, 'editing'),
      };
    });
  };

  render() {
    const { tasks, filterProp } = this.state;
    const filteredTasks =
      filterProp === 'all' ? tasks : tasks.filter((item) => (filterProp === 'completed' ? !item.active : item.active));
    const completedCount = tasks.filter((el) => !el.active).length;
    const leftCount = tasks.length - completedCount;
    return (
      <section className="todoapp">
        <Header addTask={this.addTask} />
        <section className="main">
          <TaskList
            tasks={filteredTasks}
            deleteTask={(id) => this.deleteTask(id)}
            onToggleCompleted={(id) => this.onToggleCompleted(id)}
            onEditing={(id) => this.onEditing(id)}
          />
          <Footer
            leftCount={leftCount}
            filterProp={filterProp}
            tasks={tasks}
            deleteTask={(id) => this.deleteTask(id)}
            changeFilter={(filterProp) => this.changeFilter(filterProp)}
          />
        </section>
      </section>
    );
  }
}
