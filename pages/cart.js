import Image from 'next/image';

import Layout from '@/components/layout';

import styles from '@/styles/cart.module.css';

const Cart = ({ cart }) => {
  return (
    <Layout title="Carrinho">
      <main className="container">
        <h1 className="heading">Carrinho</h1>
        <div className={styles.content}>
          <div className={styles.cart}>
            <h2>Itens</h2>
            {cart.length === 0
              ? 'Carrinho Vazio'
              : cart.map(p => (
                  <div key={p.id} className={styles.product}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        src={p.image}
                        alt={`Guitarra ${p.name}`}
                      />
                    </div>
                    <div>
                      <p className={styles.name}>{p.name}</p>
                      <p>Quantidade: {p.qty}</p>
                      <p className={styles.price}>
                        $<span>{p.price}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $<span>{p.qty * p.price}</span>
                      </p>
                    </div>
                  </div>
                ))}
          </div>
          <aside className={styles.summary}>
            <h3>Resumo do Pedido</h3>
            <p>Total a Pagar: $</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
