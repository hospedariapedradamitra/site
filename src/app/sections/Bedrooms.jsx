import React from "react";
import Image from "next/image";
import Quarto1 from "../../../public/quarto1.webp";
import Quarto2 from "../../../public/quarto2.webp";
import Quarto3 from "../../../public/quarto3.webp";
import Quarto4 from "../../../public/quarto4.webp";
import Suite1 from "../../../public/suite1.webp";

const Bedrooms = () => {
  return (
    <div className="mainBedrooms">
      <div className="titleBedrooms text-center justify-center">
        <h2 className="text-3xl p-5">Hospedagens Disponíveis</h2>
      </div>
      <div className="flex textBedrooms p-20">
        <div className="leftw12 w-1/2 p-5">
          <p>
            A Hospedaria Pedra da Mitra é uma casa de campo com ambiente
            aconchegante e familiar, onde oferecemos para hospedagem: <br />
            <br /> – 1 suíte para casal reservada (com banheiro e varanda
            privativos). <br />
            <br /> – 1 quarto com 1 cama de casal; <br />
            <br /> – 1 quarto com 1 cama de casal e 1 cama de solteiro; <br />
            <br /> – 2 quartos com beliches e cama de solteiro; <br />
            <br /> – 2 banheiros completos internos (1 fem. e 1 masc.); <br />
            <br /> – 2 lavabos externos (1 fem. e 1 masc.). <br />
            <br /> Ao reservar o quarto, o hóspede pode escolher o quarto de sua
            preferência. Os demais quartos podem ou não ser alugados durante a
            estadia (a depender da temporada e pode ser combinado previamente.){" "}
            <br />
            <br /> – a Hospedaria Serra da Mitra comporta confortavelmente 14
            hóspedes nos 5 quartos da casa.{" "}
          </p>
        </div>
        <div className="rightw12 w-1/2 p-5">
          Na área externa temos um bistrô rústico com churrasqueira onde os
          hospedes podem ficar a vontade e pedir nossas cervejas e porções.{" "}
          <br />
          <br /> Aos finais de semana e feriados temos a opção de day use – das
          14h às 18h servimos nossas cervejas artesanais bem acompanhadas por
          porções deliciosas de queijo, truta grelhada, sucos naturais para os
          hospedes e visitantes – Você ainda irá conhecer nossa cervejaria
          artesanal e saber um pouco mais sobre todas todo o processo de
          fabricação, fermentação, maturação e claro, fazer a degustação dos
          estilos de cervejas produzidas. <br />
          <br /> Nós, Letícia e Lilo, estamos sempre à disposição, da reserva ao
          “Até breve” – mais que clientes ou hóspedes cultivamos novas amizades!{" "}
          <br />
          <br /> Mais informações e reservas? Clique no botão Whatsapp e fale
          conosco.
        </div>
      </div>
      <div className="flex BedroomsPics">
        <div className="w-1/3 p-5">
          <Image src={Quarto1} alt="Quarto 1" width={2048} height={1365} layout="responsive" />
        </div>
        <div className="w-1/3 p-5">
          <Image src={Quarto2} alt="Quarto 2" width={2048} height={1365} layout="responsive" />
        </div>
        <div className="w-1/3 p-5">
          <Image src={Quarto3} alt="Quarto 3" width={2048} height={1365} layout="responsive" />
        </div>
        <div className="w-1/3 p-5">
          <Image src={Quarto4} alt="Quarto 4" width={2048} height={1365} layout="responsive" />
        </div>
        <div className="w-1/3 p-5">
          <Image src={Suite1} alt="Suíte 1" width={2048} height={1365} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default Bedrooms;
