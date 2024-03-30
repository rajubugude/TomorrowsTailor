import { useSelector } from "react-redux";
import "../styles/style.css"

const Vectorimagecomponent = () => {
  const pairs = [
    [10, 6],
    [6, 9],
    [9, 15],
    [15, 14],
    [14, 3],
    [3, 12],
    [12, 13],
    [13, 8],
    [8, 11],
    [11, 10],
  ];
  const backpairs=[[21,0],[0,22],[22,25],[25,27],[27,26],[26,28],[28,29],[29,24],[24,19],[19,21]]
  const gridpairs=[[7,18],[18,17],[18,0],[0,22],[0,2],[2,25],[2,17],[17,6],[6,7],[17,16],[16,1],[1,2],[16,5],[5,23],[23,24],[24,29],[29,15],[15,4],[5,15],[4,1],[4,27],[4,3],[3,26],[3,28]]
  const calculatedPoints = useSelector(
    (state) => state.trouser.calculatedPoints
  );
  const frontviewpoints = useSelector((state) => state.trouser.frontviewpoints);
  const objlenForVector = useSelector((state) => state.trouser.objlenForVector);
  const backviewpoints = useSelector((state) => state.trouser.backviewpoints);
  const gridviewpoints = useSelector((state) => state.trouser.gridviewpoints);

  
  console.log("Calculated Points:", calculatedPoints);
  console.log("Front View Points:", frontviewpoints);
  console.log("Back View Points:", backviewpoints);
  console.log("Back View Points:", gridviewpoints);

  console.log("Object Length for Vector:", objlenForVector);

  const colors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "yellow",
  "cyan",
  "magenta",
  "pink",
  "teal",
  "gold",
  "silver",
  "brown",
  "black",
  "white",
  "gray",
  "olive",
  "navy",
  "maroon",
  "lime",
  ];

  const generateFrontview = () => {
    const lines = [];
    for (let i = 0; i < pairs.length; i++) {
      const [u, v] = pairs[i];
      const point1 = frontviewpoints[u];
      const point2 = frontviewpoints[v];

      const { x: x1, y: y1 } = point1;
      const { x: x2, y: y2 } = point2;


      const d = `M${x1} ${y1} C${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`;
      // Get color for this line from the colors array
      const color = colors[i % colors.length];

      // Push each line JSX element into the lines array with the assigned color
      lines.push(
        <path d={d} stroke={color} strokeWidth="2" fill="transparent"/>
      );
    }
    return lines;
  };

    const generateBackview = () => {
    const lines = [];
    for (let i = 0; i < backpairs.length; i++) {
      const [u, v] = backpairs[i];
      const point1 = backviewpoints[u];
      const point2 = backviewpoints[v];

      const { x: x1, y: y1 } = point1;
      const { x: x2, y: y2 } = point2;


      const d = `M${x1} ${y1} C${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`;
      // Get color for this line from the colors array
      const color = colors[i % colors.length];

      // Push each line JSX element into the lines array with the assigned color
      lines.push(
        <path d={d} stroke={color} strokeWidth="2" fill="transparent"/>
      );
    }
    return lines;
  };
    const generateGridview = () => {
    const lines = [];
    for (let i = 0; i < gridpairs.length; i++) {
      const [u, v] = gridpairs[i];
      const point1 = gridviewpoints[u];
      const point2 = gridviewpoints[v];

      const { x: x1, y: y1 } = point1;
      const { x: x2, y: y2 } = point2;


      const d = `M${x1} ${y1} C${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`;
      // Get color for this line from the colors array
      const color = colors[i % colors.length];

      // Push each line JSX element into the lines array with the assigned color
      lines.push(
      <path d={d} stroke={color} strokeWidth="2" fill="transparent"/>

      );
    }
    return lines;
  };

return (
  <>
    <h1>Hi vector!</h1>
    <div className="gridbox ">
      <div className="svg-container">
        <svg
          width="900"
          height="700"
          viewBox="-0 -180 200 200"
          transform="scale(1, -1)"
        >
          {generateFrontview()}
        </svg>
      </div>
      <div className="svg-container">
        <svg
          width="900"
          height="700"
          viewBox="0 -180 200 200"
          transform="scale(1, -1)"
        >
          {generateBackview()}
        </svg>
      </div>
      <div className="svg-container">
        <svg
          width="900"
          height="700"
          viewBox="-0 -180 200 200"
          transform="scale(1, -1)"
        >
          {generateGridview()}
        </svg>
      </div>
    </div>
  </>
);


};

export default Vectorimagecomponent;
