import styles from "./page.module.scss";
import Hero from "@/app/components/Hero/hero";
import Skills from "@/app/components/Skills/skills";
import About from "@/app/components/About/about";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
    </main>
  );
}
