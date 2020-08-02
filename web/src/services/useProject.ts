import {api, showErr} from './servicesBase'
import axios from 'axios'
import Projects from './models/project'



const getPojects = async (): Promise<Projects> =>{
    try {
        var data = await axios.get<Projects>(`${api}/projects`)
        return data.data

    } catch (error) {
        showErr(error, 'userProjects', 'getProjects')
        throw new Error("")
    }

}

export {getPojects}