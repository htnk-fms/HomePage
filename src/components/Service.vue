<template>
  <section class="research">
    <AppBackgroundHolder :title="title"/>
    <div id="direction">
      <h2>トバクバク</h2>
      <p>ハッカソンで作ったサービス</p>
    </div>
    <div id="coding">
      <h2>Firicks</h2>
      <p>ハッカソンで作ったサービス</p>
    </div>
    <div id="design">
      <h2>あのシーンどこだっけ？（あのどこ）</h2>
      <p>同期で作成したサービス</p>
    </div>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroudHolder.vue'
 
export default {
  data () {
    return {
      title: 'Research'
    }
  },
  components: {
    AppBackgroundHolder
  }
}
</script>
<style lang="scss" scoped>
#direction {
  height: 1000px;
}
 
#coding {
  height: 1000px;
}
 
#design {
  height: 1000px;
}
</style>