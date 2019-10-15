


//Here is our array of students. They are all objects! You can tell by the curly brackets and the key value pairs.
const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

//We are initializing our variable named studentClass outside of our function. It does not contain a value yet! If we console.log it it will show up as null. Spooky!
let studentClass;

//This is our function. It takes four parameters: name, subject, info, score. First we start off with a conditional statement that checks whether the score is above or equal to 70 (a passing score) and if not, a failing score. We're setting those values to strings so we can use interpolation to set the class of the h1 to either passing or failing. Then, we return a string of HTML that takes the arguments we have passed in to the function.
const createStudentComponent = function (name, subject, info, score) {

    return `
        <div class="student">
            <h1 class="${studentClass}">${name}</h1>
            <section class="cohort-section">${subject}</section>
            <aside>
                ${info}
            </aside>
        </div>
    `
}

`<div class="student">
<h1 class="xx-large passing">Student Name</h1>
<section class="bordered dashed section--padded">Subject</section>
<aside class="pushRight">Additional information</aside>
</div>`

//This is our variable that is an empty string. It exists outside of our loop so we can build on to it with each iteration of the loop.
let studentHTML = "";
//Let's get loopy! Our for loop iterates through our array of objects named students. For every iteration, we are going to call our function and pass in the student we are iterating over's values. We save that to the variable singleStudentHTML. Then we use our handy += to add that on to our empty string that is the variable studentHTML. If you look in the console, you can see that HTML displayed.
for (let i = 0; i < students.length; i++) {
    const singleStudentHTML = createStudentComponent(
        students[i].name, 
        students[i].subject, 
        students[i].info, 
        students[i].score);
    studentHTML += singleStudentHTML;
    console.log(studentHTML);


// this is a "for of" loop- these itterate through each object of an array//
for (const student of students) {
    let studentComponent = ""
    if (student.score >= 60) {    
        studentComponent = "passing"
    } else {
        studentComponent = "failing"
    }
}


        // I love you Shawna!!!!! Kissy moos! You're doing better than you think!

//We're using querySelector to get a reference to the div with the id container. We store that in a variable called studentContainer. Then we use innerHTML on studentContainer (the empty div in our html file) and set that to studentHTML, which now contains all of our student HTML! And we did it all in JavaScript, how cool!
const studentContainer = document.querySelector("#container");
studentContainer.innerHTML = studentHTML;

