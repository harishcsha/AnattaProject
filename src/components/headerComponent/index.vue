<template>
  <header>
    <p>FREE US SHIPPING & RETURN</p>
  </header>
</template>
<script>
export default {
  name: "headerIndex"
};
</script>

<style lang="scss">
@import "./../../assets/scss/_utils.scss";

header {
  background-color: #000000;
}
p {
  color: #ffffff;
  text-align: center;
  padding: 20px;
  @include respond-to(xs) {
    font-size: 15px;
  }
}
</style>