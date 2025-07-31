import { Title, Grid, Article, Header } from "../../Components";
import { EnumColors } from "../../Types";
import styles from "./Home.module.css";

import Tachira from "../../Images/Tachira.webp";
import San_Cristobal from "../../Images/San_Cristobal.webp";
import La_Concordia from "../../Images/La_Concordia.jpg";

function Home() {
  return (
    <>
      <Header
        title="Distribuciones Pereira 2025"
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
        <Grid maxWidth marginBottom>
          <div className={styles.divImg}>
            <Title
              text="Estado / Tachira"
              type={3}
              color="white"
              align="center"
            />
            <img src={Tachira} alt="" />
          </div>
          <div className={styles.divImg}>
            <Title
              text="Ciudad / San Cristobal"
              type={3}
              color="white"
              align="center"
            />
            <img src={San_Cristobal} alt="" />
          </div>
          <div className={styles.divImg}>
            <Title
              text="Municipio / La Concordia"
              type={3}
              color="white"
              align="center"
            />
            <img src={La_Concordia} alt="" />
          </div>
        </Grid>
      </section>
    </>
  );
}

export { Home };
