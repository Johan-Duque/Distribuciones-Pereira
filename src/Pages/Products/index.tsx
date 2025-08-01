import { Header, Card, Carousel } from "../../Components";
import { useFetch } from "../../Hooks/useFetch";

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
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <>
      <Header
        title="Productos"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi error
            perspiciatis voluptates laudantium, tempore quibusdam quod numquam"
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

export { Products };
