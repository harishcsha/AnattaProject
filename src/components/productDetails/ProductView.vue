<template>
  <div class="productView__Container">
    <div class="ui_carousel ui_carousel-thumbs">
      <input
        type="radio"
        v-for="(item, index) in getSingleImages"
        :id="`image-${index+1}-t`"
        name="ui_carousel-t"
        checked
      />
      <label v-for="(item, index) in getSingleImages" :for="`image-${index+1}-t`"></label>

      <div class="ui_carousel-thumbnails">
        <label
          v-for="(item, index) in getSingleImages"
          :for="`image-${index+1}-t`"
          class="ui_carousel-thumb-image"
        >
          <img :src="item.url" alt />
        </label>
      </div>
      <div class="ui_carousel-images">
        <img v-for="(item, index) in getSingleImages" :src="item.url" alt />
      </div>
    </div>
  </div>
</template>
<script>
import { store } from "./../../service/modal.js";
import { mapGetters } from "vuex";

export default {
  name: "ProductView",
  computed: {
    ...mapGetters(["getSingleImages"])
  }
};
</script>
<style lang="scss">
@import "./../../assets/scss/_utils.scss";

.productView__Container {
  display: inline-block;
  vertical-align: middle;
  $carouselHeight: 500px;
  $carouselWidth: 786px;
  $numThumbs: 5;

  .ui_carousel label {
    width: auto;
  }

  .ui_carousel {
    margin: 0px auto 20px;
    position: relative;
  }

  .ui_carousel-thumbs {
    height: $carouselHeight + 100;
    overflow: hidden;
    position: relative;
    width: $carouselWidth;

    @include respond-to(xs) {
      height: 230px;
      width: 270px;
      top: 0px;
      left: 30px;
    }
  }

  .ui_carousel-thumbs input[type="radio"] {
    display: none;
  }

  .ui_carousel-thumbs .ui_carousel-images {
    background-color: #000;
    border-radius: 5px;
    height: $carouselHeight;
    transition: transform 0.5s ease 0s;
  }

  .ui_carousel-thumbs .ui_carousel-thumbnails {
    top: 86%;
    position: absolute;
    text-align: center;
    width: $carouselWidth;
    z-index: 5;
    @include respond-to(xs) {
      top: 76%;
      width: 266px;
    }
  }

  .ui_carousel-thumbs .ui_carousel-thumbnails .ui_carousel-thumb-image {
    display: inline-block;
    list-style-type: none;
    margin: 0 5px;
  }

  .ui_carousel-thumb-image img {
    border-radius: 5px;
    height: 45px;
    opacity: 0.65;
    transition: all 0.3s ease;
    width: 65px;
    @include respond-to(xs) {
      height: 40px;
      opacity: 1;
      width: 40px;
    }
  }

  .ui_carousel-thumb-image img:hover {
    opacity: 1;
    transform: scale(1.5);
  }

  .ui_carousel-thumbs .ui_carousel-images img {
    border-radius: 5px;
    position: absolute;
    top: 0;
    transition: all 0.5s ease;
  }

  @for $i from 1 through $numThumbs {
    .ui_carousel-thumbs .ui_carousel-images > img:nth-of-type(#{$i}) {
      $i: $i - 1;
      transform: translateX(#{$i * 100%});
      opacity: 0.5;
    }
  }

  .ui_carousel-thumbs
    input[type="radio"]:nth-of-type(1):checked
    ~ .ui_carousel-images {
    transform: translateX(0%);
  }

  @for $i from 1 through ($numThumbs - 1) {
    .ui_carousel-thumbs
      input[type="radio"]:nth-of-type(#{$i + 1}):checked
      ~ .ui_carousel-images {
      transform: translateX(#{$i * -100%});
      top: 0;
    }
  }

  @mixin setOpacity($num) {
    $foo: "";
    @for $i from 1 through $num {
      $foo: $foo +
        ".ui_carousel-thumbs input[type=radio]:nth-of-type(" +
        $i +
        "):checked ~ .ui_carousel-images img:nth-of-type(" +
        $i +
        "),
         ";
    }

    #{$foo} {
      @content;
    }
  }

  @include setOpacity($numThumbs) {
    opacity: 1;
  }

  .ui_carousel-images img {
    height: $carouselHeight;
    width: $carouselWidth;
    @include respond-to(xs) {
      height: 270px;
      width: 270px;
    }
  }
}
</style>