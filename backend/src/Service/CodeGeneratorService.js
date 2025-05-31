import { v4 as uuidv4 } from 'uuid';

export async function CodeGeneratorService(){
    try {
        const joincode = uuidv4().substring(0 , 6);
        if(!joincode) return null;
        return {
            host:true,
            joincode:joincode
        }
    } catch (error) {
        console.log("Something went wrong service layer");
        return null;
    }
}