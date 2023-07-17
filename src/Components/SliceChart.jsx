import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, CategoryScale, Title } from 'chart.js';
import styles from "../styles/SliceChart.module.css";


Chart.register(ArcElement, Tooltip, CategoryScale, Title);

const PieChart = () => {
    const data = {
        labels: ['Finished Training in %', 'Chapter B in %', "Haven't Started Yet in %", 'Chapter A in %', 'Chapter C in %'],
        datasets: [
            {
                data: [22, 22, 34, 7, 15],
                backgroundColor: ['#b4ceff', '#b4ceff', '#b4ceff', '#b4ceff', '#b4ceff'],
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'bottom',
            },
            datalabels: {
                color: '#000000',
                font: {
                    size: 16,
                    weight: 'bold',
                },
                formatter: (value) => {
                    return value + '%';
                },
            },
        },
    };

    return (
        <>
            <div className={styles['chart-container']}>
                <Pie data={data} options={options} />
            </div>
            <div className={styles['chapter-container']}>
                <div>
                    <ul>
                        <li>
                            <div className={styles['content-one']}>
                                <span></span>
                                <span className={styles.text} >Finished Training</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles['content-two']}>
                                <span></span>
                                <span className={styles.text} >Chapter B</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles['content-three']}>
                                <span></span>
                                <span className={styles.text} >Haven't Started Yet</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <div className={styles['content-four']}>
                                <span></span>
                                <span className={styles.text} >Chapter A</span>
                            </div>
                        </li>
                        <li>
                            <div className={styles['content-five']}>
                                <span></span>
                                <span className={styles.text} >Chapter C</span>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default PieChart;
