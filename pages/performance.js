import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Navigation from "../components/Navigation";
import PERFORMANCE_LIST from "../components/performance_list.json";

export default function Performance() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Website Pre &amp; Post launch checklist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Web Performance
        </h1>

        {PERFORMANCE_LIST.map((list, index) => (
          <div key={index} style={{ marginBottom: '5px' }}>
            { list }
          </div>
        ))}
      </main>
    </div>
  )
}