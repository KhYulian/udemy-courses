var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age = 12;
age = 21;
var userName = 'YulianKh';
var isInstructor = false;
var hobbies = ['hiking', 'exercising'];
var person;
person = {
    firstName: 'Yulian',
    lastName: 'Khomechko',
    age: 21,
    profession: 'frontend developer'
};
var people;
people = [
    {
        firstName: 'Yulian',
        lastName: 'Khomechko',
        age: 21,
        profession: 'frontend developer'
    }
];
var course = 'React - The Complete Guide';
course = 12312;
function add(a, b) {
    return a + b;
}
function printTs(value) {
    console.log(value);
}
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 3, 5];
var updatedArray = insertAtBeginning(demoArray, -1);
var Student = (function () {
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourse = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('Yulian', 'Khomechko', 21, [
    'HTML',
    'CSS',
    'JavaScript'
]);
student.enrol('React');
var max;
max = {
    age: 23,
    firstName: 'Yulian',
    greet: function () {
        console.log("Hello. I am ".concat(this.firstName));
    }
};
var Insructor = (function () {
    function Insructor() {
    }
    Insructor.prototype.greet = function () {
        console.log('Hello');
    };
    return Insructor;
}());
