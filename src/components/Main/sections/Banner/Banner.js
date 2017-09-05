///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////////////////////////
function Banner() {
    return <div className={styles.bannerWrapper}>
        <div className={styles.bannerBlock}>
            <div className={classnames(styles.leftBlock, styles.background0)}></div>
            <div className={styles.rightBlock}>
                <div className={styles.content}>
                    <div className={styles.title}>Story of Us</div>
                    <div className={styles.line}/>
                    <div className={styles.description}>
                        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies 
                        ligula sed magna dictum porta. Donec sollicitudin molestie malesuada.
                    </div>
                    <div className={styles.btnWrapper}>
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