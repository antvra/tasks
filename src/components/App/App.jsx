import React, { useState } from 'react';
import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

const App = () => {
  let maxId = 100;

  const createTask = (text, minutes, seconds) => {
    const date = Date.now();
    maxId += 1;
    return {
      description: text,
      time: date,
      id: maxId,
      editing: false,
      active: true,
      timer: minutes * 60 + +seconds,
    };
  };

  const [state, changeState] = useState({
    tasks: [
      createTask('Completed task', '0', '5'),
      createTask('Editing task', '12', '25'),
      createTask('Active task', '45', '21'),
    ],
    filterProp: 'all',
  });

  const changeFilter = (filterProp) => {
    changeState((prev) => ({
      ...prev,
      filterProp,
    }));
  };

  const addTask = (text, minutes, seconds) => {
    const newItem = createTask(text, minutes, seconds);
    changeState(({ tasks, filterProp }) => {
      const newArr = [...tasks, newItem];
      return {
        tasks: newArr,
        filterProp,
      };
    });
  };

  const deleteTask = (id) => {
    changeState(({ tasks, filterProp }) => {
      const i = tasks.findIndex((el) => el.id === id);
      const newTasks = [...tasks.slice(0, i), ...tasks.slice(i + 1)];
      return {
        tasks: newTasks,
        filterProp,
      };
    });
  };

  const toggleProps = (arr, id, propName) => {
    const i = arr.findIndex((el) => el.id === id);
    const oldTask = arr[i];
    const newTask = { ...oldTask, [propName]: !oldTask[propName] };
    return [...arr.slice(0, i), newTask, ...arr.slice(i + 1)];
  };

  const onToggleCompleted = (id) => {
    changeState((prev) => ({ ...prev, tasks: toggleProps(prev.tasks, id, 'active') }));
  };

  const onEditing = (id) => {
    changeState((prev) => ({ ...prev, tasks: toggleProps(prev.tasks, id, 'editing') }));
  };

  const editTask = (id, newDescription) => {
    const { tasks } = state;
    const i = tasks.findIndex((el) => el.id === id);
    const oldTask = tasks[i];
    const newTask = { ...oldTask, description: newDescription };
    const newTasks = [...tasks.slice(0, i), newTask, ...tasks.slice(i + 1)];
    changeState((prev) => ({ ...prev, tasks: newTasks }));
  };

  const { tasks, filterProp } = state;
  const filteredTasks =
    filterProp === 'all' ? tasks : tasks.filter((item) => (filterProp === 'completed' ? !item.active : item.active));
  const completedCount = tasks.filter((el) => !el.active).length;
  const leftCount = tasks.length - completedCount;
  return (
    <section className="todoapp">
      <Header addTask={addTask} />
      <section className="main">
        <TaskList
          tasks={filteredTasks}
          deleteTask={(id) => deleteTask(id)}
          onToggleCompleted={(id) => onToggleCompleted(id)}
          onEditing={(id) => onEditing(id)}
          editTask={(id, newDescription) => editTask(id, newDescription)}
        />
        <Footer
          leftCount={leftCount}
          filterProp={filterProp}
          tasks={tasks}
          deleteTask={(id) => deleteTask(id)}
          changeFilter={(filterProp) => changeFilter(filterProp)}
        />
      </section>
    </section>
  );
};

export default App;
