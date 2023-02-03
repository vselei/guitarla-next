import Image from 'next/image';
import Link from 'next/link';

const Guitar = ({ guitar }) => {
  const { description, image, name, price, url } = guitar;

  return (
    <div>
      <Image
        src={image.data.attributes.formats.small.url}
        alt={`guitarra ${name}`}
        width={600}
        height={400}
      />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <Link href={`/store/${url}`}>Ver produto</Link>
      </div>
    </div>
  );
};

export default Guitar;
