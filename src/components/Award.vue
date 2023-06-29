<template>
  <section class="award">
    <AppBackgroundHolder :title="title"/>
    <h2>Award</h2>
    <p>色々増えたら嬉しいなと</p>
    <p>学業奨励賞（B3）</p>
    <p>明治大学向殿政男積立金受給者に選ばれました（B4）</p>
    <p>https://www.google.com/search?q=%E7%95%91%E4%B8%AD%E5%81%A5%E5%A3%B1&rlz=1C5CHFA_enJP948JP948&oq=%E7%95%91%E4%B8%AD%E5%81%A5%E5%A3%B1&aqs=chrome..69i57j69i60l3.3893j0j7&sourceid=chrome&ie=UTF-8#:~:text=%E6%98%8E%E6%B2%BB%E5%A4%A7%E5%AD%A6%E5%90%91,%E2%80%BA%20ims%20%E2%80%BA%20news</p>
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