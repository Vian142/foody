///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import image1 from './images/image-1.jpg';
import image2 from './images/image-2.jpg';
import image3 from './images/image-3.jpg';
import image4 from './images/image-4.jpg';
import image5 from './images/image-5.jpg';
import image6 from './images/image-6.jpg';
import styles from './styles.css';
///////////////////////////////////////////////////////////////////////////////////////////////////
const menus = [
    {
        name: 'Pizza Margarita',
        price: '19,99$',
        thumbnail: image1
    },
    {
        name: 'Pizza Margarita',
        price: '19,99$',
        thumbnail: image2
    },
    {
        name: 'Pizza Margarita',
        price: '19,99$',
        thumbnail: image3,
        reverse: true
    },
    {
        name: 'Pizza Margarita',
        price: '19,99$',
        thumbnail: image4,
        reverse: true
    },
    {
        name: 'Pizza Margarita',
        price: '19,99$',
        thumbnail: image5
    },
    {
        name: 'Pizza Margarita',
        price: '19,99$',
        thumbnail: image6
    }
]

///////////////////////////////////////////////////////////////////////////////////////////////////
function MenuItem({thumbnail, reverse}) {
    return <div className={classnames(styles.menuItem, {[styles.reverse]: reverse})}>
        <div className={styles.productThumbnail}
            style={{backgroundImage:`url(${thumbnail})`}}>
        </div>
        <div className={styles.productContent}>
            <div className={styles.productTitle}>Pizza Margarita</div>
            <div className={styles.productDescription}>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula.
            </div>
            <div className={styles.productPrice}>
                19,99$
            </div>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////////////////////////
function Menu() {
    return <div className={styles.menuContainer}>
        <div className={styles.menuWrapper}>
            {
                _.map(menus, (item, index) => <MenuItem key={index} {...item}/>)
            }
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////////////////////////
export default Menu;

///////////////////////////////////////////////////////////////////////////////////////////////////