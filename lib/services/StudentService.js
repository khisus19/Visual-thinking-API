/* const Reader = require("./../utils/Reader"); */

class StudentService {
    static getStudentList(students){
        const studentList = students.filter((student) => student.id !== undefined);
        return studentList;
    }

    static certificationCheck(students){
        const certificationChecklist = students.filter((student) => student.haveCertification == true);
        return certificationChecklist;
    }
}

/* const students = Reader.readJsonFile("visualpartners.json");
console.log(StudentService.certificationCheck(students)); */

module.exports = StudentService;