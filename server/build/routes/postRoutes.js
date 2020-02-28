"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postsController_1 = require("../controllers/postsController");
class PostRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', postsController_1.postController.list);
        this.router.get('/:id', postsController_1.postController.getOne);
        this.router.post('/', postsController_1.postController.create);
        this.router.put('/:id', postsController_1.postController.update);
        this.router.delete('/:id', postsController_1.postController.delete);
    }
}
const postRoutes = new PostRoutes();
exports.default = postRoutes.router;
