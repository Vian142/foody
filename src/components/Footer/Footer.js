///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import SocialBlock from '../common/SocialBlock/SocialBlock';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////////////////////////
function Footer() {
    return <div className={styles.mainFooter}>
        <div className={styles.footerContent}>
            <div className={styles.footerColumns}>
                <div className={styles.footerColumn}>
                    <div className={styles.footerTitle}>Locations</div>
                    <div className={styles.footerColumns}>
                        <div className={styles.footerColumn}>
                            <div>
                                678 Some Awesome <br />
                                Brooklyn,NY -112233
                            </div>
                        </div>
                        <div className={styles.footerColumn}>
                            <div>
                                678 Some Awesome <br />
                                Brooklyn,NY -112233
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerColumn}>
                    <div className={styles.footerTitle}>Hours</div>
                    <div className={styles.footerColumns}>
                        <div className={styles.footerColumn}>
                            <div>
                                Mounday - Thursday <br />
                                08:00am - 11:00pm
                            </div>
                        </div>
                        <div className={styles.footerColumn}>
                            <div>
                                Friday - Saturday <br />
                                08:00am - 12:00pm
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.copyrightWrapper}>
            <div className={styles.copyrightContainer}>
                <div className={styles.copyrightText}>
                    Copyright 2017 © Foody - All Rights Reserved
                </div>
            </div>
            <div className={styles.socialContainer}>
                <SocialBlock/>
            </div>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////////////////////////
export default Footer;

///////////////////////////////////////////////////////////////////////////////////////////////////