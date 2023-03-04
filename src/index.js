import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import Board from "./components/Board/Board";
import Header from "./components/Header/Header";
import useTiles from "./hooks/TileHook";
import "animate.css";
import "concatAll";

// Define global styles for the app
const GlobalStyle = createGlobalStyle`
  body {
    background : #faf8ef;
    font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
  }
`;

function App() {
  // Use the useTiles hook to get tiles, game status, score, and initialTiles function
  const { tiles, initialTiles, gameStatus, score } = useTiles();

  return (
    // Render the app components using the data from useTiles
    <div className="App">
      <GlobalStyle />
      <Header
        gameStatus={gameStatus}
        score={score}
        initialTiles={initialTiles}
      />
      <Board tiles={tiles} />
    </div>
  );
}

// Render the App component to the DOM
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
