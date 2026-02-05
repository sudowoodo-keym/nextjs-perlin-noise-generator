import Image from "next/image";
import styles from "./homepage.module.css";
import { Navbar } from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div id={`${styles.pageWrap}`} className="min-w-full min-h-full">
      <Navbar />
      <div id={`${styles.pageContainer}`} className="w-screen h-screen">
        <div className={`${styles.hero} w-full h-svh text-center flex flex-col items-center justify-center bg-black px-12`}>
          <p className="text-3xl font-bold">Perlin Noise Generator</p>
        </div>
        <div className="w-full h-svh text-center flex flex-col items-center justify-center bg-black px-12">

        </div>
      </div>
    </div> 
  );
}
