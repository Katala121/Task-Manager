import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../../elements/header/index';
import TaskList from '../../elements/taskList/index';
import Home from '../../container/home/index';
import { Provider } from 'react-redux';
import store  from '../../core/redux/store'


function App() {
  return (
    <div className="app-container">
      <Header />
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/events" component={TaskList}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
