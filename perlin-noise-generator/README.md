Infinite Terrain Generator (Perlin Noise)
How It Works
1. Grid-Based Terrain Structure

The terrain is built from a 2D grid of vertices.

cols and rows define the resolution of the terrain.

scl (scale) determines the spacing between grid points.

A 2D array (landscape[][]) stores the height (Z value) for each vertex.

This grid acts as a mesh surface that can be rendered efficiently in 3D space.

2. Perlin Noise for Height Generation

Each vertex’s height is generated using:

p.noise(xoff, yoff)


Perlin Noise produces smooth, continuous values between 0 and 1. These values are mapped to a height range:

p.map(p.noise(xoff, yoff), 0, 1, -300, 300)


Because Perlin Noise is coherent (unlike random values), nearby points have similar heights. This creates smooth hills and valleys rather than sharp spikes.

Offsets (xoff, yoff) are incremented gradually to maintain smooth variation across the surface.

3. Infinite Scrolling Effect

The illusion of infinite terrain is achieved by shifting the noise sampling window over time:

flying -= 0.05;


Instead of moving the camera forward, the code offsets the Perlin Noise input values. This makes the terrain appear to move continuously toward the viewer, simulating forward motion across an endless landscape.

4. 3D Rendering with WEBGL

The terrain is rendered using triangle strips:

p.beginShape(p.TRIANGLE_STRIP);


Each row is drawn as a connected strip of triangles, efficiently forming a mesh surface.

Additional transformations:

p.rotateX(Math.PI / 3);
p.translate(...);


These adjust the camera angle and positioning to create a 3D perspective view.

Technical Highlights

Built with React and p5.js

Uses dynamic import("p5") to avoid server-side rendering issues

WebGL rendering for hardware-accelerated 3D graphics

Procedural terrain generation using Perlin Noise

Continuous animation loop for real-time terrain streaming

Proper cleanup of the p5 instance on component unmount

Key Takeaways

Perlin Noise is well-suited for generating natural procedural environments.

Small incremental offsets create smooth, organic transitions.

Infinite worlds can be simulated by shifting noise space rather than moving geometry.

TRIANGLE_STRIP enables efficient rendering of large terrain meshes.

React and p5.js can be combined effectively for interactive generative graphics in modern web applications.
