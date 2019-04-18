<template>
  <div v-html="vb4" class="test"></div>

</template>
<script>
  import vb4 from './MDFiles/voorbeeld_4.md'

export default {
  computed: {
      vb4() {
        return vb4
      }
}
}
</script>

<style>
.test{
  margin-left:25%;
}
</style>