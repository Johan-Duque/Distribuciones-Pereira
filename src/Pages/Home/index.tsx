import {
  Title,
  Grid,
  Article,
  Header,
  DivImage,
  LazyComponent,
} from "../../Components";
import styles from "../Pages.module.css";

function Home() {
  return (
    <>
      <Header
        title={`Distribuciones Pereira 2025`}
        text="Empresa especializada en la distribución de productos plásticos, de repostería y de limpieza en los estados Táchira, Mérida y Barinas"
        height={100}
      />

      <section className={styles.home_section_1}>
        <Title text="¿Que ofrecemos?" type={2} color="black" align="center" />
        <Grid maxWidth>
          <LazyComponent>
            <Article
              title="Ventas al mayor"
              text="Soluciones de suministro para tu negocio. Ofrecemos ventas al por
            mayor con una entrega eficiente que optimiza tus operaciones."
              src="https://i.ibb.co/VYFnCxck/Ventas-al-mayor.jpg"
            />
          </LazyComponent>

          <LazyComponent>
            <Article
              title="Ventas al detal"
              text="Suministro flexible para tu negocio. Ofrecemos una compra cómoda y
            simple, adquiriendo productos individualmente según tus necesidades."
              src="https://i.ibb.co/TBMDHrcq/Ventas-al-detal.jpg"
            />
          </LazyComponent>

          <LazyComponent>
            <Article
              title="Envío multiestatal"
              text=" Soluciones de envío a nivel regional. Manejamos la logística para
            que tus productos lleguen de forma eficiente a múltiples regiones."
              src="https://i.ibb.co/vykgQrV/Envios-multi-regional.png"
            />
          </LazyComponent>
        </Grid>
      </section>

      <section className={styles.home_section_2}>
        <Title
          text="¿Donde nos ubicamos?"
          type={2}
          color="black"
          align="center"
        />
        <Grid maxWidth>
          <LazyComponent>
            <DivImage
              src="https://i.ibb.co/hR7hJHDV/Tachira.webp"
              alt="Tachira"
              text="Estado / Tachira"
            />
          </LazyComponent>

          <LazyComponent>
            <DivImage
              src="https://i.ibb.co/9m2L8CXK/San-Cristobal.webp"
              alt="San Cristobal"
              text="Ciudad / San Cristobal"
            />
          </LazyComponent>

          <LazyComponent>
            <DivImage
              src="https://i.ibb.co/1JssxrjP/La-Concordia.jpg"
              alt="La Concordia"
              text="Municipio / La Concordia"
            />
          </LazyComponent>
        </Grid>
      </section>
    </>
  );
}

export { Home };
