import {Request, Response } from 'express';

import pool from '../database';

class PostController{

    public async list (req: Request, res: Response){//Método para listar
        const posts = await pool.query('SELECT * FROM post');
        res.json(posts);
        }

    public async getOne (req: Request, res: Response): Promise<any>{//Método para listar
        const {id} = req.params;
        const posts = await pool.query('SELECT * FROM post WHERE id = ?',[id]);
        if(posts.length > 0){
            return res.json(posts[0]);
        }
        res.status(404).json({text: "The post doesn't exists"});
        }

    public async create (req: Request, res: Response): Promise<void>{//Método para crear un publicación, pero no regresa nada
        await pool.query('INSERT INTO post set ?', [req.body]);//Guardando en base de datos asincronamente
        res.json({message: 'Post saved'});
    }

    public async delete (req: Request, res: Response): Promise<void>{//Método asincrono para borrar en la base de datos
        const { id } = req.params;//Scripr desconstructivo para tomar solo el valo que se necesita
        await pool.query('DELETE FROM post WHERE id = ?',[id]);//Sentebncia SQL
        res.json({message: 'The post was deleted'});//Mensaje en pantalla notificando el borrado del post
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE post set ? WHERE id = ? ', [req.body, id]);
        res.json({message: "The post was updated"});
    }
}

export const postController = new PostController();
