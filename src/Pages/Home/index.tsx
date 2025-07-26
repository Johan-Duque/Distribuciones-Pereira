import { Title, Grid, Article } from "../../Components";
import { EnumColors } from "../../Types";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <section className={styles.section_1}>
        <div className={styles.section_1__div_content}>
          <Title
            text="Distribuciones Pereira 2025"
            type={1}
            color="white"
            align="left"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi error
            perspiciatis voluptates laudantium, tempore quibusdam quod numquam
          </p>
        </div>
      </section>

      <section className={styles.section_2}>
        <Title text="¿Que ofrecemos?" type={2} color="black" align="center" />
        <Grid width={100}>
          <Article title="Ventas al mayor" backgroundColor={EnumColors.light}>
            Nos especializamos en ofrecer soluciones de suministro a gran escala
            para negocios y distribuidores. Entendemos las dinámicas del mercado
            mayorista.
          </Article>

          <Article title="Ventas al detal" backgroundColor={EnumColors.light}>
            Para el consumidor final, ofrecemos una experiencia de compra cómoda
            y accesible. Ofrecemos este modelo de negocios para que puedas
            adquirirlos individualmente
          </Article>

          <Article
            title="Envios a multiples Regiones"
            backgroundColor={EnumColors.light}
          >
            Contamos con la infraestructura y los socios logísticos necesarios
            para llevar nuestros productos a diversas Ciudades y Estados de
            Venezuela
          </Article>
        </Grid>
      </section>

      <section className={styles.section_3}>
        <Title
          text="¿Donde nos ubicamos?"
          type={2}
          color="black"
          align="center"
        />
        <Grid width={90}>
          <div className={styles.divImg}>
             <Title text="Estado / Tachira" type={3} color="white" align="center" />
            <img
              src="https://centaurimagazine.com/wp-content/uploads/2025/02/IMG_7122.jpg"
              alt=""
            />
          </div>
          <div className={styles.divImg}>
            <Title text="Ciudad / San Cristobal" type={3} color="white" align="center" />
            <img
              src="https://noticias.com.ve/wp-content/uploads/2019/03/15136737286_6793bf227b_b.jpg"
              alt=""
            />
          </div>
          <div className={styles.divImg}>
            <Title text="Municipio / La Concordia" type={3} color="white" align="center" />
            <img
              src="https://scontent.fccs8-1.fna.fbcdn.net/v/t39.30808-6/487184257_1094398552726686_4719621417511987536_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=E8dq8PM1RPkQ7kNvwF35ces&_nc_oc=Admjxcjsk9_ljxZMi1oGDnlPtR6GT6Wa7GASKqDPXoMdlHc_L0n0Bv7OxIxjJOu09Lk&_nc_zt=23&_nc_ht=scontent.fccs8-1.fna&_nc_gid=8MGN9XfsIyU4yLVWJ8E55w&oh=00_AfSkJVI1S_dvgvLE1zvLcZeJvxKkSCfHJKHQuXBXczHaDg&oe=687F473F"
              alt=""
            />
          </div>
        </Grid>
      </section>

    </>
  );
}

export { Home };
