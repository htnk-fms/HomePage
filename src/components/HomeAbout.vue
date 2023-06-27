<template>
  <section class="home-about">
    <div class="section__title">
      <div class="section__title-text">About Me</div>
      <v-container>
        <v-row class="home-about__contents">
          <v-col md="5" class="home-about__contents-img">
            <img src="../assets/img/about.jpg" alt="" class="img-fluid" />
          </v-col>
          <v-col md="5" class="home-about__contents-text">
            <p>
                はじめまして．<br>
                <br>
                畑中です．野球観戦が趣味です．<br>
                <br>
                しがない情報系の大学院生です．
            </p>
            <p>

            </p>
          </v-col>
        </v-row>
        <AppButton :button-text="buttonText" :url="url"/>
      </v-container>
    </div>
  </section>
</template>
<script>
import AppButton from './AppButton.vue'
 
export default {
  data () {
    return {
      buttonText: '詳しくみる',
      url: '/about'
    }
  },
  components: {
    AppButton
  }
}
// ここまで追加
</script>

<style lang="scss" scoped>
.home-about__contents {
  margin-top: 20px;
  justify-content: center;
 
  &-img {
    text-align: center;
  }
 
  &-text {
    text-align: left;
    word-wrap: break-word;
  }
}
</style>