///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import logo from './logo.png';
import Menu from './Menu/Menu';
import SocialBlock from '../common/SocialBlock/SocialBlock';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////////////////////////
function Header(){
    return <div className={styles.mainHeader}>
        <div className={styles.headerWrapper}>
            <div className={styles.logoWrapper}>
                <span className={styles.logoBlock}>
                    <img src={logo} className={styles.logoBlockImage}/>
                </span>
            </div>
            <div className={styles.navigationWrapper}>
                <Menu/>
            </div>
            <div className={styles.socialWrapper}>
                <SocialBlock/>
            </div>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////////////////////////
export default Header;

///////////////////////////////////////////////////////////////////////////////////////////////////