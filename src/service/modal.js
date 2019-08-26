export let store = {
  state: {
    allProducts: {},
    allImages: {},
    images: {}
  },

  setAllProducts: function(products) {
    console.log('All Products -->', products);
    return (this.state.allProducts = products);
  },

  setAllProductImages: function(images) {
    console.log('All images -->', images);
    return (this.state.allImages = images);
  },

  setAllSingleProductImage: function(image) {
    console.log('image -->', image);
    return (this.state.images = image);
  }
};
