import axios from "axios"
var data = Config();
export async function Config(){
        data = await axios.get('../api/config/')
       return data 
}
export {data}