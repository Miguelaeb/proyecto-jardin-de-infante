export const Header = () => {
  return (
    <header className=" relative bg-[#BFBFBF] pb-[100px]" id="header">
      <div className=" flex flex-col-reverse items-center gap-[55px] px-5 text-center lg:mx-auto lg:max-w-[54rem] lg:flex-row lg:items-start lg:px-0 lg:text-left 2xl:max-w-[76rem]">
        <div className="lg:w-3/5">
          <h1 className="text-[30px] font-medium tracking-[0.12px] lg:mt-[208px] lg:text-3xl 2xl:text-5xl xl:leading-[56px]">
            Educación Temprana, cuidado y aprendizaje en un ambiente de alegría
          </h1>
          <p className=" text-lg mt-4 tracking-[0.1px] lg:mr-[4rem] xl:text-xl xl:leading-8">
            Nuestra guardería ofrece un mundo de aprendizaje y descubrimiento.
            Solicita una admisión y únete a nosotros para darle a tu hijo la
            mejor experiencia educativa.
          </p>

          <button className=" mx-auto py-[15px] mt-8 flex w-full items-center justify-center gap-6 rounded-full bg-black text-left text-white lg:mx-0 lg:w-[13rem] lg:py-[0.7rem] xl:w-[17.5rem] xl:py-[1rem]">
            Saber más
            <div className=" right-0 top-[200px] flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-white">
              <img src="/Alt Arrow Right.svg" alt="Alt Arrow Right" />
            </div>
          </button>
        </div>

        <div className=" relative mt-[128px] lg:w-2/5">
          <img src="/home_img_hero.png" alt="home img hero" />

          <img
            className=" absolute top-0 rounded-[32.125rem] blur-[118px]"
            src="/header_girl_bg.svg"
            alt="header_girl_bg"
          />
        </div>
      </div>

      <img
        className="absolute bottom-0 w-full "
        src="/header_wave.svg"
        alt="header wave"
      />

      <a href="#homePageServices">
        <img
          className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-full"
          src="/button down.svg"
          alt="button to services"
        />
      </a>
    </header>
  );
};
