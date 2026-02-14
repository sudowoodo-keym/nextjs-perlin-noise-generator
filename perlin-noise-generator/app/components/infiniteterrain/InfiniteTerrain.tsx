"use client";

import { useEffect, useRef } from "react";

export const InfiniteTerrain = () => {
  
  const sketchRef = useRef<HTMLDivElement>(null);

  let instance: any;

  let cols: number, rows: number;
  let scl = 50;
  let landscape: number[][];

  let flying = 0;

  
  useEffect(() => {

    const loadP5 = async () => {
      const p5 = (await import ("p5")).default;

      const sketch = (p: any) => {
        p.setup = () => {

          p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL); 
          cols = Math.floor((p.windowWidth * 2) / scl);
          rows = Math.floor((p.windowHeight * 1.5) / scl);

          landscape = Array.from({ length: cols }, () =>
            Array.from({ length: rows }, () => 0)
          );  
        };
       
        p.draw = () => {
          p.background(0);
          p.stroke(255);
          p.noFill();

          flying -= 0.05;

          let yoff = flying;
          for (let y = 0; y < rows; y++) {
            let xoff = 0;
            for (let x = 0; x < cols; x++) {
              landscape[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -300, 300);
              xoff += 0.1;
            }
            yoff += 0.1;
          };

          p.rotateX( Math.PI / 3 );
          p.translate(-p.height / .6 + 50 , -p.width / 2 );

          for (let y = 0; y < rows-1; y++) {
            p.beginShape(p.TRIANGLE_STRIP);
            for (let x = 0; x < cols-1; x++) {
              p.vertex(x*scl, y*scl, landscape[x][y]);
              p.vertex(x*scl, (y+1)*scl, landscape[x][y+1]);
              // p.rect(x*scl,y*scl,scl,scl)
            };
            p.endShape();
          };

        };
        // p.draw = () => {
        //   p.background(0);
        //
        //   p.rotateX(p.frameCount * 0.01);
        //   p.rotateY(p.frameCount * 0.01);
        //
        //   p.normalMaterial();
        //   p.box(200);
        // };
      };

      if (sketchRef.current) {
        instance = new p5(sketch, sketchRef.current);
      };
    };

    loadP5();

    return () => {
      instance?.remove(); // cleanup on unmount
    };
  }, []);

  return (
    <div ref={sketchRef}/>
  )
}

