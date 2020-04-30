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
        alert("You have exceeded the number of attemps. Goodbye now.");
    }
}

const checkPin = (pin = undefined) => {
    let userInput = prompt('Enter your PIN');
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
    let userInput = parseInt(prompt("What would you like to do? /nChange PIN: Press 1 /nWithdrawal: Press 2 /nDeposit: Press 3 /n"));
    switch (userInput) {
        case (userInput == 1):
            changePIN();
        case (userInput == 2):
            bankWithdrawal();
        case (userInput == 3):
            deposit();
    }
} 

const changePIN = (userInput, pin, newPin) => {
    if (userInput == pin){
        newPin == parseInt(prompt("Enter new PIN"));
        pin == newPin;
        alert("You have succesfully changed your PIN");
    }

    else{
        alert("Wrong PIN. Try again");
        pinblock(pinCount++);
    }
}

// Withdrawals, deposits and balance


const bankWithdrawal = (withdrawal, limit, bankBalance) => {
    prompt("How much would you like to withdraw?") == withdrawal;

    if (withdrawal > limit){
        alert("The withdrawal limit is £250 a day. You can still withdraw £", limit);
    }

    else if (withdrawal > bankBalance){
        alert("You don't have enough funds in your account. You currently have £", bankBalance, " in your account");
    }

    else{
        limit = (limit - withdrawal)
        bankBalance = (bankBalance - withdrawal);
        alert("You have withdrawn £", withdrawal, ". Your bank balance now is £", bankBalance, "You can still withdraw £", limit);
    }
}

const deposit = (depositAmount, bankBalance, depositLimit) =>{
    prompt('Enter a deposit amount') == depositAmount;
    if (depositAmount > depositLimit){
        alert("You have exceeded the deposit limit: £", depositLimit)
    }

    else{
        bankBalance = (bankBalance + depositAmount);
        alert("You have successfully deposited £", depositAmount, ". Your current bank balance is £", bankBalance);
    }
}

checkPin();