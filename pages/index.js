import Head from 'next/head'
import CheckBox from "../components/CheckBox";
import styles from '../styles/Home.module.css';
import CHECKLIST from "../components/Checklist.json";
import { useState, useEffect } from 'react';
import Navigation from "../components/Navigation";

export default function Home() {
  const [checklists, setChecklists] = useState(CHECKLIST);

  localStorage.setItem("lists", encodeURI(JSON.stringify(checklists)))

  useEffect(() => {
    setChecklists(
      JSON.parse(decodeURIComponent(localStorage.getItem("lists")))
    )
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Website Pre &amp; Post launch checklist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Website Pre &amp; Post launch checklist
        </h1>

        {checklists.map((checklist, checklistIndex) => (
          <section className={styles.section} key={checklist.title}>
            <h2>{ checklist.title }</h2>
            {checklist.lists.map((list, index) => (
              <CheckBox
                checklistIndex={checklistIndex}
                index={index}
                checklists={checklists}
                key={checklist.title + index}
                title={list.title}
                status={list.checked} />
            ))}
          </section>
        ))}

        <p className={styles.end}>Site launch 😊</p>
      </main>
    </div>
  )
}
