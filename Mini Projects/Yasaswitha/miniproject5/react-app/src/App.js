import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The basic React project.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Count the number of times the button is clicked! 
        </a>
      </header>
      <Timer></Timer>
    </div>
  );
}

export default App;
