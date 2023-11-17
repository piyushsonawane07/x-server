import { initServer } from "./app";

const PORT = 8000;

async function init() {
    const app = await initServer();
    app.listen(PORT, ()=> console.log("Sever started at PORT :"+ PORT));
}

init();