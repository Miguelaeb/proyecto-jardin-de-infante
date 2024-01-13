const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Epilogue: ["Epilogue", "sans-serif;"],
            },
            backgroundImage: {
                'discos': "url('/nosotros_discos.png')",
                'cuna': "url('/servicios_cuna.png')",
                'jardin': "url('/servicios_jardin.png')",
                'guarderia': "url('/servicios_guarderia.png')",
                'psicopedagogia': "url('/servicios_psicopedagogia.png')",
                'temprana': "url('/servicios_temprana.png')",
                'talleres': "url('/servicios_talleres.png')",
                'cocina': "url('/servicios_cocina.png')",
                'escuela': "url('/servicios_escuela.png')",
            },
        },
    },
    plugins: [],
});
