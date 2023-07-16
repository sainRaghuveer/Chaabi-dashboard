import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, CategoryScale, Title } from 'chart.js';


Chart.register(ArcElement, Tooltip, CategoryScale, Title);

const PieChart = () => {
    const data = {
        labels: ['Finished Training', 'Chapter B', "Haven't Started Yet", 'Chapter A', 'Chapter C'],
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
            <div style={{ width: "80%", height: "55%", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Pie data={data} options={options} />
            </div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"80%", margin:"auto"}}>
                <div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#0d62ff', marginRight: '5px', borderRadius: '50%' }}></span>
                            <span style={{ fontSize:"9px"}}>Finished Training</span>
                        </div>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#8e14d8', marginRight: '5px', borderRadius: '50%' }}></span>
                            <span style={{fontSize:"9px"}}>Chapter B</span>
                        </div>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#ed1c24', marginRight: '5px', borderRadius: '50%' }}></span>
                            <span style={{ fontSize:"9px"}}>Haven't Started Yet</span>
                        </div>
                    </li>
                </ul>
                </div>
                <div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#c2c2c2', marginRight: '5px', borderRadius: '50%' }}></span>
                            <span style={{fontSize:"9px" }}>Chapter A</span>
                        </div>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#425f57', marginRight: '5px', borderRadius: '50%' }}></span>
                            <span style={{ fontSize:"9px"}}>Chapter C</span>
                        </div>
                    </li>
                </ul>
                </div>
                
            </div>
        </>
    );
};

export default PieChart;
