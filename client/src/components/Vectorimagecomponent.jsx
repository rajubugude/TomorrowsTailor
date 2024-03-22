import { useSelector } from "react-redux";

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
  const calculatedPoints = useSelector(
    (state) => state.trouser.calculatedPoints
  );
  const frontviewpoints = useSelector((state) => state.trouser.frontviewpoints);
  const objlenForVector = useSelector((state) => state.trouser.objlenForVector);
  console.log("Calculated Points:", calculatedPoints);
  console.log("Front View Points:", frontviewpoints);
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
  ];

  const generateFrontview = () => {
    const lines = [];
    for (let i = 0; i < pairs.length; i++) {
      const [u, v] = pairs[i];
      const point1 = frontviewpoints[u];
      const point2 = frontviewpoints[v];

      const { x: x1, y: y1 } = point1;
      const { x: x2, y: y2 } = point2;

      console.log(point1, point2);
      console.log(x1, y1, x2, y2);

      // Get color for this line from the colors array
      const color = colors[i % colors.length];

      // Push each line JSX element into the lines array with the assigned color
      lines.push(
        <line
          key={`${u}-${v}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={color}
          strokeWidth="2"
        />
      );
    }
    return lines;
  };

  return (
    <>
      <h1>Hi vector!</h1>
      <button onClick={generateFrontview} className="m-10">
        Click
      </button>
      <svg
        width="900"
        height="900"
        viewBox="-100 -200 200 200"
        transform="scale(1, -1)"
      >
        {generateFrontview()}
      </svg>
    </>
  );
};

export default Vectorimagecomponent;
