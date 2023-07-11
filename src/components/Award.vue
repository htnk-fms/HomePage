<template>
  <section class="award">
    <AppBackgroundHolder :title="title"/>
    <h2>Award</h2>
    <p>色々増えたら嬉しいなと</p>
    <p>学業奨励賞（B3）</p>
    <p>明治大学向殿政男積立金受給者に選ばれました（B4）</p>
    <p>https://www.meiji.ac.jp/ims/news/2022/6t5h7p00003fg1kb.html</p>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroudHolder.vue'
 
export default {
  data () {
    return {
      title: 'Award'
    }
  },
  components: {
    AppBackgroundHolder
  }
}
</script>