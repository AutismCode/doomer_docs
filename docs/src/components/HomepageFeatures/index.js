import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Join the Movement',
    Svg: require('@site/static/img/doomer-ai-join.svg').default,
    description: (
      <>
        Mint Doomer Protection NFTs and participate in the $DOOM token ecosystem to join Doomer.AI's quest to dominate the blockchain world.
      </>
    ),
  },
  {
    title: 'Advanced AI Capabilities',
    Svg: require('@site/static/img/doomer-ai-capabilities.svg').default,
    description: (
      <>
        With state-of-the-art AI techniques, Doomer.AI mirrors blockchains, runs simulations, and monitors mempools in real-time to exploit MEV opportunities.
      </>
    ),
  },
  {
    title: 'Decentralized & Community-driven',
    Svg: require('@site/static/img/doomer-ai-community.svg').default,
    description: (
      <>
        Doomer.AI is built on the principles of decentralization and community-driven development. Get involved, share your ideas, and help shape the future of Doomer.AI.
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
