import {lineParamsFromDiagonal} from '../../util/rectangle-combinatorics.js';

const WireFrameLines = ({p1,p2}) =>
  lineParamsFromDiagonal(p1,p2).map( (params,idx) => (
      <line {...params}
        key={`line-${idx}`}
        vectorEffect="non-scaling-stroke"
      />
    )
  );


export default WireFrameLines;
