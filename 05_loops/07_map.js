const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum1 = number.map( (val) => {
        return  val + 10
 })

const newNum2 = number
                .map( (num) => num * 20)
                .map( (num) => num + 1)
                .filter( (num) => num >= 100)



console.log(newNum);

