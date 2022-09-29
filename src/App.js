import logo from "./logo.svg";
import "./App.css";
import SummaryPage from "./pages/SummaryPage/SummaryPage";

function App() {
  return (
    <div className="App">
      <SummaryPage />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
