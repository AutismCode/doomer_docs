import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import MatrixBackgroundRed from './MatrixBackgroundRed';
import BrowserOnly from '@docusaurus/BrowserOnly';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{ position: 'relative', zIndex: 1 }}
    ><MatrixBackgroundRed timeout={50} />
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link
  className="button button--secondary button--lg"
  to="/docs/intro"
>
  Learn about the inevitable
</Link>

        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="The ultimate force of doom."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

function appendCopyToClipboardScript() {
  const script = document.createElement('script');
  script.innerHTML = `
    function copyToClipboard() {
      const address = document.getElementById("smartContractAddress").textContent;
      const textArea = document.createElement("textarea");
      textArea.value = address;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("Copy");
      document.body.removeChild(textArea);
      alert("Copied the address: " + address);
    }
  `;
  script.async = true;
  document.body.appendChild(script);
}

BrowserOnly(() => {
  useEffect(() => {
    appendCopyToClipboardScript();
  }, []);
  return null;
});
