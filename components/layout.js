import Head from 'next/head';

const Layout = ({ children, title = '', description = '' }) => {
  return (
    <>
      <Head>
        <title>{`GuitarLA Next | ${title}`}</title>
        <meta name="description" content={`${description}`} />
      </Head>
      {children}
    </>
  );
};

export default Layout;
