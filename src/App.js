import logo from './logo.svg';
import './App.css';
import Annie from './member_pages/annie';
import MyFunc from './member_pages/celeste';
import Oliver from './member_pages/oliver';

function App() {
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
      </header>
      <MyFunc/>
      <Annie/>
      <Oliver/>
    </div>
  );
}

export default App;
