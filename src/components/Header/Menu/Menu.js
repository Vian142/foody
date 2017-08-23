///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import styles from './styles.css';
///////////////////////////////////////////////////////////////////////////////////////////////////
const menu = [
    {url: '/', text: 'Welcome'},
    {url: '/', text: 'Menu'},
    {url: '/', text: 'Video tour'},
    {url: '/', text: 'Contact'}
]

///////////////////////////////////////////////////////////////////////////////////////////////////
function MenuItem({url, text}) {
    return <li className={styles.navItem}>
        <a href={url} className={styles.navItemLink}>
            {text}
        </a>
    </li>;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function Menu() {
    return <div className={styles.nav}>
        <ul className={styles.navList}>
            {
                _.map(menu, (item, index) => <MenuItem key={index} {...item} />)
            }
        </ul>
    </div>
}

///////////////////////////////////////////////////////////////////////////////////////////////////
export default Menu;

///////////////////////////////////////////////////////////////////////////////////////////////////