import Guitar from '@/components/guitar';
import Layout from '@/components/layout';
import Post from '@/components/post';

import styles from '@/styles/grid.module.css';

const Home = ({ guitars, posts, course }) => {
  return (
    <Layout
      title="Home"
      description="Blog de música, venda de guitarras e mais!"
    >
      <main className="container">
        <h1 className="heading">Nossa Coleção</h1>
        <div className={styles.grid}>
          {guitars?.map(g => (
            <Guitar key={g.id} guitar={g.attributes} />
          ))}
        </div>
      </main>
      <section className="container">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts?.map(p => (
            <Post key={p.id} post={p.attributes} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const urlGuitars = `${process.env.API_URL}/guitars?populate=image`;
  const urlPosts = `${process.env.API_URL}/posts?populate=image`;
  const urlCourse = `${process.env.API_URL}/course?populate=image`;

  const [resGuitars, resPosts, resCourse] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
    fetch(urlCourse)
  ]);

  const [{ data: guitars }, { data: posts }, { data: course }] =
    await Promise.all([resGuitars.json(), resPosts.json(), resCourse.json()]);

  return {
    props: {
      guitars,
      posts,
      course
    }
  };
};

export default Home;
