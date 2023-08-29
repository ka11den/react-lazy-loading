import cn from "classnames"
import styles from "./ProductList.module.scss";
import { type Product, ProductCard } from "../../../entities/product";

type Props<T extends Product> = {
  products: T[]
  isFetching?: boolean
}

export function ProductList<T extends Product>(props: Props<T>) {
  const { products, isFetching } = props;

  if (isFetching && products.length === 0) return <div>Fetching</div>

  return (
    <div className={styles.products}>
      <div className={cn(styles.products__container, styles.container)}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}