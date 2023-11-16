import React from "react";
import Logo from "../../../public/logo.webp";
import "../stylesheet/Menu.css";
import Image from "next/image";

const Menu = () => {
  return (
    <nav className="flex w-screen p-5 items-center">
      <div className="flex-1 flex justify-center mr-auto">
        <a
          href="#home"
          className="mx-4 text-sm text-center itemsMenu font-bold"
        >
          HOME
        </a>
        <a
          href="#ourplace"
          className="mx-4 text-sm text-center itemsMenu font-bold"
        >
          SOBRE NÓS
        </a>
        <a
          href="#bedrooms"
          className="mx-4 text-sm text-center itemsMenu font-bold"
        >
          HOSPEDAGEM
        </a>
      </div>
      <div className="mx-12">
        <Image
          src={Logo}
          weight={120}
          height={120}
          alt="Hospedaria Pedra da Mitra"
        />
      </div>
      <div className="flex-1 flex justify-center ml-auto">
        <a
          href="#attractions"
          className="mx-4 text-sm text-center itemsMenu font-bold"
        >
          ATRAÇÕES
        </a>
        <a
          href="#testimonials"
          className="mx-4 text-sm text-center itemsMenu font-bold"
        >
          DEPOIMENTOS
        </a>
        <a
          href="#address"
          className="mx-4 text-sm text-center itemsMenu font-bold"
        >
          ONDE ESTAMOS
        </a>
        {/* <a href="#" className="mx-4 text-sm text-center itemsMenu font-bold">BLOG</a>
        <a href="#" className="mx-4 text-sm text-center itemsMenu font-bold">CONTATO</a> */}
      </div>
    </nav>
  );
};

export default Menu;
