import React from 'react';
import styles from "../styles/MainSection.module.css";
import { UpperChartData, bottomLastChartData, midLastChartData } from "../utils/ChartData"
import UpperChartCard from './UpperChartCard';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';

const MainSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Hello, Puneet Dhiman</h1>
            </div>
            <div className={styles['charts-container']}>
                <div className={styles['upper-charts']}>
                    {UpperChartData.map((el, index) => (
                        <UpperChartCard
                            key={el.title}
                            title={el.title}
                            data={el.data}
                            percents={el.percents}
                            number={el.number}
                            color={el.color}
                            bg={el.bg}
                        />
                    ))}
                </div>
                <div className={styles['middle-charts']}>
                    <div className={styles['middle-charts-first']}>
                        <h5>Chapter Wise Status</h5>
                    </div>
                    <div className={styles['middle-charts-second']}>
                        <div className={styles['middle-charts-second-header']}>
                            <h5>Last 14 Days Active workers in Training</h5>
                            <h5>Last 14 Days</h5>
                        </div>
                        {<BarChart data={midLastChartData} />}
                    </div>
                </div>
                <div className={styles['bottom-charts']}>
                    <div className={styles['bottom-charts-first']}>
                        <h5>Monthly Training Activity</h5>
                    </div>
                    <div className={styles['bottom-charts-second']}>
                        <h5>Quiz Passing %</h5>
                        {<DoughnutChart />}
                    </div>
                    <div className={styles['bottom-charts-third']}>
                        <div className={styles['bottom-charts-third-header']}>
                            <h5>Daily Training Completions</h5>
                            <h5>Last 7 Days</h5>
                        </div>
                        <BarChart data={bottomLastChartData} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainSection