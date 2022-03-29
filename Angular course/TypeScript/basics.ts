// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

////////////////////////////////////////////////
// Primitives

let age: number = 12;

age = 21;

let userName: string = 'YulianKh';

let isInstructor: boolean = false;

////////////////////////////////////////////////
// More complex types

let hobbies: string[] = ['hiking', 'exercising'];

type Person = {
	firstName: string;
	lastName: string;
	age: number;
	profession: string;
	isInstructor?: boolean;
};

let person: Person;

person = {
	firstName: 'Yulian',
	lastName: 'Khomechko',
	age: 21,
	profession: 'frontend developer'
};

let people: Person[];

people = [
	{
		firstName: 'Yulian',
		lastName: 'Khomechko',
		age: 21,
		profession: 'frontend developer'
	}
];

////////////////////////////////////////////////
// Type inference - typescript can automaticaly set type of variable

////////////////////////////////////////////////
// Union types
let course: string | number = 'React - The Complete Guide';

course = 12312;

////////////////////////////////////////////////
// Type allias

// use type keyword - for type alliases

// type Person = {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// 	profession: string;
// 	isInstructor?: boolean;
// };

// let person: Person;
// let people: Person[];

////////////////////////////////////////////////
// Functions and funciton types

function add(a: number, b: number): number {
	return a + b;
}

function printTs(value: any): void {
	console.log(value);
}

////////////////////////////////////////////////
// Generics

function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}

const demoArray = [1, 3, 5];

const updatedArray = insertAtBeginning(demoArray, -1);

// updatedArray[0].split('');

////////////////////////////////////////////////
// Classes and Interfaces

class Student {
	// public firstName: string;
	// lastName: string;
	// age: number;
	// private courses: string[];

	constructor(
		public firstName: string,
		public lastName: string,
		public age: number,
		private courses: string[]
	) {
		// this.firstName = first;
		// this.lastName = last;
		// this.age = age;
		// this.courses = courses;
	}

	enrol(courseName: string) {
		this.courses.push(courseName);
	}
	listCourse() {
		return this.courses.slice();
	}
}

const student: Student = new Student('Yulian', 'Khomechko', 21, [
	'HTML',
	'CSS',
	'JavaScript'
]);

student.enrol('React');

// Interface

interface Human {
	firstName: string;
	age: number;

	greet: () => void;
}

let max: Human;
max = {
	age: 23,
	firstName: 'Yulian',

	greet() {
		console.log(`Hello. I am ${this.firstName}`);
	}
};

class Insructor implements Human {
	// firstName: string;
	// age: number;

	constructor(public firstName: string, public age: number) {}

	greet() {
		console.log('Hello');
	}
}
