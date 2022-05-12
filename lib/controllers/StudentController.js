const StudentService = require("./../services/StudentService");

class StudentController {
    static getStudentList(){
        const studentList = StudentService.getStudentList();
        return studentList;
    }
    
    static certificationCheck(students){
        const certificationEmailList = StudentService.certificationCheck(students);
        return certificationEmailList;
    }

    static bigCredits(students){
        const bigCreditlist = StudentService.bigCredits(students);
        return bigCreditlist;
    }
}

module.exports = StudentController;