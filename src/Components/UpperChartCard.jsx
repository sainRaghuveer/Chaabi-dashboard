import React from 'react';
import styles from "../styles/UpperChartCard.module.css"

const UpperChartCard = ({title, data, percents, number}) => {
  return (
    <div className={styles['card']}>
        <h5>{title}</h5>
        <h3>{data}</h3>
        <p>{percents}</p>
        <p>{number}</p>
    </div>
  )
}

export default UpperChartCard