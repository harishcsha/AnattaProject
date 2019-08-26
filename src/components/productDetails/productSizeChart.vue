<template>
  <div class="productSizeChart__Container">
    <div class="productSizeChart__Container--gender">< MEN</div>
    <div class="productSizeChart__Container--specifications">
      <div class="productSizeChart__Container--specifications--itemDetails">
        <P
          class="productSizeChart__Container--specifications--itemDetailsName"
        >{{getSingleProduct.name}}</P>
        <P
          class="productSizeChart__Container--specifications--itemDetailsSubname"
        >{{getSingleProduct.description}}</P>
      </div>
      <div class="productSizeChart__Container--specifications--priceDetails">
        <P
          class="productSizeChart__Container--specifications--priceDetailsInfo"
        >$ {{getSingleProduct.price}} USD</P>
        <div class="productSizeChart__Container--specifications--priceDetailsRatings">
          <star-Ratings />
          <span>154 Reviews</span>
        </div>
      </div>
    </div>
    <div class="productChooise">
      <size-chart />
    </div>
  </div>
</template>
<script>
import StarRatings from "./starratings.vue";
import SizeChart from "./sizeChart.vue";
import { mapGetters } from "vuex";

export default {
  name: "ProductSizeChart",
  components: {
    StarRatings,
    SizeChart
  },
  computed: {
    ...mapGetters(["getSingleProduct"])
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/_utils.scss";

.productSizeChart__Container {
  display: inline-block;
  padding: 30px 30px 30px 110px;
  width: 30%;
  @include respond-to(xs) {
    padding: 0;
    width: 80%;
    margin: 0 auto;
    display: table;
  }
  &--gender {
    color: gray;
    font-size: 14px;
    @include respond-to(xs) {
      display: none;
    }
  }
  &--specifications {
    margin-top: 10px;
    &--itemDetails {
      display: inline-block;
      vertical-align: middle;
      width: 45%;
    }
    &--itemDetailsName {
      font-weight: bold;
      text-align: left;
      color: #000;
      font-size: 22px;
      padding: 0;
      @include respond-to(xs) {
        font-size: 18px;
      }
    }
    &--itemDetailsSubname {
      color: gray;
      font-size: 14px;
      padding: 0;
      text-align: left;
      @include respond-to(xs) {
        font-size: 10px;
      }
    }
    &--priceDetails {
      display: inline-block;
      vertical-align: middle;
      width: 50%;
    }
    &--priceDetailsInfo {
      color: gray;
      font-size: 14px;
      padding: 0;
      text-align: right;
      @include respond-to(xs) {
        font-size: 10px;
      }
    }
    &--priceDetailsRatings {
      padding: 0;
    }
    span {
      font-size: 12px;
      color: gray;
    }
  }
}
</style>