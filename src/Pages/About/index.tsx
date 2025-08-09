import { DistributionNetwork, Header } from "../../Components";

function About() {
  return (
    <>
      <Header
        title="Sobre Nosotros"
        text="Descubre quiénes somos. Te invitamos a conocer más sobre la trayectoria, misión y valores que nos definen en Distribuciones Pereira."
        height={60}
      />
        <DistributionNetwork
          img="https://i.ibb.co/S4M2k8Tx/1000057171.jpg"
          title="15 años en la industria"
          text_1="Somos una empresa que se destaca en el mundo de la distribución, especializándose en la entrega de productos de plástico de alta calidad, que van desde vasos, bolsas, anime y bandejas, hasta artículos de otra índole como tintes de repostería, escobas y papel higiénico."
          text_2="Nuestra sede se encuentra en el Estado Táchira, en la ciudad de San Cristóbal, específicamente en el municipio La Concordia. Desde aquí, nos encargamos de llevar tus pedidos. Contamos con múltiples rutas que cubren los estados de Táchira, Mérida y Barinas, atendiendo tanto a pequeños comercios como a medianas empresas con la misma dedicación y eficiencia. ¡Permítenos ser el motor que impulse tu negocio! "
        />
    </>
  );
}

export default About;
