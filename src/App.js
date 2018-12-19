import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header class="container">
          <h1 class="col-lg-4">Samantha Coe</h1>
        </header>

        <div class="row">
          <h3 class="col-lg-3">info</h3>
          <h3 class="col-sm-6">Hello</h3>
        </div>

        <div class="container">
          <h3 class="col-lg-3">projects</h3>
          <h3 class="col-sm-6">ksd</h3>
        </div>
      
        <footer class="container">
          <div class="row">
            <p class="col-sm-4">&copy; Samantha Coe</p>
            <ul class="col-sm-8">
                <li class="col-sm-1">
                  <a href="mailto:coe6@purdue.edu" target="_blank">
                    <img src="assets/email.png"/>
                  </a>
                </li>
                <li class="col-sm-1">
                  <a href="https://github.com/coe6" target="_blank">
                    <img src="assets/github.png"/>
                  </a>
                </li>
                <li class="col-sm-1">
                  <a href="https://www.linkedin.com/in/samantha-coe/" target="_blank">
                    <img src="assets/linkedin.png"/>
                  </a>
                </li>
                <li class="col-sm-1">
                  <a href="/SamCoe_resume.pdf" target="_blank">
                    <img src="assets/document.png"/>
                  </a>
                </li>
              </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
