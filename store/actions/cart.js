/* eslint-disable prettier/prettier */
export const ADD_TO_CART = 'ADD_TO_CART';

export const addTocart = product => {
    return {
        type: ADD_TO_CART,
        product
    }
};