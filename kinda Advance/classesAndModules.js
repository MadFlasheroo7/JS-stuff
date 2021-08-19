/**
 * 
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
}

module.exports = User;
