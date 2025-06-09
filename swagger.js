const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: 'API de Agentes',
        description: 'Documentación de la API para la gestión de agentes.'
    },
    host: 'localhost:3000', // Reemplaza con la dirección de tu servidor
    basePath: "/",
    schemes: ['http', 'https'],
    tags: [
        {
            name: 'Socios',
            description: 'Operaciones relacionadas con los socios.'
        },
        {
            name: 'Transacciones',
            description: 'Operaciones relacionadas con las transacciones.'
        },
        {
            name: 'Empleados',
            description: 'Operaciones relacionadas con los empleados.'
        },
        {
            name: 'Publicacion',
            description: 'Operaciones relacionadas con las publicaciones.'
        }
    ],
    definitions: {
        Socio: {
            nombre: "Mario",
            apellido: "Perez",
            foto: "foto.jpg",
            dni: "12345678",
            numeroSocio: 1,
            activo: true
        },
        Transaccion: {
            idiomaOrigen: "es-español",
            textoOrigen: "Hola Mundo",
            idiomaDestino: "en-english",
            textoDestino: "Hello World",
            emailCliente: "mario@gmail.com"
        },
        Empleado: {
            apellido: "Perez",
            nombre: "Mario",
            dni: "12345678",
            email: "mario@gmail.com"
        },
        Publicacion: {
            titulo: "Hola Mundo",
            contenido: "Contenido de la publicación",
            imagenAsociada: "imagen.jpg",
            fechaPublicacion: "08/08/2023",
            empleado: {
                _id: "68465846c0b01948b9c0d4cd",
                apellido: "Perez",
                nombre: "Mario",
                dni: "12345678",
                email: "mario@gmail.com"
            },
            vigente: true
        }

    }
};
const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js']; // verifica la ruta
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log(`Documentación generada en ${outputFile}`);
    //require('./index.js'); // verifica la ruta donde inicia tu app
});