import React, { Component } from "react";

import Display from './Display';
import FormikForm from './Form';

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <FormikForm />
      </div>
    );
  }
}

export default App;
