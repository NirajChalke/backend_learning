const asyncHandler = (func)=>{async(req,res,next)=>{
    try{
        await func(req,res,next)
    }catch(err){
       res.status(err.code || 500).json({
        successfull:false,
        message:err.message || "Something went wrong"}) 
    }
} }

export {asyncHandler}