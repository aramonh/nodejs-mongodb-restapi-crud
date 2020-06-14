import "@babel/polyfill";

import app from "./server";


//Settings
const port = app.get("port");



//Funcion Main 
async function main() {
  
    await app.listen(port);
    
    
    
    console.log("Server on Port:",port);
    console.log(`Enter Server Test here: http://localhost:${port}/`)
 
}

main();
