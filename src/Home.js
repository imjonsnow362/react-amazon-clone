import React from 'react';
import "./Home.css";
import Product from "./Product"; 

function Home() {
    return (
        <div className="home">
        <div className="home__container">
        <img className="home__image"  src="https://m.media-amazon.com/images/I/61GAVQ6MkPL._SX3000_.jpg" alt=""/>
        <div className="home__row">
        <Product 
            id="12332332424234"
            title='The lean startup' 
            price={29.99}
            image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs.s-bol.com%2Fimgbase0%2Fimagebase3%2Flarge%2FFC%2F5%2F0%2F4%2F0%2F9200000021550405.jpg&f=1&nofb=1" 
            rating={3}
            />
        <Product 
            title='Kenwood the hawkeye thing just a test thanks'
            price={39.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.infoboard.de%2Fwp-content%2Fuploads%2F2017%2F03%2FKitchenAid-Mixer-Artisan-Power-Plus-Blender.jpg&f=1&nofb=1"
            rating={4}
        />    

        </div>

        <div className="home__row">
        <Product title='Kenwood the hawkeye thing just a test thanks'
            price={39.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.infoboard.de%2Fwp-content%2Fuploads%2F2017%2F03%2FKitchenAid-Mixer-Artisan-Power-Plus-Blender.jpg&f=1&nofb=1"
            rating={4}
            />
        <Product title='Kenwood the hawkeye thing just a test thanks'
            price={39.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.infoboard.de%2Fwp-content%2Fuploads%2F2017%2F03%2FKitchenAid-Mixer-Artisan-Power-Plus-Blender.jpg&f=1&nofb=1"
            rating={4}
            />
        <Product 
        title='Kenwood the hawkeye thing just a test thanks'
        price={39.99}
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.infoboard.de%2Fwp-content%2Fuploads%2F2017%2F03%2FKitchenAid-Mixer-Artisan-Power-Plus-Blender.jpg&f=1&nofb=1"
        rating={4}
        />   // this is the product row this will have 3 products side by side
        </div>

        <div className="home__row">
        <Product title='Kenwood the hawkeye thing just a test thanks'
            price={39.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.infoboard.de%2Fwp-content%2Fuploads%2F2017%2F03%2FKitchenAid-Mixer-Artisan-Power-Plus-Blender.jpg&f=1&nofb=1"
            rating={4}
            />
        </div>
        
        
        </div>
        </div>
    );
}

export default Home