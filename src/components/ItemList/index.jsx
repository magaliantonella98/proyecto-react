import React from 'react';
import Item from '../Item/index';

const ItemList = ({ items }) => {
    return (
        <div className='cardContainer'>
            {items.map(products => {
                
                return <Item 
                    key={products.id} 
                    id={products.id}
                    title={products.title} 
                    price={products.price} 
                    pictureUrl={products.pictureUrl} 
                    stock={products.stock}
                    />
                })}
        </div>
    )
}

export default ItemList;