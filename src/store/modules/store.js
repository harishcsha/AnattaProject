import Vue from 'vue';
import Vuex from 'vuex';
import { getAllProducts, getAllSingleProductImage, getAllProductImages, getSingleProduct } from '../../service/ServiceCalls.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProducts: [],
    singleImage: [],
    allImages: [],
    product: {}
  },
  getters: {
    getAllProducts: state => state.allProducts,
    getSingleImages: state => state.singleImage,
    getAllImages: state => state.allImages,
    getSingleProduct: state => state.product
  },
  actions: {
    setAllProducts({ commit }) {
      getAllProducts()
        .then(res => {
          let allProducts = res;
          commit('SET_ALL_PRODUCTS', allProducts);
        })
        .catch(e => {
          console.log('From service error --> ', e);
        });
    },
    setAllSingleProductImage({ commit }) {
      getAllSingleProductImage()
        .then(res => {
          let singleImage = res;
          commit('SET_IMAGE', singleImage);
        })
        .catch(e => {
          console.log('From service error --> ', e);
        });
    },
    setAllProductImages({ commit }) {
      getAllProductImages()
        .then(res => {
          let allImages = res;
          commit('SET_ALL_IMAGE', allImages);
        })
        .catch(e => {
          console.log('From service error --> ', e);
        });
    },
    setSingleProduct({ commit }) {
      getSingleProduct()
        .then(res => {
          let product = res;
          commit('SET_PRODUCT', product);
        })
        .catch(e => {
          console.log('From service error --> ', e);
        });
    }
  },
  mutations: {
    SET_ALL_PRODUCTS: (state, allProducts) => {
      state.allProducts = allProducts;
    },
    SET_IMAGE: (state, singleImage) => {
      state.singleImage = singleImage;
    },
    SET_ALL_IMAGE: (state, allImages) => {
      state.allImages = allImages;
    },
    SET_PRODUCT: (state, product) => {
      state.product = product;
    }
  }
});
