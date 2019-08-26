<template>
  <div class="wrapper">
    <div class="tabs">
      <div class="tab">
        <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch" />
        <label for="tab-1" class="tab-label">MEN</label>
        <div class="tab-content">
          <p class="colorPicker">SELECT COLOR</p>
          <div class="colorSelector">
            <form action method="post" class="colorsCntr">
              <label>
                <input type="radio" name="color" id="red" value="red" checked />
                <span class="red"></span>
              </label>

              <label>
                <input type="radio" name="color" id="cyan" value="cyan" />
                <span class="cyan"></span>
              </label>

              <label>
                <input type="radio" name="color" id="orange" value="orange" />
                <span class="orange"></span>
              </label>

              <label>
                <input type="radio" name="color" id="purple" value="purple" />
                <span class="purple"></span>
              </label>

              <label>
                <input type="radio" name="color" id="indigo" value="indigo" />
                <span class="indigo"></span>
              </label>
            </form>
          </div>
          <div class="sizeSelectorText">SELECT SIZE</div>
          <div class="sizeSelectorSubText">Size & Fit Guide</div>
          <div class="r4i-shoesize-nav">
            <ul class="r4i-shoesize">
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">5.5</a>
              </li>
              <li>
                <a href="#">6</a>
              </li>
              <li>
                <a href="#">6.5</a>
              </li>
              <li>
                <a href="#">7</a>
              </li>
              <li>
                <a href="#">7.5</a>
              </li>
              <li>
                <a href="#">8</a>
              </li>
              <li>
                <a href="#">8.5</a>
              </li>
              <li>
                <a href="#">9</a>
              </li>
              <li>
                <a href="#">9.5</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="tab">
        <input type="radio" name="css-tabs" id="tab-2" class="tab-switch" />
        <label for="tab-2" class="tab-label">WOMEN</label>
        <div class="tab-content">
          <p class="colorPicker">SELECT COLOR</p>
          <div class="colorSelector">
            <form action method="post" class="colorsCntr">
              <label>
                <input type="radio" name="color" id="red" value="red" checked />
                <span class="red"></span>
              </label>

              <label>
                <input type="radio" name="color" id="cyan" value="cyan" />
                <span class="cyan"></span>
              </label>

              <label>
                <input type="radio" name="color" id="orange" value="orange" />
                <span class="orange"></span>
              </label>

              <label>
                <input type="radio" name="color" id="purple" value="purple" />
                <span class="purple"></span>
              </label>

              <label>
                <input type="radio" name="color" id="indigo" value="indigo" />
                <span class="indigo"></span>
              </label>
            </form>
          </div>
          <div class="sizeSelectorText">SELECT SIZE</div>
          <div class="sizeSelectorSubText">Size & Fit Guide</div>
          <div class="r4i-shoesize-nav">
            <ul class="r4i-shoesize">
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">5.5</a>
              </li>
              <li>
                <a href="#">6</a>
              </li>
              <li>
                <a href="#">6.5</a>
              </li>
              <li>
                <a href="#">7</a>
              </li>
              <li>
                <a href="#">7.5</a>
              </li>
              <li>
                <a href="#">8</a>
              </li>
              <li>
                <a href="#">8.5</a>
              </li>
              <li>
                <a href="#">9</a>
              </li>
              <li>
                <a href="#">9.5</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper_btn">ADD TO BAG</div>
  </div>
</template>
<script>
export default {
  name: "SizeChart"
};
</script>
<style lang="scss">
@import "./../../assets/scss/_utils.scss";

.wrapper {
  max-width: 50rem;
  width: 100%;
  margin: 30px auto;
  border: 2px solid #e5e5e5;
}
.tabs {
  position: relative;
  margin: 1px 0;
  background: #ffffff;
  height: 14.75rem;
}
.tabs::before,
.tabs::after {
  content: "";
  display: table;
}
.tabs::after {
  clear: both;
}
.tab {
  float: left;
  width: 50%;
}
.tab-switch {
  display: none;
}
.tab-label {
  position: relative;
  display: block;
  line-height: 2.75em;
  height: 3em;
  padding: 0 3.03em;
  background: #e5e5e5;
  color: #000;
  cursor: pointer;
  text-align: center;
  bottom: 1px;
  transition: all 0.25s;
}
.tab-label:hover {
  top: -0.25rem;
  transition: top 0.25s;
}
.tab-content {
  position: absolute;
  z-index: 1;
  left: 0;
  padding: 10px;
  background: #fff;
  color: #2c3e50;
  opacity: 0;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  width: 95%;
  .colorPicker {
    font-size: 12px;
    color: #aba7a7;
    padding: 0;
    text-align: left;
  }
  .sizeSelectorText {
    font-size: 12px;
    color: #aba7a7;
    padding: 0;
    text-align: left;
    display: inline-block;
  }
  .sizeSelectorSubText {
    display: inline-block;
    text-decoration: underline;
    font-size: 12px;
    color: #000;
    float: right;
  }
  ul.r4i-shoesize {
    list-style-type: none;
    width: 100%;
    margin-top: 10px;
    li {
      background: #fff;
      display: inline-block;
      margin: 0 0 8px 8px;
      text-align: center;
      border: 2px solid #8f8f8f;
      -webkit-border-radius: 2px;
      a {
        display: block;
        text-decoration: none;
        color: #000;
        line-height: 40px;
        font-size: 10px;
        width: 35px;
        height: 35px;
        transition: all 0.2s ease 0s;
        border-radius: 2px;
        -webkit-border-radius: 2px;
        -webkit-transform: translateZ(0);
        &:hover,
        &:active,
        &:focus {
          background: #7ec244;
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
      }
    }
  }

  .colorSelector {
    margin: 10px;
    text-align: center;
    @include respond-to(xs) {
      margin: 2px;
    }
    .colorsCntr {
      @include respond-to(xs) {
        text-align: left;
      }
    }
    label {
      cursor: pointer;
      position: relative;
      margin: 5px 0 0 3px;
      input[type="radio"] {
        cursor: pointer;
        position: absolute;
        opacity: 0;
      }
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        padding: 6px;
        border: solid 5px white;
        transition: all 200ms;
        -webkit-transition: all 200ms;
        @include respond-to(xs) {
          width: 10px;
          height: 10px;
        }
      }
      input[type="radio"]:checked + span {
        border: solid 4px #a2c880;
      }
    }
  }

  /*** Colors ***/

  .red {
    background-color: #f44336;
  }

  .cyan {
    background-color: #00bcd4;
  }

  .orange {
    background-color: #ff5722;
  }

  .purple {
    background-color: #673ab7;
  }

  .indigo {
    background-color: #283593;
  }
}
.tab-switch:checked + .tab-label {
  background: #fff;
  color: #7ec244;
  font-weight: bold;
  transition: all 0.35s;
  z-index: 1;
  top: -0.0625rem;
}
.tab-switch:checked + label + .tab-content {
  z-index: 2;
  opacity: 1;
  transition: all 0.35s;
  @include respond-to(xs) {
    width: 92%;
  }
}
.wrapper_btn {
  background-color: #7ec244;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding: 15px;
  margin-top: 40px;
  cursor: pointer;
  @include respond-to(xs) {
    margin-top: 50px;
  }
  &:hover {
    background-color: #a2c880;
  }
}
</style>