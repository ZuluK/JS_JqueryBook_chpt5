//Document Object Model
//Methods that return a single element
var lastName = getElementById('id')//Selects an individual element given the value it's id attribute
var lastNames = querySelector("css selector")//Uses CSS selector syntax that would select one or more elements

//Methods that return one or more elements
var firstName = getElementsByClassName('class')//Selects one or more elements give the value of their class attribute
var firstNames = getElementsByTagName('tagName')//Selects all elements on the page with the specified tag name.
var querySelect = querySelectorAll('css selector')//Use CSS selector syntax to select one or more elements and returns all of those that match


//Selecting an element from a nodelist
// THE item() Method
var elements = document.getElementsByClassName('hot')//Select elements that have a class attribute whose values is HOT and store the NodeList in a variable
if (elements.length >= 1){//Use the length property to check how many elements were found. If 1 or more are found, run the code in the IF statement
  var firstItem = elements.item(0);//Store the first element from the NodeList in a variable called firstItem.
}
//Array syntax is preferred over the item()method because it is faster.
var elements = document.getElementsByClassName('hot');//Creates a NodeList containing elements that have a class attribute whose value is HOT, and store it in the variable elements
if (elements.length >= 1){//Check if that number is greater than or equal to one, run the code inside the IF statement
  var firstItem = elements[0];//Get the first element from the NodeList
}

//Selecting Element Using Class Atrributes
var elements = document.getElementsByClassName('hot'); //Find elements with class of HOT

if (elements.length > 2){//If 3 or more are found
  var el = elements[2];//Select the third one from the NodeList
  el.className = "cool";//Change the value of the class attribute
}

//Selecting elements using by tag name
var elements = document.getElementsByTagName('li');//Selects all <li> elements

if (elements.length > 0){//If one or more is found
  var el = elements[0];//Select the first one using the array syntax
  el.className ='cool';//Change the value of the class attribute
}

//Selecting Elements Using CSS Selectors
//querySelector() only returns the first match
var el = document.querySelector('li.hot');
el.className = 'cool';

//querySelectorAll returns a NodeList
//The second matching element (the third list item) is selected and changed
var els = document.querySelectorAll('li.hot')
els[i].className = 'cool'

//Repeating actions for an entire NodeList
var hotItems = document.querySelectorAll('li.hot');//variable contains NodList whose class attribute has a value of hot.
for (var i = 0; i < hotItems.length; i++){//length property indicates how many elements are in the NodeList. The number of elements dicate how many times the code will run
  hotItems[i].className ='cool';//Array syntax is used to indicate which element in the NodeList is being used.
}
//Looping through a NodeList
var hotItem = document.querySelectorAll('li.hot');//Stores the NodeList in array

if (hotItem.length > 0){
  for(var i = 0; i < hotItem.length; i++){
    hotItem[i].className = 'cool';
  }
}
