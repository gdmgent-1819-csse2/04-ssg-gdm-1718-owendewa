<template>
  <div v-html="vb2" class="test"></div>

</template>
<script>
  import vb2 from './MDFiles/voorbeeld_2.md'

export default {
  computed: {
      vb2() {
        return vb2
      }
}
}
</script>

<style>
.test{
  margin-left:25%;
}
</style>