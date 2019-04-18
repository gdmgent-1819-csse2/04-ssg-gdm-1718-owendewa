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
**Import your main js file in our case Application.js**

``` js
import Application from './Application.js'
```

**Add the eventlistener DOMContentloaded on your window**

Because of this event when our app content is loaded a new Application will automatically form.
``` js
window.addEventListener('DOMContentLoaded', _ => new Application(), false)
```
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

# Canvas class in canvas.js file

**Create class**

Now this class will be a complete constructor wich we can then use to create our canvas element in our index.html.
We will be using our width, height and shaderSources as parameters we will create three variables who have the value of our parameters
```js
import Vector2 from './Math/Vector2.js'

export default class Canvas {
        constructor(width, height, shaderSources) {
            this.width = width
            this.height = height
            this.shaderSources = shaderSources
        }
}
```
**Adding colors and data object**

We create our colors object to insert some vector colors wich we can alter use our data object is so we can determen the color of our created vector and the position of our vector after we created those we will initialize three this uses gl, program and run();
```js
export default class Canvas {
    constructor(width, height, shaderSources) {
        this.width = width
        this.height = height
        this.shaderSources = shaderSources

        this.colors = {
            black: [0, 0, 0, 0],
            blue: [0, 0, 255, 0],
            cyan: [0, 255, 255, 0],
            green: [0, 255, 0, 0],
            magenta: [255, 0, 255, 0],
            red: [255, 0, 0, 0],
            white: [255, 255, 255, 0],
            yellow: [255, 255, 0, 0],
        }
        this.data = {
            colors: [],
            positions: [],
        }
        this.gl = null
        this.program = null
        this.run()
    }
```
**Adding our loop/constanst listener so we can have a realtime clock**
```js 
    
window.addEventListener('updateCanvas', event => {
    // loop the updatecanvashanlder every .5 seconds
    setInterval(() =>{
        try{
            this.updateCanvasHandler(event)
        }
        catch(err) {
            console.log(err.message);
        }
    },500)
}, false);

    
```

# Using vectors in our UpdateCanvasHandler method in Canvas.js

**Creating a vector**

We will be creating a vector2.js file where we wil lcreate a Vector2 class this class contains of an X and Y value
```js
export default class Vector2{
    /**
     * Represents a 2d Vector
     * @constructor
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(x,y){
        this.x = Number(x) || 0;
        this.y = Number(y) || 0;
    }
```

**Usage in our UpdateCanvasHandler method in Canvas.js**

This is our basic UpdateCanvasHandler method because of our loop of .5 seconds in our Canvas class this method will be executed every .5 seconds

```js
    updateCanvasHandler(event) {
        colors.forEach(color => {
        });
        this.drawScene();
    }
```

**We start by creating a new vector**

Our firstvector has an x value of 0 and a y value of .9 this will be pushed in our data object under positions and our color will also be oushed in our data object but under colors this also reffers to our Canvas.js file
```js
    updateCanvasHandler(event) {
        const firstvector = new Vector2(0, 0.9)
        this.data.positions.push(firstvector.x, firstvector.y)
        this.data.colors.push(...this.colors.black)
        colors.forEach(color => {
        });
        this.drawScene();
    }
```
**Because we want to make a clock we need to know the time so we will create a seconds, minute and hour variable**
```js
//Creating date arm
        const d = new Date();
        const Seconds = d.getSeconds();
        const Minutes = d.getMinutes();
        const Hours = d.getHours();
        const time = Hours + ':' + Minutes + ':' + Seconds
        document.getElementById('clock').innerHTML = time
        const colors = [
            'white',
        ]
```
**Now we are adding our animation**

Because we want our 'clock' to work we will need to implement rotation on a vector [information about vector rotation](https://stackoverflow.com/questions/28112315/how-do-i-rotate-a-vector);
we will use our firstvector as a seconds arm. This works the same for the minutes and hours
```js
    updateCanvasHandler(event) {
        const firstvector = new Vector2(0, 0.9)
        this.data.positions.push(firstvector.x, firstvector.y)
        this.data.colors.push(...this.colors.black)
        colors.forEach(color => {
            //Creating seconds arm
            firstvector.rot((Seconds* 6))
            this.data.positions.push(firstvector.x, firstvector.y)
            this.data.colors.push(...this.colors[color])
        });
        this.drawScene();
    }
```

# Creating our shaders
**Fragmentshader**

[info](https://www.khronos.org/registry/OpenGL-Refpages/es3.0/)
```glsl
    #version 300 es
    precision mediump float; // Set default precision to medium precision float.

    /** Varyings */
    in vec4 v_Color;

    out vec4 v_outColor;

    void main() {
        v_outColor = v_Color;
    }
```
**VertexShader**

[info](https://www.khronos.org/registry/OpenGL-Refpages/es3.0/)

[vector position info](https://www.khronos.org/registry/OpenGL-Refpages/es3.0/html/gl_Position.xhtml)

[vector pointsize info](https://www.khronos.org/registry/OpenGL-Refpages/es3.0/html/gl_PointSize.xhtml)
```glsl
    #version 300 es

    /** Attributes */
    in vec4 a_VertexPosition;
    in vec4 a_VertexColor;

    /** Varyings */
    out vec4 v_Color;

    void main() {
        gl_Position = a_VertexPosition; 
        gl_PointSize = 7.0;           
        v_Color = a_VertexColor;
    }

```
