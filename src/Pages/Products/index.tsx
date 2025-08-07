import {
  Header,
  Card,
  Carousel,
  Loading,
  Error,
  LazyComponent,
} from "../../Components";
import { useFetch } from "../../Hooks/useFetch";

interface Product {
  img: string;
  alt_img: string;
  title: string;
  text: string;
  category: string;
}

interface ProductsByCategory {
  Products: {
    [key: string]: Product[];
  };
}

function Products() {
  const { data, loading, error } = useFetch<ProductsByCategory>("data.json");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  const allProducts: Product[] = data
    ? Object.values(data.Products).flat()
    : [];

  return (
    <>
      <Header
        title="Productos"
        text="Explora nuestro catálogo. Conoce la variedad de productos que tenemos para tu negocio, desde plásticos y repostería hasta artículos de limpieza."
        height={60}
      />

      <Carousel>
        {allProducts.map((product, index) => (
          <LazyComponent>
            <Card
              key={index}
              img={product.img}
              alt_img={product.alt_img}
              title={product.title}
              text={product.text}
              category={product.category}
            />
          </LazyComponent>
        ))}
      </Carousel>
    </>
  );
}

export default Products;
