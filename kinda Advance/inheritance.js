/**
 * Inheritance 
 */

 class User {
    constructor(name, email)  {
        this.name = name;
        this.email = email;
    }
    courseList = [];

    getInfo() {
        return { name: this.name, email: this.email };
    }
    enrollCourse(name) {
        this.courseList.push(name);
    }
    getCourselist() {
        return this.courseList;
    }

    login() {
        return "You are logged in!";
    }
    // static keyword makes a function private
    // static login() {
    //     return "You are logged in!";
    // }
}

class Admin extends User {
    constructor(fullName, email) {
        super(fullName, email);
    }
    getAdminInfo() {
        return "Iam admin";
    }
    /**
     * A child class can override any methods or functions declared in parent class
     */
    login() {
        return "You are logged in from Admin class!";
    }
};

var madFlasher = new Admin("MadFlasher", "madFlasher@gmail.com");
console.log(madFlasher.getAdminInfo()); // Iam admin
console.log(madFlasher.getInfo()); // { name: 'MadFlasher', email: 'madFlasher@gmail.com' }
console.log(madFlasher.login()); // You are logged in from Admin class!