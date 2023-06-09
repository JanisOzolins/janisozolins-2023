import styles from "./skills.module.scss";

export default function Skills() {
  return (
    <section id="skills">
      <div className={styles.container}>
        <div
          className={`${styles.skills__container} ${styles.skills__container__one}`}
        >
          <span className={styles.skills__pill}>
            <span className={styles.skills__pill__label}>Angular</span>
          </span>
          <span className={styles.skills__pill}>
            <span className={styles.skills__pill__label}>Next.JS</span>
          </span>
          <span className={styles.skills__pill}>
            <span className={styles.skills__pill__label}>TypeScript</span>
          </span>
          <span className={styles.skills__pill}>
            <span className={styles.skills__pill__label}>JavaScript</span>
          </span>
          <span className={styles.skills__pill}>
            <span className={styles.skills__pill__label}>HTML</span>
          </span>
          <span className={styles.skills__pill}>
            <span className={styles.skills__pill__label}>CSS & SASS</span>
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
        </div>
        <div
          className={`${styles.skills__container} ${styles.skills__container__two}`}
        >
          <span className={styles.skills__pill}>
            <span className={styles.skills__pill__label}>Agile Certified</span>
          </span>
          <span className={styles.skills__pill}>
            <span className={styles.skills__pill__label}>Design systems</span>
          </span>
          <span className={styles.skills__pill}>
            <span className={styles.skills__pill__label}>Atlassian Jira</span>
          </span>
          <span className={styles.skills__pill}>
            <span className={styles.skills__pill__label}>
              Component libraries
            </span>
          </span>
        </div>
        <div
          className={`${styles.skills__container} ${styles.skills__container__three}`}
        >
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
            <span className={styles.skills__pill__label}>Testing</span>
          </span>
        </div>
      </div>
    </section>
  );
}
