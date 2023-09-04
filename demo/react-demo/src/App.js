/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Header from './header';
import Login from './Login';
import DecisionList from './decision/list';
import Landing from './decision/landing';
import DecisionDetail from './decision/detail';
import DecisionForm from './forms/decision';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.body}>
          <div className={styles.main_container}>
            <>
              <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/" element={<Landing />} />
                <Route path="(/login/slack/callback)" element={<Login />} />
                <Route path="(/login)" element={<Login />} />
                <Route path="/admin/decisions" element={<DecisionList />} />
                <Route path="/admin/decisions/new" element={<DecisionForm />} />
                <Route path="/admin/decisions/edit/:id" element={<DecisionForm />} />
                <Route path="/admin/decisions/:id" element={<DecisionDetail />} />
              </Routes>
            </>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
