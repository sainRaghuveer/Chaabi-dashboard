import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Tooltip } from 'chart.js';
import styles from "../styles/BarChart.module.css";

const BarChart = ({data}) => {
    console.log(data)
    const chartRef = useRef(null);

    useEffect(() => {
        Chart.register(CategoryScale, LinearScale, BarController, BarElement, Tooltip);

        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: data.type,
                    data: data.data,
                    backgroundColor: 'rgba(54, 162, 235, 0.8)', // Bar color
                    borderColor: 'rgba(54, 162, 235, 1)', // Border color
                    borderWidth: 1,
                    borderRadius: 5,
                    barThickness: data.thickness,
                    maxBarThickness: 10,
                    minBarLength: 2
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'category',
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, []);

    return (
        <div className={styles.container} style={{height:data.height}}>
            <canvas style={{height:data.height}} ref={chartRef} />
        </div>
    )

};

export default BarChart;
