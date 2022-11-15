console.log("Hello, World!");

let h1_arr = document.getElementsByTagName("h1")
let h = h1_arr[0]
h.innerHTML = "Lab12 Assignment"
h.style.color = "blue"

let hr = document.createElement("hr")
document.body.appendChild(hr)


let h2 = document.createElement("h2")
h2.innerHTML = "Task"
h2.style.color = "red"
document.body.appendChild(h2)

let t1 = document.createElement("t")
t1.innerHTML = "In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(t1)


let ul = document.createElement("ul")
let li = document.createElement("li")


li = document.createElement("li")
li.innerHTML = "find elements in the DOM (<b>5 points</b>);"
li.style.color = "green"
ul.appendChild(li)

li = document.createElement ("li")
li.innerHTML = "create/add/remove elements (<b>5 points</b>);"
li.style.color = "purple"
ul.appendChild(li)

li = document.createElement ("li")
li.innerHTML = "change content of the elements (<b>5 points</b>);"
li.style.color = "green"
ul.appendChild(li)

li = document.createElement ("li")
li.innerHTML = "change styles of the elements (<b>5 points</b>);"
li.style.color = "purple"
ul.appendChild(li)

li = document.createElement ("li")
li.innerHTML = "change attributes of the elements (<b>5 points</b>);"
li.style.color = "green"
ul.appendChild(li)

li = document.createElement ("li")
li.innerHTML = "change classes of the elements (<b>5 points</b>);"
li.style.color = "purple"
ul.appendChild(li)
document.body.appendChild(ul)



let t2 = document.createElement ("t")
t2.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
let a = document.createElement("a");
a.setAttribute("href"
, "https://github.com/yessen/nu_web_programming/tree/main/week12");
a.innerText = "link.";
t2.appendChild(a);
document.body.appendChild(t2)

let hr1 = document.createElement("hr")
document.body.appendChild(hr1)

let h2_2 = document.createElement("h2")
h2_2.innerHTML = "Submission"
h2_2.style.color = "red"
document.body.appendChild(h2_2)

let t3 = document.createElement("t")
t3.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(t3)

let ul1 = document.createElement("ul")
let li1 = document.createElement("li")


li1 = document.createElement("li")
li1.innerHTML = "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>)."
li1.style.color = "green"
ul1.appendChild(li1)

li1 = document.createElement("li")
li1.innerHTML = "Clone this repository to your local machine and work inside it."
li1.style.color = "purple"
ul1.appendChild(li1)

li1 = document.createElement("li")
li1.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lth1&gt tag with ''Hello, World!'' message (<b>1 point</b>)."
li1.style.color = "green"
ul1.appendChild(li1)

li1 = document.createElement ("li")
li1.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)."
li1.style.color = "purple"
ul1.appendChild(li1)

li1 = document.createElement ("li")
li1.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
li1.style.color = "green"
ul1.appendChild(li1)

li1 = document.createElement ("li")
li1.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
li1.style.color = "purple"
ul1.appendChild(li1)

li1 = document.createElement ("li")
li1.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>)."
li1.style.color = "green"
ul1.appendChild(li1)

document.body.appendChild(ul1)

let hr2 = document.createElement("hr")
document.body.appendChild(hr2)

