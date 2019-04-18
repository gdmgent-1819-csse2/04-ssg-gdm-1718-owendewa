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
