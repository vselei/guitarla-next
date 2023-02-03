import Guitar from '@/components/guitar';
import Layout from '@/components/layout';

import styles from '@/styles/grid.module.css';

const Store = ({ guitars }) => {
  return (
    <Layout
      title="Loja de Guitarras"
      description="Loja virtual, vende de guitarras. Instrumentos GuitarLA"
    >
      <main className="container">
        <h1 className="heading">Nossa Coleção</h1>

        <div className={styles.grid}>
          {guitars?.map(g => (
            <Guitar key={g.id} guitar={g.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
  const { data: guitars } = await response.json();

  return {
    props: {
      guitars
    }
  };
};

export default Store;
