<template>
  <div class="footerContainer">
    <ul class="footerContainer--header">
      MEN
      <li class="footerContainer--list">OCA Low</li>
      <li class="footerContainer--list">OCA High</li>
      <li class="footerContainer--list">CATIBA Low</li>
      <li class="footerContainer--list">CATIBA High</li>
    </ul>
    <ul class="footerContainer--header">
      WOMEN
      <li class="footerContainer--list">OCA Low</li>
      <li class="footerContainer--list">OCA High</li>
      <li class="footerContainer--list">CATIBA Low</li>
      <li class="footerContainer--list">CATIBA High</li>
    </ul>
    <ul class="footerContainer--header">
      SUPPORT
      <li class="footerContainer--list">FAQ</li>
      <li class="footerContainer--list">Returns</li>
      <li class="footerContainer--list">Live Chat</li>
    </ul>
    <ul class="footerContainer--header">
      ABOUT
      <li class="footerContainer--list">Mission</li>
      <li class="footerContainer--list">Vision</li>
      <li class="footerContainer--list">Future</li>
    </ul>
    <ul class="footerContainer--header">
      POP UP STORES
      <li class="footerContainer--list">Find near you</li>
      <li class="footerContainer--list">Register</li>
      <li class="footerContainer--list">
        <input type="text" class="searchField" placeholder="Find your sneakers here" />
        <img src="./../../assets/images/search.png" class="searchIcon" alt />
      </li>
    </ul>
    <ul class="footerContainer--header">
      NEWS LETTER
      <li class="footerContainer--list">
        <input type="text" class="searchField" placeholder="Enter email" />
        <div class="button">JOIN US</div>
        <div class="socialIcons">
          <img src="./../../assets/images/instagram.png" class="socialMediaIcons" alt />
          <img src="./../../assets/images/facebook.png" class="socialMediaIcons" alt />
        </div>
      </li>
    </ul>
    <div class="footerContainer--bottom">
      <p class="footerContainer--bottomtxt">
        Copyright &#9400; 2019 CARIUMA, All Rights Reserved
        <span>Terms of use</span> |
        <span>Privacy Policy</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterComponent"
};
</script>
<style lang="scss">
.footerContainer {
  width: 100%;
  background-color: #000;
  text-align: center;
  .footerContainer--header {
    display: inline-block;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    vertical-align: middle;
    padding: 40px;
    text-align: left;
    .footerContainer--list {
      font-size: 12px;
      font-weight: 100;
      list-style-type: none;
      margin-top: 10px;
      .searchField {
        background-color: #000;
        border: none;
        outline: none;
        color: #fff;
        width: 130px;
        border-bottom: 1px solid gray;
        padding: 10px;
      }
      .socialIcons {
        margin-top: 30px;
        .socialMediaIcons {
          width: 30px;
          cursor: pointer;
        }
      }
      .searchIcon {
        width: 20px;
        vertical-align: middle;
      }
      .button {
        padding: 10px;
        border: 1px solid #fff;
        text-align: center;
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
      }
    }
  }
  .footerContainer--bottom {
    border-top: 1px solid gray;
    width: 80%;
    margin: 0 auto;
    .footerContainer--bottomtxt {
      font-size: 12px;
      color: gray;
      span {
        text-decoration: underline;
      }
    }
  }
}
</style>