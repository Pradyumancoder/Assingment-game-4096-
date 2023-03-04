// Import React and the styled components for this component
import React from "react";
import * as Style from "./Style";

// Define the Header component, which displays the score, game status, and a "New Game" button
const Header = ({ gameStatus, score, initialTiles }) => {
  return (
    // Container that holds the score, game status, and button
    <Style.Container>
      {/* Container for displaying the score */}
      <Style.ScoreContainer>
        <Style.ScoreTitle>Score</Style.ScoreTitle>
        <Style.ScoreContent>{score}</Style.ScoreContent>
      </Style.ScoreContainer>

      {/* Container for displaying the game status */}
      <Style.GameStatusContainer>
        <Style.GameStatusTitle>Game Status</Style.GameStatusTitle>
        <Style.GameStatusContent>{gameStatus}</Style.GameStatusContent>
      </Style.GameStatusContainer>

      {/* Button that starts a new game when clicked */}
      <Style.RestartBtn onClick={initialTiles}>New Game</Style.RestartBtn>
    </Style.Container>
  );
};

// Export the Header component as the default export of this module
export default React.memo(Header);
