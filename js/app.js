'use strict'

let form = document.getElementById('form');
let ul = document.getElementById('ul');



function Authors (name,title,subject,content,day,month,year){
    this.name = name;
    this.title = title;
    this.subject = subject;
    this.content = content;
    this.day = day;
    this.month = month;
    this.year = year
   
     Authors.all.push(this);
}
Authors.all = []; 
console.table(Authors.all);
form.addEventListener('submit',function(event){
event.preventDefault();
let name = event.target.userName.value ;
let title = event.target.title.value;
let subject = event.target.subject.value;
let content = event.target.content.value;
let day = event.target.day.value;
let month = event.target.month.value;
let year = event.target.year.value;

let newAurthor ; 
  newAurthor= 
 new Authors (name,title,subject,content,day,month,year);
        

   
      form.reset();
           newAurthor.render();

localStorage.setItem('Authors',JSON.stringify(Authors.all));
   
   



})
Authors.prototype.render = function(){
   let items = JSON.parse(localStorage.getItem('Authors'));
     

   for(let i = 0 ; i<items.length;i++){
       let dis = document.createElement('li');
       dis.textContent =   this.name +  this.title + this.subject + this.content +  this.day+ '-'+ this.month + '-'+ this.year;
       ul.appendChild(dis); 
   }
}

//  function displayItem(){
//      let item = JSON.parse(localStorage.getItem('Authors'));
//      for(let i = 0 ; i<item.length;i++){
//             let newAurthor = new Authors (item[i].name,item[i].title,item[i].subject,item[i].content,item[i].day,item[i].month,item[i].year);
//    newAurthor.render();
     
//         }
// }

// displayItem();