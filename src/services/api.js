import axios from 'axios'

const base = axios.create({

    baseURL:"https://servicodados.ibge.gov.br/api/v1/localidades/",

})

export default async function obterEstados() {
    try{
        const response = await base.get('estados/')
        return response
    }catch(error){
        alert(error.toString())
    }
}