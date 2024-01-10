import styles from './wireframe.module.css';
import WireFrameLines from './wireframe-lines.jsx';

const WireFrame = () => (
  <svg className={styles.svg} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' preserveAspectRatio='none'>
    <g strokeWidth='2px' stroke='gray'>
      <WireFrameLines p1={[0,0]} p2={[1,1]} />
    </g>
  </svg>
)

export default WireFrame;
