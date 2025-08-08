const myNum = [1, 2, 3];
const initialValue = 0;

const myTotal = myNum.reduce( (acc, currval) =>  acc + currval,initialValue );
console.log(myTotal);

// ************************************************************

const myCourses = [
    {
        courseName : "js course",
        price: 2999
    },
    {
        courseName : "py course",
        price: 999
    },
    {
        courseName : "java course",
        price: 3999
    },
    {
        courseName : "Mobile dev course",
        price: 6999
    },
]

const totalCourse = myCourses.reduce( (acc, currval) => acc + currval.price,0 );
console.log(totalCourse);
