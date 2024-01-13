import React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      className={`${
        id === open ? "rotate-180" : ""
      } w-[30px] transition-transform lg:w-[48px]`}
    >
      <path
        d="M36 24.0001L24 24.0001M24 24.0001L12 24.0001M24 24.0001L24 12M24 24.0001L24 36"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

Icon.propTypes = {
  id: PropTypes.number.isRequired, // Adding prop validation for the id prop
  open: PropTypes.number.isRequired,
};

export const Methodologies = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className=" py-[184px]">
      <div className=" px-5 lg:mx-auto lg:max-w-[54rem] lg:p-0 2xl:max-w-[76rem]">
        <h2 className=" text-center text-3xl font-medium leading-[48px] tracking-[0.09px] lg:text-left xl:mr-[800px] xl:text-4xl">
          Conoce nuestras metodologías
        </h2>
        <p className=" mt-4 text-center lg:text-left xl:ml-[450px] xl:text-xl xl:leading-[32px] xl:tracking-[0.1px]">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur ma. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia
        </p>

        <div className=" mx-auto mt-[120px] max-w-[76rem]">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              className=" font-normal leading-[48px] tracking-[0.09] text-black lg:text-4xl"
              onClick={() => handleOpen(1)}
            >
              01.- Pedagogía Montessori
            </AccordionHeader>
            <AccordionBody className=" my-[48px] flex max-w-[992px] flex-col justify-center gap-[64px] lg:mx-auto lg:flex-row">
              <div>
                <img
                  className="h-[168px] w-full lg:w-[280px]"
                  src="/pedagogia img.png"
                  alt=""
                />
              </div>
              <div className=" lg:w-[65%]">
                <p className=" text-lg font-normal leading-[32px] tracking-[0.1px] text-black lg:mr-[50px] lg:text-xl">
                  Basada en la filosofía de Maria Montessori, esta metodología
                  enfatiza la independencia, la autonomía y el aprendizaje
                  autodirigido. Se proporcionan materiales educativos
                  específicos que permiten a los niños aprender a su propio
                  ritmo.
                </p>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              className=" font-normal leading-[48px] tracking-[0.09] text-black lg:text-4xl"
              onClick={() => handleOpen(2)}
            >
              02.- Enfoque Reggio Emilia
            </AccordionHeader>
            <AccordionBody className=" my-[48px] flex max-w-[992px] flex-col justify-center gap-[64px] lg:mx-auto lg:flex-row">
              <div>
                <img
                  className="h-[168px] w-full lg:w-[280px]"
                  src="/pedagogia img.png"
                  alt=""
                />
              </div>
              <div className=" lg:w-[65%]">
                <p className=" text-lg font-normal leading-[32px] tracking-[0.1px] text-black lg:mr-[50px] lg:text-xl">
                  Basada en la filosofía de Maria Montessori, esta metodología
                  enfatiza la independencia, la autonomía y el aprendizaje
                  autodirigido. Se proporcionan materiales educativos
                  específicos que permiten a los niños aprender a su propio
                  ritmo.
                </p>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              className=" font-normal leading-[48px] tracking-[0.09] text-black lg:text-4xl"
              onClick={() => handleOpen(3)}
            >
              03.- Enfoque Waldorf
            </AccordionHeader>
            <AccordionBody className=" my-[48px] flex max-w-[992px] flex-col justify-center gap-[64px] lg:mx-auto lg:flex-row">
              <div>
                <img
                  className="h-[168px] w-full lg:w-[280px]"
                  src="/pedagogia img.png"
                  alt=""
                />
              </div>
              <div className=" lg:w-[65%]">
                <p className=" text-lg font-normal leading-[32px] tracking-[0.1px] text-black lg:mr-[50px] lg:text-xl">
                  Basada en la filosofía de Maria Montessori, esta metodología
                  enfatiza la independencia, la autonomía y el aprendizaje
                  autodirigido. Se proporcionan materiales educativos
                  específicos que permiten a los niños aprender a su propio
                  ritmo.
                </p>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader
              className=" font-normal leading-[48px] tracking-[0.09] text-black lg:text-4xl"
              onClick={() => handleOpen(4)}
            >
              04.- Aprendizaje Activo
            </AccordionHeader>
            <AccordionBody className=" my-[48px] flex max-w-[992px] flex-col justify-center gap-[64px] lg:mx-auto lg:flex-row">
              <div>
                <img
                  className="h-[168px] w-full lg:w-[280px]"
                  src="/pedagogia img.png"
                  alt=""
                />
              </div>
              <div className=" lg:w-[65%]">
                <p className=" text-lg font-normal leading-[32px] tracking-[0.1px] text-black lg:mr-[50px] lg:text-xl">
                  Basada en la filosofía de Maria Montessori, esta metodología
                  enfatiza la independencia, la autonomía y el aprendizaje
                  autodirigido. Se proporcionan materiales educativos
                  específicos que permiten a los niños aprender a su propio
                  ritmo.
                </p>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
