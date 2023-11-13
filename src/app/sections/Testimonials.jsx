import React, { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/airbnb-reviews/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="testimonials" className="px-20 mb-20 text-center align-center justify-center">
      <div className="title">
        <div className="child">
          <h2 className="text-3xl">Nossos Clientes e Amigos</h2>
          <div className="waving-line"></div>
        </div>
      </div>

      <div className="sk-ww-airbnb-reviews mt-10" data-embed-id="225243"></div>

      <p className="mt-12 mb-12 text-2xl font-bold">
            Quer ver mais avaliações? <br /> Clique no botão abaixo e acesse a plataforma do AirBnb.
          </p>
          <a
            className="rounded-lg px-6 py-4 bg-green-700 text-green-100 hover:bg-black duration-300"
            href="https://www.airbnb.com.br/rooms/16883100/reviews?_set_bev_on_new_domain=1699892764_YmJkM2FhOWY1Zjgy&source_impression_id=p3_1699893016_Omf7ZKr3E1Om7cas"
            target="_blank"
          >
            Todas as nossas avaliações no AirBnb
          </a>
    </div>
  );
};

export default Testimonials;
