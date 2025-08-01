const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');

var app = express();

//midlewares

app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//cargamos swagger
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json'); // Asegúrate de que esta ruta sea correcta

// ruta hacia la documentacion de swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//Se cargan modulos de direccionamiento de rutas 

app.use('/api/socio',require('./routes/p1/socio.route'));
app.use('/api/transaccion',require('./routes/p2/transaccion.route'));
app.use('/api/empleado',require('./routes/p3/empleado.route'));
app.use('/api/publicacion',require('./routes/p3/publicacion.route'));



//Setting 
app.set('port', process.env.PORT || 3000);

// starting the server
app.listen(app.get('port'),() => {
    console.log(`Server started on port`, app.get('port'));
});
