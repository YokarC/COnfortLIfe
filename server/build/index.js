"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //Importaciones requeridas
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config(); //Inicializamos el método
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //Puerto por el que va a escuchar
        this.app.use(morgan_1.default('dev')); //Morgan sirve para ver en tiempo real en la consola las peticiones
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false })); //Para extender futuras extenciones html
    }
    routes() {
        this.app.use('/', indexRoutes_1.default); //Especificamos la ruta
        this.app.use('/api/posts', postRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Confortlife on port ', this.app.get('port'));
        });
    }
}
const server = new Server(); //Asignamor el Server a una variable
server.start(); //Ejecutamo start de la variable server
