///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////////////////////////
function Banner() {
    return <div className={styles.bannerWrapper}>
        <div className={styles.bannerBlock}>
            <div className={styles.leftBlock}></div>
            <div className={styles.rightBlock}>
                <div className={styles.content}>
                    <div className={styles.title}>Story of Us</div>
                    <div className={styles.descriprion}>
                        Quisque velit nisi, pretium ut lacinia in, elementum
                    id enim. Cras ultricies ligula sed magna dictum porta.
                    Donec sollicitudin molestie malesuada.
                    </div>
                    <div className={styles.btnWraper}>
                        <span className={styles.btn}>More</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////////////////////////
export default Banner;

///////////////////////////////////////////////////////////////////////////////////////////////////