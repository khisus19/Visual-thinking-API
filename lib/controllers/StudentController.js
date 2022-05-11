const StudentService = require("./../services/StudentService");

class StudentController {
    static getStudentList(students){
        const studentList = StudentService.getStudentList(students);
        return studentList;
    }
    
    static certificationCheck(students){
        const certificationChecklist = StudentService.certificationCheck(students);
        return certificationChecklist;
    }

    static bigCredits(students){
        const bigCreditlist = StudentService.bigCredits(students);
        return bigCreditlist;
    }
}

module.exports = StudentController;