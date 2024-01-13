import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";

const servicesData = [
  { title: "Cuna", ageRange: "0 a 9 meses", background: "bg-cuna" },
  { title: "Jardín", ageRange: "1 a 2 años", background: "bg-jardin" },
  { title: "Guardería", ageRange: "2 a 5 años", background: "bg-guarderia" },
  {
    title: "E. Psicopedagogía",
    ageRange: "Taller",
    background: "bg-psicopedagogia",
  },
  {
    title: "E. Temprana",
    ageRange: "Bebés & Niños",
    background: "bg-temprana",
  },
  { title: "Talleres", ageRange: "Niños y Padres", background: "bg-talleres" },
  { title: "Cocina", ageRange: "Servicio", background: "bg-cocina" },
  {
    title: "Escuela de Padres",
    ageRange: "Servicio",
    background: "bg-escuela",
  },
];

const ServiceItem = ({ title, ageRange, background }) => (
  <div
    className={`flex h-[400px] items-end justify-center rounded-2xl 2xl:w-[384px] ${background} bg-cover bg-center px-5`}
  >
    <button className="mb-4 flex h-[88px] w-full items-center justify-between rounded-2xl bg-white px-4">
      <div className="flex flex-col">
        <h4 className="text-[24px] font-medium leading-[32px]">{title}</h4>
        <p className="text-[16px] leading-[24px] text-gray-400">{ageRange}</p>
      </div>
      <div className="ml-4 flex h-[40px] w-[40px] items-center justify-center rounded-[1000px] border-[2px] border-solid border-gray-300 hover:bg-[#D9D9D9]">
        <AiOutlineArrowRight className="text-[16px] text-black" />
      </div>
    </button>
  </div>
);

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  ageRange: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

const Servicios = () => {
  return (
    <section className="mb-[256px] overflow-x-hidden">
      <header
        className="h-[376px] bg-discos bg-cover bg-center pt-[172px]"
        id="header"
      >
        <div className="mx-auto px-5 lg:max-w-[54rem] lg:px-0 2xl:max-w-[76rem]">
          <h1 className="text-[58px] font-normal leading-[72px] text-white">
            Nuestros Servicios
          </h1>
        </div>
      </header>

      <p className="mx-auto mb-[4rem] mt-[176px] px-5 text-center lg:max-w-[54rem] lg:px-0 lg:text-left 2xl:max-w-[76rem]">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur ma Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id es. Ut enim
        ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut
      </p>

      <div className="mb-256 mx-auto grid grid-cols-1 gap-8 px-5 md:grid-cols-2 lg:max-w-[54rem] lg:px-0 2xl:max-w-[76rem] 2xl:grid-cols-3">
        {servicesData.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export { Servicios };
