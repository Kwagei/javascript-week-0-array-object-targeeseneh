//1: Declare an array with 5 items.
let arr = [1, 2, 3, 4, 5];

//2: Add an item to the array.
arr.push(6);

//3: Update the third item in the array.
arr[2] = 7;

//4: Let arr = [0, 1, 2, 3, 4, [5, 6, 7], 8, 9].
//5: Print 5 from the array defined above.
console.log(arr[5][0]);

//6: Print the last item in the array above using the array length property.
console.log(arr[arr.length - 1]);

//7: Write a program that swaps 0 and 1 in the array and produces this output [1, 0, 2, 3, 4, [5, 6, 7], 8, 9].
let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
console.log(arr);

//8: Declare an object called class with 3 properties.
let classObj = { property1: value1, property2: value2, property3: value3 };

//9: Add a new property to the object.
classObj.property4 = value4;

//10: Print the first item from the object using the dot notation.
console.log(classObj.property1);

//11: Print the last item from the object using the square bracket notation.
console.log(classObj['property4']);

//12 to 15
let people = [
    { name: "mary", contact: 0881999000 },
    { name: "paul", contact: 0881999600 },
    { name: "peter", contact: 0881999400 },
    { name: "sara", contact: 0881999300 }
  ];

  //16: Print Mary from the list of people.
  console.log(people[0].name);

  //17: Add gender to each of the objects in the array.
  people.forEach(person => {
    person.gender = "female";
  });

  //18: Add a new object to the list of people.
  people.push({ name: "john", contact: 0881999500, gender: "male" });

  //19: Print Sara's contact.
  console.log(people[3].contact);
