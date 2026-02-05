import Image from "next/image";
import styles from "./homepage.module.css";
import { Navbar } from "./components/navbar/Navbar";

export default function Home() {
  return (<div id={`${styles.pageWrap}`} className="min-w-full min-h-full">
      <Navbar />
    </div> 
  );
}
