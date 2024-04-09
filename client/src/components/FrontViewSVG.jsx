import { useSelector } from "react-redux";
import { useRef } from 'react';
const FrontViewSVG = () => {
    const svgRefFront = useRef(null);
    const frontviewpoints = useSelector((state) => state.trouser.frontviewpoints);
    const pairs = [
    [10, 6],
    [6,9],
    [9, 15],
    [15, 14],
    [14, 3],
    [3, 12],
    [12, 13],
    [13, 8],
    [8, 11],
    [11, 10],
    [30,30],
    [32,32],
    [33,33],
  ];
const generateFrontview = () => {
    const lines = [];
    for (let i = 0; i < pairs.length; i++) {
      const [u, v] = pairs[i];
      const point1 = frontviewpoints[u];
      const point2 = frontviewpoints[v];

      if (u===6 && v===9) {
        const { x: x1, y: y1 } = point1;
        const { x: x2, y: y2 } = point2;
        const d = `M${x1} ${y1} A9 6, 0, 0 0, ${x2} ${y2}`;
        lines.push(
          <path d={d} stroke="Black" strokeWidth="0.505" fill="none" strokeDasharray="4,1"/> 
        );
      }else if(u===8 && v===11){
        const { x: x1, y: y1 } = point1;
        const { x: x2, y: y2 } = point2;
        const d = `M${x1} ${y1} A24 48, 0, 0 1, ${x2} ${y2}`;
        lines.push(
          <path d={d} stroke="Black" strokeWidth="0.505" fill="none" strokeDasharray="4,1"/> 
        );
      }else if(u===9 && v===15){
        const { x: x1, y: y1 } = point1;
        const { x: x2, y: y2 } = point2;
        const d = `M${x1} ${y1} A60 55, 0, 0 0, ${x2} ${y2}`;
        lines.push(
          <path d={d} stroke="Black" strokeWidth="0.505" fill="none" strokeDasharray="4,1"/> 
        );
      }else if(u===30 && v===30){
        const { x: x1, y: y1 } = point1;
        const { x: x2, y: y2 } = point2;
        console.log(x2, y2);
        // const size = 1.5;

        const pointStyle = {
          fill: 'darkred', 
        };
        lines.push(
              <circle cx={x1} cy={y1} r={0.6} style={pointStyle}/>
        )
      }else if(u===32 && v===32){
        const { x: x1, y: y1 } = point1;
        const { x: x2, y: y2 } = point2;
        console.log(x2, y2);
        // const size = 1.5;

        const pointStyle = {
          fill: 'darkred', 
        };
        lines.push(
              <circle cx={x1} cy={y1} r={0.6} style={pointStyle}/>
        )
      }else if(u===33 && v===33){
        const { x: x1, y: y1 } = point1;
        const { x: x2, y: y2 } = point2;
        console.log(x2, y2);
        // const size = 1.5;

        const pointStyle = {
          fill: 'darkred', 
        };
        lines.push(
              <circle cx={x1} cy={y1} r={0.6} style={pointStyle}/>
        )
      }
      else{
        const { x: x1, y: y1 } = point1;
        const { x: x2, y: y2 } = point2;
        lines.push(
            <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="black"
            strokeWidth="0.503"
            fill="none"
            strokeDasharray="4,1"
          />
          );
      }
    }
    return lines;
  };
  return (
    <svg ref={svgRefFront} width="800" height="1000" viewBox="-0 -115 130 240.0034" baseProfile="full" xmlns="http://www.w3.org/2000/svg" transform="scale(1, -1)">
        {generateFrontview()}
    </svg>
  )
}

export default FrontViewSVG;