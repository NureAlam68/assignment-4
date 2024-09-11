




// function calculateTax(income, expenses) {
//     if(income < 0 || expenses < 0 || income < expenses) {
//         return  "Invalid Input";
//     }
//     const profit = income - expenses;
//     const tax = profit * .20;
//     return tax;
// }
// let result = calculateTax(444, 78);
// console.log(result);








// function sendNotification(email) {
//     let emailArray = email.split("@");
//     let userName = emailArray[0];
//     let domainName = emailArray[1];
//     if(email.indexOf('@') === -1) {
//         return  "Invalid Email";
//     }
//     let notificationMessage = userName + " sent you an email from " + domainName;
//     return notificationMessage;
// }
// let str = "sadia8@icloud.com";
// let result = sendNotification(str);
// console.log(result);






// function checkDigitsInName(name) {
//     if(typeof name !== 'string') {
//         return  "Invalid Input";
//     }
//     for(let i = 0; i < name.length; i++ ) {
//         let char = name[i];
//         console.log(char)
//         if(char >= "0" && char <= "9") {
//             return true;
//         }
//     }
//     return false;
// }
// let people = ["Raj"];
// let result = checkDigitsInName(people);
// console.log(result)






function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || Array.isArray(obj)) {
        return  "Invalid Input";
    }
    let totalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily) {
        totalScore = totalScore + 20;
    }
    if(totalScore >= 80) {
        return true;
    }
    else {
        return false;
    }
}
let ok = { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }


let result = calculateFinalScore(ok);
console.log(result)


