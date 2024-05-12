import Image from "next/image";
import styles from "./page.module.css";
import ContactNav from "./components/ContactNav";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Publications from "./components/Publications";
import About from "./components/About";
import PressRelease from "./components/PressRelease";
import Help from "./components/Help";
import Notification from "./components/Notification";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <ContactNav />
      <Navbar />
      <main>
        <Hero />
        <Publications />
        <About />
        <PressRelease />
        <Help />
        <Notification />
        <Footer />
      </main>
    </>
  );
}
