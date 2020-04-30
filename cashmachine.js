// PIN functions: add PIN, check PIN, change PIN

let pinCount = 0;
let bankBalance = 500;
let depositLimit = 250;
let pin = 1234;

const pinblock = (pinCount = undefined, block = false) => {
    if (pinCount < 2){
        block = false;
    }

    else {
        block = true;
        alert("You exceeded the number of attemps. Goodbye now.");
    }
}

const checkPin = (pin = undefined) => {
    let userInput == prompt('Enter your PIN');
    if (userInput != pin){
        alert("Wrong PIN. Try again");
        pinblock(pinCount++);
    
    }

    else {
        alert("Welcome to the Iron Bank");
        menu();
    }
}

const menu = () =>{
    let userInput == prompt;

    if (userInput == 1);
} 

const changePIN = (userInput = undefined, pin, newPin = undefined) => {
    if (userInput == pin){
        newPin == prompt("Enter new PIN");
        pin == newPin;
        alert("You have succesfully changed your PIN");
    }

    else{
        alert("Wrong PIN. Try again");
        pinblock(pinCount++);
    }
}

changePIN(1234, 1234, 9999);
changePIN(1233, 1234, 9999);

// Withdrawals, deposits and balance



const bankWithdrawal = (withdrawal = 250, limit = 250, bankBalance = 500) => {
    /*prompt("How much would you like to withdraw?") == withdrawal;*/

    if (withdrawal > limit){
        console.log("The withdrawal limit is £250 a day. You can still withdraw £", limit);
    }

    else if (withdrawal > bankBalance){
        console.log("You don't have enough funds in your account. You currently have £", bankBalance, " in your account");
    }

    else{
        limit = (limit - withdrawal)
        bankBalance = (bankBalance - withdrawal);
        console.log("You have withdrawn £", withdrawal, ". Your bank balance now is £", bankBalance, "You can still withdraw £", limit);
    }
}

bankWithdrawal();
bankWithdrawal(100, 50, 500)
bankWithdrawal(500, 500, 500)
bankWithdrawal(500, 500, 100)

const deposit = (depositAmount, bankBalance, depositLimit) =>{
    if (depositAmount > depositLimit){
        console.log("You have exceeded the deposit limit: £", depositLimit)
    }

    else{
        bankBalance == (bankBalance + depositAmount);
        console.log("You have successfully deposited £", depositAmount, ". Your current bank balance is £", bankBalance);
    }
}

deposit(200);
deposit(250);
deposit(300);



checkPin();