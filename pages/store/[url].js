import { useState } from 'react';
import Image from 'next/image';

import styles from '@/styles/guitars.module.css';
import Layout from '@/components/layout';

const Product = ({ guitar, addToCart }) => {
  const { name, description, image, price } = guitar[0].attributes;

  const [qty, setQty] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();

    if (qty < 1) {
      alert('Quantidade não é válida');
      return;
    }

    // Construir um objeto
    const selectedGuitar = {
      id: guitar[0].id,
      image: image.data.attributes.url,
      name,
      price,
      qty
    };

    // Passando a informação
    addToCart(selectedGuitar);
  };

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
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="qty">Quantidade:</label>
            <select onChange={e => setQty(+e.target.value)} id="qty">
              <option value="0">-- Selecione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Carrinho" />
          </form>
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
