import Link from 'next/link';
import Layout from '@/components/layout';

const Home = () => {
  return (
    <Layout
      title="Home"
      description="Blog de música, venda de guitarras e mais!"
    >
      <h1>Hello World</h1>
      <Link href="/about-us">Sobre nós</Link>
    </Layout>
  );
};

export default Home;
