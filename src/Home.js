import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img 
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
              alt=""
            />

            {/* Product id, title, rating, image  */}
            <div className="home__row">
              <Product
                id="1466"
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
              />
              <Product
                id="1282"
                title="KitchenAid KP26M1XER 6 Qt. Professional 600 Series Bowl-Lift Stand Mixer - Empire Red"
                price={349}
                rating={3}
                image="https://m.media-amazon.com/images/I/81BOGWDXGHL._AC_UL320_.jpg"
              />
            </div>
            <div className="home__row">
            <Product
                id="123"
                title="Samsung Galaxy Watch Active2 (40mm, GPS, Bluetooth), Pink Gold (US Version)"
                price={249}
                rating={4}
                image="https://m.media-amazon.com/images/I/51QYH9ttqfL._AC_UY218_.jpg"
              />
              <Product
                id="12345"
                title="OnePlus 8 (5G) Dual-SIM IN2013 128GB/8GB RAM (GSM + CDMA) Factory Unlocked Android Smartphone (Onyx Black)- International Version"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/71qasNMU1yL._AC_UY218_.jpg"
              />
              <Product
                id="12345"
                title="adidas Women's Essentials Track Jacket"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/81zMQSGJ2BL._AC_UL320_.jpg"
              /> 
            </div>
            {/* Product */}
        </div>
    )
}

export default Home;
