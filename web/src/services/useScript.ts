import Script from './models/script'
import {api, showErr} from './servicesBase'
import axios from 'axios'

const getScripts = async (): Promise<Script> =>{
    try {
        const response = await axios.get<Script>(`${api}`)
        return response.data
    } catch (error) {
        showErr(error, 'useScript', 'getScripts')
        throw new Error("Houve um erro");
        
    }
 
}

export {getScripts}