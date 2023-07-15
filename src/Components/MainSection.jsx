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
                    <div className={styles['middle-charts-first']}>Chart-1</div>
                    <div className={styles['middle-charts-second']}>Chart-2</div>
                </div>
                <div className={styles['bottom-charts']}>
                    <div className={styles['bottom-charts-first']}>Chart-1</div>
                    <div className={styles['bottom-charts-second']}>Chart-2</div>
                    <div className={styles['bottom-charts-third']}>Chart-2</div>
                </div>
            </div>

        </div>
    )
}

export default MainSection