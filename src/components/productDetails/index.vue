<template>
  <div>
    <product-SizeChart />
    <product-View />
  </div>
</template>

<script>
import ProductSizeChart from "./productSizeChart.vue";
import ProductView from "./ProductView.vue";

export default {
  name: "ProductIndex",
  components: {
    ProductSizeChart,
    ProductView
  }
};
</script>
<style lang="scss">
</style>