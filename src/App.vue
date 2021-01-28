<template>
    <div class="app">
      <h1>App文件</h1>
      <span>{{msg}}</span>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg:"蒜头王八"
    }
  }
}
</script>

<style lang="sass">
  .app{
    color: red;
    span{
      color: green;
    }
  }
</style>

