import styles from "./page.module.scss";
import Hero from "@/app/components/Hero/hero";
import Skills from "@/app/components/Skills/skills";
import About from "@/app/components/About/about";
import Work from "@/app/components/Work/work";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Work></Work>
    </main>
  );
}
