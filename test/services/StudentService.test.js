const StudentService = require("./../../lib/services/StudentService");

describe("Pruebas para StudentService", () => {
    test("Método 1: Listar los estudiantes con sus respectivos datos", () => {
        const students = [
            {
                "id": "6264d5d89f1df827eb84bb23",
                "name": "Warren",
                "email": "Todd@visualpartnership.xyz",
                "credits": 508,
                "enrollments": [
                    "Visual Thinking Intermedio",
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 1,
                "haveCertification": true
            }];
        const studentList = StudentService.getStudentList(students);
        expect(studentList[0].id).toBeDefined();
    });

    test("Método 2: Listar los estudiantes que tengan haveCertification: true", () =>{
        const students = [
            {
                "id": "6264d5d89f1df827eb84bb23",
                "name": "Warren",
                "email": "Todd@visualpartnership.xyz",
                "credits": 508,
                "enrollments": [
                    "Visual Thinking Intermedio",
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 1,
                "haveCertification": true
            }];
        const certificationChecklist = StudentService.certificationCheck(students);
        expect(certificationChecklist[0].haveCertification).toBeTruthy();
    });
});