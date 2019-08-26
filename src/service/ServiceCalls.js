import { endpoints } from './../utils/urls.js';
import { store } from './modal.js';
import axios from 'axios';

export const getAllProducts = function() {
  return axios
    .get(endpoints.getAllProducts)
    .then(res => res.data)
    .catch(e => {
      console.log('From service error --> ', e);
    });
};

export const getAllProductImages = function() {
  return axios
    .get(endpoints.getAllProductImages)
    .then(res => res.data)
    .catch(e => {
      console.log('From service error --> ', e);
    });
};

export const getAllSingleProductImage = function() {
  return axios
    .get(endpoints.getImages)
    .then(res => res.data)
    .catch(e => {
      console.log('From service error --> ', e);
    });
};

export const getSingleProduct = function() {
  return axios
    .get(endpoints.getProduct)
    .then(res => res.data)
    .catch(e => {
      console.log('From service error --> ', e);
    });
};
