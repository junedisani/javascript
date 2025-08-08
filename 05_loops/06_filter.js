
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

number.forEach( (value) => {
    if (value % 2 == 0) {
        console.log(value);
        
    }
})
  
const newNum = []

number.filter( (value) => {
    if (value > 4 )
        newNum.push(value);
})
console.log(newNum);

const studentData = [
    { 
        name: "rahul",
        grade: "A",
    },
    {
        name: "sushil",
        grade: "B"
    },
    {
        name: "Zaid",
        grade: "C"
    },
    {
        name: "rohit",
        grade: "A"
    },
    {
        name: "Kaif",
        grade: "B"
    },
]

const studentGrade = studentData.filter( (val) =>{ 
     return   val.grade === "B" && val.name == "Kaif"} );
console.log(studentGrade);

