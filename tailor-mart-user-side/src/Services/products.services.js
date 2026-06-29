import { useEffect, useState } from 'react';

const getApiBaseUrl = () => {
    const envUrl = import.meta.env.VITE_API_BASE_URL;
    if (envUrl) {
        return envUrl.replace(/\/+$/, '');
    }

    return 'http://localhost:400';
};

export const PRODUCT_DATA_MODE = {
// Set VITE_PRODUCT_DATA_MODE=mock to use local test data,
// or VITE_PRODUCT_DATA_MODE=api to fetch from the real backend.export const PRODUCT_DATA_MODE = {
    API: 'api',
    MOCK: 'mock'
};

export const PRODUCT_DATA_MODE_DEFAULT =
    import.meta.env.VITE_PRODUCT_DATA_MODE === PRODUCT_DATA_MODE.MOCK
        ? PRODUCT_DATA_MODE.MOCK
        : PRODUCT_DATA_MODE.API;

export const USE_MOCK_PRODUCT_DATA = PRODUCT_DATA_MODE_DEFAULT === PRODUCT_DATA_MODE.MOCK;

export const TEST_PRODUCT_DATA = [
  {
    productImage: "https://plus.unsplash.com/premium_photo-1772492086300-83aaaa09eda9?q=80&w=626&auto=format&fit=crop",
    productTitle: "A smooth (#7D5331) texture",
    productName: "yellow cloth",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 498,
    productPriceOff: 9,
    productViews: 554,
    productColor: "yellow",
    productBrand: 'Nitin tyagi, jiminapur',
    productStocks: 45,
    productSize: [{M:"M"}, {L:"L"}, {XL:"XL"}],
    productTag: { cloth: "smooth cloth" },
    productMoreImage: {
      _0: "https://plus.unsplash.com/premium_photo-1772492086300-83aaaa09eda9?q=80&w=626&auto=format&fit=crop",
      _1: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=500&auto=format&fit=crop&q=60",
      _2: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-1671656349296-9355f2d91565?w=500&auto=format&fit=crop&q=60",
    productTitle: "A smooth (Brown) texture tshirts",
    productName: "smooth Brown cloth",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 583,
    productPriceOff: 15,
    productViews: 402,
    productColor: "Brown",
    productoffers: "50%",
    productBrand: 'Ramnaresh, ramgadh',
    productStocks: 120,
    productSize: [{S:"S"}, {M:"M"}, {L:"L"}, {XL:"XL"}, {XXL:"XXL"}],
    productTag: { cloth: "men-t-shirt", test: "test" },
    productMoreImage: {
      _0: "https://plus.unsplash.com/premium_photo-1671656349296-9355f2d91565?w=500&auto=format&fit=crop&q=60",
      _1: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60",
      _2: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500&auto=format&fit=crop&q=60",
    productTitle: "A smooth texture (kahi) dress",
    productName: "smooth kahi dress",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 2199,
    productPriceOff: 18,
    productViews: 254,
    productBrand: 'bhuvaneshwar tailor, jamilpur',
    productStocks: 15,
    productSize: [{S:"S"}, {M:"M"}, {L:"L"}],
    productTag: { cloth: "women-dress" },
    productMoreImage: {
      _0: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500&auto=format&fit=crop&q=60",
      _1: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&auto=format&fit=crop&q=60",
      _2: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60",
    productTitle: "A smooth texture (kahi) dress",
    productName: "smooth red top",
    productLoanchDate: "06/17/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 2499,
    productPriceOff: 22,
    productViews: 254,
    productBrand: 'soni jaiswal, gorakhpur',
    productStocks: 30,
    productSize: [{M:"M"}, {L:"L"}, {XL:"XL"}],
    productTag: { cloth: "women-dress" },
    productMoreImage: {
      _0: "https//images.unsplash.com/photo-1503342394128-c104d54dba01?w=500&auto=format&fit=crop&q=60",
      _1: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&auto=format&fit=crop&q=60",
      _2: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-1674748732485-3442361b54ec?w=500&auto=format&fit=crop&q=60",
    productTitle: "A smooth (red) texture",
    productName: "smooth red cloth",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 978,
    productPriceOff: 7,
    productViews: 654,
    productBrand: '',
    productStocks: 62,
    productSize: [{M:"M"}, {L:"L"}, {XL:"XL"}, {XXL:"XXL"}],
    productTag: { cloth: "smooth red cloth" },
    productMoreImage: {
      _0: "https//images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&auto=format&fit=crop&q=60",
      _1: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=500&auto=format&fit=crop&q=60",
      _2: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=400&auto=format&fit=crop&q=60",
    productTitle: "Golden coat",
    productName: "smooth golden coat",
    productLoanchDate: "06/17/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 1599,
    productPriceOff: 15,
    productViews: 174,
    productBrand: '',
    productStocks: 25,
    productSize: [{L:"L"}, {XL:"XL"}, {XXL:"XXL"}],
    productTag: { cloth: "coat" },
    productMoreImage: {
      _0: "https//images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60",
      _1: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=60",
      _2: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=765&auto=format&fit=crop",
    productTitle: "Classic Fit Pure Cotton Formal Shirt",
    productName: "Men's Formal White Shirt",
    productLoanchDate: "06/21/2026",
    productDescrption: "Crisp white formal shirt made with premium high-grade cotton weave for daily office wear.",
    productPrice: 1499,
    productPriceOff: 25,
    productViews: 645,
    productBrand: '',
    productStocks: 75,
    productSize: [{S:"S"}, {M:"M"}, {L:"L"}, {XXL:"XXL"}],
    productTag: { cloth: "men-shirt" },
    productMoreImage: {
      _0: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=765&auto=format&fit=crop",
      _1: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60",
      _2: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60",
    productTitle: "Heavy Denim Slim Fit Ripped Jeans",
    productName: "Slim Fit Blue Jeans",
    productLoanchDate: "06/22/2026",
    productDescrption: "Durable stretch denim ripped jeans carefully crafted for modern fashion trendsets.",
    productPrice: 2299,
    productPriceOff: 30,
    productViews: 1432,
    productBrand: '',
    productStocks: 38,
    productSize: [{M:"M"}, {L:"L"}, {XL:"XL"}],
    productTag: { cloth: "jeans" },
    productMoreImage: {
      _0: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60",
      _1: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&auto=format&fit=crop&q=60",
      _2: "https://images.unsplash.com/photo-1481981102353-35d811422975?w=500&auto=format&fit=crop&q=60"
    }
  }
]

export const productData = async ({ useMock = USE_MOCK_PRODUCT_DATA, fallbackToMock = true } = {}) => {
    if (useMock) {
        return TEST_PRODUCT_DATA;
    }

    try {
        const response = await fetch(`${getApiBaseUrl()}/api/user/all-users`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        if (fallbackToMock) {
            return TEST_PRODUCT_DATA;
        }
        throw error;
    }
};

export const useProductData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const loadData = async () => {
            setLoading(true);
            setError(null);

            try {
                const result = await productData();
                const users = Array.isArray(result)
                    ? result
                    : Array.isArray(result?.users)
                    ? result.users
                    : [];
                if (isMounted) setData(users);
            } catch (err) {
                if (isMounted) setError(err);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        loadData();

        return () => {
            isMounted = false;
        };
    }, []);

    return { data, loading, error };
};