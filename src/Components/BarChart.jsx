import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Tooltip } from 'chart.js';

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
        <div style={{ width: "90%",height:"78%", margin:"auto", display:"flex", justifyContent:"center", alignItems:"center" }}>
            <canvas style={{width:"90%",height:"78%",display:"flex", justifyContent:"center", alignItems:"center"}} ref={chartRef} />
        </div>
    )

};

export default BarChart;
