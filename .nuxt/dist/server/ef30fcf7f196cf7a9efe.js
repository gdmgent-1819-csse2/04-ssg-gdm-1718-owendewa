exports.ids=[3],exports.modules={25:function(n,e,r){var content=r(34);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);var l=r(3).default;n.exports.__inject__=function(n){l("6caa11c7",content,!0,n)}},33:function(n,e,r){"use strict";r.r(e);var l=r(25),t=r.n(l);for(var o in l)"default"!==o&&function(n){r.d(e,n,function(){return l[n]})}(o);e.default=t.a},34:function(n,e,r){(n.exports=r(2)(!1)).push([n.i,".test{margin-left:25%}",""])},47:function(n,e,r){"use strict";r.r(e);var l={computed:{vb2:()=>'<section><h1>Application.js</h1>\n<p><strong>Import you Canvas.js and Test.js files</strong></p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> Canvas <span class="hljs-keyword">from</span> <span class="hljs-string">\'./Library/Canvas.js\'</span>\n<span class="hljs-keyword">import</span> Tests <span class="hljs-keyword">from</span> <span class="hljs-string">\'./Tests/Tests.js\'</span>\n</code></pre>\n<p><strong>Creating our Application class</strong></p>\n<p>For this we will need a constructor a preloader and a run function</p>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Application</span> </span>{\n    <span class="hljs-keyword">constructor</span>() {\n    }\n    <span class="hljs-keyword">async</span> preloader() {\n    }\n    run() {\n    }\n}\n</code></pre>\n<p><strong>Creating constructor</strong></p>\n<p>create a check if our test variable is true if so begin New Tests()</p>\n<pre><code class="language-js"><span class="hljs-keyword">constructor</span>() {\n        <span class="hljs-keyword">const</span> tests = <span class="hljs-literal">false</span>\n        <span class="hljs-keyword">if</span> (tests) {\n            <span class="hljs-keyword">new</span> Tests()\n        }\n        <span class="hljs-built_in">console</span>.info(<span class="hljs-string">\'WebGL2 Demo\'</span>)\n</code></pre>\n<p>Implement our shaderSources but don\'t give them a value yet\nand listen for the preloader</p>\n<pre><code class="language-js">        <span class="hljs-keyword">this</span>.shaderSources = {\n            <span class="hljs-attr">fragment</span>: <span class="hljs-literal">null</span>,\n            <span class="hljs-attr">vertex</span>: <span class="hljs-literal">null</span>,\n        }\n        <span class="hljs-keyword">this</span>.preloader()\n    }\n</code></pre>\n<p><strong>Create preloader</strong></p>\n<p>we will be using an async function so we can use the await fetch method on our shader files. In our preloader we will be setting our shadersources from our constructor equal to the value of our shaderfiles</p>\n<pre><code class="language-js"><span class="hljs-keyword">async</span> preloader() {\n        <span class="hljs-built_in">console</span>.info(<span class="hljs-string">\'Preloading source code for shaders\'</span>)\n        <span class="hljs-keyword">await</span> fetch(<span class="hljs-string">\'./assets/glsl/vertex-shader.glsl\'</span>)\n            .then(<span class="hljs-function"><span class="hljs-params">response</span> =&gt;</span> response.text())\n            .then(<span class="hljs-function"><span class="hljs-params">source</span> =&gt;</span> <span class="hljs-keyword">this</span>.shaderSources.vertex = source)\n            .catch(<span class="hljs-function"><span class="hljs-params">error</span> =&gt;</span> <span class="hljs-built_in">console</span>.error(error.message))\n        <span class="hljs-keyword">await</span> fetch(<span class="hljs-string">\'./assets/glsl/fragment-shader.glsl\'</span>)\n            .then(<span class="hljs-function"><span class="hljs-params">response</span> =&gt;</span> response.text())\n            .then(<span class="hljs-function"><span class="hljs-params">source</span> =&gt;</span> <span class="hljs-keyword">this</span>.shaderSources.fragment = source)\n            .catch(<span class="hljs-function"><span class="hljs-params">error</span> =&gt;</span> <span class="hljs-built_in">console</span>.error(error.message))\n        <span class="hljs-keyword">this</span>.run()\n    }\n</code></pre>\n<p><strong>Our run function</strong></p>\n<p>Creating a new canvas for our clock with the parameters width, height and our shadersources</p>\n<pre><code class="language-js">    run() {\n        <span class="hljs-keyword">const</span> width = <span class="hljs-number">600</span>\n        <span class="hljs-keyword">const</span> height = <span class="hljs-number">480</span>\n        <span class="hljs-keyword">new</span> Canvas(width, height, <span class="hljs-keyword">this</span>.shaderSources)\n    }\n\n</code></pre>\n</section>\n'}},t=r(1);var component=Object(t.a)(l,function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"test",domProps:{innerHTML:this._s(this.vb2)}},[])},[],!1,function(n){var e=r(33);e.__inject__&&e.__inject__(n)},null,"b0d140de");e.default=component.exports}};
//# sourceMappingURL=ef30fcf7f196cf7a9efe.js.map