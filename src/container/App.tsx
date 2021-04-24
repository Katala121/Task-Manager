import React from 'react';
import './App.css';
import TaskItemList from '../elements/taskList/index';
import { Provider } from 'react-redux';
import store  from '../core/redux/store'


function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Task Manager</h1>
      </header>
      <Provider store={store}>
        <TaskItemList />
      </Provider>
    </div>
  );
}

export default App;
