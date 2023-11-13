import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex mainFooter px-20 py-20 text-center">
      <div className="w-1/3">
        <p className="text-2xl font-bold mb-5">A Pedra da Mitra</p>
        <p>
          Em um vale nas Terras Altas da Mantiqueira, hospedagem com café da
          roça e jantar, Chopp Puro Malte Artesanal, passeios 4×4 pra cachoeiras
          e picos, fazendas de queijo e azeite da região de Alagoa MG.
        </p>
      </div>
      <div className="w-1/3">
        <p className="text-2xl font-bold mb-5">Contato</p>
        <p>Vale do Mato Dentro</p>
           <p>Zona rural</p>
           <p>Alagoa – MG</p>
           <p>CEP 37458-000</p>
           <p><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp: +55 (35) 99877-9878</p>
      </div>
      <div className="w-1/3">
        <p className="text-2xl font-bold mb-5">Redes Sociais</p>
        <p className="mb-3">Siga-nos nas Redes Sociais e acompanhe as novidades.</p>
        <a className="pr-3" href="https://facebook.com/pedradamitra" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
        <a href="https://instagram.com/hospedariapedradamitra" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
      </div>
    </div>
  );
};

export default Footer;
