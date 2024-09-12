




function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || income < expenses) {
        return  "Invalid Input";
    }
    const profit = income - expenses;
    const tax = profit * .20;
    return tax;
}



function sendNotification(email) {
    let emailArray = email.split("@");
    let userName = emailArray[0];
    let domainName = emailArray[1];
    if(email.indexOf('@') === -1) {
        return  "Invalid Email";
    }
    let notificationMessage = userName + " sent you an email from " + domainName;
    return notificationMessage;
}



function checkDigitsInName(name) {
    if(typeof name !== 'string') {
        return  "Invalid Input";
    }
    for(let i = 0; i < name.length; i++ ) {
        let char = name[i];
        if(char >= "0" && char <= "9") {
            return true;
        }
    }
    return false;
}



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



function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }
    let sum = 0;
    for(let time of waitingTimes) {
        sum = sum + time;
    }
    let avgTime = sum / waitingTimes.length;
    avgTime = Math.round(avgTime);
    let haveBeforeSerial = serialNumber - 1;
    let remainingSerial = haveBeforeSerial - waitingTimes.length;
    let remainingTime = avgTime * remainingSerial;
    return remainingTime;
}
