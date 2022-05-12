const Reader = require("./../utils/Reader");

class StudentService {
    static getStudentList(){
        const students = Reader.readJsonFile("visualpartners.json");
        const studentList = students.filter((student) => student.id !== undefined);
        return studentList;
    }

    static certificationCheck(){
        const students = Reader.readJsonFile("visualpartners.json");
        const certificationChecklist = students.filter((student) => student.haveCertification == true);
        const studentMails = certificationChecklist.map((student) => student.email);
        return studentMails;
    }

    static bigCredits(){
        const students = Reader.readJsonFile("visualpartners.json");
        const bigCreditlist = students.filter((student) => student.credits > 500);
        return bigCreditlist;
    }
}

module.exports = StudentService;