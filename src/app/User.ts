export class User {
    firstName: string;
    lastName: string;
    gender: string;
    date: string;
    department: string;

    constructor(firstName?: string, lastName?: string, gender?: string, date?: string, department?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.date = date;
        this.department = department;
    }
}   