export const WhyUs = () => {
  return (
    <section className=" bg-[#F5F5F5] py-[40px] lg:py-[90px]">
      <div className=" px-5 lg:mx-auto lg:flex lg:max-w-[54rem] lg:items-center lg:justify-center lg:gap-[111px] lg:p-0 2xl:max-w-[76rem]">
        <div className=" lg:w-[613px]">
          <img className="w-full " src="/boy.svg" alt="boy" />
        </div>

        <div className=" lg:w-[592px]">
          <div className=" mt-5 lg:mt-0 lg:flex lg:flex-col lg:gap-[1.5rem]">
            <h2 className=" text-lg font-medium leading-[3rem] tracking-[0.00563rem] lg:mr-[140px] lg:text-4xl text-center">
              ¿Por qué elegir Nubes de Algodón?
            </h2>
            <p className=" xl:text-lg xl:leading-8 xl:tracking-[0.00625rem] text-center lg:text-left">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur ma Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id es. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut al
            </p>
          </div>

          <button className=" mx-auto py-[15px] mt-8 flex w-full items-center justify-center gap-6 rounded-full bg-black text-left text-white lg:mx-0 lg:w-[13rem] lg:py-[0.7rem] xl:w-[17.5rem] xl:py-[1rem]">
            Saber más
            <div className=" right-0 top-[200px] flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-white">
              <img src="/Alt Arrow Right.svg" alt="Alt Arrow Right" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
