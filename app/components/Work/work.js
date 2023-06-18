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
            <h2 className={styles.portfolio__title}>SAP Learning</h2>
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
            src="/images/at_thumb.jpg"
          />
          <div className={styles.portfolio__content}>
            <h2 className={styles.portfolio__title}>Autotrader UK</h2>
            <p>
              The UK's leading user and new car digital marketplace with over 60
              million monthly cross-platform visits. The company's flagship B2B
              software suite provides price values in accordance with the
              market, analytics and forecast as well as integrated logistics and
              reporting solutions to more than 12,000 of its B2B customers.
            </p>
          </div>
          <a
            className={styles.portfolio__cta}
            href="https://www.autotrader.co.uk"
          >
            Visit site
          </a>
        </div>
        <div className={styles.portfolio__item}>
          <img
            className={styles.portfolio__item__image}
            src="/images/sensat_thumb.gif"
          />
          <div className={styles.portfolio__content}>
            <h2 className={styles.portfolio__title}>Sensat</h2>
            <p>
              Sensat is a visualisation platform enabling better collaboration
              and decision-making for all project teams involved. By collecting
              and delivering infrastructure data, our platform translates the
              real world into a digital version.
            </p>
          </div>
          <a
            className={styles.portfolio__cta}
            href="https://www.sensat.co/product"
          >
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
              In close collaboration with the founder, I was tasked with
              bringing their brand vision into reality by designing and
              developing the initial version of their online store that serves
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
              A complete redesign of their website into a modern, brand-aware,
              responsive and fully functional online store enabling the company
              to ship their delicious produce to customers across Australia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
