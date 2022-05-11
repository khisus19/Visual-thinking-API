const StudentServices = require("./../../lib/services/StudentService");

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
        expect(students.name).toBe("Warren");
    });
});