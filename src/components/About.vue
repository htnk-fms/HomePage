<template>
  <section class="about">
    <AppBackgroundHolder :title="title"/>
    <h2>プロフィール</h2>
    <p>
              name：畑中健壱<br>
              Age：22 years old<br>
              Affiliation ： 明治大学大学院　先端数理科学研究科　先端メディアサイエンス専攻<br>
              Skill : Python, Vue.js, Processing, JavaScript, PHP
            </p>
            <p>
              趣味は野球観戦．I★YOKOHAMA．<br>
              ヴァイオレット・エヴァーガーデンは神
            </p>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroudHolder.vue'
 
export default {
  data () {
    return {
      title: 'About'
    }
  },
  components: {
    AppBackgroundHolder
  }
}
</script>