import { NavLink, useParams } from 'react-router-dom'
import Navbar from '../../Components/All-size-Navbar/Navbar';
import { useProductData } from '../../Services/products.services';
import './productDetails.css';
import price from '../../Components/prices/allClothPrice/price';
import ProductDetailsSwiper from '../../Components/reuseChunks/productDetailsSwiper/productDetailsSwiper';
import { useState } from 'react';
import ProductSize from '../../Components/reuseChunks/productSize/ProductSize'


function productDetails() {
const {data, loading, error} = useProductData();
const {id} = useParams();
const [productLike, setProductLike] = useState(false);
  return (
    <div className='productDetails-main'>
            <Navbar/>
            {loading && 'Loading...'}
            {error && error}
        <div className='productDetails-wraper'>
            {!loading && !error && data.filter(item => item.productName === id).map((items, index) => (
                <div key={index} className='productDetails-cont'>
                    <div className='productDetails-image-wraper'>
                        <div className="w-full">
                            <p onClick={()=>setProductLike((prev) => !prev)} className='productLikeButton'><i className={`${productLike ? 'ri-heart-fill':'ri-heart-line'}`}></i></p>
                            <ProductDetailsSwiper />
                        </div>
                    </div>
                    {items.productColor &&<div className='productDetails-color-tag-info'>
                        <p><span>Selected Color:</span> {items.productColor}</p>
                        <p>{items.productBrand}</p>
                    </div>}
                    <div className='productDetails-title-wraper'>
                        <h2 className=''>{items.productTitle}</h2>
                        <p className=''>{items.productDescrption}</p>
                    </div>
                    <div className='productDetails-price-wraper'>
                            <p className='productDetails-price'>₹{price(items)}</p>
                            <p className='productDetails-discount-price'>₹{items.productPrice}</p>
                            <p className='productPriceOff'>-{items.productPriceOff}%</p>
                    </div>
                    <div className='w-full'>
                        <ProductSize/>
                    </div>
                    {items.productoffers && <div className='productDetails-offers'>
                        <p>offers</p>
                    </div>}
                    {/* <div className='productDetails-wraper'>

                    </div> */}
                </div>
            ))}
        </div>
        <div className="productOrderOrAddToCart">
            <div className="productAddToCart productButton">
                <i className="ri-shopping-bag-4-line"></i>
                <p className='addToCartText'>Add to cart</p>
            </div>
            <NavLink to={`/order/${id}`} className="productOrder productButton">
                <p>Order</p>
            </NavLink>
        </div>
    </div>
  )
}

export default productDetails
