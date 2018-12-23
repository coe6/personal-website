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

        <div id="hLINKS" class="col-lg-12">
          <ul id="hLINKS" class="col-sm-8">
            <li id="hLINKS" class="col-sm-1">
              <a href="mailto:coe6@purdue.edu">
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
        

        <div class="container">
          <h4 id="label" class="col-lg-3">info</h4>
        </div>
        <div class="container">
          <h5 id="description" class="col-sm-6">Hello! I am a sophomore at Purdue University studying Computer Science with a minor in French.
            I have an interest in full-stack development but I have a natural curiousity for learning anything new! Please do not
            hesitate to contact me!
          </h5>
        </div>

        <div class="container">
          <h4 id="label" class="col-lg-3">projects</h4>

          <div class="container">
            <h5 id="description" class="col-sm-6"> <a href="https://github.com/coe6/spark-app/tree/master" target="_blank">SPARK!</a> is an iOS app designed to test the user's ability to memorize a sequence of colors.
            The game will display a sequence of colors and it is up to the user to recreate this pattern in order to continue to the next level. With each progressing level,
            the game will build upon the previous pattern.
            </h5>
            <img class="projects" src="https://media.giphy.com/media/iO7HX7uu2totLccFfx/giphy.gif"/>

            <h5 id="description" class="col-sm-12"><a href="https://github.com/coe6/Pic-a-Puppy-GUS-" target="_blank">Pic-A-Puppy</a> is an iOS app solely created for the purpose of displaying photos of my dog, Gus.
            The user is able to heart their favorite images and later view them in a separate album. The app will display the images in a random order every time the full photo album is opened.
            </h5>
            <img class="projects" src="https://media.giphy.com/media/2WdEk8ApcKohbl5pnS/giphy.gif"/>
          </div>

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
