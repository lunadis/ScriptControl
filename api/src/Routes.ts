import express from 'express'
import ProjectControllers from './Controllers/ProjectControllers';
const routes = express.Router();

const ProjectController = new ProjectControllers()



routes.get("/projects/:id", ProjectController.GetByID)
routes.get("/projects", ProjectController.index)



export default routes