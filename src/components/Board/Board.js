import React from "react"; // Importing the React library
import Grid from "./Grid"; // Importing the Grid component from "./Grid"
import * as Style from "./Style"; // Importing all exports from "./Style" as the "Style" object

const Board = ({ tiles }) => {
  // Defining a functional component called "Board" that takes in a "tiles" prop
  const tileArr = tiles // Creating a new array called "tileArr"
    .concatAll() // Flattening the nested "tiles" array using the "concatAll" method
    .filter((tileData) => Boolean(tileData.value)) // Filtering out any "tileData" objects with falsy "value" properties
    .sort((a, b) => a.createTime - b.createTime); // Sorting the remaining "tileData" objects by their "createTime" property

  // Returning a JSX expression
  return (
    //  Rendering the "Style.Container" component
    <Style.Container>
      {/* Rendering the "Grid" component */}
      <Grid />
      {/* Mapping the "tileArr" to an array of "Style.Tile" components */}
      {tileArr.map((tileData) => (
        <Style.Tile // Rendering a "Style.Tile" component
          className="tile"
          key={tileData.id}
          x={tileData.x}
          y={tileData.y}
        >
          <Style.TileInner // Rendering a "Style.TileInner" component
            value={tileData.value}
            isNew={tileData.isNew ? 1 : 0}
            isMerge={tileData.isMerge ? 1 : 0}
          >
            {/* Rendering the "value" property of the "tileData" object */}
            {tileData.value}
          </Style.TileInner>
        </Style.Tile>
      ))}
    </Style.Container>
  );
};

export default React.memo(Board); // Exporting the "Board" component as a memoized component using "React.memo"
