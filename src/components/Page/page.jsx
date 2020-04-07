import React, { useState , useEffect} from 'react';
import Graph from '../Graph/graph'
import { fetchData, fetchDataPie } from '../../api';

import styles from './page.module.css';

const Page = (props) => {

  const [barData, setBar] = useState([]);
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    const fetchBar = async () => {
      setBar(await fetchData());

      // Filtrar quantidade de dados se necessário

      // let fetched = await fetchData();
      // fetched = fetched.slice(0,5)

      // setBar(fetched);
    }

    const fetchPie = async () => {
      setPieData(await fetchDataPie());

      // Filtrar quantidade de dados se necessário

      // let fetched = await fetchDataPie();
      // fetched = fetched.slice(0,5)

      // setPieData(fetched);
    }

    fetchPie();
    fetchBar();
  }, []);

  return (
    <div className={styles.conteudo_container}>
      <p className={styles.conteudo_tittle}>Page 1</p>
      <div className={styles.graph_container}>
        <Graph type='bar' data={barData} />
        <Graph type='pie' data={pieData} />
      </div>
    </div>
  );
};

export default Page;