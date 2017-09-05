///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import createReactClass from 'create-react-class';
import classnames from 'classnames';
import styles from './styles.css';
///////////////////////////////////////////////////////////////////////////////////////////////////
const PreviewMenu = createReactClass({
    render() {
        const { name, thumbnail, description, weight, price } = this.props;
        return <div className={styles.wrapperModal}>
            <div className={styles.containerModal}>
                <span className={styles.btnClose}>
                    <i className={classnames('fa fa-times')} />
                </span>
                <div className={styles.thumbnailContainer}>
                    <img src={thumbnail} className={styles.thumbnailImage} />
                </div>
                <div className={styles.contentMenu}>
                    <div className={styles.title}>{name}</div>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.info}>
                        <div className={styles.infoWeight}>{weight} г.</div>
                        <div className={styles.infoPrice}>
                            <span className={styles.infoPriceValue}>{price}</span>
                        </div>
                        <div className={styles.infoBuy}>
                            <span className={styles.infoBuyBtn}>
                                <i className={classnames('fa fa-shopping-basket')}/>&nbsp;
                                Buy
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
})
///////////////////////////////////////////////////////////////////////////////////////////////////
export default PreviewMenu;

///////////////////////////////////////////////////////////////////////////////////////////////////