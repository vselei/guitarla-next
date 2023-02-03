const Product = ({ guitar }) => {
  return <div>url</div>;
};

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/guitars`);
  const { data } = await response.json();
  const paths = data.map(g => ({
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
