import { useEffect, useState } from 'react';

const getApiBaseUrl = () => {
    const envUrl = import.meta.env.VITE_API_BASE_URL;
    if (envUrl) {
        return envUrl.replace(/\/+$/, '');
    }

    if (typeof window !== 'undefined' && window.location?.protocol) {
        return `${window.location.protocol}//localhost:4000`;
    }

    return 'http://localhost:4000';
};

export const productData = async () => {
    try {
        const response = await fetch(`${getApiBaseUrl()}/api/user/all-users`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
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
                const users = Array.isArray(result?.users) ? result.users : [];
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