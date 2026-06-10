import { useEffect, useState } from "react";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../Pages/Feed/Feed.css'

function Popular_random() {
     let arrPopular = [
    {
      productName:'red',
      productImage: 'https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
      productPopular: true,
      productViews: 454,
    },
    {
      productName:'smokey white',
      productImage: 'https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
      productPopular: true,
      productViews: 554,
    },
    {
      productName:'Brown',
      productImage: 'https://images.unsplash.com/photo-1608748010899-18f300247112?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
      productPopular: true,
      productViews: 424,
    },
    {
      productName:'Black',
      productImage: 'https://images.unsplash.com/photo-1612731486606-2614b4d74921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
      productPopular: true,
      productViews: 624,
    },
    {
      productName:'white',
      productImage: 'https://images.unsplash.com/photo-1566206091558-7f218b696731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
      productPopular: true,
      productViews: 424,
    },
    {
      productName:'Red Last',
      productImage: 'https://plus.unsplash.com/premium_photo-1708110921381-5da0d7eb2e0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxmYXNoaW9ufGVufDB8fDB8fHww',
      productPopular: true,
      productViews: 401,
    },
    {
      productName:'white',
      productImage: 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
      productPopular: true,
      productViews: 401,
    },
    {
      productName:'multi',
      productImage: 'https://plus.unsplash.com/premium_photo-1778901739863-7764fdca5848?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
      productPopular: true,
      productViews: 401,
    },
  ]

  
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      spaceBetween: 5,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });

    
  }, []);
  
  let feedPopular = (items) => (
    <div className="swiper-slide">
        <img src={items.productImage} alt="" />
      </div>
  )
  const CACHE_KEY = 'random';
  const CACHE_TTL = 60 * 1000; // every 60 seconds

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

  const initialRandomIndexes = cached ?? getUniqueRandomIndexes(arrPopular.length, 5);
  const [randomIndexes, setRandomIndexes] = useState(initialRandomIndexes);

  useEffect(() => {
    if (getCachedRandom() === null) {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ value: randomIndexes, expiresAt: Date.now() + CACHE_TTL })
      );
    }
  }, []);

  let popularProduct = arrPopular.filter(item => item.productViews > 400);
  const hasPopularProducts = popularProduct.length > 0;

  return (
    <div className="feed-popular-cont swiper">
        <div className="feed-popular-wrap swiper-wrapper">
          {hasPopularProducts && randomIndexes.map((itemIndex, index) => (
            <div key={index} className="feed-popular-inner swiper-slide">
              {feedPopular(popularProduct[itemIndex], index)}
            </div>
          ))}
        </div>
      </div>
  )
}

export default Popular_random
