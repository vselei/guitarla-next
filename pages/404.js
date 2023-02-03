import Layout from '@/components/layout';
import Link from 'next/link';

const NotFound404 = () => {
  return (
    <Layout title="Página Não Encontrada">
      <p className="error">Página Não Encontrada</p>
      <Link href="/" className="link-error">
        Volta a página principal
      </Link>
    </Layout>
  );
};

export default NotFound404;
