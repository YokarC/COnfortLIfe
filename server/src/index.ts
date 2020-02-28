import express, { Application } from 'express';//Importaciones requeridas
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import postRoutes from './routes/postRoutes';

class Server {//Clase

    public app: Application;

    constructor(){//Contructor de la clase
        this.app = express();
        this.config();//Inicializamos el método
        this.routes();
    }
    
    config(): void{//Configuraciones del servidor
        this.app.set('port', process.env.PORT || 3000)//Puerto por el que va a escuchar
        this.app.use(morgan('dev'));//Morgan sirve para ver en tiempo real en la consola las peticiones
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));//Para extender futuras extenciones html
    }

    routes(): void{//Método para definir rutas
        this.app.use('/', indexRoutes);//Especificamos la ruta
        this.app.use('/api/posts', postRoutes);
    }

    start(): void{//Método para incializar el servidor
        this.app.listen(this.app.get('port'), ()=> {
            console.log('Confortlife on port ', this.app.get('port'))
        })
    }
}

const server = new Server(); //Asignamor el Server a una variable
server.start(); //Ejecutamo start de la variable server