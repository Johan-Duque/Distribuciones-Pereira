import { DistributionNetwork, Header } from "../../Components";
import img_venezuela from "../../Images/Venezuela_2.png";

function About() {
  return (
    <>
      <Header
        title="Sobre Nosotros"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi error
            perspiciatis voluptates laudantium, tempore quibusdam quod numquam"
        height={60}
      />
      <DistributionNetwork
        img={img_venezuela}
        title="15 años en la industria"
        text_1="Your geseargphen nerwan oñes yervice eftrtchaicerte ense, Lond gepviatry forridinamianuine yortion detimacy, and nupidos youies"
        text_2="Your geseargphen nerwan oñes yervice eftrtchaicerte ense, Lond gepviatry forridinamianuine yortion detimacy, and nupidos youies io-poatiare inthorne nõestiadinetaties magis treatueetule is clgjataignet and retrminat. io-poatiare inthorne nõestiadinetaties magis treatueetule is clgjataignet and retrminat. Lond gepviatry forridinamianuine yortion detimacy, and nupidos youies io-poatiare inthorne nõestiadinetaties magis"
      />
    </>
  );
}

export { About };
