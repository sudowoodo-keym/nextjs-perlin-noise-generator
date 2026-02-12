"use client";

import styles from "./drawingboard.module.css";
import { useEffect, useRef } from "react";

export const Drawingboard = () => {

  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let instance: any;

    const loadP5 = async () => {
      const p5 = (await import ("p5")).default;

      const sketch = (p: any) => {
        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        };

        p.draw = () => {
          p.background(20);

          const rotationX = p.map(p.mouseY, 0, p.height, -p.PI, p.PI);
          const rotationY = p.map(p.mouseX, 0, p.width, -p.PI, p.PI);

          p.rotateX(rotationX);
          p.rotateY(rotationY);

          p.normalMaterial();
          p.box(150);
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
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
