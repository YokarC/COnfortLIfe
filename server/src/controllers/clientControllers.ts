import {Request, Response } from 'express';

import pool from '../database';

class PostController{

    public async list (req: Request, res: Response){//Método para listar
        const posts = await pool.query('SELECT * FROM client');
        res.json(posts);
        }

    public async getOne (req: Request, res: Response): Promise<any>{//Método para listar
        const {id} = req.params;
        const client = await pool.query('SELECT * FROM client WHERE id = ?',[id]);
        if(client.length > 0){
               return res.json(client[0]);
        }
        res.status(404).json({text: "The client doesn't exists"});
        }
    
    public async create (req: Request, res: Response): Promise<void>{//Método para crear un publicación, pero no regresa nada
        await pool.query('INSERT INTO client set ?', [req.body]);//Guardando en base de datos asincronamente
        res.json({message: 'client saved'});
        }
}