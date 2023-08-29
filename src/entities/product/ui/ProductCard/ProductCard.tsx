import { useInView } from "react-intersection-observer"
import styles from "./ProductCard.module.scss"
import { type Product } from "../..";

type Props = {
  product: Product;
}

export function ProductCard (props: Props) {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })
  const { product } = props
  const { title, desc, images, price } = product;

  return (
    <article ref={ref} className={styles.product__card}>
      {inView ? <img className={styles.product__img} src={images[0]} /> : <div className={styles.product__img_skeleton}></div>}
      <h1 className={styles.product__title}>
        {title}
      </h1>
      <p className={styles.product__desc}>
        {desc}
      </p>
      <h1 className={styles.product__title}>
        {price}$
      </h1>
    </article>
  )
}