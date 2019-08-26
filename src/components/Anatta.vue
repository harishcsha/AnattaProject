<template>
  <div>
    <header-component />
    <selection-component />
    <product-details />
    <recommended-view />
    <faq-view />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "./headerComponent/index.vue";
import SelectionComponent from "./slectionComponent/index.vue";
import ProductDetails from "./productDetails/index.vue";
import RecommendedView from "./recommendedComponent/index.vue";
import faqView from "./faqComponent/index.vue";
import FooterComponent from "./footerComponent/index.vue";
// import { getAllProducts, getAllProductImages, getAllSingleProductImage } from "./../service/ServiceCalls.js";
import { mapActions } from "vuex";

export default {
  name: "Anatta",
  components: {
    HeaderComponent,
    SelectionComponent,
    ProductDetails,
    RecommendedView,
    faqView,
    FooterComponent
  },
  methods: {
    ...mapActions([
      "setAllProducts",
      "setAllSingleProductImage",
      "setAllProductImages",
      "setSingleProduct"
    ])
  },
  created() {
    this.setAllProducts();
    this.setAllSingleProductImage();
    this.setAllProductImages();
    this.setSingleProduct();
  }
};
</script>