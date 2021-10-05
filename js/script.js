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

function showPage(list, page) {
// Create two variables to store the start index and the end index of the list items to be displayed on the given page. 
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = page * studentsPerPage;

// Select the UL element with a class of student-list and assign its value to a variable.   
   let studentList = document.querySelector(".student-list");
   studentList.innerHTML = ""; 

   for (let i = 0; i < list.length; i++){
      if (i >= startIndex && i < endIndex) {
         const studentItem = `  
            <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
               <h3>Ethel Dean</h3>
               <span class="email">ethel.dean@example.com</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined 12-15-2005</span>
            </div>
            </li>
               `;
      
         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
}

/* 
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/ 

function addPagination(list) {
// Create a variable to store the value of the number of pagination buttons needed.
   const buttonPerPage = Math.ceil(list.length / studentsPerPage);
// Select the UL element with a class of link-list and assign its value to a variable.
   let linkList = document.querySelector(".link-list");

   linkList.innerHTML = "";
   if (buttonPerPage > 0) {
   for (let i = 0; i < buttonPerPage; i++) {
      let li = document.createElement("li");
      // const button = document.createElement("button");
      li = `
      <li>
      <button type="button">1</button>
      </li>`;

      //Insert the elements you have created to the link-list variable you created earlier.
      linkList.insertAdjacentHTML("beforeend", li);
   }
      // Select the first pagination button and give it a class name of active.
   let firstButton = linkList.firstElementChild.firstElementChild;
   firstButton.className = "active";

      linkList.addEventListener("click", (e) => {
         let buttonClick = e.target;
         if (buttonClick.tagName === "BUTTON") {
            let activeButton = document.querySelector(".active");
            activeButton.className = "";

            buttonClick.className = "";

            buttonClick.className = "active";
            showPage(list, buttonClick.textContent);
         }
      }); 
   }
}
// Call functions
showPage(data, 1);
addPagination(data);
addPagination(data);
