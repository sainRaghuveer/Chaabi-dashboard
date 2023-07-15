import React from 'react';
import styles from "../styles/Sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div className={styles['sidebar-options']}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.trainings}>Trainings</div>
            <div className={styles.users}>Analytics</div>
            <div className={styles.analytics}>Users</div>
            <div className={styles.myaccount}>My Account</div>
            <div className={styles.support}>Support</div>
        </div>
    </div>
  )
}

export default Sidebar