import axios from "axios"
var data = Config();
export async function Config(){
        data = await axios.get('../api/config/')
        if(data) return data
}
export {data}