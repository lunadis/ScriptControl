const api = "localhost:3333"

const showErr = (err: string, classname: string, methodName: string) =>{
    console.log(`Ocorreu um erro em ${classname} >>> Action ${methodName}, ##>>> ${err}`)
}

export {api, showErr}