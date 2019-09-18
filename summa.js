/*const thilak = document.getElementById('thilak');
const button = document.getElementById('button');
const text = document.getElementById('text');

);


const mylist = document.getElementsByTagName('li')
for (i = 0;i<mylist.length;i++)
{
    mylist[i].style.color = "purple";
}
const not = document.getElementsByClassName('not')
for (i = 0;i<not.length;i++)
{
    not[i].style.color = "red";
}
const evens = document.querySelectorAll('li')
for (i = 0;i<evens.length;i++)
{
    evens[i].style.backgroundcolor = "gray";
}*/



const  toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionnInput = document.querySelector('input.description');
const  descriptionP = document.querySelector('p.description');


const descriptionButton = document.querySelector('button.description');
const listUL = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');


const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');
const lis  = listUL.children; 


function attachListItemsButtons(li)
{
 let up = document.createElement('button');
 up.className = 'up';
 up.textContent = 'up';
 li.appendChild(up);
let down = document.createElement('button');
down.className = 'down';
down.textContent = 'down';
li.appendChild(down);
let remove = document.createElement('button');
remove.className = 'remove';
remove.textContent = 'remove';
li.appendChild(remove);
}
 for (let i = 0;i< lis.length;i++)
 {
     attachListItemsButtons(lis[i]);
 }
listUL.addEventListener('click',(event) =>
{
     if (event.target.tagName == 'BUTTON')
     {
         if(event.target.className == 'remove')
          {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li) ; 
         }
         if(event.target.className == 'up')
         {
    let li = event.target.parentNode;
    let prevLi = li.previousElementSibling;
    let ul = li.parentNode;
 // if (prevLi)
  //{
    ul.insertBefore(li,prevLi);
  //}
                 
 
        }
        if(event.target.className == 'down')
        {
    let li = event.target.parentNode;
    let nextLi = li.nextElementSibling;
    let ul = li.parentNode;
    if (nextLi)
    {
    ul.insertBefore(nextLi,li);
    }
    } 
    }
    // event.target.textContent =  event.target.textContent.toUpperCase();
    });




//listDiv.addEventListener('mouseout',() =>
//{
  //  if (event.target.tagName == 'LI')
   //event.target.textContent =  event.target.textContent.toLowerCase();
//});

toggleList.addEventListener('click', () =>
{
    if (listDiv.style.display == 'none' )
    {   
        toggleList.textContent = 'hidelist';
        listDiv.style.display = 'block' ;
    }else{
        toggleList.textContent  = 'showlist'; 
        listDiv.style.display = 'none';
    }
  
});
descriptionButton.addEventListener('click', () =>
{
    descriptionP .innerHTML = descriptionnInput.value + ':';
    
});
 
addItemButton.addEventListener('click',()=>
{
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li' );
    li.textContent = addItemInput.value;
    attachListItemsButtons(li);
    ul.appendChild(li);
   addItemInput.value = "";
});
removeItemButton.addEventListener('click',()=>
{
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child' );
     ul.removeChild(li);

});




//function exec (func,arg)
//{
 //   func(arg);
//}
//window.setTimeout( (something) =>
//{
  //  console.log(something);
//},3000,'greeting everyone'); 