import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FloatingWhatsAppButton = () => {
  const openWhatsAppChat = () => {
    window.open("https://wa.me/5535998779878", "_blank");
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsAppChat}>
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </div>
  );
};

export default FloatingWhatsAppButton;
