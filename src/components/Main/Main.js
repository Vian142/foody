///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import Header from '../Header/Header';
import Slider from './sections/Slider/Slider';
import Banner from './sections/Banner/Banner';
import Quote from './sections/Quote/Quote';
import Menu from './Menu/Menu';
import Footer from '../Footer/Footer';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////////////////////////
function Main() {
    return <div className={styles.mainWrapper}>
        <Header/>
        <div className={styles.content}>
            <Slider />
            <Banner />
            <Quote />
            <div className={styles.sectionMenu}>
                <div className={styles.sectionMenuTitle}>We Present You Our Menu</div>
                <Menu/>
            </div>
        </div>
        <Footer/>
    </div>
}

///////////////////////////////////////////////////////////////////////////////////////////////////
export default Main;

///////////////////////////////////////////////////////////////////////////////////////////////////