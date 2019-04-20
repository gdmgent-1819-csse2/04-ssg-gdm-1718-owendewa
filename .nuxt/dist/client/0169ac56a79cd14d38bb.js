(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{154:function(n,e,o){var content=o(166);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(33).default)("a93a1eb2",content,!0,{sourceMap:!1})},165:function(n,e,o){"use strict";var t=o(154);o.n(t).a},166:function(n,e,o){(n.exports=o(32)(!1)).push([n.i,".test{margin-left:25%}",""])},176:function(n,e,o){"use strict";o.r(e);var t={computed:{vb5:function(){return'<section><h1>Creating our shaders</h1>\n<p><strong>Fragmentshader</strong></p>\n<p><a href="https://www.khronos.org/registry/OpenGL-Refpages/es3.0/">info</a></p>\n<pre><code class="language-glsl">    <span class="hljs-meta">#version 300 es</span>\n    <span class="hljs-keyword">precision</span> <span class="hljs-keyword">mediump</span> <span class="hljs-type">float</span>; <span class="hljs-comment">// Set default precision to medium precision float.</span>\n\n    <span class="hljs-comment">/** Varyings */</span>\n    <span class="hljs-keyword">in</span> <span class="hljs-type">vec4</span> v_Color;\n\n    <span class="hljs-keyword">out</span> <span class="hljs-type">vec4</span> v_outColor;\n\n    <span class="hljs-type">void</span> main() {\n        v_outColor = v_Color;\n    }\n</code></pre>\n<p><strong>VertexShader</strong></p>\n<p><a href="https://www.khronos.org/registry/OpenGL-Refpages/es3.0/">info</a></p>\n<p><a href="https://www.khronos.org/registry/OpenGL-Refpages/es3.0/html/gl_Position.xhtml">vector position info</a></p>\n<p><a href="https://www.khronos.org/registry/OpenGL-Refpages/es3.0/html/gl_PointSize.xhtml">vector pointsize info</a></p>\n<pre><code class="language-glsl">    <span class="hljs-meta">#version 300 es</span>\n\n    <span class="hljs-comment">/** Attributes */</span>\n    <span class="hljs-keyword">in</span> <span class="hljs-type">vec4</span> a_VertexPosition;\n    <span class="hljs-keyword">in</span> <span class="hljs-type">vec4</span> a_VertexColor;\n\n    <span class="hljs-comment">/** Varyings */</span>\n    <span class="hljs-keyword">out</span> <span class="hljs-type">vec4</span> v_Color;\n\n    <span class="hljs-type">void</span> main() {\n        <span class="hljs-built_in">gl_Position</span> = a_VertexPosition; \n        <span class="hljs-built_in">gl_PointSize</span> = <span class="hljs-number">7.0</span>;           \n        v_Color = a_VertexColor;\n    }\n\n</code></pre>\n</section>\n'}}},l=(o(165),o(13)),component=Object(l.a)(t,function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"test",domProps:{innerHTML:this._s(this.vb5)}})},[],!1,null,null,null);e.default=component.exports}}]);