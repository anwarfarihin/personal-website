import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <section className="current-navbar">
          <p className="logo">
            <span className="a-logo">a</span>f.
          </p>
          <p className="rotated">HOME</p>
        </section>
        <section className="main-navbar">
          <p>
            <a className="active" href="/">
              HOME
            </a>
          </p>
          <p>
            <a href="/">EXPERIENCES</a>
          </p>
          <p>
            <a href="/">PROJECTS</a>
          </p>
          <p>
            <a href="/">SKILL</a>
          </p>
          <p>
            <a href="/">RESUME</a>
          </p>
        </section>
      </div>

      <header className="home">
        <section className="home-left">
          <p className="anwar">ANWAR</p>
          <p className="farihin">Farihin</p>
        </section>
        <section className="home-right">
          <p className="desc">
            A third-year Computer Science student who is eager to learn and
            grow. Love portrait sketching, PC games, also jogging. Interested in
            having more experiences about Software Engineering, Machine
            Learning, and anything about Data.
          </p>
        </section>
      </header>

      <section className="section-title">Experiences</section>
      <section className="section-title">Projects</section>
      <section className="section-title">Skills</section>
      <section className="section-title">Resume</section>
    </div>
  );
}

export default App;
