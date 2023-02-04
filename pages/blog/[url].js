import Layout from '@/components/layout';

import Image from 'next/image';

import { dateFormatter } from '@/utils/helpers';
import styles from '@/styles/blog.module.css';

const Post = ({ post }) => {
  const { title, content, image, publishedAt } = post[0].attributes;

  return (
    <Layout
      title={title}
      description={`Venda de guitarras e blog de música. ${title}`}
    >
      <article className={`container ${styles.post} ${styles['mt-3']}`}>
        <Image
          src={image.data.attributes.url}
          alt={`Blog ${title}`}
          width={1000}
          height={400}
        />
        <div className={styles.content}>
          <h3>{title}</h3>
          <p className={styles.date}>{dateFormatter(publishedAt)}</p>
          <p className={styles.text}>{content}</p>
        </div>
      </article>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/posts`);
  const { data } = await response.json();

  const paths = data?.map(d => ({
    params: {
      url: d.attributes.url
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { url } }) => {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
  );
  const { data: post } = await response.json();

  return {
    props: {
      post
    }
  };
};

export default Post;
