import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, DoughnutController } from 'chart.js';

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
        });
    }, []);

    return (
        <div style={{ display: 'flex', width: '100%', height: "70%", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "-15px" }}>
            <canvas ref={chartRef} style={{ width: '100%', marginRight: '20px', height: "80%", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center" }} />
            <div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'green', marginRight: '5px', borderRadius: '50%' }}></span>
                            <span style={{ fontWeight: 'bold' }}>Passed</span>
                        </div>
                        <div style={{ marginLeft: '15px',fontSize:"10px" }}>{passedWorkers} workers</div>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'red', marginRight: '5px', borderRadius: '50%' }}></span>
                            <span style={{ fontWeight: 'bold' }}>Failed</span>
                        </div>
                        <div style={{ marginLeft: '15px', fontSize:"10px" }}>{failedWorkers} workers</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DoughnutChart;
