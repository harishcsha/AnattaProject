<template>
  <div class="star-rating">
    <input type="radio" id="5-stars" name="rating" value="5" />
    <label for="5-stars" class="star">&bigstar;</label>
    <input type="radio" id="4-stars" name="rating" value="4" />
    <label for="4-stars" class="star">&bigstar;</label>
    <input type="radio" id="3-stars" name="rating" value="3" />
    <label for="3-stars" class="star">&bigstar;</label>
    <input type="radio" id="2-stars" name="rating" value="2" />
    <label for="2-stars" class="star">&bigstar;</label>
    <input type="radio" id="1-star" name="rating" value="1" />
    <label for="1-star" class="star">&bigstar;</label>
  </div>
</template>
<script>
export default {
  name: "StarRatings"
};
</script>
<style lang="scss">
@import './../../assets/scss/_utils.scss';

.star-rating {
  border: 0;
  display: inline-flex;
  flex-direction: row-reverse;
  font-size: 1em;
  justify-content: auto;
  text-align: center;
  width: 140px;
  @include respond-to(xs){
      width: 56px;
      font-size: 0.8em;
  }
}

.star-rating input {
  display: none;
}

.star-rating label {
  color: rgb(128, 128, 128);
  cursor: pointer;
}

.star-rating :checked ~ label {
  color: #7ec244;
}

.star-rating :hover ~ label {
  color: #7ec244;
}
</style>