import { Router } from 'express';

import { postController } from '../controllers/postsController';

class PostRoutes{

    public router:Router =  Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', postController.list);
        this.router.get('/:id', postController.getOne);
        this.router.post('/', postController.create);
        this.router.put('/:id', postController.update);
        this.router.delete('/:id', postController.delete);
    }
}

const postRoutes = new PostRoutes();
export default postRoutes.router;