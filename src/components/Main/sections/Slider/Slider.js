///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////////////////////////
function Slider() {
    return <div className={styles.sliderWrapper}>
        <div className={styles.slideContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.title}>It`s a Food Adventure</div>
                <div className={styles.line} />
                <div className={styles.description}>
                    You`ll Never Put A Better <br />
                    Bit Of Food On Your Knife.
                </div>
                <div className={styles.btnWrapper}>
                    <span className={styles.btn}>
                        Our menu
                </span>
                </div>
            </div>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////////////////////////
export default Slider;

///////////////////////////////////////////////////////////////////////////////////////////////////