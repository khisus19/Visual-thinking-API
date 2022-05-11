const StudentController = require("../../lib/controllers/StudentController");

describe("Tests para ExplorerController", () => {
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
        const studentList = StudentController.getStudentList(students);
        expect(studentList[0].id).toBeDefined();
    });
});