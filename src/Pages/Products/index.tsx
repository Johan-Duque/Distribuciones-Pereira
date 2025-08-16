import { SeekerProvider } from "../../Context/SeekerContext";
import { type Product } from "../../Types";
import { useState } from "react";
import styles from "../Pages.module.css";

import {
  Header,
  Card,
  Carousel,
  LazyComponent,
  Seeker,
} from "../../Components";

function Products() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  return (
    <>
      <Header
        title="Productos"
        text="Explora nuestro catálogo. Conoce la variedad de productos que tenemos para tu negocio, desde plásticos y repostería hasta artículos de limpieza."
        height={60}
      />

      <div>
        <SeekerProvider>
          <Seeker setMethod={setFilteredProducts} urlData="data.json" />

          <Carousel>
            {filteredProducts.length === 0 && (
              <div className={styles["noProducts-found"]}></div>
            )}

            {filteredProducts.length > 0 &&
              filteredProducts.map((product, index) => (
                <LazyComponent>
                  <Card
                    key={`filtered-${index}`}
                    img={product.img}
                    alt_img={product.alt_img}
                    title={product.title}
                    text={product.text}
                    category={product.category}
                  />
                </LazyComponent>
              ))}
          </Carousel>

        </SeekerProvider>
      </div>
    </>
  );
}

export default Products;
