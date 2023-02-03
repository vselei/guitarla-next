import Image from 'next/image';

import styles from '@/styles/guitars.module.css';
import Layout from '@/components/layout';

const Product = ({ guitar }) => {
  const { name, description, image, price } = guitar[0].attributes;

  return (
    <Layout
      title={`Guitarra ${name}`}
      description={`Venda de guitarras e blog de música. Guitarra ${name}`}
    >
      <div className={styles.guitar}>
        <Image
          src={image.data.attributes.url}
          alt={`guitarra ${name}`}
          width={600}
          height={400}
        />
        <div className={styles.content}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/guitars`);
  const { data } = await response.json();
  const paths = data?.map(g => ({
    params: {
      url: g.attributes.url
    }
  }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { url } }) => {
  const response = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );
  const { data: guitar } = await response.json();

  return {
    props: {
      guitar
    }
  };
};

export default Product;
