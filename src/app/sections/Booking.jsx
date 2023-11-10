import Image from "next/image";
import React from "react";
import Item1 from "../../../public/item01.webp";

const Booking = () => {
  return (
    <div className="mainBooking">
      <div className="titleBooking">
        <h3 className="text-3xl text-center justify-center pt-20">
          Tarifários e Reservas
        </h3>
      </div>
      <div className="flex itemsBooking p-20">
        <div className="itemBooking1 w-1/3 p-5">
          <Image
            src={Item1}
            alt="Tarifário e Reservas"
            width={1080}
            height={920}
            layout="responsive"
          />
          <p className="text-center justify-center">
            Tarifário e Informações <br />
            <br />
            Clique no botão abaixo para acessar nosso tarifário completo e mais
            informações. <br />
            <br />
            FALE CONOSCO
          </p>
        </div>
        <div className="itemBooking2 w-1/3 p-5">
          <Image
            src={Item1}
            alt="Tarifário e Reservas"
            width={1080}
            height={920}
            layout="responsive"
          />
          <p className="text-center justify-center">
            Reservas via AirBnb
            <br />
            <br />
            Clique abaixo para reserva de suíte.
            <br />
            <br />
            RESERVAR
          </p>
        </div>
        <div className="itemBooking3 w-1/3 p-5">
          <Image
            src={Item1}
            alt="Tarifário e Reservas"
            width={1080}
            height={920}
            layout="responsive"
          />
          <p className="text-center justify-center">
            Reservas via AirBnb
            <br />
            <br />
            Clique abaixo para reserva de Quarto Hostel
            <br />
            <br />
            RESERVAR
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
