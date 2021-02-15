import logo from './logo.svg';
import './App.css';
import MyFunc from './member_pages/celeste';

function App() {
  // javascript
  // small sub functions
  // variables



  return (
    <div className="App">
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
        <celeste></celeste>
      </header>
    </div>
  );
}

export default App;
