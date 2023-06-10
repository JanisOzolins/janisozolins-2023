import styles from "./work.module.scss";

export default function Work() {
  return (
    <section id="work">
      <div className={styles.container}>
        <div className={styles.portfolio__item}>
          <img
            className={styles.portfolio__item__image}
            src="/images/LSC_thumb.png"
          />
          <div className={styles.portfolio__content}>
            <h2 className={styles.portfolio__title}>SAP Learning Site</h2>
            <p>
              SAP Learning offers free online courses for anyone who wants to
              build in-demand development skills and prepare for SAP
              Certifications.
            </p>
          </div>
          <a className={styles.portfolio__cta} href="https://learning.sap.com">
            Visit site
          </a>
        </div>
        <div className={styles.portfolio__item}>
          <img
            className={styles.portfolio__item__image}
            src="/images/3d_thumb.jpg"
          />
          <div className={styles.portfolio__content}>
            <h2 className={styles.portfolio__title}>3D Propertys</h2>
            <p>
              3D Propertys is a US-based company providing real estate
              photography, videography and drone operation services to real
              estate agency and inviduals looking to sell their home.
            </p>
          </div>
        </div>
        <div className={styles.portfolio__item}>
          <img
            className={styles.portfolio__item__image}
            src="/images/ao_thumb.jpg"
          />
          <div className={styles.portfolio__content}>
            <h2 className={styles.portfolio__title}>Aster & Oak</h2>
            <p>
              Aster & Oak is an Australian-based family-owned organic and
              sustainable baby clothing e-commerce brand. Their products are now
            </p>
            <p>
              In close collaboration with the founder, my task was to bring
              their brand vision into reality by designing and developing the
              initial version of their online store.
            </p>
          </div>
          <a className={styles.portfolio__cta} href="https://asterandoak.com/">
            Visit site
          </a>
        </div>
        <div className={styles.portfolio__item}>
          <img
            className={styles.portfolio__item__image}
            src="/images/fdg_thumb.jpg"
          />
          <div className={styles.portfolio__content}>
            <h2 className={styles.portfolio__title}>Fudge'n'Good Coffee</h2>
            <p>
              Fudge'n'Good Coffee is a small family-owned coffee and fudge shop
              located in the heart of Tasmania, Australia.
            </p>
            <p>
              The initial phase of the project involved a complete redesign of
              their previous website into a modern, brand-aware, responsive and
              fully functional online store enabling the company to ship their
              delicious produce to customers across Australia. I was given a
              full creative freedom to design and establish their full online
              presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
