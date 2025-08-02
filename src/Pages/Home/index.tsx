import { Title, Grid, Article, Header, Loading } from "../../Components";
import { EnumColors } from "../../Types";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header
        title={`Distribuciones Pereira 2025`}
        text="Empresa especializada en la distribución de productos plásticos, de repostería y de limpieza en los estados Táchira, Mérida y Barinas"
        height={100}
      />

      <section className={styles.Section_1}>
        <Title text="¿Que ofrecemos?" type={2} color="black" align="center" />
        <Grid maxWidth>
          <Article title="Ventas al mayor" backgroundColor={EnumColors.light}>
            Ofrecemos soluciones de suministro a gran escala para negocios y
            distribuidores. Nos enfocamos en una entrega eficiente para
            optimizar tus operaciones mayoristas.
          </Article>

          <Article title="Ventas al detal" backgroundColor={EnumColors.light}>
            Para el consumidor final, brindamos una experiencia de compra
            cómoda. Puedes adquirir nuestros productos individualmente, con
            facilidad y flexibilidad.
          </Article>

          <Article
            title="Envios a multiples Regiones"
            backgroundColor={EnumColors.light}
          >
            Disponemos de infraestructura y socios logísticos para llevar
            nuestros productos a toda Venezuela. Tu pedido llegará seguro y
            puntual, sin importar la ubicación.
          </Article>
        </Grid>
      </section>

      <section className={styles.Section_2}>
        <Title
          text="¿Donde nos ubicamos?"
          type={2}
          color="black"
          align="center"
        />
        <Grid maxWidth>
          <div className={styles.divImg}>
            <Title
              text="Estado / Tachira"
              type={3}
              color="white"
              align="center"
            />
            <img src='https://i.ibb.co/hR7hJHDV/Tachira.webp' alt="Tachira" />
          </div>
          <div className={styles.divImg}>
            <Title
              text="Ciudad / San Cristobal"
              type={3}
              color="white"
              align="center"
            />
            <img src='https://i.ibb.co/9m2L8CXK/San-Cristobal.webp' alt="San Cristobal" />
          </div>
          <div className={styles.divImg}>
            <Title
              text="Municipio / La Concordia"
              type={3}
              color="white"
              align="center"
            />
            <img src='https://i.ibb.co/1JssxrjP/La-Concordia.jpg' alt="La Concordia" />
          </div>
        </Grid>

      </section>

    </>
  );
}

export { Home };
