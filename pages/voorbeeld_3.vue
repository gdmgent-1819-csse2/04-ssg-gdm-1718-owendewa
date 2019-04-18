<template>
  <div v-html="vb3" class="test"></div>

</template>
<script>
  import vb3 from './MDFiles/voorbeeld_3.md'

export default {
  computed: {
      vb3() {
        return vb3
      }
}
}
</script>

<style>
.test{
  margin-left:25%;
}
</style>