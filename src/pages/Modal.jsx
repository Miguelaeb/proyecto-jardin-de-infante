import { useState } from "react";

const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const modalHandler = (val) => {
    setModalVisible(val);
  };

  return (
    <div>
      <div
        className={`absolute bottom-0 left-0 right-0 top-0 z-10 bg-gray-700 py-12 transition duration-150 ease-in-out ${
          modalVisible ? "" : "hidden"
        }`}
        id="modal"
      >
        <div role="alert" className="container mx-auto w-11/12 max-w-lg md:w-2/3 mt-14">
          <div className="relative rounded border border-gray-400 bg-white px-5 py-8 shadow-md md:px-10">
            <div className="mb-3 flex w-full justify-start text-gray-600">
            <img className="w-24" src="/logo.svg" alt="logo" />
            </div>
            <h1 className="font-lg mb-4 font-bold leading-tight tracking-normal text-center text-gray-800">
              Modificacion de datos
            </h1>
            <label
              htmlFor="name"
              className="text-sm font-bold leading-tight tracking-normal text-gray-800"
            >
             Nombre
            </label>
            <input
              id="name"
              className="mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
              placeholder="Nombre"
            />
              <label
              htmlFor="name"
              className="text-sm font-bold leading-tight tracking-normal text-gray-800"
            >
             Apellido
            </label>
            <input
              id="name"
              className="mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
              placeholder="Apellido"
            />
              <label
              htmlFor="name"
              className="text-sm font-bold leading-tight tracking-normal text-gray-800"
            >
             Genero
            </label>
            <input
              id="name"
              className="mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
              placeholder="genero"
            />
              <label
              htmlFor="name"
              className="text-sm font-bold leading-tight tracking-normal text-gray-800"
            >
             Nombre Tutor
            </label>
            <input
              id="name"
              className="mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
              placeholder="Nombre Tutor"
            />
            <label
              htmlFor="expiry"
              className="text-sm font-bold leading-tight tracking-normal text-gray-800"
            >
              Fecha de Nacimiento
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 flex h-full cursor-pointer items-center pr-3 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-calendar-event"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <line x1="16" y1="3" x2="16" y2="7" />
                  <line x1="8" y1="3" x2="8" y2="7" />
                  <line x1="4" y1="11" x2="20" y2="11" />
                  <rect x="8" y="15" width="2" height="2" />
                </svg>
              </div>
              <input
                id="expiry"
                className="flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
                placeholder="DD/MM/YY"
              />
            </div>
            <label
              htmlFor="name"
              className="text-sm font-bold leading-tight tracking-normal text-gray-800"
            >
             Nivel Educacion
            </label>
            <input
              id="name"
              className="mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
              placeholder="Nivel Educacion"
            />
               <label
              htmlFor="name"
              className="text-sm font-bold leading-tight tracking-normal text-gray-800"
            >
             Telefono Contacto
            </label>
            <input
              id="name"
              className="mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
              placeholder="telefono"
            />
               <label
              htmlFor="name"
              className="text-sm font-bold leading-tight tracking-normal text-gray-800"
            >
             Email
            </label>
            <input
              id="name"
              className="mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
              placeholder="Email"
            />
            <div className="flex w-full items-center justify-start">
              <button className="rounded bg-green-700 px-8 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2">
                Modificar
              </button>
              <button
                className="ml-3 rounded border  bg-gray-100 px-8 py-2 text-sm text-gray-600 transition duration-150 ease-in-out hover:border-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                onClick={() => modalHandler(false)}
              >
                Cancelar
              </button>
            </div>
            <button
              className="absolute right-0 top-0 mr-5 mt-4 cursor-pointer rounded text-gray-400 transition duration-150 ease-in-out hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
              onClick={() => modalHandler(false)}
              aria-label="close modal"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex w-full justify-center py-12" id="button">
          <button
            className="mx-auto rounded bg-red-700 px-4 py-2 text-xs text-white transition duration-150 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 sm:px-8 sm:text-sm"
            onClick={() => modalHandler(true)}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

