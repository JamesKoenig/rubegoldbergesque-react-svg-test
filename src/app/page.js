import Image from 'next/image'
import styles from './page.module.css'
import WireFrame from './svg/wireframe.jsx';

export default function Home() {
  return (
    <main className={styles.main}>
      <WireFrame />
    </main>
  )
}
