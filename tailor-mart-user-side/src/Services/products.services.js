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
    productStocks: 45,
    productTag: { cloth: "smooth cloth" },
    productMoreImage: {
      _0: "https://plus.unsplash.com/premium_photo-1772492086300-83aaaa09eda9?q=80&w=626&auto=format&fit=crop",
     _1:"https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=500&auto=format&fit=crop&q=60",
     _2:"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60"
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
    productStoks: 120,
    productTag: { cloth: "men-t-shirt", test:"test" },
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
    productStocks: 15,
    productTag: { cloth: "women-dress" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60",
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
    productStocks: 30,
    productTag: { cloth: "women-dress" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1503342394128-c104d54dba01?w=500&auto=format&fit=crop&q=60",
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
    productStocks: 62,
    productTag: { cloth: "smooth red cloth" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-1670044658714-686e136babc0?w=500&auto=format&fit=crop&q=60",
    productTitle: "A smooth (Golden) texture",
    productName: "smooth golden cloth",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 1599,
    productPriceOff: 12,
    productViews: 674,
    productStocks: 18,
    productTag: { cloth: "smooth golden cloth" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1605497746444-ac9da58480a8?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=400&auto=format&fit=crop&q=60",
    productTitle: "Golden coart",
    productName: "smooth golden coart",
    productLoanchDate: "06/17/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 1599,
    productPriceOff: 15,
    productViews: 174,
    productStocks: 25,
    productTag: { cloth: "coart" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1590616270936-b0d59ffe2a5a?w=500&auto=format&fit=crop&q=60",
    productTitle: "Sooti multi color Shirts",
    productName: "Sooti multi color Shirts",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 883,
    productPriceOff: 5,
    productViews: 54,
    productStocks: 80,
    productTag: { cloth: "men-shirt" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-1672883552394-3bfc0ff6c865?w=500&auto=format&fit=crop&q=60",
    productTitle: "Multi color T-shirts custom based",
    productName: "Multi color T-shirts custom based",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 533,
    productPriceOff: 10,
    productViews: 464,
    productStocks: 140,
    productTag: { cloth: "men-t-shirt" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1479064555552-3ef4979f8908?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1624373607006-348f61ea2d76?w=500&auto=format&fit=crop&q=60",
    productTitle: "A smooth (Red) smooth T-shirt",
    productName: "smooth Red smooth T-shirt",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 583,
    productPriceOff: 20,
    productViews: 344,
    productStocks: 95,
    productTag: { cloth: "men-t-shirt" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1608748010899-18f300247112?w=400&auto=format&fit=crop&q=60",
    productTitle: "A smooth (Red) smooth T-shirt",
    productName: "smooth Red smooth T-shirt",
    productLoanchDate: "06/17/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 583,
    productPriceOff: 15,
    productViews: 344,
    productStocks: 70,
    productTag: { cloth: "men-t-shirt" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-1744406927803-ee5139d464ce?w=500&auto=format&fit=crop&q=60",
    productTitle: "A smooth (kahi) texture",
    productName: "smooth kahi cloth",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 882,
    productPriceOff: 8,
    productViews: 192,
    productStocks: 50,
    productTag: { cloth: "smooth kahi cloth" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1612731486606-2614b4d74921?w=500&auto=format&fit=crop&q=60",
    productTitle: "A smooth (glossy white) texture",
    productName: "smooth glossy white cloth",
    productLoanchDate: "06/17/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 2023,
    productPriceOff: 12,
    productViews: 2023,
    productStocks: 12,
    productTag: { cloth: "smooth glossy white cloth" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-1738784058063-8d7af3370af2?w=500&auto=format&fit=crop&q=60",
    productTitle: "A smooth (glossy white) texture",
    productName: "smooth glossy white cloth",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 2023,
    productPriceOff: 10,
    productViews: 850,
    productStocks: 22,
    productTag: { cloth: "smooth glossy white cloth" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=500&auto=format&fit=crop&q=60",
    productTitle: "A royal blue dress",
    productName: "A royal blue dress",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 7899,
    productPriceOff: 25,
    productViews: 1204,
    productStocks: 8,
    productTag: { cloth: "women-dress" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-1772492085660-b4db800a8435?w=500&auto=format&fit=crop&q=60",
    productTitle: "A smooth (glossy sky blue) texture",
    productName: "smooth glossy sky blue cloth",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 2134,
    productPriceOff: 15,
    productViews: 673,
    productStocks: 14,
    productTag: { cloth: "smooth glossy sky blue cloth" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-1778901739863-7764fdca5848?w=500&auto=format&fit=crop&q=60",
    productTitle: "A culture saree",
    productName: "A culture saree",
    productLoanchDate: "06/17/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 3899,
    productPriceOff: 20,
    productViews: 1430,
    productStocks: 35,
    productTag: { cloth: "women-saree" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1597897569252-9df44c7de0db?w=500&auto=format&fit=crop&q=60",
    productTitle: "A culture saree",
    productName: "A culture saree",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 3899,
    productPriceOff: 10,
    productViews: 948,
    productStocks: 40,
    productTag: { cloth: "women-saree", season:'every season' },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=500&auto=format&fit=crop&q=60",
    productTitle: "Office based custom shirts",
    productName: "Office based custom sweater",
    productLoanchDate: "06/17/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 683,
    productPriceOff: 5,
    productViews: 428,
    productStocks: 55,
    productTag: { cloth: "sweater", season:'winter' },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-1723568617048-8ba7f42e5fec?w=500&auto=format&fit=crop&q=60",
    productTitle: "Office based custom shirts",
    productName: "Office based custom shirts",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 683,
    productPriceOff: 12,
    productViews: 310,
    productStocks: 85,
    productTag: { cloth: "men-shirt" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1627910016961-ee310ef0b108?w=500&auto=format&fit=crop&q=60",
    productTitle: "A smooth (Black) texture tshirts",
    productName: "smooth Black Tshirt",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 583,
    productPriceOff: 15,
    productViews: 490,
    productStocks: 110,
    productTag: { cloth: "men-t-shirt" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-1708110921381-5da0d7eb2e0f?w=500&auto=format&fit=crop&q=60",
    productTitle: "sweater",
    productName: "sweater",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 1674,
    productPriceOff: 18,
    productViews: 1674,
    productStocks: 20,
    productTag: { cloth: "sweater", season:'winter' },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1764287336801-5ba6b81dceae?w=500&auto=format&fit=crop&q=60",
    productTitle: "Saree",
    productName: "Saree",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 1674,
    productPriceOff: 20,
    productViews: 512,
    productStocks: 42,
    productTag: { cloth: "women-saree" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-172954385679-7ed03fe2fead?w=500&auto=format&fit=crop&q=60",
    productTitle: "A smooth (glossy textured maroon) texture",
    productName: "smooth glossy textured maroon cloth",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 1674,
    productPriceOff: 10,
    productViews: 389,
    productStocks: 16,
    productTag: { cloth: "smooth glossy textured maroon cloth" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-1725075088969-73798c9b422c?w=500&auto=format&fit=crop&q=60",
    productTitle: "sooti shirts custom based",
    productName: "sooti shirts custom based",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 478,
    productPriceOff: 5,
    productViews: 245,
    productStocks: 90,
    productTag: { cloth: "men-shirt" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://plus.unsplash.com/premium_photo-1689565524694-88720c282271?w=500&auto=format&fit=crop&q=60",
    productTitle: "A smooth (gray) texture T-shirt",
    productName: "smooth gray T-shirt",
    productLoanchDate: "06/14/2026",
    productDescrption: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
    productPrice: 583,
    productPriceOff: 12,
    productViews: 841,
    productStocks: 65,
    productTag: { cloth: "men-t-shirt" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60",
    productTitle: "Trendy Casual Yellow One-Piece",
    productName: "Casual Yellow Dress",
    productLoanchDate: "06/18/2026",
    productDescrption: "Lightweight and breathable yellow summer dress ideal for beach outings and casual meetups.",
    productPrice: 1899,
    productPriceOff: 15,
    productViews: 920,
    productStocks: 28,
    productTag: { cloth: "women-dress" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&auto=format&fit=crop&q=60",
    productTitle: "High-End Premium Designer Coat",
    productName: "Designer Winter Coat",
    productLoanchDate: "06/19/2026",
    productDescrption: "Finely crafted winter coat offering maximum insulation with an elegant tailored fit.",
    productPrice: 4599,
    productPriceOff: 20,
    productViews: 1105,
    productStocks: 10,
    productTag: { cloth: "coat" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60",
    productTitle: "Chic Streetwear Crop Top Hoodie",
    productName: "Streetwear Crop Hoodie",
    productLoanchDate: "06/20/2026",
    productDescrption: "Modern streetwear crop top style hoodie designed for comfort and ultimate aesthetic look.",
    productPrice: 1299,
    productPriceOff: 10,
    productViews: 734,
    productStocks: 50,
    productTag: { cloth: "women-top" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1503342394128-c104d54dba01?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60"
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
    productStocks: 75,
    productTag: { cloth: "men-shirt" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60",
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
    productStocks: 38,
    productTag: { cloth: "jeans" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1481981102353-35d811422975?w=500&auto=format&fit=crop&q=60"
    }
  },
  {
    productImage: "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?w=500&auto=format&fit=crop&q=60",
    productTitle: "Traditional Silk Jacquard Dupatta Set",
    productName: "Traditional Dupatta Set",
    productLoanchDate: "06/23/2026",
    productDescrption: "Elegant luxury traditional ethnic wear suit matching with heavy silk jacquard dupatta.",
    productPrice: 3499,
    productPriceOff: 15,
    productViews: 810,
    productStocks: 15,
    productTag: { cloth: "ethnic-wear" },
    productMoreImage: {
     _0:"https//images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=60",
     _1: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60",
     _2: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=60"
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