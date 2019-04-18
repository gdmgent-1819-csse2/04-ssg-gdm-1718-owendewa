# Application.js

**Import you Canvas.js and Test.js files**
``` js
import Canvas from './Library/Canvas.js'
import Tests from './Tests/Tests.js'
```

**Creating our Application class**

For this we will need a constructor a preloader and a run function
```js
export default class Application {
    constructor() {
    }
    async preloader() {
    }
    run() {
    }
}
```
**Creating constructor**

create a check if our test variable is true if so begin New Tests()
```js
constructor() {
        const tests = false
        if (tests) {
            new Tests()
        }
        console.info('WebGL2 Demo')
```
Implement our shaderSources but don't give them a value yet
and listen for the preloader
```js
        this.shaderSources = {
            fragment: null,
            vertex: null,
        }
        this.preloader()
    }
```

**Create preloader**

we will be using an async function so we can use the await fetch method on our shader files. In our preloader we will be setting our shadersources from our constructor equal to the value of our shaderfiles
```js
async preloader() {
        console.info('Preloading source code for shaders')
        await fetch('./assets/glsl/vertex-shader.glsl')
            .then(response => response.text())
            .then(source => this.shaderSources.vertex = source)
            .catch(error => console.error(error.message))
        await fetch('./assets/glsl/fragment-shader.glsl')
            .then(response => response.text())
            .then(source => this.shaderSources.fragment = source)
            .catch(error => console.error(error.message))
        this.run()
    }
```
**Our run function**

Creating a new canvas for our clock with the parameters width, height and our shadersources
```js
    run() {
        const width = 600
        const height = 480
        new Canvas(width, height, this.shaderSources)
    }

```