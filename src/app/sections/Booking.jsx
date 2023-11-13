import Image from "next/image";
import React from "react";
import Item1 from "../../../public/item01.webp";

const Booking = () => {
  return (
    <div className="mainBooking py-10">
      <div className="title">
        <div className="child">
          <h2 className="text-3xl">Tarifários e Reservas</h2>
          <div className="waving-line"></div>
        </div>
      </div>
      <div className="flex itemsBooking px-20 py-10">
        <div className="itemBooking1 w-1/2 p-5">
          <div className="bg-gray-100">
            <Image
              src={Item1}
              alt="Tarifário e Reservas"
              width={1080}
              height={920}
              layout="responsive"
            />
            <p className="text-center justify-center py-10 text-2xl font-bold">
              Tarifário e Informações
            </p>

            <p className="text-center px-5">
              Clique no botão abaixo e nos chame no WhatsApp para acessar nosso
              tarifário completo e receber mais informações.
            </p>

            <div className="py-10 justify-center align-center text-center">
              <a
                className="rounded-lg px-6 py-4 bg-green-700 text-green-100 hover:bg-black duration-300"
                href="https://wa.me/5535998779878"
                target="_blank"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
        <div className="itemBooking2 w-1/2 p-5">
          <div className="bg-gray-100">
            <Image
              src={Item1}
              alt="Tarifário e Reservas"
              width={1080}
              height={920}
              layout="responsive"
            />
            <p className="text-center justify-center py-10 text-2xl font-bold">
              Reservas via AirBnb
            </p>

            <p className="text-center px-5">
              Se preferir reservar pela plataforma AirBnb, clique no botão
              abaixo e verifique mais informações dentro da plataforma.
            </p>

            <div className="py-10 justify-center align-center text-center">
              <a
                className="rounded-lg px-6 py-4 bg-green-700 text-green-100 hover:bg-black duration-300"
                href="https://www.airbnb.com.br/rooms/16883100?_set_bev_on_new_domain=1680201239_ZDQ1MzQyNWFkNjBl&source_impression_id=p3_1680201242_3sAJg85zD1T67mxz"
                target="_blank"
              >
                Reserve pelo AirBnb
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
