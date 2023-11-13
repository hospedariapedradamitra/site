import Head from 'next/head';

const MapPage = () => {
  return (
    <>
      <Head>
        <title>Google Map</title>
        <meta name="description" content="Google Map Example" />
        {/* Add any additional meta tags or stylesheets here */}
      </Head>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14779.34106818684!2d-44.5931422!3d-22.1703418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e6bce8b486ea3%3A0x410a420821001b97!2sPedra%20da%20Mitra!5e0!3m2!1spt-BR!2sbr!4v1699893428840!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default MapPage;
