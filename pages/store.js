import Guitar from '@/components/guitar';
import Layout from '@/components/layout';

const Store = ({ guitars }) => {
  return (
    <Layout
      title="Loja de Guitarras"
      description="Loja virtual, vende de guitarras. Instrumentos GuitarLA"
    >
      <main className="container">
        <h1 className="heading">Nossa Coleção</h1>

        {guitars?.map(g => (
          <Guitar key={g.id} guitar={g.attributes} />
        ))}
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
