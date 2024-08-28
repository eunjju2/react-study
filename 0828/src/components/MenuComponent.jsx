import React from 'react';

function MenuComponent(props) {
    const {imgSrc, alt, name, food, price} = props
    return (
        <div className='foodMenu'>
            <img className ="foodImage" src= {imgSrc} alt={alt} />
            <h1>{name}</h1>
            <h3>{food}</h3>
            <h2>{price}</h2>
        </div>
    );
};

export default MenuComponent;