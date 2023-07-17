import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, DoughnutController } from 'chart.js';
import styles from "../styles/DoughnutChart.module.css";

const DoughnutChart = () => {
    const chartRef = useRef(null);
    const passedWorkers = 1423;
    const failedWorkers = 137;

    useEffect(() => {
        Chart.register(ArcElement, Tooltip, DoughnutController);

        const totalWorkers = passedWorkers + failedWorkers;

        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Passed Workers', 'Failed Workers'],
                datasets: [{
                    data: [passedWorkers, failedWorkers],
                    backgroundColor: ['green', 'red'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                cutout: '70%',
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const value = context.parsed;
                                return `${value} (${((value / totalWorkers) * 100).toFixed(2)}%)`;
                            }
                        }
                    }
                }
            }
        })
    }, []);

    return (
        <div className={styles.container}>
            <canvas ref={chartRef}/>
            <div>
                <ul>
                    <li>
                        <div className={styles['first-list-child-one']}>
                            <span></span>
                            <span style={{ fontWeight: 'bold' }}>Passed</span>
                        </div>
                        <div className={styles['first-list-child-two']}>{passedWorkers} workers</div>
                    </li>
                    <li>
                        <div className={styles['second-list-child-one']}>
                            <span></span>
                            <span>Failed</span>
                        </div>
                        <div className={styles['second-list-child-two']}>{failedWorkers} workers</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DoughnutChart;
