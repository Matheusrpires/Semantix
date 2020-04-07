import React, { useState , useEffect} from 'react';
import Graph from '../Graph/graph'
import { fetchDataLine } from '../../api';

import styles from './page.module.css';

const Page2 = () => {

  const [lineToday, setLineToday] = useState([]);
  const [lineYesterday, setLineYesterday] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { today, yesterday } = await fetchDataLine();
      setLineToday(today);
      setLineYesterday(yesterday);
    }

    fetchData();
  }, [])

  return (
    <div className={styles.conteudo_container}>
      <p className={styles.conteudo_tittle}>Page 2</p>
      <div className={styles.graph_container}>
        <Graph type='line' today={lineToday} yesterday={lineYesterday}/>
      </div>
    </div>
  )
}

export default Page2;