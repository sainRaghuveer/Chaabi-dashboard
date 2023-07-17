import React from 'react';
import styles from "../styles/BottomChartFirstContent.module.css";

const BottomChartFirstContent = () => {
    return (
        <div>
            <ul className={styles['common-li']}>
                <li>
                    <div>
                        <span></span>
                        <span>course a</span>
                    </div>
                    <div>23 workers took this course this week</div>
                </li>
                <li>
                    <div>
                        <span></span>
                        <span>course b</span>
                    </div>
                    <div>253 workers took this course this week</div>
                </li>
                <li>
                    <div>
                        <span></span>
                        <span>course c</span>
                    </div>
                    <div>253 workers took this course this week</div>
                </li>
                <li>
                    <div>
                        <span></span>
                        <span>course d</span>
                    </div>
                    <div>253 workers took this course this week</div>
                </li>
            </ul>
        </div>
    )
}

export default BottomChartFirstContent