import "@babel/polyfill";

import app from "./server";


//Funcion Main 
async function main() {
  
    await app.listen(app.get("port"));
    
    
    
    console.log("Server on Port:", app.get("port"));
 
}

main();
