var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");
var flashcardArray = [{front: 'What is the study of human life in the past through examination of artifacts, ruins, bones, and fossils?', back: 'Archaeology'},
{front: 'What are human-made objects (tools, jewelry, toys, and coins) that teach about the customs and beliefs of people of the past?', back: 'Artifacts'},
{front: 'Our current calendar was designed in 500 A.D. to highlight whos birthday?', back: 'birth of Christ'},
{front: 'What is the definition of a society that has cities, a well organized government, and workers with specialized job skills?', back: 'a civilization'},
{front: 'What is the name givent to the transfer of ideas or customs from one culture to another?', back: 'Cultural borrowing'},
{front: 'What name is given to a way of life, idea, customs, and skills of a group that are passed along through generations?', back: 'A culture'},
{front: 'What is the name given to the process of digging up remains of the past?', back: 'excavation'},
];

var i = 0; //GLOBAL VARIABLE i WILL LOOP THROUGH flashcardArray

showFlashcards();  //INITIATE SHOWING FLASHCARDS 

function showFlashcards() {
    var newBasicCard = new BasicCard(flashcardArray[i].front, flashcardArray[i].back);
    console.log("\n\n====================\n\nThe next flashcard is : \n\n\n " + newBasicCard.front + "\n\n")
    inquirer.prompt([{
        type: "confirm",
        message: "Turn the flashcard?",
        name: "continue",
        default: true
    }]).then(function(answers) {
        // initializes the variable newguy to be a programmer object which will
        // take in all of the user's answers to the questions above
        if (answers.continue) {
            console.log("\n\nThe Answer Is: \n\n" + newBasicCard.back)
            i += 1;
            if (i === flashcardArray.length) {
                console.log("\n\n******   YOU HAVE SEEN ALL THE FLASHCARDS!!   *******")
                return
            } else {
                showFlashcards();
            }
        } else {
            return;
        }
    })
}

