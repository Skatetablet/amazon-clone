import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="Home">
            <div className="home-container">
                <img className="home-image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            </div>

            <div className="home-row">
                <Product 
                    id="123548"
                    title="The lean Startup: How Constant Innovation Creates Radiclly Successful Businesses Paperback" 
                    price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}/>
                <Product 
                    id="124512"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
                    price={239.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={4}/>
            </div>

            <div className="home-row">
                <Product 
                    id="842548"
                    title="Samsung LC49RG90SSUXEN 49' Curve LED Gaming Monitor" 
                    price={199.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    rating={3}/>
                <Product 
                    id="124818"
                    title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric" 
                    price={99.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}/>
                <Product 
                    id="879461"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128 GB) - Silver (4th Gen)" 
                    price={599.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    rating={4}/>
            </div>

            <div className="home-row">
                <Product 
                    id="258741"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQGD 5120 x 1440" 
                    price={1099.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    rating={4}/>
            </div>
            
        </div>
    )
}

export default Home
