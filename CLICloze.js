var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var flashcardArray = [{ fullText: 'Archaeology is the study of human life in the past through examination of artifacts, ruins, bones, and fossils.', clozeText: 'Archaeology' },
    { fullText: 'Artifacts are human-made objects (tools, jewelry, toys, and coins) that teach about the customs and beliefs of people of the past.', clozeText: 'Artifacts' },
    { fullText: 'Our current calendar was designed in 500 A.D. to highlight the birth of Christ .', clozeText: 'birth of Christ' },
    { fullText: 'A civilization is a society that has cities, a well organized government, and workers with specialized job skills.', clozeText: 'civilization' },
    { fullText: 'Cultural borrowing is the transfer of ideas or customs from one culture to another.', clozeText: 'Cultural borrowing' },
    { fullText: 'Culture is a way of life, idea, customs, and skills of a group that are passed along through generations.', clozeText: 'Culture' },
    { fullText: 'The process of digging up remains of the past is called excavation .', clozeText: 'excavation' },
    { fullText: 'The earliest humans were called hunter-gatherers because they hunted for wild animals and gathered wild plants for food.', clozeText: 'hunter-gatherers' },
    { fullText: 'Oral tradition is stories, myths, and legends that are passed on by word of mouth from generation to generation.', clozeText: 'Oral tradition' },
    { fullText: 'Prehistory is history that took place before the development of writing.', clozeText: 'Prehistory' },
    { fullText: 'Early civilizations developed near river systems which provided food, water, transportation, trade and irrigation.', clozeText: 'river systems' }
];

var i = 0; //GLOBAL VARIABLE i WILL LOOP THROUGH flashcardArray

showFlashcards();  //INITIATE SHOWING FLASHCARDS 

function showFlashcards() {
    var newClozeCard = new ClozeCard(flashcardArray[i].fullText, flashcardArray[i].clozeText);
    console.log("\n\n====================\n\nThe next flashcard is : \n\n\n " + newClozeCard.partial + "\n\n")
    inquirer.prompt([{
        type: "confirm",
        message: "Turn the flashcard?",
        name: "continue",
        default: true
    }]).then(function(answers) {
        // initializes the variable newguy to be a programmer object which will
        // take in all of the user's answers to the questions above
        if (answers.continue) {
            console.log("\n\n" + newClozeCard.cloze + "\n\n" + newClozeCard.fullText)
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

