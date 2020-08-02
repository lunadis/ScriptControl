import express from 'express'
import { ScriptController } from './Controller/ScriptController';
const routes = express.Router();

var ScriptsController = new ScriptController();

routes.post('/scripts/create', ScriptsController.Create)

export default routes