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

    static bigCredits(students){
        const bigCreditlist = students.filter((student) => student.credits > 500);
        return bigCreditlist;
    }
}

/* const students = Reader.readJsonFile("visualpartners.json");
console.log(StudentService.bigCredits(students).length); */

module.exports = StudentService;