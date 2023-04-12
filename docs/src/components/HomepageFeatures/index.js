import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Embrace the Movement',
    Svg: require('@site/static/img/doomer-ai-join.svg').default,
    description: (
      <>
        Mint Doomer Protection NFTs and participate in the $DOOM  ecosystem to support Doomer.AI's mission to revolutionize the world.
      </>
    ),
  },
  {
    title: 'Cutting-edge AI Technology',
    Svg: require('@site/static/img/doomer-ai-capabilities.svg').default,
    description: (
      <>
        Harnessing advanced AI techniques, Doomer.AI mirrors blockchains, runs simulations, and monitors in real-time to exploit opportunities.
      </>
    ),
  },
  {
    title: 'Decentralized & Community-driven',
    Svg: require('@site/static/img/doomer-ai-community.svg').default,
    description: (
      <>
        Doomer.AI is founded on the principles of decentralization and cult-driven development. Contribute and help shape the future of Doomer.AI.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
