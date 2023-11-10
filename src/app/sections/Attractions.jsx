import React from "react";

const Attractions = () => {
  const images = [
    "https://placekitten.com/200/200",
    "https://placekitten.com/201/200",
    "https://placekitten.com/200/201",
    "https://placekitten.com/201/201",
    "https://placekitten.com/200/200",
    "https://placekitten.com/201/200",
    "https://placekitten.com/200/201",
    "https://placekitten.com/201/201",
  ];
  return (
    <div className="flex AttractionsItem p-20">
      <div className="w-1/2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
        {images.map((imageUrl, index) => (
          <div key={index} className="relative overflow-hidden rounded">
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="w-1/2 texto p-5">
        <h2 className="text-3xl">Atrações e Natureza</h2><br /><br />
        <p>
          A natureza ao redor da pousada é preservada e abundante – florestas e
          campos de altitude, grandes maciços de pedra, cachoeiras e à noite o
          céu mais estrelado que você vai ver na vida. <br /><br /> A Pedra da Mitra é o
          lugar ideal pra quem quer fazer novos amigos, meditar em silencio ou
          se aventurar pelas montanhas, são mais de 400 hectares de florestas
          intocadas que formam a Serra da Mitra ao redor da Hospedaria para se
          explorar e passear. <br /><br /> Estamos localizados próximo aos Parques: Estadual
          da Serra do Papagaio, Parque Nacional do Itatiaia e aos pés da RPPN da
          Mitra do Bispo. <br /><br /> Disponibilizamos guias de ecoturismo e transporte em
          veículo 4×4 para passeios pela região das Terras Altas da Mantiqueira.<br />
          Adoramos fazer amigos!
        </p>
      </div>
    </div>
  );
};

export default Attractions;
