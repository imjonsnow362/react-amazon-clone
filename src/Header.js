//this is the header part where you can see the amazon logo then search bar hello(sign in) , returning orders , your prime , cart 
import React from 'react';
import './Header.css';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import { ShoppingBasketOutlined } from '@mui/icons-material';
import { useStateValue } from './Stateprovider';
//at line 41 basket.length is written to dynamically add to cart (meaning instant response of click of add to basket)
//in line 41 question mark is for when there is an error like number wont show on the basket or is undefined it will not freak out - it will handle the error 
function Header(){
    const [{ basket }, dispatch] = useStateValue();
    return(
        <div className="header">
            <Link to="/">
            <img className="header_logo" src="https://www.registrarcorp.com/wp-content/uploads/2021/02/Amazon-logo.png"/>
            </Link>
        <div 
            className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon" />
                { /*Logo*/}
                </div>
        
        <div className="header_nav">
        <div className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>
        </div>

        <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
        </div>

        <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineOne'>Prime</span>
        </div>

        <Link to="/checkout">
        <div className='header__optionBasket'>
        <ShoppingBasketOutlined />
        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </Link>
        </div>



        </div>
        </div>
    );
}

export default Header
