import type { Request, Response } from 'express';

interface Student {
    id: number;
    name: string;
    age: number;
    email: string;
    course: string;
    isActive: boolean;
}

const students: Student[] = [];

export const addStudent = (req: Request<{}, {}, Student>, res: Response) => {
    try {
        if (!req.body.id || !req.body.name || !req.body.age || !req.body.email || !req.body.course || req.body.isActive === undefined) {
            return res.status(400).json({
                message: "Invalid request body"
            });
        }

        students.push(req.body);

        return res.status(201).json({
            message: "Student added successfully",
            student: req.body
        });
    }
    catch (error) {
        console.log("Error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const getStudent= (req: Request, res: Response)=>{
    try{
        return res.status(200).json({
            message: "data retrieved successfully",
            allStudents : students
        })
    }
    catch(error){
        console.log("Error:", error)
        return res.status(500).json({
            message: "Internal Server error"
        })
    }
}

export const getStudentById = (req: Request<{id:string}> , res:Response)=>{
    try{
        const id = req.params.id
        const student = students.find((item)=> item.id === Number(id))
        if(!student){
            return res.status(404).json({
                message: "Student Not Found"
            })
        }
        return res.status(200).json({
            message: "student retrieved successfully",
            Student : student
        })
    }
    catch(error){
        console.log("Error: ",error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const updateStudent = (req: Request<{id:string}>, res: Response) => {
    try {
        const id = req.params.id;
        const studentIndex = students.findIndex((item)=> item.id === Number(id))
        if (studentIndex === -1) {
            return res.status(404).json({
                message: "Student Not Found"
            })
        }
        students[studentIndex] = req.body;

        return res.status(200).json({
            message: "student updated successfully",
            student: students[studentIndex]
        })
    }
    catch (error) {
        console.log("Error:", error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export const deleteStudent = (req: Request<{id:string}>, res: Response) => {
    try {
        const id = req.params.id;
        const studentIndex = students.findIndex((item) => item.id === Number(id));

        if (studentIndex === -1) {
            return res.status(404).json({
                message: "Student Not Found"
            });
        }

        students.splice(studentIndex, 1);
        return res.status(200).json({
            message: "Student deleted successfully"
        });
    }
    catch (error) {
        console.log("Error:", error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

