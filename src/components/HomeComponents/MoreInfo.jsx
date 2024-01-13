export const MoreInfo = () => {
  return (
    <section className=" overflow-hidden bg-[#F5F5F5]">
      <div className=" p px-5 py-40 text-center lg:mx-auto lg:max-w-[54rem] lg:px-0 2xl:max-w-[76rem]">
        {/* pb-[20.81rem] */}
        <h2 className=" text-[30px] leading-[3rem] tracking-[0.00563rem] lg:mx-[250px] lg:text-4xl">
          Elige la mejor y haz que tu hijo desarrolle su inteligencia.
        </h2>
        <p className=" mt-4 text-xl leading-[2rem] tracking-[0.00625rem]">
          Solicita información para su admisión
        </p>
        <div className="flex justify-center ">
          <button className=" mx-auto mt-8 flex w-full items-center justify-center gap-6 rounded-full bg-black py-[15px] text-left text-white lg:mx-0 lg:w-[13rem] lg:py-[0.7rem] xl:w-[17.5rem] xl:py-[1rem]">
            Solicitar ahora
            <div className=" right-0 top-[200px] flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-white">
              <img src="/Alt Arrow Right.svg" alt="Alt Arrow Right" />
            </div>
          </button>
        </div>
      </div>

      {/* <div className="relative ">
        <img
          className="absolute bottom-0 w-full "
          src="/moreInfoWave.svg"
          alt="more info wave"
        />
      </div> */}
    </section>
  );
};
