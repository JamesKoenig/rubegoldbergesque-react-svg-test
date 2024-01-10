import WireFrameLine from './wireframe-line.jsx';

const genRectPoints = (topLeft, bottomRight) => {
  const xs = [topLeft[0],bottomRight[0]];
  const ys = [topLeft[1],bottomRight[1]];

  let res = Array(4);

  for(let idx = 0; idx < 4; idx ++ ){
    res[idx] = [xs[idx&1],ys[(idx>>1)&1]];
  }

  return res;
};

const genLineParams = (rectPointsArr) => {
  const baseLen = rectPointsArr.length;
  let res = Array(6);
  let resIdx = 0;

  for(let idx = 0; idx < baseLen; idx++) {
    let [x1,y1] = rectPointsArr[idx];
    for(let jdx = idx+1; jdx < baseLen; jdx++) {
      let [x2,y2] = rectPointsArr[jdx];
      res[resIdx] = {x1,y1,x2,y2};
      resIdx++;
    }
  }

  return res;
};

const lineParamsFromDiagonal = (tL,bR) =>
  genLineParams(genRectPoints(tL,bR));

const WireFrameLines = ({p1,p2}) =>
  lineParamsFromDiagonal(p1,p2).map( (params,idx) => (
      <WireFrameLine {...params} key={`line-${idx}`} />
    )
  );


export default WireFrameLines;
