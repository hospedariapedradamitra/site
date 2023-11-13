import React from "react";
import MapPage from "../components/GoogleMaps";

const Address = () => {
  return (
    <div className="bg-gray-100 pt-10 pb-10 px-20" id="address">
      <div className="title pb-10">
        <div className="child">
          <h2 className="text-3xl">Como chegar</h2>
          <div className="waving-line"></div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <p className="mb-3">
            As estradas de terra que dão acesso a Alagoa/MG e a Hospedaria não
            possuem maiores problemas – mas quando chove ficam ideais pra quem
            gosta de aventuras e curte o estilo off road e 4×4.
          </p>
          <p className="mb-3">
            O acesso é tranquilo pra qualquer carro em qualquer época do ano, e
            apenas em raros períodos de chuva intensa fica restrito à veículos
            4×4 – nestas ocasiões oferecemos translado e passeios 4×4.
          </p>
          <p className="mb-14">Venha se aventurar com a gente.</p>
          <p className="text-2xl font-bold mb-14">
            Mais informações e reservas? <br /> Clique no botão Whatsapp e fale
            conosco.
          </p>
          <a
            className="rounded-lg px-6 py-4 bg-green-700 text-green-100 hover:bg-black duration-300"
            href="https://wa.me/5535998779878"
            target="_blank"
          >
            Aguardamos sua mensagem
          </a>
        </div>
        <div className="w-1/2">
          <MapPage />
        </div>
      </div>
    </div>
  );
};

export default Address;
