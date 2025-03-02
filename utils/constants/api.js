import { BASE_URL } from '@/utils/constants/const';

export const API_BASE_URL = `${BASE_URL}/v1`;

export const API_ENDPOINTS = {
    CONTACT_US: {
        SUBMIT: { method: 'POST', url: '/contacts' },
    },
    BOOKING: {
        SUBMIT: { method: 'POST', url: '/bookings' },
    },
    STORE: {
        LIST: { method: 'GET', url: '/store/get-items-user' },
        PRODUCT: { method: 'GET', url: '/store/get-item-user/:id' },
        CART: { method: 'GET', url: '/store/get-user-cart' },
    },
    ORDER: {
        SUBMIT: { method: 'POST', url: '/orders' },
    }
};