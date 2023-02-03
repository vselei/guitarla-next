import GuitarsList from '@/components/guitars-list';
import Layout from '@/components/layout';

const Store = ({ guitars }) => {
  return (
    <Layout
      title="Loja de Guitarras"
      description="Loja virtual, vende de guitarras. Instrumentos GuitarLA"
    >
      <main className="container">
        <h1 className="heading">Nossa Coleção</h1>

        <GuitarsList guitars={guitars} />
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
