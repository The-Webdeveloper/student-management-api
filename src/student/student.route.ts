import  {Router} from 'express';
import {addStudent, getStudent , getStudentById, updateStudent,deleteStudent} from "./student.controller.js"

const route = Router();

route.post('/addStudent', addStudent)
route.get('/getStudents', getStudent)
route.get('/:id', getStudentById)
route.put('/:id', updateStudent)
route.delete('/:id', deleteStudent);
export default route;