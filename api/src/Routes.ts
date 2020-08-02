import express from 'express'
import { ScriptController } from './Controller/ScriptController';
import { ProjectController } from './Controller/ProjectController';
import { UserController } from './Controller/UserController';
const routes = express.Router();

var ScriptsController = new ScriptController();
var projectController = new ProjectController();
var userController = new UserController()

routes.post('/scripts/create', ScriptsController.Create)
routes.get('/projects', projectController.Index)
routes.get('/projects/:id', projectController.Select)
routes.get('/user', userController.Index)
routes.get('/user/:id', userController.Select)

export default routes