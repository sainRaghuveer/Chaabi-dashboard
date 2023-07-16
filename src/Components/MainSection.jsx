import React from 'react';
import styles from "../styles/MainSection.module.css";
import { UpperChartData, bottomLastChartData, midLastChartData } from "../utils/ChartData"
import UpperChartCard from './UpperChartCard';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import PieChart from './SliceChart';
import {AiOutlineArrowUp} from "react-icons/ai";

const MainSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <div>
                    <div>
                        <h1>Hello, Puneet Dhiman</h1>
                        <p>following is your organization's performance summary</p>
                    </div>
                </div>
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
                        <PieChart />
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
                        <div>{<AiOutlineArrowUp color='#5e96ff'/>}<p>16% more enrollees this month</p></div>
                        <div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ display: 'inline-block', width: '10px', height: '10px', marginRight: '5px', borderRadius: '50%', border:"2px solid #5e96ff" }}></span>
                                        <span style={{fontWeight: 'bold', fontSize:"10px" }}>course a</span>
                                    </div>
                                    <div style={{ marginLeft: '15px',fontSize:"7px", }}>23 workers took this course this week</div>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ display: 'inline-block', width: '10px', height: '10px',marginRight: '5px', borderRadius: '50%', border:"2px solid #5e96ff" }}></span>
                                        <span style={{ fontWeight: 'bold', fontSize:"10px" }}>course b</span>
                                    </div>
                                    <div style={{ marginLeft: '15px',fontSize:"7px" }}>253 workers took this course this week</div>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ display: 'inline-block', width: '10px', height: '10px', marginRight: '5px', borderRadius: '50%', border:"2px solid #5e96ff" }}></span>
                                        <span style={{ fontWeight: 'bold',fontSize:"10px" }}>course c</span>
                                    </div>
                                    <div style={{ marginLeft: '15px',fontSize:"7px" }}>253 workers took this course this week</div>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ display: 'inline-block', width: '10px', height: '10px',marginRight: '5px', borderRadius: '50%', border:"2px solid #5e96ff" }}></span>
                                        <span style={{ fontWeight: 'bold',fontSize:"10px" }}>course d</span>
                                    </div>
                                    <div style={{ marginLeft: '15px',fontSize:"7px" }}>253 workers took this course this week</div>
                                </li>
                            </ul>
                        </div>
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