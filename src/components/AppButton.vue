<template>
  <v-row class="button">
    <v-col>
      <v-btn
        large
        color="white"
        min-width="300"
        :to="url"
      >
        ＞＞{{buttonText}}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
// ここから追加
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
// ここまで追加
</script>

<style lang="scss">
.button {
  text-align: center;
}
</style>