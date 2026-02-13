"use client";

import { useEffect, useRef } from "react";

export const InfiniteTerrain = () => {
  
  const sketchRef = useRef<HTMLDivElement>(null);

  let instance: any;

  let cols: any, rows: any;
  let scl = 20;

  
  useEffect(() => {

    const loadP5 = async () => {
      const p5 = (await import ("p5")).default;

      const sketch = (p: any) => {
        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL); 
          cols = Math.floor(p.windowWidth / scl);
          rows = Math.floor(p.windowHeight / scl);
        };
       
        p.draw = () => {
          p.background(0);

          p.translate(-p.width / 2, -p.height / 2);

          for (let x = 0; x < cols; x++) {
            p.beginShape();
            for (let y = 0; y < rows; y++) {
              p.stroke(255);
              p.noFill();
              p.rect(x*scl,y*scl,scl,scl)
            }
            p.endShape();
          }

        }
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
      }
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

