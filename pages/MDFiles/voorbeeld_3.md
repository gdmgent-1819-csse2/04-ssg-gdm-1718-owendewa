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