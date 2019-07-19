/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



//logs a message to show that the javascript has loaded
document.addEventListener('DOMContentLoaded', () => {
console.log('javascript has loaded');

// Declaring global variables for the list items inside the student-list div
   const studentList = document.querySelectorAll('.student-item');
   const itemsPerPage = 10;
     /*** 
Function that allows the page to only display 10 students at a time and hide the rest.
***/
    const showPage = (list,page) => {
   
       let startIndex = (page * itemsPerPage) - itemsPerPage;
       let endIndex = page * itemsPerPage;
       for(i=0;i<list.length;i+=1){
         if(i >= startIndex && i < endIndex){
            list[i].style.display = '';
         }else
            list[i].style.display = 'none';
       }
   }
   

   
    
   // Function that creates pagination links and appends them.   
   
  
   const appendPageLinks = (list) => {

      let div = document.createElement('div');
      let ul = document.createElement('ul');
      
      let page = document.querySelector('.page');
      div.className = 'pagination';
      page.appendChild(div);
      div.appendChild(ul);

      let pagesNeeded = Math.ceil(list.length / itemsPerPage);
      for (i=1; i < pagesNeeded; i++){
         let li = document.createElement('li');
         let a = document.createElement('a');
         a.href = '#';
         a.textContent = i;
         ul.appendChild(li);
         li.appendChild(a);
        
         
         a.addEventListener('click', (e)=>{ 
            let paginationLinks = document.querySelectorAll('a');
            for(i=0; i < paginationLinks.length; i++){
               paginationLinks[i].classList.remove('active');
              

            }
            e.target.className = 'active';
            let currentPage = e.target.textContent;
            showPage(list, currentPage);
               


         });



      }
   
   
   
   };
   // Calling ShowPage and appendPage functions
   showPage(studentList, 1);
   appendPageLinks(studentList);
   });
   
   