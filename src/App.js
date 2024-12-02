import React from 'react';
import './App.css';
import Header from './component/header';
import Profile from './component/profile';
import Skills from './component/skills';
import Project from './component/project';
import Award from './component/award';
function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Skills />
      <Project />
      <Award />
    </div>
  );
}

export default App;
