let arr = [
    {Question:"Which of the three banks will be merged with the other two to create India’s third-largest bank?",

        A:"Punjab National Bank",
         B:"Indian Bank",
         C:"Bank of Baroda", 
        D:"Dena Bank",
    correct:"A"},
       { Question:"What is the name of the weak zone of the earth’s crust?",

            A:"Seismic", 
           B:"Cosmic",
           C:"Formic",
            D:"Anaemic",
            correct: "A"}
];
let index = 0;
let score = 0;
let q = document.getElementById("question");
let b1 = document.getElementById("btn1");
let b2 = document.getElementById("btn2");
let b3 = document.getElementById("btn3");
let b4 = document.getElementById("btn4");
let con = document.getElementById("box");
function change()
{
   if(index==arr.length)
   {
    con.innerHTML = "your score is " +score;
   }
    q.innerHTML= arr[index].Question;
    b1.innerHTML= arr[index].A;
    b2.innerHTML= arr[index].B;
    b3.innerHTML= arr[index].C;
    b4.innerHTML= arr[index].D;
    index = index+1;
   
}  
function check(answer) 
{
if(answer==arr[index-1].correct)
{
    score++;
}
}
b1.addEventListener("click",()=>check("A"));
b2.addEventListener("click",()=>check("B"));
b3.addEventListener("click",()=>check("C"));
b4.addEventListener("click",()=>check("D"));
change();