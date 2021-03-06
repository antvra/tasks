import React, { Component } from 'react';
import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

export default class App extends Component {
  maxId = 100;

  state = {
    tasks: [
      this.createTask('Completed task', '0', '5'),
      this.createTask('Editing task', '12', '25'),
      this.createTask('Active task', '45', '21'),
    ],
    filterProp: 'all',
  };

  changeFilter = (filterProp) => {
    this.setState({
      filterProp,
    });
  };

  addTask = (text, minutes, seconds) => {
    const newItem = this.createTask(text, minutes, seconds);
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

  onToggleCompleted = (id) => {
    this.setState(({ tasks }) => ({ tasks: this.toggleProps(tasks, id, 'active') }));
  };

  onEditing = (id) => {
    this.setState(({ tasks }) => ({ tasks: this.toggleProps(tasks, id, 'editing') }));
  };

  editTask = (id, newDescription) => {
    const { tasks } = this.state;
    const i = tasks.findIndex((el) => el.id === id);
    const oldTask = tasks[i];
    const newTask = { ...oldTask, description: newDescription };
    const newTasks = [...tasks.slice(0, i), newTask, ...tasks.slice(i + 1)];
    this.setState({ tasks: newTasks });
  };

  toggleProps(arr, id, propName) {
    const i = arr.findIndex((el) => el.id === id);
    const oldTask = arr[i];
    const newTask = { ...oldTask, [propName]: !oldTask[propName] };
    return [...arr.slice(0, i), newTask, ...arr.slice(i + 1)];
  }

  createTask(text, minutes, seconds) {
    const date = Date.now();
    this.maxId += 1;
    return {
      description: text,
      time: date,
      id: this.maxId,
      editing: false,
      active: true,
      timer: minutes * 60 + +seconds,
    };
  }

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
            editTask={(id, newDescription) => this.editTask(id, newDescription)}
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
