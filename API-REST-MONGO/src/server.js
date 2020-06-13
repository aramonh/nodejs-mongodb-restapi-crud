import express from "express";
const app = express();


//Import Routes
import IndexRoutes from './routes/index.routes';
import TaskRouter from './routes/tasks.routes';

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Routes
app.use(IndexRoutes);
app.use('/tasks', TaskRouter ); 




export default app;
