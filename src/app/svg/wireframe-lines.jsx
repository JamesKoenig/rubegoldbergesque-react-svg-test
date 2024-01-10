import styles from './wireframe.module.css';
import {lineParamsFromDiagonal} from '../../util/rectangle-combinatorics.js';

const WireFrameLines = ({p1,p2}) =>
  lineParamsFromDiagonal(p1,p2).map( (params,idx) => (
      <line
        className={styles.line}
        key={`line-${idx}`}
        { ...params }
      />
    )
  );


export default WireFrameLines;
