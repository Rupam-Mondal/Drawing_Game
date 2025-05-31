import { CodeGeneratorService } from "../Service/CodeGeneratorService.js";

export async function CodeController(req , res){
    try {
        const result = await CodeGeneratorService();
        if(!result) throw null;
        return res.json({
            success:true,
            message:"code generated successfully",
            data:result
        })
    } catch (error) {
        return res.json({
            success:false,
            message:"Something went wrong"
        })
    }
}