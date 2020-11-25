import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CircleCollider, Vector2D } from './core/physics';
import { CircleMapItem } from './core/mapitems/circle';

function App() {
  new CircleCollider(Vector2D.ZERO, 1);
  new CircleMapItem(1,1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
