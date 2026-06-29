import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductData } from '../../../Services/products.services';
import './productSize.css'

function productSize() {
    const {id} = useParams();
    const {data, loading, error} = useProductData();

    const product = data?.find(item => item.productName === id);
  return (
    <div className='productSizeWraper'>
        <div className="productSize">
            {product?.productSize?.some(obj => "S" in obj)? <div className='size-available'>S</div> : <div className='size-not-available'>S</div>}
            {product?.productSize?.some(obj => "M" in obj)? <div className='size-available'>M</div> : <div className='size-not-available'>M</div>}
            {product?.productSize?.some(obj => "L" in obj)? <div className='size-available'>L</div> : <div className='size-not-available'>L</div>}
            {product?.productSize?.some(obj => "XL" in obj)? <div className='size-available'>XL</div> : <div className='size-not-available'>XL</div>}
            {product?.productSize?.some(obj => "XXL" in obj)? <div className='size-available'>XXL</div> : <div className='size-not-available'>XXL</div>}
        </div>
    </div>
  )
}

export default productSize
