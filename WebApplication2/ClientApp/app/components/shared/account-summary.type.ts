import { AccountType } from './account-type.enum';

export class AccountSummary {
    accountNumber: string | undefined;
    type: AccountType | undefined;
    name: string | undefined;
    balance: number | undefined;

    constructor() {

    }
}