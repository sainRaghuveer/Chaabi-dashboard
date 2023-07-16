import React from 'react';
import styles from "../styles/Sidebar.module.css";
import {MdDashboard} from "react-icons/md";
import {RiGamepadFill} from "react-icons/ri";
import {FiUsers} from "react-icons/fi";
import {DiGoogleAnalytics} from "react-icons/di";
import {ImLocation} from "react-icons/im";
import chaabiLogo from "../chaabiLogo.webp"

const Sidebar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}><img src={chaabiLogo} alt="logo" /></div>
        <div className={styles['sidebar-options']}>
        <div className={styles['sidebar-option']}><MdDashboard size="24px"/> <span>Dashboard</span></div>
        <div className={styles['sidebar-option']}><RiGamepadFill size="24px"/> <span>Trainings</span></div>
        <div className={styles['sidebar-option']}><FiUsers size="23px"/><span>Users</span></div>
        <div className={styles['sidebar-option']}><DiGoogleAnalytics size="24px"/> <span>Analytics</span></div>
        <div className={styles['sidebar-option']}><ImLocation size="22px"/><span>My Account</span></div>
        <div className={styles['sidebar-option']}><ImLocation size="22px"/><span>Support</span></div>
        </div>
    </div>
  )
}

export default Sidebar