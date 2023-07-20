import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <header className={scrollPosition > 0 ? "sticky" : ""}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/section1">Section 1</Link>
              </li>
              <li>
                <Link to="/section2">Section 2</Link>
              </li>
              <li>
                <Link to="/section3">Section 3</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/section1" component={Section1} />
          <Route path="/section2" component={Section2} />
          <Route path="/section3" component={Section3} />
        </main>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="section">
      <h1>Home</h1>
      <p>Welcome to the homepage</p>
    </div>
  );
};

const Section1 = () => {
  return (
    <div className="section">
      <h1>Section 1</h1>
      <p>This is Section 1 content.</p>
      <h2>Subheader 1</h2>
      <p>Subheader 1 content goes here.</p>
      <h2>Subheader 2</h2>
      <p>Subheader 2 content goes here.</p>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="section">
      <h1>Section 2</h1>
      <p>This is Section 2 content.</p>
      <h2>Subheader 1</h2>
      <p>Subheader 1 content goes here.</p>
      <h2>Subheader 2</h2>
      <p>Subheader 2 content goes here.</p>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="section">
      <h1>Section 3</h1>
      <p>This is Section 3 content.</p>
      <h2>Subheader 1</h2>
      <p>Subheader 1 content goes here.</p>
      <h2>Subheader 2</h2>
      <p>Subheader 2 content goes here.</p>
    </div>
  );
};

export default App;