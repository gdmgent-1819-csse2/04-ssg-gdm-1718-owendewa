<template>
  <div v-html="vb1" class="test"></div>

</template>
<script>
  import vb1 from './MDFiles/voorbeeld_1.md'

export default {
  computed: {
      vb1() {
        return vb1
      }
}
}
</script>

<style>
.test{
  margin-left:25%;
}
</style>
