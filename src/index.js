import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {

   app.on('error', (err) => {
       console.log('Error :', err)
       throw err
   })
   app.listen(process.env.PORT, () => {
       console.log(`Server is running on port ${process.env.PORT}`)
   })
})
.catch((err)=>{
    console.log("MOONGO DB connection Failed",err)
})