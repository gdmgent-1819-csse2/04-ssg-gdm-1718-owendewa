exports.ids=[4],exports.modules={26:function(n,l,e){var content=e(36);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);var r=e(3).default;n.exports.__inject__=function(n){r("52309d32",content,!0,n)}},35:function(n,l,e){"use strict";e.r(l);var r=e(26),t=e.n(r);for(var c in r)"default"!==c&&function(n){e.d(l,n,function(){return r[n]})}(c);l.default=t.a},36:function(n,l,e){(n.exports=e(2)(!1)).push([n.i,".test{margin-left:25%}",""])},48:function(n,l,e){"use strict";e.r(l);var r={computed:{vb3:()=>'<section><h1>Canvas class in canvas.js file</h1>\n<p><strong>Create class</strong></p>\n<p>Now this class will be a complete constructor wich we can then use to create our canvas element in our index.html.\nWe will be using our width, height and shaderSources as parameters we will create three variables who have the value of our parameters</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> Vector2 <span class="hljs-keyword">from</span> <span class="hljs-string">\'./Math/Vector2.js\'</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Canvas</span> </span>{\n        <span class="hljs-keyword">constructor</span>(width, height, shaderSources) {\n            <span class="hljs-keyword">this</span>.width = width\n            <span class="hljs-keyword">this</span>.height = height\n            <span class="hljs-keyword">this</span>.shaderSources = shaderSources\n        }\n}\n</code></pre>\n<p><strong>Adding colors and data object</strong></p>\n<p>We create our colors object to insert some vector colors wich we can alter use our data object is so we can determen the color of our created vector and the position of our vector after we created those we will initialize three this uses gl, program and run();</p>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Canvas</span> </span>{\n    <span class="hljs-keyword">constructor</span>(width, height, shaderSources) {\n        <span class="hljs-keyword">this</span>.width = width\n        <span class="hljs-keyword">this</span>.height = height\n        <span class="hljs-keyword">this</span>.shaderSources = shaderSources\n\n        <span class="hljs-keyword">this</span>.colors = {\n            <span class="hljs-attr">black</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],\n            <span class="hljs-attr">blue</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0</span>],\n            <span class="hljs-attr">cyan</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0</span>],\n            <span class="hljs-attr">green</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],\n            <span class="hljs-attr">magenta</span>: [<span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0</span>],\n            <span class="hljs-attr">red</span>: [<span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],\n            <span class="hljs-attr">white</span>: [<span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0</span>],\n            <span class="hljs-attr">yellow</span>: [<span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],\n        }\n        <span class="hljs-keyword">this</span>.data = {\n            <span class="hljs-attr">colors</span>: [],\n            <span class="hljs-attr">positions</span>: [],\n        }\n        <span class="hljs-keyword">this</span>.gl = <span class="hljs-literal">null</span>\n        <span class="hljs-keyword">this</span>.program = <span class="hljs-literal">null</span>\n        <span class="hljs-keyword">this</span>.run()\n    }\n</code></pre>\n<p><strong>Adding our loop/constanst listener so we can have a realtime clock</strong></p>\n<pre><code class="language-js">    \n<span class="hljs-built_in">window</span>.addEventListener(<span class="hljs-string">\'updateCanvas\'</span>, event =&gt; {\n    <span class="hljs-comment">// loop the updatecanvashanlder every .5 seconds</span>\n    setInterval(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span>{\n        <span class="hljs-keyword">try</span>{\n            <span class="hljs-keyword">this</span>.updateCanvasHandler(event)\n        }\n        <span class="hljs-keyword">catch</span>(err) {\n            <span class="hljs-built_in">console</span>.log(err.message);\n        }\n    },<span class="hljs-number">500</span>)\n}, <span class="hljs-literal">false</span>);\n\n    \n</code></pre>\n</section>\n'}},t=e(1);var component=Object(t.a)(r,function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"test",domProps:{innerHTML:this._s(this.vb3)}},[])},[],!1,function(n){var l=e(35);l.__inject__&&l.__inject__(n)},null,"b0b511dc");l.default=component.exports}};
//# sourceMappingURL=e190b31190d51a4b0e61.js.map