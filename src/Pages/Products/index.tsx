import {
  Header,
  Card,
  Carousel,
  Loading,
  Error,
  LazyComponent,
  Seeker,
} from "../../Components";
import { useFetch, useSeekerContext } from "../../Hooks";

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
  const { methodRender, filteredProducts } = useSeekerContext();

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

     <div>
       <Seeker />

      <Carousel>
        {methodRender === 0 &&
          allProducts.map((product, index) => (
            <LazyComponent key={`all-${index}`}>
              <Card
                img={product.img}
                alt_img={product.alt_img}
                title={product.title}
                text={product.text}
                category={product.category}
              />
            </LazyComponent>
          ))}

        {/* Aquí está la corrección: usamos 'filteredProducts.map' directamente */}
        {methodRender === 1 &&
          filteredProducts.map((product, index) => (
            <LazyComponent >
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
     </div>
    </>
  );
}

export default Products;