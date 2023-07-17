import React from 'react';
import styles from "../styles/UpperChartCard.module.css"
import Svg from './Svg';
import { PiTrendUpBold } from "react-icons/pi";

const UpperChartCard = ({ title, data, percents, number, color, bg }) => {
    return (
        <div className={`${styles['card']} ${styles['fade-in']}`}>
            <h5>{title}</h5>
            <div className={styles['card-child']}>
                <div className={styles['card-child-content']}>
                    <h3>{data}</h3>
                    <div>
                        <p style={{ backgroundColor: bg }}><PiTrendUpBold color={color} style={{ border: `1px solid ${color}` }} /><span style={{ color: color, margin: "0px 0px 4px 2px" }}>{percents}</span></p>
                        <p>{number}</p>
                    </div>
                </div>
                <div className={styles['card-child-chart']}>
                    {<Svg color={color} />}
                    <div>
                        <span>S</span><span>M</span><span>T</span><span>W</span>
                        <span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpperChartCard