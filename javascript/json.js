/*
    Name: Mike Villeneuve
    Date: 06/30/2022
*/

/* 
This function will produce a list of student IDs and emails, within the console, 
from an array that uses JSON notation.  This list will be produced upon page 
load.
*/
const init = () => {
    "use strict"

    // declare and define the array (i.e. collection) students
    let students = [
                      {"id": "student01", "name": "Ada Lovelace",
                      "email": "alovelace@email.com"},
                      {"id": "student02", "name": "Nikola Tesla",
                      "email": "ntesla@email.com"},
                      {"id": "student03", "name": "Alexander Graham Bell",
                      "email": "agbell@email.com"},
                      {"id": "student04", "name": "Tim Berners Lee",
                      "email": "tblee@email.com"},
                      {"id": "student05", "name": "Hedy Lamarr",
                      "email": "hlamarr@email.com"}
                   ];
    
    /*
    Loop through the students array to get the id and email of each student and 
    print it to the console
    */
    for (let i = 0; i < students.length; i++) {
        let studentDetails = students[i];
        console.log(`id: ${studentDetails.id}\nemail: ${studentDetails.email}\n`);
    }

}

// execute the init method upon page load
window.addEventListener("load", init);