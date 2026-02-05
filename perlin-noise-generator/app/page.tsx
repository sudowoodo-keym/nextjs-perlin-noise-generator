import Image from "next/image";
import styles from "./homepage.module.css";
import { Navbar } from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div id={`${styles.pageWrap}`} className="min-w-full min-h-full">
      <Navbar />
      <div id={`${styles.pageContainer}`} className="w-screen h-screen bg-neutral-800">
        <div className={`${styles.hero} w-full h-svh text-center flex flex-col items-center justify-center`}>
          <p className="text-3xl">Perlin Noise Generator</p>
        </div>
      </div>
    </div> 
  );
}
