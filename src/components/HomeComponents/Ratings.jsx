export const Ratings = () => {
  return (
    <section className=" mb-[184px] bg-[#F5F5F5] px-4 pb-[232px] pt-[80px] xl:px-0 xl:pb-[54px] xl:text-center">
      <div className=" z-10 mx-auto lg:max-w-[54rem] 2xl:max-w-[76rem]">
        <h2 className=" text-center text-[32px] font-semibold leading-[42px] tracking-[0.075px] md:mx-[50px] 2xl:mx-[350px]">
          Lo que están diciendo los papás acerca de Nosotros
        </h2>
        <p className=" mt-8 text-center text-lg leading-[32px] tracking-[0.09px] lg:text-left xl:mx-[150px]">
          Quisque egestas ipsum vitae erat faucibus, non volutpat arcu faucibus.
          Phasellus auctor sed ligula in bibendum. Maecenas vel ultrices nulla.
          Aliquam nunc nulla, consectetur quis varius eget, tempor a nisi.
          Integer hendrerit viverra enim, in mattis purus fermentum et. Quisque
          sit amet enim a arcu euismod dapibus eget sit amet est.
        </p>
      </div>

      <div className=" mt-[40px] text-center xl:mt-[136px]">
        <div className=" mb-[18px]">
          <p className=" text-lg font-semibold leading-[32px] tracking-[0.09px]">
            Noah Emma
          </p>
          <p className="text-sm leading-4 ">Madre de henry</p>
        </div>

        <ul className="flex items-center justify-center gap-2 ">
          <li>
            <i className="fa-solid fa-star text-[#7C858E]"></i>
          </li>
          <li>
            <i className="fa-solid fa-star text-[#7C858E]"></i>
          </li>
          <li>
            <i className="fa-solid fa-star text-[#7C858E]"></i>
          </li>
          <li>
            <i className="fa-solid fa-star text-[#7C858E]"></i>
          </li>
          <li>
            <i className="fa-solid fa-star text-[#7C858E]"></i>
          </li>
        </ul>
      </div>

      <div className="relative max-w-screen-lg mx-auto ">
        <img
          className="absolute bottom-[40px] right-[50px] z-10 hidden xl:block"
          src="/ArrowNoah.svg"
          alt="ArrowNoah"
        />
        <img
          className="bottom-50 absolute left-1/2 -translate-x-1/2 transform lg:left-auto lg:right-0 xl:-bottom-[150px] xl:translate-x-[50px]"
          src="/Rectangle 60.png"
          alt="Rectangle"
        />
      </div>
    </section>
  );
};
