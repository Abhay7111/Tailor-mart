import { useEffect, useRef, useState } from 'react';
import { useProductData } from '../../Services/products.services';
import { NavLink } from 'react-router-dom';
import './allCloth.css'

const PLACEHOLDER_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

function LazyImage({ src, alt }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const element = ref.current;

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(element);
                    }
                },
                {
                    rootMargin: '120px',
                    threshold: 0.1,
                }
            );

            observer.observe(element);
            return () => observer.disconnect();
        }

        setVisible(true);
    }, []);

    return (
        <img
            ref={ref}
            src={visible ? src : PLACEHOLDER_IMAGE}
            loading="lazy"
            alt={alt}
            className="lazy-image"
        />
    );
}

function allCloth() {
    const { data, loading, error } = useProductData();

    return (
        <div className='allCloth-main'>
            {loading && <div>loading...</div>}
            {error && <div>There is problem to fetch the data...</div>}

            <div className='allCloth-cont-main'>
                {!loading && !error && data.map((items, index) => (
                    <NavLink to={`/product/${items.productName}`} key={index} className='allCloth-cont'>
                        <LazyImage src={items.productImage} alt={items.productName} />
                        <div className='allCloth-details'>
                            <div className='allCloth-price'>
                                <p>₹{Math.floor(items.productPrice*1.2)}</p>
                                <p>₹{items.productPrice}</p>
                            </div>
                            <h2>{items.productName}</h2>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default allCloth
