import { Title, Grid, Article, Header } from "../../Components";
import { EnumColors } from "../../Types";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header
        title={`Distribuciones Pereira 2025`}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi error
            perspiciatis voluptates laudantium, tempore quibusdam quod numquam"
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

      <section className={styles.Section_3}>
        <Title
          text="Ubicacion exacta"
          type={2}
          color="black"
          align="center"
        />
        <Grid maxWidth marginBottom>
          <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7906.648200715754!2d-72.23650750942225!3d7.755408969054159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666cae72d72479%3A0x53a9410365c243b1!2sHospital%20Central%20de%20San%20Crist%C3%B3bal.!5e0!3m2!1ses!2sve!4v1754008954106!5m2!1ses!2sve" width="90%" height="350"></iframe>
        </Grid>

      </section>
    </>
  );
}

export { Home };
