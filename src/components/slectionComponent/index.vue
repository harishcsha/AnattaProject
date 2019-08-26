<template>
  <div class="selection__header">
    <div class="selection__header--gender">
      <div class="selection__header--genderMale">MEN</div>
      <div class="selection__header--genderFemale">FEMALE</div>
    </div>
    <div class="selection__header--hambergerIcon">
      <!-- <img class="selection__header--hamberger" src="./../../assets/images/hamburger.png" alt /> -->
      <header class="header">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <a href="#work">MEN</a>
          </li>
          <li>
            <a href="#about">FEMALE</a>
          </li>
          <li>
            <a href="#careers">ABOUT</a>
          </li>
        </ul>
      </header>
    </div>
    <div class="selection__header--logoCntr">
      <img class="selection__header--logo" src="./../../assets/images/AnattaLogo.png" alt />
    </div>
    <div class="selection__header--details">
      <div class="selection__header--aboutDetails">ABOUT</div>
      <div class="selection__header--Icons">
        <img class="selection__header--userIcon" src="./../../assets/images/userIcon.png" alt />
        <img class="selection__header--cartIcon" src="./../../assets/images/bag.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectionComponent"
};
</script>
<style lang="scss">
@import "./../../assets/scss/_utils.scss";

.selection__header {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
  @include respond-to(xs) {
    height: 50px;
  }
  &--gender {
    width: 30%;
    display: inline-block;
    text-align: left;
    @include respond-to(xs) {
      display: none;
    }
  }
  &--genderMale,
  &--genderFemale,
  &--aboutDetails {
    width: 20%;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    padding: 26px;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: #e5e5e5;
    }
    @include respond-to(xs) {
      display: none;
    }
  }
  &--logoCntr {
    width: 30%;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
  }
  &--logo {
    width: 60px;
    @include respond-to(xs) {
      width: 40px;
      padding: 10px;
    }
  }
  &--details {
    width: 30%;
    display: inline-block;
  }
  &--Icons {
    display: inline-block;
    padding-left: 10px;
  }
  &--userIcon,
  &--cartIcon {
    display: inline-block;
    width: 30px;
    padding-left: 30px;
    vertical-align: middle;
    cursor: pointer;
    @include respond-to(xs) {
      padding: 0;
    }
  }
  &--hambergerIcon {
    display: none;
    @include respond-to(xs) {
      display: inline-block;
      width: 20%;
      vertical-align: middle;
    }
  }
  &--hamberger {
    @include respond-to(xs) {
      width: 20px;
    }
  }

  a {
    color: #000;
  }

  /* header */

  .header {
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
    // position: fixed;
    width: 100%;
    z-index: 3;
  }

  .header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }

  .header li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    text-decoration: none;
  }

  .header li a:hover,
  .header .menu-btn:hover {
    background-color: #f4f4f4;
  }

  .header .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
  }

  /* menu */

  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  /* menu icon */

  .header .menu-icon {
    cursor: pointer;
    float: left;
    user-select: none;
  }

  .header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .header .menu-icon .navicon:before {
    top: 5px;
  }

  .header .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */

  .header .menu-btn {
    display: none;
  }

  .header .menu-btn:checked ~ .menu {
    max-height: 240px;
    width: 100%;
    position: fixed;
    right: 0px;
    top: 110px;
    z-index: 999;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  /* 48em = 768px */

  @media (min-width: 48em) {
    .header li {
      float: left;
    }
    .header li a {
      padding: 20px 30px;
    }
    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  }
}
</style>