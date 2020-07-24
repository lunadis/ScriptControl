import express from 'express'
import ProjectControllers from './Controllers/ProjectControllers';
import UserControllers from './Controllers/UserControllers';
import ScriptsControllers from './Controllers/ScriptsControllers';
const routes = express.Router();

const ProjectController = new ProjectControllers()
const userControllers = new UserControllers()
const scriptController = new ScriptsControllers()



routes.get("/projects/:id", ProjectController.GetByID)
routes.get("/projects", ProjectController.index)
routes.get("/User/:id", userControllers.GetByID)
routes.get("/User", userControllers.index)
routes.post("/Script", scriptController.Create)



export default routes