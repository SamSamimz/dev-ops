import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <div className="app-shell">
        <div className="color-noise" />
        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />

        <main className="hero container">
          <div className="badge">
            <span className="badge-dot" />
            Pipeline Playground
          </div>

          <h1 className="title">
            Lets have some fun with <span className="accent">CI/CD</span>
          </h1>

          <p className="subtitle">
            Fast, reliable, and colorful delivery. Build, test, and ship with
            confidence while the pipeline dances.
          </p>

          <div className="cta-row">
            <button className="btn-primary-neo">Launch Flow</button>
            <button className="btn-ghost">View Stages</button>
          </div>

          <div className="status-bar">
            <span className="status-label">Live Status</span>
            <div className="bars">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <span className="status-pill">All systems go</span>
          </div>

          <div className="cards">
            <div className="card glass">
              <h3>Build</h3>
              <p>Compile fast with smart caching and clear signals.</p>
            </div>
            <div className="card glass">
              <h3>Test</h3>
              <p>Run suites in parallel with animated confidence.</p>
            </div>
            <div className="card glass">
              <h3>Deploy</h3>
              <p>Ship smoothly with rollout waves and instant feedback.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
