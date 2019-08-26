<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./assets/scss/_utils.scss";

* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: "Lato", sans-serif;
}
html {
  background-color: #ffffff;
  height: 100%;
  width: 100%;
}
</style>