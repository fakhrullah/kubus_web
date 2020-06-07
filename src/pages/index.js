import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Belajar Di Mana Sahaja</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Ada smartphone? Di rumah, di sekolah, di hutan belantara, di pulau dan di mana-mana sahaja,
        {' '}
        <strong>boleh belajar.</strong>
      </>
    ),
  },
  {
    title: <>Kuiz Hanya untuk Anda</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Teknologi kepintaran buatan dan pembelajaran mesin akan digunakan untuk menghasilkan kuiz yang berbeza pada setiap individu. 
        Sebab setiap orang berbeza kekuatan dan kelemahannya.
      </>
    ),
  },
  {
    title: <>Hak Milik Rakyat</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Koleksi pangkalan data kuiz yang datang dari rakyat dikembalikan kepada rakyat. <br />
        Data kuiz-kuiz akan dilepaskan pada setiap 1-2 minggu bawah lesen <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">Creative Commons Zero, CC0</a>.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
