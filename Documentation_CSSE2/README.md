# Documentation_CSSE2

> My epic Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

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
