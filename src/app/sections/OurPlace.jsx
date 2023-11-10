import React from "react";
import OurPlaceImage1 from "../../../public/ourPlace1.jpg";
import Image from "next/image";

const OurPlace = () => {
  return (
    <div className="flex mainPlace p-20">
      <div className="w-1/2">
        <h2 className="text-3xl">Nossa Hospedaria</h2> <br />
        <br />
        <p>
          Venha se hospedar numa autêntica pousada do Sul de Minas – a
          Hospedaria Pedra da Mitra é ideal para casais, famílias, montanhistas,
          motociclistas, peregrinos e amantes da natureza. <br />
          <br />
          Você vai viver a experiência única de harmonizar natureza e
          gastronomia da Serra da Mantiqueira no aconchego da cozinha com fogão
          a lenha e ainda conhecer as cervejas artesanais que produzimos. <br />
          <br />
          Os hóspedes podem utilizar nossa cozinha, que é completa, o refeitório
          interno e o bistrô rústico na área externa onde servimos nossas
          cervejas artesanais e porções. Temos também uma churrasqueira à
          disposição. <br />
          <br />
          Pode-se passear por toda área do sitio – jardim, trilhas, um riachinho
          e o mirante com a vista mais linda da Serra da Mitra. <br />
          <br />
          Em nossas diárias está incluso nosso delicioso café da manhã da roça
          com queijos mundialmente premiados; aproveite o dia para ir a picos,
          cachoeiras, trilhas e fazendas vizinhas produtoras de queijo, doces,
          azeites e toda sorte de produtos do Sul de Minas.
        </p>
        <p className="mt-5 mb-5 text-2xl">
          Mais informações e reservas? Clique no botão abaixo e fale conosco.
        </p>
        <button class="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300">
          Entre em contato com a Hospedaria Pedra da Mitra
        </button>
      </div>
      <div className="w-1/2">
        <Image
          src={OurPlaceImage1}
          alt="Nossa Hospedaria"
          width={1100}
          height={733}
        />
      </div>
    </div>
  );
};

export default OurPlace;
