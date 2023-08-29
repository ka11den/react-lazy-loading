import React from 'react';
import { ProductList } from '../../../widgets/ProductList';
import { type Product } from '../../../entities/product';

import cn from "classnames";
import styles from "./MainPage.module.scss"

export function MainPage () {
  const [prorudct, setProrudct] = React.useState<Product[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true)
    try {
      fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProrudct(data.products));
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className={cn(styles.main, styles.section)}>
      <div className={cn(styles.container, styles.main__container)}>
        <h1 className={styles.section__title}>
          MainPage
        </h1>
        <ProductList products={prorudct} isFetching={isLoading} />
      </div>
    </div>
  );
};
