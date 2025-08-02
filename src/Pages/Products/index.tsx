import { Header, Card, Carousel, Loading } from "../../Components";
import { useFetch } from "../../Hooks/useFetch";
import styles from "./Products.module.css";

interface Product {
  img: string;
  alt_img: string;
  title: string;
  text: string;
  company: string;
}

function Products() {
  const { data, loading, error } = useFetch<{ products: Product[] }>(
    "data.json"
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <span className={styles["error-message"]}>Error: {error.message}</span>;
  }

  return (
    <>
      <Header
        title="Productos"
        text="Explora nuestro catálogo. Conoce la variedad de productos que tenemos para tu negocio, desde plásticos y repostería hasta artículos de limpieza."
        height={60}
      />

      <Carousel>
        {data?.products.map((product: Product, index: number) => (
          <Card
            key={index}
            img={product.img}
            alt_img={product.alt_img}
            title={product.title}
            text={product.text}
            company={product.company}
          />
        ))}

        {data?.products.map((product: Product, index: number) => (
          <Card
            key={index}
            img={product.img}
            alt_img={product.alt_img}
            title={product.title}
            text={product.text}
            company={product.company}
          />
        ))}
      </Carousel>
    </>
  );
}

export default Products;
