// let bags = 575
// let cloths = 7800
// let shoes = 5438
// let watch = 5432


total = bags + cloths + shoes + watch


let discount = 0
if(total >= 10000){
    discount = 1000
    total = total - discount
}

else if (total >= 8000){
    discount = 700
    total = total - discount
}

else if(total >= 5000){
    discount = 500
    total = total - discount
}


else if(total >= 3000){
    discount = 300
    total = total - discount
}


else{
    console.log(discount)
}

console.log("Total Amount:", total)
console.log("Discount Applied:", discount)
console.log("Total Amount after Discount:", total - discount)

