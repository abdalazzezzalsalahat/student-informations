'use strict';

const studentForm = document.getElementById('student-form');
let id = 0;
let total = 0;

function randomAge (min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

studentForm.addEventListener('submit', function(event){
    event.preventDefault();
    const email = event.target.studntEmail.value;
    const phone = event.target.studntPhoneNum.value;
    const tuition = event.target.tuitionDrop.value;
    const name = email.split('@')[0];
    const age = randomAge(18, 24);
    id += 1;
    const allnfo = [id, name, email, phone, age, tuition];
    localStorage.setItem('student', JSON.stringify(allnfo));
    studentForm.reset();
  });  

const studentsTblBody = document.getElementById('tableBody');

function AddStudents(all){
    this.all = all;
    AddStudents.prototype.rendrTable(){
        const tableRow = document.createElement('tr');
        studentsTblBody.appendChild(tableRow);
        for (let i = 0; i < localStorage.length; i++) {
            const tableData = document.createElement('td');
            tableRow.appendChild(tableData);
            tableData.textContent = localStorage.getItem(localStorage.key(i));
        }
    };
}
