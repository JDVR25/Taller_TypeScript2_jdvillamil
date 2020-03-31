import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';
var nombre = document.getElementById('nombreest');
var codigo = document.getElementById('codigo');
var cedula = document.getElementById('cedula');
var edad = document.getElementById('edad');
var direccion = document.getElementById('direccion');
var telefono = document.getElementById('telefono');
var coursesTbody = document.getElementById('courses');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
var btnfilterByCredits = document.getElementById("button-filterByName");
var inputSearchMin = document.getElementById("min");
var inputSearchMax = document.getElementById("max");
btnfilterByName.onclick = function () { return applyFilterByName(); };
renderCoursesInTable(dataCourses);
loadStudentData(dataStudent);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function loadStudentData(student) {
    console.log('cargando estudiante');
    nombre.innerHTML = "" + student.name;
    codigo.innerHTML = "" + student.codigo;
    cedula.innerHTML = "" + student.cedula;
    edad.innerHTML = "" + student.edad;
    direccion.innerHTML = "" + student.direccion;
    telefono.innerHTML = "" + student.telefono;
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function applyFilterByCredits() {
    var min = inputSearchBox.valueAsNumber;
    min = (min == null) ? 0 : min;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByCredits(min, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByCredits(nameKey, courses) {
    return nameKey === 0 ? dataCourses : courses.filter(function (c) {
        return c.credits = (nameKey);
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
