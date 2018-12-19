import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header class="container">
          <h1 class="col-lg-12">Samantha Coe</h1>
        </header>

        <div class="row">
          <h4 class="col-lg-3">info</h4>
          <h5 id="description" class="col-sm-6">Hello! I am a sophomore at Purdue University studying Computer Science with a minor in French.
            I have an interest in full-stack development but I have a natural curiousity for learning anything new! Please do not
            hesitate to contact me!
          </h5>
        </div>

        <div class="container">
          <h4 class="col-lg-3">projects</h4>
          <h5 id="description" class="col-sm-6"> <a href="https://github.com/coe6/spark-app/tree/master" target="_blank">SPARK!</a> is an iOS app designed to test the user's ability to memorize a sequence of colors.</h5>
          <img class="projects" src="assets/spark.png"/>

          <h5 id="description" class="col-sm-6"><a href="https://github.com/coe6/Pic-a-Puppy-GUS-" target="_blank">Pic-A-Puppy</a></h5>
          <img class="projects" src="assets/pic-a-puppy.png"/>

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
                  <a href="/assets/SamCoe_resume.pdf" target="_blank">
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
