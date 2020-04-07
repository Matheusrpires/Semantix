import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie, Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import styles from './graph.module.css'

const Graph = ({ data, type, today, yesterday}) => {

  const [filtered, setFiltered] = useState([]);

  const barChart = (
    data ?
    (
      <Bar 
        data={{
          labels: data.map(({ label }) => label),
          datasets: [
            {
              label: false,
              backgroundColor: '#03a9f4',
              data: data.map(({ value }) => value),
              
            }
          ],
        }}
        options ={{
          responsive: true,
          legend: { display: false },
          title: { display: false, text: 'Bars Chart'},
          plugins: {
            datalabels: {
              display: false,
            }
          },
          scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                },
                ticks: {
                  beginAtZero: true
              }
            }]
        }
        }}
      />
    ) : null
  );

  const pieChart = (
    data ?
      (
        <Pie
        data= {{
          labels: data.map(({ label }) => label),
          datasets:[
            {
              data:data.map(({ value }) => value),
              backgroundColor: [
                '#ABE1FA',
                '#303F9F',
                '#2AB92E'
                ]
            }
          ] 
        }}
        options = {{
          responsive: true,
          legend:{
            responsive: true,
            display: true,
            align: "end", 
            labels: {
              usePointStyle: true,
            }
          },
          plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / sum).toFixed(2)+"%";
                    return percentage;
                },
                color: '#fff',
            }
        },
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                  return previousValue + currentValue;
                });
                var currentValue = dataset.data[tooltipItem.index];
                var precentage = Math.floor(((currentValue/total) * 100)+0.5);         
                return data.labels[tooltipItem.datasetIndex] + " " + precentage + "%";
              }
            },
            color: '#fffff',
          }
        }}
        />
      ) : null  
  );

  const lineChart = (
    today ?
    (
      <Line
      data= {{
        labels: today.map(({ label }) => label),
        datasets: [{
          data: today.map(({ value }) => value),
          fill: false,
          lineTension: 0.0,
          label: 'Today',
          borderColor: '#303F9F',
          backgroundColor: '#303F9F',
          
        },{
          data: yesterday.map(({ value }) => value),
          fill: false,
          lineTension: 0.0,
          label: 'yesterday',
          borderColor: '#BF3FFF',
          backgroundColor: '#BF3FFF',
        },
      ],
      }}
      options = {{
        responsive: true,
        plugins: {
          datalabels: {
            display: false,
          }
        },
        legend:{
          responsive: true,
          display: true,
          align: "end", 
          labels: {
            usePointStyle: true,
          },
          scales: {
            xAxes: [{
              display: true,
              ticks: {
                  beginAtZero: true,
              }
            }]
        }
        }
      }}
      />
    ) : null
  )
  
  return(
    <div className={styles.graph}>
      <div className={styles.tittle}>
        {
          type === 'bar' ?
            <a>Bar Chart</a>
          : type === 'pie' ?
            <a>Pie Chart</a>
          :
            <a>Line Chart</a>
        }
      </div>
      {
        type === 'bar' ?
          <div className={styles.bar}>
            {barChart}
          </div>
          : type === 'pie' ?
            <div className={styles.bar}>
              {pieChart}
            </div>
            :
              <div className={styles.bar}>
                {lineChart}
              </div>
      }
    </div>
  )
}

export default Graph;