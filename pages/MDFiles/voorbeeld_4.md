# Using vectors in our UpdateCanvasHandler.js

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

**Usage in our UpdateCanvasHandler.js file**

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