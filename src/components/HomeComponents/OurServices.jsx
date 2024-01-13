import PropTypes from "prop-types";

const ServiceCard = ({ imageSrc, title, ageRange }) => (
  <div className="relative rounded-2xl">
    <img className=" h-[368px] w-full" src={imageSrc} alt={title} />
    <button className="absolute bottom-0 left-0 right-4 mx-auto mb-4 flex w-[90%] items-center justify-between rounded-2xl bg-white px-8 py-4 text-black">
      <div className="flex flex-col">
        <span className="text-left text-2xl font-medium leading-[2rem] tracking-[0.00525rem]">
          {title}
        </span>
        <span>{ageRange}</span>
      </div>
      <img src="/iconService.svg" alt="icon service" />
    </button>
  </div>
);

export const OurServices = () => (
  <section
    className="mx-auto mt-[20rem] px-5 lg:max-w-[54rem] 2xl:max-w-[76rem]"
    id="homePageServices"
  >
    <div className="text-center">
      <h2 className=" text-[30px] font-medium leading-[48px] tracking-[0.09px] lg:text-4xl">
        Nuestros Servicios
      </h2>
      <p className="mt-6 lg:mx-auto lg:w-[630px] lg:text-xl">
        Tenemos una amplia gama de servicios diseñados para nutrir el
        crecimiento integral de su hijo.
      </p>
    </div>

    <div className="mt-[88px] grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
      <ServiceCard
        imageSrc="/servicio_cuna.png"
        title="Cuna"
        ageRange="0 a 9 meses"
      />
      <ServiceCard
        imageSrc="/servicio_jardin.png"
        title="Jardín"
        ageRange="3 a 2 años"
      />
      <ServiceCard
        imageSrc="/servicio_guarderia.png"
        title="Guardería"
        ageRange="2 a 5 años"
      />
    </div>
    <div className="flex justify-center">
      <button className=" mx-auto mt-8 flex w-full items-center justify-center gap-6 rounded-full border-2 border-black py-[15px] text-left lg:mx-0 lg:w-[13rem] lg:py-[0.7rem] xl:w-[17.5rem] xl:py-[1rem]">
        Conocer más
        <div className=" right-0 top-[200px] flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-white">
          <img src="/knowMoreIcon.svg" alt="know more icon" />
        </div>
      </button>
    </div>
  </section>
);

ServiceCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ageRange: PropTypes.string.isRequired,
};
