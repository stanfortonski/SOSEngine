# SOSEngine
2D Game Engine based on HTML markup written for [MMORPG 2D Game](https://github.com/stanfortonski/sosgame)

That is my old abandoned project of 2D engine. I had written it before I learned WebGL/OpenGL. JavaScript ES5 syntax.


## Usage
1. Include src files and css file. Set your .window size in CSS file.
2. Add this snippet to your HTML file. You can use more this structure.


```html
<div id="SOSEngine" class="SOSEngine">
  <div class="window">
    <div class="scene" data-width="200" data-height="200" data-texture="#fff">
    </div>
  </div>
</div>
```

 3. Set your scale and initialize engine. You set the scale only one time before initialization. Less scale == less performance!
 ```js
SOSEngine.scale = 12;
var engine = SOSEngine.make($('#SOSEngine'));
 ```
 
 4. Add some static objects to scene. Data round and texture are optional. Static objects should be included in the collision calculation. 
 ```html
 <div class="object" data-x="15" data-y="15" data-width="10" data-height="10" data-round="0" data-texture="#000"></div>
 ```
 
 5. Add standard object to your scene.
 ```js
 var props = {height: 5, width: 5, posX: 30, posY: 30};
 var myObject = new SOSEngine.Object(props.width, props.height, props.posX, props.posY);
 engine.Scene.add(myObject);
 ```
