let services = {
  commonUrl: 'https://anatta-demo-app.herokuapp.com/api'
};

export const endpoints = {
  getAllProducts: `${services.commonUrl}/products`,
  getAllProductImages: `${services.commonUrl}/images`,
  getImages: `${services.commonUrl}/products/3/image`,
  getProduct: `${services.commonUrl}/products/3`
};
