/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
 

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
let studentsPerPage = 9;
let html = ''

for (let i = 0; i < data.length; i++){
   let studentData = data[i];
   html = '
   <h2>${studentData.name}</h2>
   ';
}
console.log(html);

/*function showPage() {};


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
