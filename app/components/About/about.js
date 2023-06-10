import styles from "./about.module.scss";

export default function About() {
  return (
    <section id="about">
      <div className={styles.container}>
        <h1 className={styles.title}>Hello 👋</h1>
        <p>
          My name is Janis, I am a UX/UI Developer with passion for crafting
          user-centered, responsive and highly scalable digital products that
          seamlessly blend aesthetics, functionality and usability. I thrive in
          collaborative environments where I can collaborate with designers,
          developers, product managers and other stakeholders to bring ideas to
          life.
        </p>
        <p>
          I am always looking for ways to improve and streamline processes by
          creating and advocating the use of component libraries, design systems
          and establishing new workflow patterns that help bridge gap between
          the design and development teams.
        </p>
        <p>
          Furthermore, I am a big fan of all things Agile and have been working
          with a variety of methodologies including Scrum, Kanban and SAFe
          (Scaled Agile Framework). A holder of Scrum Master and SAFe
          Practitioner certificates.
        </p>
      </div>
    </section>
  );
}
