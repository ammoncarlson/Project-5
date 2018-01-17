
import { Account } from './Account';
import { displayClassName, displayClassNameWithPurpose } from "./decorators";
import {TransactionOrigin} from "./TransactionOrigin";
import {Transaction} from "./Transaction";
import {AccountType} from "./AccountType";

@displayClassNameWithPurpose('to prove typescript wrong')
export class CheckingAccount implements Account {


    constructor(){
    this.dateOpened = new Date ();
}

  accountHolderName: string;
  accountHolderBirthDate: Date;
  balance: number = 10000;
  accountType: AccountType;
  accountHistory: Transaction[];
  success: boolean;
  resultBalance: number;
  amount: number;
  description: string;
  transactionDate: Date;
  errorMessage: string;
  dateOpened: Date;


  withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
    let currentBalance = this.balance;
    this.accountType = 1;
      if(transactionOrigin == TransactionOrigin.branch || TransactionOrigin.phone || TransactionOrigin.web){
        this.amount = amount;
        if (amount > currentBalance){
          this.success = false;
          this.errorMessage = "The amount is too high";
          this.resultBalance = this.balance;
          this.transactionDate = new Date();
          this.description = description;
        }
        else {
          this.success = true;
          this.errorMessage = "";
          this.resultBalance = this.balance -= amount;
          this.transactionDate = new Date();
          this.description = description;
        }
        return;
      }
  }

  depositMoney(amount: number, description: string): Transaction {
    this.balance += amount;
    this.resultBalance = this.balance;
    this.success = true;
    this.description=description;
    this.errorMessage = "";
    this.transactionDate = new Date();

    return;

  }

  advanceDate(numberOfDays: number) {
    throw new Error("Method not implemented.");
  }
}