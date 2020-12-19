import React, {useEffect, useState} from 'react'
import './Home.css'
import Product from './Product'
import { db } from './firebase'

function Home() {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts = []
            snapshot.docs.map((doc)=>{
                tempProducts.push({
                    id: doc.id,
                    product: doc.data()
                })
            })
            setProducts(tempProducts)
        })
    }, [])


    return (
        <div className="Home">
            <div className="Home-container">
                <div 
                    className="Home-banner" 
                    style={{backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg)"}}>

                </div>

                <div className="Home-content">
                    <div className="Home-row">
                        {
                            products.map((product)=>(
                                <Product
                                    id={product.id}
                                    key={product.id}
                                    title={product.product.title}
                                    price={product.product.price}
                                    rating={product.product.rating}
                                    image={product.product.image}
                                />
                            ))
                        }
                    </div>
                    <div className="Home-row">
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Home
