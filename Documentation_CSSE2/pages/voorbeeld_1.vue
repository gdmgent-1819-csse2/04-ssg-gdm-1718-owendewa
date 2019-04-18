<template lang="md">
   # Main.js
**Import your main js file in my our case Application.js**

~~~ js
import Application from './Application.js'
~~~

**Add the eventlistener DOMContentloaded on your window**

Because of this event when our app content is loaded a new Application will automatically form.
~~~ js
window.addEventListener('DOMContentLoaded', _ => new Application(), false)
~~~

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
