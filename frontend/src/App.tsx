import React from 'react';
import './App.css';
import SliderPhoto from './components/features/SliderPhoto/SliderPhoto';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SliderPhoto />
      </header>
    </div>
  );
}

export default App;
