const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual-Partner Api welcome!"});
});

app.get("/v1/students/", (request, response) => {
    const visualPartnerStudents = StudentController.getStudentList();
    response.json(visualPartnerStudents);
});

app.get("/v1/students/email/", (request, response) => {
    const studentsCertified = StudentController.certificationCheck();
    response.json(studentsCertified);
});

app.get("/v1/students/credits/", (request, response) => {
    const studentsCertified = StudentController.bigCredits();
    response.json(studentsCertified);
});

app.listen(port, () => {
    console.log(`Visual-Partner API in localhost:${port}`);
});