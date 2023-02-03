import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/guitars.module.css'

const Guitar = ({ guitar }) => {
  const { description, image, name, price, url } = guitar;

  return (
    <div className={styles.guitar}>
      <Image
        src={image.data.attributes.formats.small.url}
        alt={`guitarra ${name}`}
        width={600}
        height={400}
      />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link className={styles.link} href={`/store/${url}`}>Ver produto</Link>
      </div>
    </div>
  );
};

export default Guitar;
