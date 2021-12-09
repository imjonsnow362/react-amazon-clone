import React from 'react';
import "./Product.css";
import { useStateValue } from './Stateprovider';

function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    console.log('this is the basket >>> ', basket);
    //line 6 dispatch is to know how we manipulate the data
    const addToBasket= () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        //dispatch the item into data layer by mapping all info like id,title
    };
    //check state provider.js for the part where the info gets pulled from the data layer
    //this is the part to push the item to the cart (for line 27)
    return (
        <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p> The lean startup </p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
            
            </div>
        </div>
        <img src={image} alt=""/>
        <button onClick={addToBasket}> Add to basket</button>  
        </div>
    )
}

export default Product
