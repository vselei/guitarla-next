import Image from 'next/image';
import Link from 'next/link';

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
      <div>
        <h3>{title}</h3>
        <p>{publishedAt}</p>
        <p>{content}</p>
        <Link href={`/blog/${url}`}>Ler Post</Link>
      </div>
    </article>
  );
};

export default Post;
