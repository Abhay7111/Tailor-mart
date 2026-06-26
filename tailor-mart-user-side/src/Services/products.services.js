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
        productImage: "https://plus.unsplash.com/premium_photo-1772492086300-83aaaa09eda9?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productTitle: "A smooth (#7D5331) texture",
        productName: "yellow cloth",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: 498,
        productPriceOff: 9,
        productViews: 554,
        productColor: 'yellow',
        productTag: {
            cloth: "smooth cloth"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1671656349296-9355f2d91565?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1lbi1ULXNoaXJ0fGVufDB8fDB8fHww",
        productMoreImage:[
            {
                image:'',
            },
        ],
        productTitle: "A smooth (Brown) texture tshirts",
        productName: "smooth Brown cloth",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productViews: 402,
        productColor:'Brown',
        productPrice: 583,
        productPriceOff:15,
        productoffers:"50%",
        productTag: {
            cloth: "men-t-shirt"
        }
    },
    {
        productImage: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJlc3N8ZW58MHx8MHx8fDA%3D",
        productTitle: "A smooth texture (kahi) dress",
        productName: "smooth kahi dress",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: 2199,
        productPriceOff: 18,
        productViews: 254,
        productTag: {
            cloth: "women-dress"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        productTitle: "A smooth texture (kahi) dress",
        productName: "smooth red top",
        productLonchDate: "06/17/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: 2499,
        productPriceOff: 22,
        productViews: 254,
        productTag: {
            cloth: "women-dress"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1674748732485-3442361b54ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8",
        productTitle: "A smooth (red) texture",
        productName: "smooth red cloth",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: 978,
        productPriceOff: '7',
        productViews: 654,
        productTag: {
            cloth: "smooth red cloth"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1670044658714-686e136babc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcyfHx8ZW58MHx8fHx8",
        productTitle: "A smooth (Golden) texture",
        productName: "smooth golden cloth",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "1599",
        productViews: 674,
        productTag: {
            cloth: "smooth golden cloth"
        }
    },
    {
        productImage: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        productTitle: "Golden coart",
        productName: "smooth golden coart",
        productLonchDate: "06/17/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "1599",
        productViews: 174,
        productTag: {
            cloth: "coart"
        }
    },
    {
        productImage: "https://images.unsplash.com/photo-1590616270936-b0d59ffe2a5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZ1bGwlMjBzbGl2cyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
        productTitle: "Sooti multi color Shirts",
        productName: "Sooti multi color Shirts",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "883",
        productViews: 54,
        productTag: {
            cloth: "men-shirt"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1672883552394-3bfc0ff6c865?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxmdWxsJTIwc2xpdnMlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D",
        productTitle: "Multi color T-shirts custom based",
        productName: "Multi color T-shirts custom based",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "533",
        productViews: 464,
        productTag: {
            cloth: "men-t-shirt"
        }
    },
    {
        productImage: "https://images.unsplash.com/photo-1624373607006-348f61ea2d76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxUbUdWY0RKdkZLRXx8ZW58MHx8fHx8",
        productTitle: "A smooth (Red) smooth T-shirt",
        productName: "smooth Red smooth T-shirt",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "583",
        productViews: 344,
        productTag: {
            cloth: "men-t-shirt"
        }
    },
    {
        productImage: "https://images.unsplash.com/photo-1608748010899-18f300247112?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        productTitle: "A smooth (Red) smooth T-shirt",
        productName: "smooth Red smooth T-shirt",
        productLonchDate: "06/17/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "583",
        productViews: 344,
        productTag: {
            cloth: "men-t-shirt"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1744406927803-ee5139d464ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNHx8fGVufDB8fHx8fA%3D%3D",
        productTitle: "A smooth (kahi) texture",
        productName: "smooth kahi cloth",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "882",
        productTag: {
            cloth: "smooth kahi cloth"
        }
    },
    {
        productImage: "https://images.unsplash.com/photo-1612731486606-2614b4d74921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        productTitle: "A smooth (glossy white) texture",
        productName: "smooth glossy white cloth",
        productLonchDate: "06/17/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "2023",
        productViews: 2023,
        productTag: {
            cloth: "smooth glossy white cloth"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1738784058063-8d7af3370af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExOHx8fGVufDB8fHx8fA%3D%3D",
        productTitle: "A smooth (glossy white) texture",
        productName: "smooth glossy white cloth",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "2023",
        productTag: {
            cloth: "smooth glossy white cloth"
        }
    },
    {
        productImage: "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGRyZXNzfGVufDB8fDB8fHww",
        productTitle: "A royal blue dress",
        productName: "A royal blue dress",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "7899",
        productTag: {
            cloth: "women-dress"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1772492085660-b4db800a8435?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyMHx8fGVufDB8fHx8fA%3D%3D",
        productTitle: "A smooth (glossy sky blue) texture",
        productName: "smooth glossy sky blue cloth",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "2134",
        productTag: {
            cloth: "smooth glossy sky blue cloth"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1778901739863-7764fdca5848?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        productTitle: "A culture saree",
        productName: "A culture saree",
        productLonchDate: "06/17/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "3899",
        productTag: {
            cloth: "women-saree"
        }
    },
    {
        productImage: "https://images.unsplash.com/photo-1597897569252-9df44c7de0db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwY3VsdHVyZSUyMHNhcml8ZW58MHx8MHx8fDA%3D",
        productTitle: "A culture saree",
        productName: "A culture saree",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "3899",
        productTag: {
            cloth: "women-saree"
        }
    },
    {
        productImage: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        productTitle: "Office based custom shirts",
        productName: "Office based custom sweater",
        productLonchDate: "06/17/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "683",
        productViews: 428,
        productTag: {
            cloth: "sweater"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1723568617048-8ba7f42e5fec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVsbCUyMHNsaXZzJTIwc2hpcnRzfGVufDB8fDB8fHww",
        productTitle: "Office based custom shirts",
        productName: "Office based custom shirts",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "683",
        productTag: {
            cloth: "men-shirt"
        }
    },
    {
        productImage: "https://images.unsplash.com/photo-1627910016961-ee310ef0b108?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1lbi1ULXNoaXJ0fGVufDB8fDB8fHww",
        productTitle: "A smooth (Black) texture tshirts",
        productName: "smooth Black Tshirt",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "583",
        productTag: {
            cloth: "men-t-shirt"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1708110921381-5da0d7eb2e0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxmYXNoaW9ufGVufDB8fDB8fHww",
        productTitle: "sweater",
        productName: "sweater",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "1674",
        productViews: 1674,
        productTag: {
            cloth: "sweater"
        }
    },
    {
        productImage: "https://images.unsplash.com/photo-1764287336801-5ba6b81dceae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGluZGlhbiUyMGN1bHR1cmUlMjBzYXJpfGVufDB8fDB8fHww",
        productTitle: "Saree",
        productName: "Saree",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "1674",
        productTag: {
            cloth: "women-saree"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1672954385679-7ed03fe2fead?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyMnx8fGVufDB8fHx8fA%3D%3D",
        productTitle: "A smooth (glossy textured maroon) texture",
        productName: "smooth glossy textured maroon cloth",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "1674",
        productTag: {
            cloth: "smooth glossy textured maroon cloth"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1725075088969-73798c9b422c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVsbCUyMHNsaXZzJTIwc2hpcnRzfGVufDB8fDB8fHww",
        productTitle: "sooti shirts custom based",
        productName: "sooti shirts custom based",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "478",
        productTag: {
            cloth: "men-shirt"
        }
    },
    {
        productImage: "https://plus.unsplash.com/premium_photo-1689565524694-88720c282271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbi1ULXNoaXJ0fGVufDB8fDB8fHww",
        productTitle: "A smooth (gray) texture T-shirt",
        productName: "smooth gray T-shirt",
        productLonchDate: "06/14/2026",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
        productPrice: "583",
        productTag: {
            cloth: "men-t-shirt"
        }
    },
];

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