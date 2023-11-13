import React from "react";
import Image from "next/image";
import Quarto1 from "../../../public/quarto1.webp";
import Quarto2 from "../../../public/quarto2.webp";
import Quarto3 from "../../../public/quarto3.webp";
import Quarto4 from "../../../public/quarto4.webp";
import Suite1 from "../../../public/suite1.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Bedrooms = () => {
  return (
    <div className="mainBedrooms bg-gray-100 pt-10 pb-10" id="bedrooms">
      <div className="title pb-5">
        <div className="child">
          <h2 className="text-3xl">Hospedagens Disponíveis</h2>
          <div className="waving-line"></div>
        </div>
      </div>
      <div className="flex textBedrooms px-20 py-5">
        <div className="leftw12 w-1/2 p-5">
          <p className="mb-3">
            A Hospedaria Pedra da Mitra é uma casa de campo com ambiente
            aconchegante e familiar, onde oferecemos para hospedagem:
          </p>

          <p className="mb-3">
            <FontAwesomeIcon icon={faCaretRight} /> 1 suíte para casal reservada
            (com banheiro e varanda privativos).
          </p>

          <p className="mb-3">
            <FontAwesomeIcon icon={faCaretRight} /> 1 quarto com 1 cama de
            casal;
          </p>

          <p className="mb-3">
            <FontAwesomeIcon icon={faCaretRight} /> 1 quarto com 1 cama de casal
            e 1 cama de solteiro;
          </p>

          <p className="mb-3">
            <FontAwesomeIcon icon={faCaretRight} /> 2 quartos com beliches e
            cama de solteiro;
          </p>

          <p className="mb-3">
            <FontAwesomeIcon icon={faCaretRight} /> 2 banheiros completos
            internos (1 fem. e 1 masc.);
          </p>

          <p className="mb-3">
            <FontAwesomeIcon icon={faCaretRight} /> 2 lavabos externos (1 fem. e
            1 masc.).
          </p>

          <p className="mb-3">
            Ao reservar o quarto, o hóspede pode escolher o quarto de sua
            preferência. Os demais quartos podem ou não ser alugados durante a
            estadia (a depender da temporada e pode ser combinado previamente.)
          </p>

          <p className="mb-3">
            A Hospedaria Serra da Mitra comporta confortavelmente 14 hóspedes
            nos 5 quartos da casa.
          </p>
        </div>
        <div className="rightw12 w-1/2 p-5">
          <p className="mb-3">
            Na área externa temos um bistrô rústico com churrasqueira onde os
            hospedes podem ficar a vontade e pedir nossas cervejas e porções.
          </p>

          <p className="mb-3">
            Aos finais de semana e feriados temos a opção de day use – das 14h
            às 18h servimos nossas cervejas artesanais bem acompanhadas por
            porções deliciosas de queijo, truta grelhada, sucos naturais para os
            hospedes e visitantes – Você ainda irá conhecer nossa cervejaria
            artesanal e saber um pouco mais sobre todas todo o processo de
            fabricação, fermentação, maturação e claro, fazer a degustação dos
            estilos de cervejas produzidas.
          </p>

          <p className="mb-3">
            Nós, Letícia e Lilo, estamos sempre à disposição, da reserva ao “Até
            breve” – mais que clientes ou hóspedes cultivamos novas amizades!
          </p>

          <p className="mt-12 mb-12 text-2xl font-bold">
            Mais informações e reservas? <br /> Clique no botão abaixo e fale
            conosco.
          </p>
          <a
            className="rounded-lg px-6 py-4 bg-green-700 text-green-100 hover:bg-black duration-300"
            href="https://wa.me/5535998779878"
            target="_blank"
          >
            Entre em contato com a Hospedaria Pedra da Mitra
          </a>
        </div>
      </div>
      <div className="flex BedroomsPics">
        <div className="w-1/3 p-5">
          <Image
            src={Quarto1}
            alt="Quarto 1"
            width={2048}
            height={1365}
            layout="responsive"
          />
        </div>
        <div className="w-1/3 p-5">
          <Image
            src={Quarto2}
            alt="Quarto 2"
            width={2048}
            height={1365}
            layout="responsive"
          />
        </div>
        <div className="w-1/3 p-5">
          <Image
            src={Quarto3}
            alt="Quarto 3"
            width={2048}
            height={1365}
            layout="responsive"
          />
        </div>
        <div className="w-1/3 p-5">
          <Image
            src={Quarto4}
            alt="Quarto 4"
            width={2048}
            height={1365}
            layout="responsive"
          />
        </div>
        <div className="w-1/3 p-5">
          <Image
            src={Suite1}
            alt="Suíte 1"
            width={2048}
            height={1365}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Bedrooms;
