import React from 'react';
import '.Checkout.css';
import Subtotal from "./Subtotal";


/* one more step is when you add anything in the cart how it works is 
 when we click an item we push the item in a data layer (which is the react context api/redux   note. react context api and redux are not the same thing they have similar pattern and used in online stores)
 what exactly happens is that you can pull the items from the data layer and put them wherever you want e.g. cart
     CHECKOUT StateProvider.js file for this logic code*/

function Checkout() {
    return (
        <div className='checkout'>
        <div className="checkout__left">
            <img 
            className="checkout_ad"
            src="https://www.sellerapp.com/blog/wp-content/uploads/2018/08/what-are-amazon-sponsored-display-ads-1.jpg"
            alt=""
            />
            </div>  
            <div>
                <h2 className="checkout__title">
                   Your shopping basket 
                </h2>

                {/* Shopping Basket */}
                {/* Shopping Basket */}
                {/* Shopping Basket */}
                {/* Shopping Basket */}
                {/* Shopping Basket */}

            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
