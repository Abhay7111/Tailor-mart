import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useProductData } from '../../../Services/products.services';
import './productSize.css'

function productSize() {
    const {id} = useParams();
    const {data, loading, error} = useProductData();
    const [selectedSize, setSelectedSize] = useState('');

    const product = data?.find(item => item.productName === id);
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    const isSizeAvailable = (size) => product?.productSize?.some(obj => size in obj);

    return (
        <div className='productSizeWraper'>
            <div className="productSize">
                {sizes.map((size) => {
                    const available = isSizeAvailable(size);
                    const classes = available
                        ? `size-available${selectedSize === size ? ' size-selected' : ''}`
                        : 'size-not-available';

                    return (
                        <NavLink
                            to={`${size}`}
                            key={size}
                            className={`${classes} size-btn`}
                            onClick={() => available && setSelectedSize(size)}
                        >
                            {size}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}

export default productSize
