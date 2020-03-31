import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

import { Student } from './student.js';

import {dataStudent} from './dataStudent.js';

let nombre: HTMLElement = document.getElementById('nombreest')!;
let codigo: HTMLElement = document.getElementById('codigo')!;
let cedula: HTMLElement = document.getElementById('cedula')!;
let edad: HTMLElement = document.getElementById('edad')!;
let direccion: HTMLElement = document.getElementById('direccion')!;
let telefono: HTMLElement = document.getElementById('telefono')!;
let coursesTbody: HTMLElement = document.getElementById('courses')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;

const btnfilterByCredits: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchMin: HTMLInputElement = <HTMLInputElement> document.getElementById("min")!;
const inputSearchMax: HTMLInputElement = <HTMLInputElement> document.getElementById("max")!;


btnfilterByName.onclick = () => applyFilterByName();

renderCoursesInTable(dataCourses);

loadStudentData(dataStudent);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`



function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 
function loadStudentData(student: Student): void{
    console.log('cargando estudiante');
    nombre.innerHTML = `${student.name}`
    codigo.innerHTML = `${student.codigo}`
    cedula.innerHTML = `${student.cedula}`
    edad.innerHTML = `${student.edad}`
    direccion.innerHTML = `${student.direccion}`
    telefono.innerHTML = `${student.telefono}`

}
 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}

function applyFilterByCredits() { 
    let min = inputSearchBox.valueAsNumber;
    min = (min == null) ? 0 : min;
    clearCoursesInTable();
    let coursesFiltered: Course[] = searchCourseByCredits(min, dataCourses);
    renderCoursesInTable(coursesFiltered);
  }
  
  function searchCourseByCredits(nameKey: number, courses: Course[]) {
    return nameKey === 0 ? dataCourses : courses.filter( c => 
      c.credits = (nameKey));
  }


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}