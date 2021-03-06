///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import styles from './styles.css';
///////////////////////////////////////////////////////////////////////////////////////////////////
const social = [
    { url: '/', icon: 'fa-facebook-official'},
    { url: '/', icon: 'fa-instagram'},
    { url: '/', icon: 'fa-twitter'}
]

///////////////////////////////////////////////////////////////////////////////////////////////////
function SocialItem({url, icon}) {
    return <li className={styles.socialItem}>
        <a href={url} className={styles.socialLink}>
            <span className={`fa ${icon}`}/>
        </a>
    </li>
}
///////////////////////////////////////////////////////////////////////////////////////////////////
function SocialBlock() {
    return <div className={styles.socialBlock}>
        <ul className={styles.socialList}>
            {
                _.map(social, (item, index) => <SocialItem key={index} {...item}/>)
            }
        </ul>
    </div>
}

///////////////////////////////////////////////////////////////////////////////////////////////////
export default SocialBlock;
///////////////////////////////////////////////////////////////////////////////////////////////////