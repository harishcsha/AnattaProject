<template>
  <div class="faqComponent--Container">
    <div class="faqContent">
      <img src="./../../assets/images/secure.png" class="secure_img" alt />
      <p class="contentText">Secure Payment</p>
    </div>
    <div class="faqContent">
      <img src="./../../assets/images/airplane.png" class="airplane_img" alt />
      <p class="contentText">Express Shipping</p>
    </div>
    <div class="faqContent">
      <img src="./../../assets/images/shoppingBag.png" class="shoppingBag_img" alt />
      <p class="contentText">Free Returns</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "faqComponent"
};
</script>
<style lang="scss">
@import "./../../assets/scss/_utils.scss";
.faqComponent--Container {
  width: 100%;
  background-color: #e5e5e5;
  text-align: center;
  margin-top: 10%;
  .faqContent {
    display: inline-block;
    &:nth-child(1),
    &:nth-child(2) {
      margin: 10px;
      border-right: 1px solid #bfbfbf;
      height: 30px;
      padding-right: 20px;
    }
    .secure_img,
    .airplane_img,
    .shoppingBag_img {
      display: inline-block;
      width: 30px;
      vertical-align: middle;
    }
    .contentText {
      display: inline-block;
      color: #7c7c7c;
      padding: 0 15px;
      font-weight: bold;
    }
  }
}
</style>