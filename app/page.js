import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "@/app/components/Hero/hero";
import Skills from "@/app/components/Skills/skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <Skills></Skills>
    </main>
  );
}
