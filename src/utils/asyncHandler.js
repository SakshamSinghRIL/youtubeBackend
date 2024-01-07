const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}

export { asyncHandler }



//const asyncHandler = ()=>{}
//const asyncHandler = (fn) => () =>{}  /// higher order functions
//const asyncHandler = (func) => async()=>{}
// try catch way ----------------------------------------\

// const asyncHandler = (fn) => async (req,res,next)=>{
//   try {
//      await fn(req,res,next)
//   } catch (error) {
//     res.status(err.code || 500).json({
//         success:false,
//         message : err.message
//     })
//   }
// }