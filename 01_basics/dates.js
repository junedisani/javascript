let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let newDate = new Date(2024,3,24,18,30);
// console.log(newDate.toString());

let newDate1 = Date.now()
console.log(newDate1);

let newDate2 =  new Date();
console.log(newDate2.toLocaleString(`default`,{
    year: "numeric",
    month: "long",
}));
