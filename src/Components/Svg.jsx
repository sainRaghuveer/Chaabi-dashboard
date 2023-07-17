import React from 'react';
import styles from "../styles/Svg.module.css";

const Svg = ({color}) => {
    console.log(color)
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.container}  viewBox="0 0 128 80" fill="none" style={{fill:color}}>
                <path d="M0 79.5L21.2505 12.38L43.5 40H58.5L85.258 0.300018L106.594 28.94L127.5 79.5" fill={color} />
                <defs>
                    <linearGradient id="paint0_linear_1_160" x1="63.75" y1="-3.05169e-05" x2="63.75" y2="88" gradientUnits="userSpaceOnUse">
                        <stop style={{ stopColor: color }} />
                        <stop offset="1"  style={{ stopColor: "#F9F9F9" }} />
                    </linearGradient>
                </defs>
            </svg>
        </>
    )
}

export default Svg