import { Component } from "react";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      email: "",
      celular: "",
      mensaje: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to a server or perform some action.
    console.log("Form data submitted:", this.state);
  };

  render() {
    return (
      <div className=" mx-auto mb-[160px] mt-[48px] rounded-2xl px-5 pb-[125px] lg:mt-[128px] lg:max-w-[54rem] lg:bg-[#F5F5F5] lg:px-0 lg:pt-[141px] 2xl:max-w-[76rem]">
        <form
          className=" mx-auto flex flex-col gap-8 lg:w-[592px]"
          onSubmit={this.handleSubmit}
        >
          <div className="flex flex-col ">
            <label className="hidden " htmlFor="nombre">
              Nombre
            </label>
            <input
              className=" h-[48px] rounded-[6px] border-2 border-[#D9D9D9] pl-[20.62px] placeholder:text-[13px] placeholder:leading-4 placeholder:text-[#7C858E] lg:h-auto lg:rounded-none lg:border-b lg:border-l-0 lg:border-r-0 lg:border-t-0 lg:bg-[#F5F5F5] lg:pb-4 lg:outline-none"
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              value={this.state.nombre}
              onChange={this.handleChange}
            />
          </div>
          <div className="flex flex-col ">
            <label className="hidden " htmlFor="email">
              Email
            </label>
            <input
              className=" h-[48px] rounded-[6px] border-2 border-[#D9D9D9] pl-[20.62px] placeholder:text-[13px] placeholder:leading-4 placeholder:text-[#7C858E] lg:h-auto lg:rounded-none lg:border-b lg:border-l-0 lg:border-r-0 lg:border-t-0 lg:bg-[#F5F5F5] lg:pb-4 lg:outline-none"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="flex flex-col ">
            <label className="hidden " htmlFor="celular">
              N° de Celular
            </label>
            <input
              className=" h-[48px] rounded-[6px] border-2 border-[#D9D9D9] pl-[20.62px] placeholder:text-[13px] placeholder:leading-4 placeholder:text-[#7C858E] lg:h-auto lg:rounded-none lg:border-b lg:border-l-0 lg:border-r-0 lg:border-t-0 lg:bg-[#F5F5F5] lg:pb-4 lg:outline-none"
              type="tel"
              id="celular"
              name="celular"
              placeholder="N° de Celular"
              value={this.state.celular}
              onChange={this.handleChange}
            />
          </div>
          <div className="flex flex-col ">
            <label className="hidden " htmlFor="mensaje">
              Deje su mensaje aquí
            </label>
            <textarea
              className="h-[176px] rounded-[6px] border-2 border-[#D9D9D9] pl-[20.62px] pt-3 placeholder:text-[13px] placeholder:leading-4 placeholder:text-[#7C858E] lg:rounded-none lg:border-b lg:border-l-0 lg:border-r-0 lg:border-t-0 lg:bg-[#F5F5F5] lg:pb-4 lg:pt-0 lg:outline-none"
              id="mensaje"
              name="mensaje"
              placeholder="Deje su mensaje aquí"
              value={this.state.mensaje}
              onChange={this.handleChange}
            />
          </div>
          <div className="flex lg:justify-end ">
            <button
              className=" mt-[22px] h-10 w-full rounded-lg bg-black text-[16px] leading-6 tracking-[0.08px] text-[#FFF] lg:w-[141.934px]"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
