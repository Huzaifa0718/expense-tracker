// function add(){
let a = document.getElementById("amount")
  let e = document.getElementById("balance")
let b = document.getElementById("text")

  let c = document.getElementById("income")
  let d = document.getElementById("expense")
  let h = document.getElementById("add")
  let u = document.getElementById("deduct")
  let z = document.getElementById("net")
  let x = document.getElementById("daalo")

let balance = 0;
let income =0;
let expense =0;

h.addEventListener("click",()=>{
   e.innerHTML = a.value
  let newbalance =parseInt(e.innerHTML)+balance;
e.innerHTML = newbalance;
  console.log(newbalance)
   balance = newbalance ;
})

u.addEventListener("click",()=>{
   d.innerHTML = a.value;
    let newexpense =parseInt(d.innerHTML)+expense;
d.innerHTML = newexpense;
  console.log(newexpense)
   expense = newexpense ;
})

// function net(){
//    let e = document.getElementById("balance")
//    let d = document.getElementById("expense")
//   let balance = 0;
//    let newbalance =parseInt(e.innerHTML)+balance;
// e.innerHTML = newbalance;
//   console.log(newbalance)
//    balance = newbalance ;
//     e.innerHTML = balance-d.innerHTML
// }

z.addEventListener("click",()=>{
  e.innerHTML = balance-d.innerHTML
})

function text()
{ 
  if(b.value === ''){
  alert("kuch likh bhai")
}else{let li = document.createElement("li");
 li.innerHTML  = b.value
document.getElementById("list").appendChild(li)
  let span = document.createElement("span");
  span.innerHTML = a.value;
li.appendChild(span);}
  b.value = "";
}