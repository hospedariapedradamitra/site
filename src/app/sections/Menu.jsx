import React from "react";
import Logo from "../../../public/logo.png";
import "../stylesheet/Menu.css";
import Image from "next/image";

const Menu = () => {
  return (
    <nav className="flex w-screen p-5 items-center">
      <div className="flex-1 flex justify-center mr-auto">
        <a href="#" className="mx-4 text-sm text-center itemsMenu">HOME</a>
        <a href="#" className="mx-4 text-sm text-center itemsMenu">SOBRE NÓS</a>
        <a href="#" className="mx-4 text-sm text-center itemsMenu">HOSPEDAGEM</a>
        <a href="#" className="mx-4 text-sm text-center itemsMenu">ATRAÇÕES</a>
      </div>
      <div className="mx-12">
        <Image src={Logo} weight={120} height={120} alt="Hospedaria Pedra da Mitra" />
      </div>
      <div className="flex-1 flex justify-center ml-auto">
        <a href="#" className="mx-4 text-sm text-center itemsMenu">DEPOIMENTOS</a>
        <a href="#" className="mx-4 text-sm text-center itemsMenu">ONDE ESTAMOS</a>
        <a href="#" className="mx-4 text-sm text-center itemsMenu">BLOG</a>
        <a href="#" className="mx-4 text-sm text-center itemsMenu">CONTATO</a>
      </div>
    </nav>
  );
};

export default Menu;
