let change1 = document.querySelector(".change1");
let change2 = document.querySelector(".change2");
let change3 = document.querySelector(".change3");
let change4 = document.querySelector(".change4");
let change5 = document.querySelector(".change5");
let change6 = document.querySelector(".change6");
let pchange1 = document.querySelector(".pchange1");
let pchange2 = document.querySelector(".pchange2");
let pchange3 = document.querySelector(".pchange3");
let pchange4 = document.querySelector(".pchange4");
let pchange5 = document.querySelector(".pchange5");
let pchange6 = document.querySelector(".pchange6");

function daily(){
    change1.innerHTML="5hrs";
    pchange1.innerHTML="Yesterday - 7hrs";
    
    change2.innerHTML="1hrs";
    pchange2.innerHTML="Yesterday - 2hrs";

    change3.innerHTML="0hrs";
    pchange3.innerHTML="Yesterday - 1hrs";

    change4.innerHTML="1hrs";
    pchange4.innerHTML="Yesterday - 1hrs";

    change5.innerHTML="1hrs";
    pchange5.innerHTML="Yesterday - 3hrs";

    change6.innerHTML="0hrs";
    pchange6.innerHTML="Yesterday - 1hrs";
}

function weekly(){
    change1.innerHTML="32hrs";
    pchange1.innerHTML="Last Week - 36hrs";
    
    change2.innerHTML="10hrs";
    pchange2.innerHTML="Last Week - 8hrs";

    change3.innerHTML="4hrs";
    pchange3.innerHTML="Last Week - 7hrs";

    change4.innerHTML="4hrs";
    pchange4.innerHTML="Last Week - 5hrs";

    change5.innerHTML="5hrs";
    pchange5.innerHTML="Last Week - 10hrs";

    change6.innerHTML="2hrs";
    pchange6.innerHTML="Last Week - 2hrs";
}

function monthly(){
    change1.innerHTML="103hrs";
    pchange1.innerHTML="Last Month - 128hrs";
    
    change2.innerHTML="23hrs";
    pchange2.innerHTML="Last Month - 29hrs";

    change3.innerHTML="13hrs";
    pchange3.innerHTML="Last Month - 19hrs";

    change4.innerHTML="11hrs";
    pchange4.innerHTML="Last Month - 18hrs";

    change5.innerHTML="21hrs";
    pchange5.innerHTML="Last Month - 23hrs";

    change6.innerHTML="7hrs";
    pchange6.innerHTML="Last Month - 11hrs";
}