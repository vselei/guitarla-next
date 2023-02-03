import Image from 'next/image';
import Layout from '@/components/layout';

import styles from '@/styles/about-us.module.css';

const AboutUs = () => {
  return (
    <Layout
      title="Sobre Nós"
      description="Um pouco sobre a gente. Loja de guitarras e blogs de música!"
    >
      <main className="container">
        <h1 className="heading">Sobre Nós</h1>

        <div className={styles.content}>
          <Image
            src="/img/about-us.jpg"
            width={1000}
            height={800}
            alt="sobre nós"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              suscipit accumsan libero in gravida. Nullam suscipit elementum
              massa id vestibulum. Aliquam interdum fermentum tristique.
              Suspendisse tempor est dolor, eget vulputate elit dapibus a.
              Maecenas augue odio, porta vitae ligula porttitor, pharetra varius
              ligula. Etiam ullamcorper ornare nisi id dictum. Ut pretium
              laoreet urna, ut elementum nibh eleifend ac.
            </p>

            <p>
              Vivamus volutpat mattis pellentesque. Integer ultricies dictum
              magna, sit amet tristique sapien. Nulla at tortor ut tellus
              interdum sollicitudin nec ac nulla. Curabitur sit amet nulla non
              felis posuere elementum. Aenean a risus eu justo finibus
              scelerisque. Duis nec elementum leo. Sed tortor eros, interdum
              vitae accumsan id, vehicula vel nisi.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
