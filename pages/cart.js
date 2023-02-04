import Layout from '@/components/layout';

import styles from '@/styles/cart.module.css';

const Cart = () => {
  return (
    <Layout title="Carrinho">
      <main className="container">
        <h1 className="heading">Carrinho</h1>
        <div className={styles.content}>
          <div className={styles.cart}>
            <h2>Itens</h2>
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
