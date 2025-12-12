import express from 'express';
import StudentsRoutes from './ROUTES/StudentsRoutes.js';
const app = express();
app.use(express.json());

app.use('/', StudentsRoutes);

app.listen(7001,()=>{
    console.log(`server is running at port ${7001}`);
})