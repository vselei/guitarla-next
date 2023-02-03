import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <nav className='navigation'>
          <Link href="/">Home</Link>
          <Link href="/about-us">Sobre Nós</Link>
          <Link href="/store">Loja</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <p>Todos os direitos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
