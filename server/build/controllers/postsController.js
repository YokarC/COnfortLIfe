"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PostController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield database_1.default.query('SELECT * FROM post');
            res.json(posts);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const posts = yield database_1.default.query('SELECT * FROM post WHERE id = ?', [id]);
            if (posts.length > 0) {
                return res.json(posts[0]);
            }
            res.status(404).json({ text: "The post doesn't exists" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO post set ?', [req.body]); //Guardando en base de datos asincronamente
            res.json({ message: 'Post saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; //Scripr desconstructivo para tomar solo el valo que se necesita
            yield database_1.default.query('DELETE FROM post WHERE id = ?', [id]); //Sentebncia SQL
            res.json({ message: 'The post was deleted' }); //Mensaje en pantalla notificando el borrado del post
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE post set ? WHERE id = ? ', [req.body, id]);
            res.json({ message: "The post was updated" });
        });
    }
}
exports.postController = new PostController();
