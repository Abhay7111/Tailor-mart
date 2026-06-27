import React from 'react';
import { useProductData } from '../../../Services/products.services';
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductDetailsSwiper.css'; // अपनी SCSS फ़ाइल इम्पोर्ट करें

function ProductDetailsSwiper() {
    const { data, loading, error } = useProductData();
    const { id } = useParams();

    if (loading) return <div className="swiper-loading">Loading...</div>;
    if (error) return <div className="swiper-error">Error loading products.</div>;

    const product = data?.find(item => item.productName === id);

    if (!product || !product.productMoreImage) {
        return <div className="swiper-no-data">No images found.</div>;
    }

    const imagesArray = Object.values(product.productMoreImage);

    return (
        <div className="product-details-swiper-container">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={'auto'}
                spaceBetween={5}
                className="product-swiper"
            >
                {imagesArray.map((imgUrl, index) => (
                    <SwiperSlide key={index} className="product-swiper-slide">
                        <img 
                            src={imgUrl} 
                            alt={product.productName} 
                            className="product-swiper-image"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductDetailsSwiper;