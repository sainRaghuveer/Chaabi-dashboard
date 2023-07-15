import React from 'react';
import styles from "../styles/MainSection.module.css";
import { UpperChartData } from "../utils/ChartData"
import UpperChartCard from './UpperChartCard';

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
                            title={el.title}
                            data={el.data}
                            percents={el.percents}
                            number={el.number}
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
                    </div>
                </div>
                <div className={styles['bottom-charts']}>
                    <div className={styles['bottom-charts-first']}>
                        <h5>Monthly Training Activity</h5>
                    </div>
                    <div className={styles['bottom-charts-second']}>
                        <h5>Quiz Passing %</h5>
                    </div>
                    <div className={styles['bottom-charts-third']}>
                        <h5>Daily Training Completions</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainSection