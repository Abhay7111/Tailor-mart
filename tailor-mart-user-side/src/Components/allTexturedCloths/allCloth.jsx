import { useEffect, useRef, useState } from 'react';
import { useProductData } from '../../Services/products.services';
import { NavLink, useParams } from 'react-router-dom';
import './allCloth.css'

const PLACEHOLDER_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

function LazyImage({ src, alt }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const element = ref.current;
        let timeoutId;

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

        timeoutId = window.setTimeout(() => setVisible(true), 0);
        return () => window.clearTimeout(timeoutId);
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

function AllCloth() {
    const { data, loading, error } = useProductData();
    const { id } = useParams();
    const categoryId = String(id || 'all').toLowerCase();
    const [save, setSave] = useState(false);

    const filteredProducts = data.filter((item) => {
        const productCategory = String(item?.productTag?.cloth || '').toLowerCase();
        return categoryId === 'all' || productCategory === categoryId;
    });
    const [savedProducts, setSavedProducts] = useState(() => new Set());

    const toggleSave = (event, productName) => {
        event.preventDefault();
        event.stopPropagation();
        setSavedProducts((current) => {
            const next = new Set(current);
            if (next.has(productName)) {
                next.delete(productName);
            } else {
                next.add(productName);
            }
            return next;
        });
    };

    return (
        <div className='allCloth-main'>
            {loading && <div>loading...</div>}
            {error && <div>There is problem to fetch the data...</div>}

            <div className='allCloth-cont-main'>
                {!loading && !error && filteredProducts.length === 0 && (
                    <div className='allCloth-empty'>No products found for “{id || 'all'}”.</div>
                )}

                {!loading && !error && filteredProducts.map((items, index) => {
                    const isSaved = savedProducts.has(items.productName);
                    return (
                        <NavLink to={`/product/${items.productName}`} key={items.productName || index} className='allCloth-cont'>
                            <div
                                className="allCloth-bookmark-wraper"
                                onClick={(event) => toggleSave(event, items.productName)}
                            >
                                <div className='allCloth-Bookmark'>
                                    {isSaved ? <i className='ri-bookmark-fill'></i> : <i className='ri-bookmark-line'></i>}
                                </div>
                            </div>
                            <LazyImage src={items.productImage} alt={items.productName} />
                            <div className='allCloth-details'>
                                <h2>{items.productName}</h2>
                                <div className='allCloth-price'>
                                    <div className="allCloth-price-wrap">
                                        {items.productPriceOff && <p>₹{items.productPrice - (Math.floor(items.productPrice*items.productPriceOff/100))}</p>}
                                        <p>₹{items.productPrice}</p>
                                    </div>
                                    { items.productPriceOff > 0 && <div className="productDiscount">-{items.productPriceOff}%</div> }
                                </div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}

export default AllCloth
