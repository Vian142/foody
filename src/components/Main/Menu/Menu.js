///////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import PreviewMenu from './PreviewMenu/PreviewMenu';
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
        thumbnail: image1,
        weight: '470',
        description: 'Попробуйте и вы одну из любимых пицц петербуржцев, которая вошла в историю этого прекрасного города с разводными мостами, множеством музеев и достопримечательностей.',
        composition: 'Тесто, сливочный соус, сыр моцарелла, курочка жареная'
    },
    {
        name: 'Pizza Margarita',
        price: '19,99$',
        thumbnail: image2,
        weight: '470',
        description: 'Попробуйте и вы одну из любимых пицц петербуржцев, которая вошла в историю этого прекрасного города с разводными мостами, множеством музеев и достопримечательностей.',
        composition: 'Тесто, сливочный соус, курочка жареная, томаты, зелень'
    },
    {
        name: 'Pizza Margarita',
        price: '19,99$',
        thumbnail: image3,
        weight: '470',
        description: 'Попробуйте и вы одну из любимых пицц петербуржцев, которая вошла в историю этого прекрасного города с разводными мостами, множеством музеев и достопримечательностей.',
        composition: 'Тесто, сливочный соус, сыр моцарелла, шампиньоны, курочка жареная, томаты, зелень',
        reverse: true
    },
    {
        name: 'Pizza Margarita',
        price: '19,99$',
        thumbnail: image4,
        weight: '470',
        description: 'Попробуйте и вы одну из любимых пицц петербуржцев, которая вошла в историю этого прекрасного города с разводными мостами, множеством музеев и достопримечательностей.',
        composition: 'Тесто, томаты, зелень',
        reverse: true
    },
    {
        name: 'Pizza Margarita',
        price: '19,99$',
        thumbnail: image5,
        weight: '470',
        description: 'Попробуйте и вы одну из любимых пицц петербуржцев, которая вошла в историю этого прекрасного города с разводными мостами, множеством музеев и достопримечательностей.',
        composition: 'Тесто, сливочный соус, шампиньоны, томаты, зелень'
    },
    {
        name: 'Pizza Margarita',
        price: '19,99$',
        thumbnail: image6,
        weight: '470',
        description: 'Попробуйте и вы одну из любимых пицц петербуржцев, которая вошла в историю этого прекрасного города с разводными мостами, множеством музеев и достопримечательностей.',
        composition: 'Тесто, сливочный соус, сыр моцарелла, зелень'
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
        <div className={styles.wrapperPreview}>
            <PreviewMenu {...menus[0]}/>
        </div>
    </div>
}

///////////////////////////////////////////////////////////////////////////////////////////////////
export default Menu;

///////////////////////////////////////////////////////////////////////////////////////////////////