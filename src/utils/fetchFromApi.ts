import axios from "axios";

const BASE_URL = 'https://fakestoreapi.com/products/';

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`, { responseType: 'json' });

        if (response.status !== 200) throw new Error('Failed to load products');

        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to load products');
    }
}

export const getProductsByCategory = async (category: string) => {
    try {
        const endpoint = 'category/';
        const response = await axios.get(`${BASE_URL}${endpoint}${category}`, { responseType: 'json' });

        if (response.status !== 200) throw new Error('Failed to load products');

        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to load products');
    }
}