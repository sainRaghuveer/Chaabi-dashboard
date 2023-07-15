import React from 'react'
import Sidebar from '../Components/Sidebar'
import MainSection from '../Components/MainSection';
import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <div className={styles['main-container']}>
        <Sidebar/>
        <MainSection/>
    </div>
  )
}

export default Home