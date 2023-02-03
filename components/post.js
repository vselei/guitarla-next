import Image from 'next/image';
import Link from 'next/link';

import { dateFormatter } from '@/utils/helpers';

import styles from '@/styles/blog.module.css';

const Post = ({ post }) => {
  const { content, image, title, url, publishedAt } = post;

  return (
    <article>
      <Image
        src={image.data.attributes.formats.small.url}
        alt={`Blog ${title}`}
        width={600}
        height={400}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{dateFormatter(publishedAt)}</p>
        <p className={styles.summary}>{content}</p>
        <Link className={styles.link} href={`/blog/${url}`}>
          Ler Post
        </Link>
      </div>
    </article>
  );
};

export default Post;
