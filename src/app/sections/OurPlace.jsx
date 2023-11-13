import React from "react";
import OurPlaceImage1 from "../../../public/ourPlace1.jpg";
import Image from "next/image";

const OurPlace = () => {
  return (
    <div className="mainPlace p-20" id="ourplace">
      <div className="titleOurPlace pb-10">
        <h2 className="text-3xl">Nossa Hospedaria</h2>
        <div className="waving-line"></div>
      </div>
      <div className="flex">
        <div className="w-1/2 pr-5">

          <p className="mb-3">
            Venha se hospedar numa autêntica pousada do Sul de Minas – a
            Hospedaria Pedra da Mitra é ideal para casais, famílias,
            montanhistas, motociclistas, peregrinos e amantes da natureza.
            </p>

            <p className="mb-3">Você vai viver a experiência única de harmonizar natureza e
            gastronomia da Serra da Mantiqueira no aconchego da cozinha com
            fogão a lenha e ainda conhecer as cervejas artesanais que
            produzimos. </p>

            <p className="mb-3">Os hóspedes podem utilizar nossa cozinha, que é completa, o
            refeitório interno e o bistrô rústico na área externa onde servimos
            nossas cervejas artesanais e porções. Temos também uma churrasqueira
            à disposição.</p>
            
            <p className="mb-3">Pode-se passear por toda área do sitio – jardim, trilhas, um
            riachinho e o mirante com a vista mais linda da Serra da Mitra.</p>
            
            <p className="mb-3">
            Em nossas diárias está incluso nosso delicioso café da manhã da roça
            com queijos mundialmente premiados; aproveite o dia para ir a picos,
            cachoeiras, trilhas e fazendas vizinhas produtoras de queijo, doces,
            azeites e toda sorte de produtos do Sul de Minas.
          </p>

          <p className="mt-12 mb-12 text-2xl font-bold">
            Mais informações e reservas? <br/> Clique no botão abaixo e fale conosco.
          </p>
          <a className="rounded-lg px-6 py-4 bg-green-700 text-green-100 hover:bg-black duration-300" href="https://wa.me/5535998779878" target="_blank">
            Entre em contato com a Hospedaria Pedra da Mitra
          </a>
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
    </div>
  );
};

export default OurPlace;
