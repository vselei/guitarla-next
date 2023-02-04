import Image from 'next/image';

import Layout from '@/components/layout';

import styles from '@/styles/cart.module.css';

const Cart = ({ cart, updateProduct }) => {
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
                      <div className={styles.qty}>
                        <label htmlFor="qty">Quantidade: </label>
                        <select
                          onChange={e =>
                            updateProduct({
                              id: p.id,
                              qty: e.target.value
                            })
                          }
                          value={p.qty}
                          className={styles.select}
                          id="qty"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
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
