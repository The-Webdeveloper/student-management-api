import express from 'express';
import type { Application } from 'express';
import studentRoutes from './student/student.route.js'

const app: Application = express();

app.use(express.json());
app.use('/students', studentRoutes);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})