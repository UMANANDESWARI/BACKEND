import {getStudents, addStudents, editStudents, deleteStudents} from "../CONTROLLERS/StudentsController.js";
import express from 'express';
const router = express.Router();

router.get('/get-std', getStudents);
router.post('/add-std', addStudents);
router.put('/edit-std', editStudents);
router.delete('/delete-std', deleteStudents);

export default router;