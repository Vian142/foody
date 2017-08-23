///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import styles from './styles.css';
///////////////////////////////////////////////////////////////////////////////////////////////////
function MenuItem() {
    return <div className={styles.menuItem}>
        <div className={styles.productThumbnailWrapper}>
            <div className={styles.productThumbnail}>
                <img src='/' alt='1' className={styles.productThumbnailImage} />
            </div>
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
            <MenuItem/>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////////////////////////
export default Menu;

///////////////////////////////////////////////////////////////////////////////////////////////////