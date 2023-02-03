import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Image src='/img/logo.svg' width={300} height="40" alt="logo" />
        <nav>
          <Link href='/'>Home</Link> 
          <Link href='/about-us'>Sobre Nós</Link> 
          <Link href='/store'>Loja</Link> 
          <Link href='/blog'>Blog</Link> 
        </nav>
      </div>
    </header>
  );
};

export default Header;
