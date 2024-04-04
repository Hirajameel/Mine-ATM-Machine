#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 45000;
let mypin = 1234;
console.log(
  chalk.yellowBright.bold("\n \tWelcome to code with Hira - ATM Machine\n")
);

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: chalk.blue("Enter your pin code:"),
    type: "number",
  },
]);
if (pinAnswer.pin === mypin) {
  console.log(chalk.greenBright("\nCorrect Pin Code,Login Successfully!\n"));

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: chalk.yellowBright("please select options:"),
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);
  if (operationAns.operation === "withdraw") {
    let withdrawAns = await inquirer.prompt([
      {
        name: "withdrawMethod",
        type: "list",
        message: chalk.greenBright("Select withdrawal method:"),
        choices: ["fast Cash", "enter amount"],
      },
    ]);
    if (withdrawAns.withdrawMethod === "fast Cash") {
      let fastCashAns = await inquirer.prompt([
        {
          name: "fastCash",
          type: "list",
          message: chalk.redBright("select Amount:"),
          choices: [1000, 2000, 5000, 10000, 20000, 50000],
        },
      ]);
      if (fastCashAns.fastCash > myBalance) {
        console.log(chalk.red("Enadequate Balance"));
      } else {
        myBalance -= fastCashAns.fastCash;
        console.log(
          chalk.yellowBright`${fastCashAns.fastCash}Withdraw successfully:`
        );
        console.log(chalk.blueBright`Your Remaining Balance is:${myBalance}`);
      }
    }
  } else if (operationAns.operation === "check balance") {
    console.log(chalk.yellowBright("your balance is:" + myBalance));
  }
} else {
  console.log(chalk.red("Incorrect pin code:-(, Please Try Again!"));
}
