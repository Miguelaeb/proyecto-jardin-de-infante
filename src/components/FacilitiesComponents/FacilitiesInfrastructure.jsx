export const FacilitiesInfrastructure = () => {
  return (
    <section className=" xl:mt-[216px]">
      <div className=" mx-auto mt-20 px-5 lg:max-w-[54rem] lg:px-0 xl:mt-0 xl:flex xl:items-center xl:justify-between 2xl:max-w-[76rem]">
        <div className=" xl:w-[487px]">
          <h2 className=" text-center text-[30px] xl:text-left xl:text-4xl xl:font-medium xl:leading-[48px] xl:tracking-[0.09px]">
            Infraestructura y espacios de aprendizaje atractivos{" "}
          </h2>
          <p className="mt-6 text-center xl:text-left xl:text-xl xl:font-normal xl:leading-[32px] xl:tracking-[0.1px]">
            Dispone de 350 m2 de instalaciones diseñadas específicamente para el
            cuidado, la atención y la educación de los niños: equipamiento,
            habitabilidad de las aulas, seguridad e higiene y espacios abiertos,
            con grandes ventanales, que permiten unas condiciones óptimas para
            los alumnos.
          </p>
        </div>

        <div className=" mt-20 xl:mt-0 xl:flex xl:w-[631px] xl:gap-8">
          <img
            className=" w-full xl:mt-auto xl:h-[480px] 2xl:w-[280px]"
            src="/Infrastructure-1.png"
            alt="Infrastructure 1"
          />
          <img
            className=" mt-5 xl:mt-0 xl:h-[568px] xl:w-[319px]"
            src="/Infrastructure-2.png"
            alt="Infrastructure 2"
          />
        </div>
      </div>

      <div className=" mx-auto mt-10 flex flex-col items-center gap-[110px] px-5 lg:max-w-[54rem] lg:px-0 xl:flex-row xl:items-start 2xl:max-w-[76rem]">
        <div>
          <span className=" text-[90px] ">100 +</span>
          <p className=" text-xl leading-[32px] tracking-[0.1px]">
            Lorem impsu
          </p>
        </div>

        <div>
          <span className=" text-[90px] ">100 +</span>
          <p className=" text-xl leading-[32px] tracking-[0.1px]">
            Lorem impsu
          </p>
        </div>
      </div>

      <div className=" mx-auto mt-[120px] px-5 lg:max-w-[54rem] lg:px-0 2xl:max-w-[76rem]">
        <div className="flex flex-col gap-8 xl:flex-row ">
          <img
            className=" h-[280px] xl:w-[488px]"
            src="/Infrastructure-3.png"
            alt="Infrastructure 3"
          />
          <img
            className=" h-[224px] xl:w-[384px]"
            src="/Infrastructure-4.png"
            alt="Infrastructure 4"
          />
          <p className=" mt-6 text-center text-xl leading-[32px] tracking-[0.1px] xl:text-left">
            Estamos tan seguros de dar la mejor atención a vuestros hijos
          </p>
        </div>
        <p className=" mt-16 text-center xl:mr-[660px] xl:text-left">
          Dispone de 350 m2 de instalaciones diseñadas específicamente para el
          cuidado, la atención y la educación de los niños: equipamiento.
        </p>
      </div>
    </section>
  );
};
