import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";

const Attractions = () => {
  const images = [
    "/quarto1.webp",
    "/quarto2.webp",
    "/quarto3.webp",
    "/quarto1.webp",
    "/quarto2.webp",
    "/quarto3.webp",
    "/quarto1.webp",
    "/quarto2.webp",
    "/quarto3.webp",
    "/quarto1.webp",
    "/quarto2.webp",
    "/quarto3.webp",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mainAttraction bg-gray-100 px-20 py-10">
      <div className="flex AttractionsItem" id="attractions">
        <div className="w-1/2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          {images.map((imageUrl, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded cursor-pointer"
              onClick={() => openModal(imageUrl)}
            >
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-1/2 texto p-5">
          <h2 className="text-3xl">Atrações e Natureza</h2>
          <div className="waving-line"></div>
          <p className="pt-10">
            A natureza ao redor da pousada é preservada e abundante – florestas
            e campos de altitude, grandes maciços de pedra, cachoeiras e à noite
            o céu mais estrelado que você vai ver na vida. <br />
            <br /> A Pedra da Mitra é o lugar ideal pra quem quer fazer novos
            amigos, meditar em silencio ou se aventurar pelas montanhas, são
            mais de 400 hectares de florestas intocadas que formam a Serra da
            Mitra ao redor da Hospedaria para se explorar e passear. <br />
            <br /> Estamos localizados próximo aos Parques: Estadual da Serra do
            Papagaio, Parque Nacional do Itatiaia e aos pés da RPPN da Mitra do
            Bispo. <br />
            <br /> Disponibilizamos guias de ecoturismo e transporte em veículo
            4×4 para passeios pela região das Terras Altas da Mantiqueira.
            <br />
            Adoramos fazer amigos!
          </p>
        </div>

        <Modal
          isOpen={selectedImage !== null}
          onRequestClose={closeModal}
          className="image-modal"
          overlayClassName="overlay-modal"
        >
          <div className="modal-content">
            <Image
              src={selectedImage}
              alt="Expanded Image"
              width={500}
              height={500}
              layout="responsive"
            />
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </Modal>
      </div>
      <div className="buttonAttraction py-10 justify-center align-center text-center">
        <a
          className="rounded-lg px-6 py-4 bg-green-700 text-green-100 hover:bg-black duration-300"
          href="https://wa.me/5535998779878"
          target="_blank"
        >
          Reserve seu lugar conosco!
        </a>
      </div>
    </div>
  );
};

export default Attractions;
