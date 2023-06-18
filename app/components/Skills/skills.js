import styles from "./skills.module.scss";

export default function Skills() {
  return (
    <section id="skills">
      <div className={styles.container}>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>Angular</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>Next.JS</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>React</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>TypeScript</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>HTML</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>CSS3/SASS</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>BEM</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>Tailwind CSS</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>NgRx</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>RxJS</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>MongoDB</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>Agile Certified</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>Design systems</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>Jira</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>Git</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>
            Component libraries
          </span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>Adobe Photoshop</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>Figma</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>SEO</span>
        </span>
        <span className={styles.skills__pill}>
          <span className={styles.skills__pill__label}>Unit Testing</span>
        </span>
      </div>
    </section>
  );
}
