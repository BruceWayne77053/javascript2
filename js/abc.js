// let aata = 5850
// let sugar = 8450
// let oil=7699

// let total = aata + sugar + oil

// console.log("Total Amount:",total)

// // let isDiscount = total > 5000


// // console.log("Is Discount Applicable:",isDiscount)


// if(total > 5000){
//     console.log("Discount Applied", 500)
// }

// else{
//     console.log("Discount is:",0)
// }



// total = 500

// let maths = 78
// let english = 94
// let urdu = 76
// let phy = 43
// let computer = 64


// let obtained = maths + english + urdu + phy + computer
// // console.log("Total Marks:", obtained)

// // if(total < 250){
// //     console.log("Fail")
// // }

// // else{
// //     console.log("Pass")
// // }


// let percentage = (obtained/total) * 100
// console.log("Percentage:", percentage)


// // let grade
// let grade = ""

// if (percentage >= 80){
//     grade = "A+"
// }
// else if(percentage >= 70){
//     grade = "A"
// }
// else if(percentage >= 60){
//     grade = "B"
// }
// else if(percentage >= 50){
//     grade = "C"
// }
// else if(percentage >= 40){
//     grade = "D"
// }
// else{
//     grade = "F"
// }


// console.log("Grade:", grade)


// While Loops
// let a = 5
// while(a > 1){
//     console.log("Muneeb")
//     a -= 1
// }


// For Loop
// for (i = 0; i < 5; i++){
//     console.log(i)
// }

// let total = 0
// for (a = 0; a <= 5; a++){
//     total += a
// }

// console.log(total)


// Function
// function pname(){
//     console.log("Muneeb")
// }

// pname()
// pname()
// alert("Muneeb")


// Return Function
// function even_odd(a){

//     // console.log(a)
//     if (a % 2 ==0){
//         // console.log("Even")
//         return "Even"
//     }
//     else{
//         // console.log("Odd")
//         return "Odd"
//     }
// }

// let a = 5 * 6
// // even_odd(a)
// console.log(even_odd(a))

// pname("Muneeb")
// pname("Iqbal")


// function even_odd(a){

//     // console.log(a)
//     if (a % 2 ==0){
//         // console.log("Even")
//         return "Even"
//     }
//     else{
//         // console.log("Odd")
//         return "Odd"
//     }
// }

// let num = prompt("Please enter a number:")
// // even_odd(a)
// console.log(even_odd(num))



// Array

let  students = ["muneeb","haseeb","ayan", "hamza"]

// console.log(students)
// console.log(students[0])

// Jump Statement (break, continue, skip)
// for (i = 0; i < students.length; i++){
//     if (i == 2){
//         break
//     }
//     else{
//         console.log(students[i])
//     }
// }


// console.log(students.length)



// for (i = 0; i < students.length; i++){
//     if (i == 2){
//         continue
//     }
//     else{
//         console.log(students[i])
//     }
// }


for (i = 0; i < students.length; i++){
    if (students[i] == "haseeb"){
        continue
    }
    else{
        console.log(students[i])
    }
}
