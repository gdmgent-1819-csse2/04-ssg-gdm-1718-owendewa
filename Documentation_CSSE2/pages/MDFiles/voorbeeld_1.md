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
