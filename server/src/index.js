import app from "./app.js"
import { connectBD } from "./db.js"


connectBD();




const port = process.env.PORT ?? 3000

app.listen(port,()=>{

    console.log(`El servidor se levanto en el puerto http://localhost:${port}`)
})