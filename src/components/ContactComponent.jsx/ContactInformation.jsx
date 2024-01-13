export default function ContactInformation() {
  return (
    <section className=" mx-auto mt-[100px] flex flex-col-reverse items-center gap-10 lg:gap-[153px] px-5 lg:max-w-[54rem] lg:flex-row lg:px-0 2xl:max-w-[76rem]">
      <div className="lg:w-[488px]">
        <h1 className=" text-[30px] lg:mt-4 lg:text-4xl font-medium leading-[48px] tracking-[0.09px]">
          Contáctanos y solicita más información
        </h1>
        <p className=" mt-4 text-lg leading-[32px] tracking-[0.09px]">
          Dentro de nuestro centro algodón de nubes somos conscientes cuando se
          decide a qué escuela mandar a los más pequeños, se está confiando lo
          que más se quiere.
        </p>

        <div className=" mt-[56px] flex flex-col gap-4">
          <div className="flex items-center gap-8">
            <i className="fa-solid fa-location-dot"></i>
            <p>Dirección</p>
          </div>

          <div className="flex items-center gap-8 ">
            <i className="fa-solid fa-phone"></i>
            <p>Número de Teléfono</p>
          </div>

          <div className="flex items-center gap-8 ">
            <i className="fa-solid fa-envelope"></i>
            <p>Email</p>
          </div>
        </div>

        <div className="mt-16 ">
          <h2 className=" font-semibold leading-8 tracking-[0.1px]">
            Horario de Atención:
          </h2>
          <div className="mt-2 ">
            <p className=" text-xl leading-8 tracking-[0.1px]">
              Lunes a Viernes
            </p>
            <p className=" text-xl leading-8 tracking-[0.1px]">
              08:00 am - 12:30 pm / 2:00 pm - 6:00 pm
            </p>
          </div>
        </div>
      </div>

      <div className=" lg:h-[585px] lg:w-[560px]">
        <img className="w-full" src="/Contact_img.png" alt="Contact image" />
      </div>
    </section>
  );
}
