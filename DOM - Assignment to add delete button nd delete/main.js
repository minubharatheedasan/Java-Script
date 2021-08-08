// DOM - The Document Object Model (DOM) is a platform and language-neutral interface
//       that allows programs and scripts to dynamically access and update the content,
//       structure, and style of a document.

// https://www.w3schools.com/js/js_htmldom.asp

// Document Object:
// The HTML DOM document object is the owner of all other objects in your web page.
// The document object represents your web page.
// If you want to access any element in an HTML page, you always start 
// with accessing the document object.
// Link: https://www.w3schools.com/js/js_htmldom_document.asp

// With the object model, JavaScript gets all the power it needs to create dynamic HTML:
// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page



// Window Object 
      // Window Object is the parent object in the Browser.
        // console.log(window)
        // Everything comes under this window object
        // window.alert("This is an alert")
        // But since window is the parent object and everything comes under it
        // we dont need to say window all the time 
        // alert("this is a new alert")



// We will be using this document object to select elements from the DOM. 

 
//  ELEMENT SELECTORS

// // Single Element Selectors
console.log(document.querySelector('#my-form'))

// People used jQuery for a long time to select elements with attributes other than id,
// like classes, tags, etc. But with ES6 we can do the same thing using querySelector
// console.log(document.querySelector('#my-form'))
myform = document.querySelector("#my-form")
console.log("form", myform.querySelectorAll('label'))


// // Multiple Element Selectors

// console.log(document.querySelectorAll('.item'))

// What this will give us is a node list which is just like an array 
// and we  can run array functions on it

// There are other ways to select elements, but the recommended one is
// querySelector beacuse the other two are older.
// console.log(document.getElementsByTagName('li'))
// console.log(document.getElementsByClassName('item'))

// Looping through the items
// console.log('\nLooping through the NodeList')
let items = document.querySelectorAll('.item')
console.log(items)
// items.forEach((item) => console.log(item.innerHTML))
// // We can also use item.textContent to display just the text 
// var node = document.createElement("LI");  
// node.appendChild(document.createTextNode("Water"));
// console.log(node)


// items.appendChild(document.createTextNode("Water"))

// // // MANIPULATING THE DOM
// const ul = document.querySelector('.items')
// console.log(ul)
// // Removing all elements under class items
// ul.remove();
// console.log(ul)

// Removing last element under class items
// ul.lastElementChild.remove()
// console.log(ul)

// Changing text content 
// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'Brad'


// // Adding HTML
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'  

// ul.push("Harshita") 


// Changing styles
// const btn = document.querySelector('.btn')
// // console.log(btn)
// btn.style.background = 'red';
// btn.style.color = 'white';




// // EVENTS

// HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements

// Link: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// format to add an event  <element event='some JavaScript'> 




// Method_1 - Event Handler method

const btn_1 = document.querySelector('.btn_1');
console.log(btn_1)


// btn_1.onclick = function() {
//   btn_1.style.background = 'red';
// }

// 15.82

function random(number) {
  return Math.floor(Math.random() * (number)); // math.random = gives random values b/w 0 and 1   
}


// btn_1.onclick = function() {
//   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   console.log(rndCol)
//   document.body.style.backgroundColor = rndCol;
// }


const btn_2 = document.querySelector('.btn_2');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

// Alternate_way
// btn_2.onclick = bgChange;

// The color changes when the button is focused
// btn_2.onfocus = bgChange;

// The color changes when the button is unfocused
// btn_2.onblur  = bgChange;

// The color changes only when the button is double-clicked
// btn_2.ondblclick   = bgChange
const name = document.querySelector('#name');
console.log(name)
// // The color changes when a key is pressed on the keyboard
// name.onkeypress = bgChange
// window.onkeydown = bgChange
// window.onkeyup = bgChange

// The color changes when the mouse pointer hovers over the button
// btn_2.onmouseover = bgChange 

// when the pointer moves off the button, respectively.
// btn_2.onmouseout = bgChange

// List of event handlers
// https://www.tutorialspoint.com/javascript/pdf/javascript_events.pdf


// method 2 - Inline EventListener 


// Method - 3 - addEventListener().
// The newest type of event mechanism is defined in the Document Object Model (DOM) Level 2 
// Events Specification, which provides browsers with a new function — addEventListener().

btn_1.addEventListener('click', bgChange);

// btn_2.addEventListener('click', function() {
//   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// });

// btn_1.removeEventListener('click', bgChange);


// Difference b/w event handler method and addEventListener
// you can register multiple handlers for the same listener. 

// The following two handlers wouldn't both be applied:


// Won't work, The second line overwrites the value of onclick set by the first line
// myElement.onclick = functionA;
// myElement.onclick = functionB;

// Both functions would now run when the element is selected.
// myElement.addEventListener('click', functionA);
// myElement.addEventListener('click', functionB);


// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// What mechanism should I use?

// Of the three mechanisms, you shouldn't use the HTML event handler attributes — 
// these are outdated, and bad practice, as mentioned above.


//List of event handlers
// https://developer.mozilla.org/en-US/docs/Web/Events

// https://www.w3schools.com/jsref/obj_event.asp
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events




// // Mouse Event
// const ul = document.querySelector('.items')
// const btn = document.querySelector('.btn')
// const form = document.getElementById('my-form')

// const btn = document.querySelector('.btn')
// let form = document.getElementById('my-form')

// Event objects
// Sometimes inside an event handler function, you'll see a parameter 
// specified with a name such as event, evt, or simply e. This is called the event object, 
// and it is automatically passed to event handlers to provide extra features and information


// btn.addEventListener('click', (e) => {
//   e.preventDefault()
//   // the btn has a default fucntionality which makes the event flash and go away,
//   // we are using preventDefault() to prevent that
// // ul.children[1].innerText = 'Brad'
//   console.log("className", e.target.className)
//   // Adding Style 
//   form.style.background = 'red'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
//   // Adding class to the element
//   ul.lastElementChild.innerHTML = '<h1>Changed</h1>'
// })

// Links:
// https://www.w3schools.com/js/js_htmldom_events.asp  
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp





const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
//const btndelete = document.
//const itemcount = document.querySelector('#count')

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
//   }
// }
    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li_1 = document.createElement('li');  //li_1 = <li></li>
    // Add HTML
    li_1.innerHTML = `<strong>${nameInput.value}</strong>   :    ${emailInput.value}  
    <button onclick = "deleteToDo(this.parentElement)">Delete</button>`;
    console.log("li_1", li_1)
    console.log(this.parentNode)
    // Append to ul
    userList.appendChild(li_1);
    console.log("userlist", userList)
    nameInput.value = '';
    emailInput.value = '';
    
  }
}
function deleteToDo(elem){
  userList.removeChild(elem);
}  