<template>
  <div v-html="vb5" class="test"></div>

</template>
<script>
  import vb5 from './MDFiles/voorbeeld_5.md'

export default {
  computed: {
      vb5() {
        return vb5
      }
}
}
</script>

<style>
.test{
  margin-left:25%;
}
</style>