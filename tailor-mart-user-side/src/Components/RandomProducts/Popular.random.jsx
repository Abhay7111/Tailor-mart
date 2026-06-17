import { useEffect, useState } from "react";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../Pages/Feed/Feed.css'
import { useProductData } from "../../Services/products.services";
import { NavLink } from "react-router-dom";

function Popular_random() {
  const { data, loading, error } = useProductData();

  useEffect(() => {
    if (data.length > 0) {
      new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      spaceBetween: 5,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });
    }
  }, [data]);
  
  let feedPopular = (items) => (
    <NavLink to={`/product/${items.productName}`} className="swiper-slide">
        <img src={items.productImage} alt="" />
      </NavLink>
  )
  const CACHE_KEY = 'random';
  const CACHE_TTL = 5000; // 5 seconds in milliseconds

  const getCachedRandom = () => {
    const stored = localStorage.getItem(CACHE_KEY);
    if (!stored) return null;

    try {
      const parsed = JSON.parse(stored);
      return parsed?.expiresAt > Date.now() && Array.isArray(parsed.value) ? parsed.value : null;
    } catch {
      return null;
    }
  };

  const cached = getCachedRandom();

  const getUniqueRandomIndexes = (length, count) => {
    const maxItems = Math.min(count, length);
    const indexes = new Set();
    while (indexes.size < maxItems) {
      indexes.add(Math.floor(Math.random() * length));
    }
    return Array.from(indexes);
  };

  const [randomIndexes, setRandomIndexes] = useState(cached ?? []);

  useEffect(() => {
    if (data.length > 0 && (randomIndexes.length === 0 || !getCachedRandom())) {
      const indexes = getUniqueRandomIndexes(data.length, 5);
      setRandomIndexes(indexes);
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ value: indexes, expiresAt: Date.now() + CACHE_TTL })
      );
    }
  }, [data]);

  // Map the cached random indexes to actual product data
  const popularProduct = randomIndexes.map(index => data[index]).filter(Boolean);

  return (
    <div className="feed-popular-cont swiper">
        {loading && <div>Loading...</div>}
        <div className="feed-popular-wrap swiper-wrapper">
          {!loading && popularProduct.length > 0 && 
            popularProduct.map((item, index) => (
            <div key={item.id || index} className="feed-popular-inner swiper-slide">
              {feedPopular(item, index)}
            </div>
            ))
          }
        </div>
      </div>
  )
}

export default Popular_random
