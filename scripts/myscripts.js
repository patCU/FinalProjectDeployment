/*
This document contains all the scripts for the user interaction with the question system.
It reads values separated by a delimiter from a text file to populate the HTML and adjust the boostrap card deck
*/


var questions = [
    {question: "Quiz",num_cards: 2, ans_1: "Start Quiz", ans_2: "Skip Quiz", img_1: "", img_2: ""},
    {question: "What is your pet's gender?",num_cards: 2, ans_1: "Male", ans_2: "Female", img_1: "", img_2: ""},
    {question: "Do you like longer names or shorter names?",num_cards: 2, ans_1: "Longer", ans_2: "Shorter", img_1: "", img_2: ""},
    {question: "What kind of personality does your pet have?",num_cards: 4, ans_1: "Crazy", ans_2: "Lazy", ans_3: "Sweet", ans_4: "Smart", img_1: "", img_2: "", img_3: "", img4_4: ""},
    {question: "Do you like nicknames?",num_cards: 2, ans_1: "Yes", ans_2: "No", img_1: "", img_2: ""},
    {question: "Do you like older, more traditional pet names?",num_cards: 2, ans_1: "Yes", ans_2: "No", img_1: "", img_2: ""},
    {question: "Do you like typical, more common pet names?",num_cards: 2, ans_1: "Yes", ans_2: "No", img_1: "", img_2: ""},
    {question: "What species is your pet?",num_cards: 4, ans_1: "Dog", ans_2: "Cat", ans_3: "Rodent", ans_4: "Bird", img_1: "", img_2: "", img_3: "", img4_4: ""},
    {question: "Do you like food-related names?",num_cards: 2, ans_1: "Yes", ans_2: "No", img_1: "", img_2: ""},
    {question: "What size is your pet?",num_cards: 3, ans_1: "Small", ans_2: "Average", ans_3: "Large", img_1: "", img_2: "", img_3: ""},
    {question: "Do you like names associated with colors?",num_cards: 2, ans_1: "Yes", ans_2: "No", img_1: "", img_2: ""},
];

const questions_length = 11;
var COUNT = 0;
var answerlist = [];

function loadCSS(){
    document.getElementById('choice1').style.display = 'flex';
    document.getElementById('choice2').style.display = 'none';
    document.getElementById('choice3').style.display = 'none';
    document.getElementById('choice4').style.display = 'none';
};

function questionAnswer(answer){
    //If user skips quiz entirely
    if (COUNT == 0 && answer == 0){
        displayName();
    }else{
        if (answer == 0){
            //Records if user skips question
            answerlist[COUNT] = 'Skip';
        }else{
            //Records innerHTML of answer given by user in the answerlist
            answerlist[COUNT] = document.getElementById('choice' + answer + '_btn').innerHTML;
        }

        if (COUNT != questions_length - 1){
            //Replaces quiz question
            document.getElementById('question').innerHTML = questions[COUNT + 1].question;

            //Resets all cards to not display
            for (var i = 1; i <= 4; i++){
                document.getElementById('choice' + i).style.display = 'none';
            }

            //Iterates through and populates cards with HTML in 'questions'
            for (var i = 1; i <= questions[COUNT + 1].num_cards; i++){
                document.getElementById('choice' + i).style.display = 'flex';
                switch(i){
                    case 1:
                        document.getElementById('choice1_img').src = questions[COUNT + 1].img_1;
                        document.getElementById('choice1_btn').innerHTML = questions[COUNT + 1].ans_1;
                        break;
                    case 2:
                        document.getElementById('choice2_img').src = questions[COUNT + 1].img_2;
                        document.getElementById('choice2_btn').innerHTML = questions[COUNT + 1].ans_2;
                        break;
                    case 3:
                        document.getElementById('choice3_img').src = questions[COUNT + 1].img_3;
                        document.getElementById('choice3_btn').innerHTML = questions[COUNT + 1].ans_3;
                        break;
                    case 4:
                        document.getElementById('choice4_img').src = questions[COUNT + 1].img_4;
                        document.getElementById('choice4_btn').innerHTML = questions[COUNT + 1].ans_4;
                        break;
                }
            }
            document.getElementById('skip').innerHTML = 'Skip Question';
            COUNT++;
        }else{
            if (answer == 0){
                //Records if user skips question
                answerlist[COUNT] = 'Skip';
            }else{
                //Records innerHTML of answer given by user in the answerlist
                answerlist[COUNT] = document.getElementById('choice' + answer + '_btn').innerHTML;
            }
            COUNT++;

            displayName();

            for (var i = 0; i < COUNT; i++){
                console.log(answerlist[i]);
            }
        }
    }
};

function displayName(){
    document.getElementById('choice1').style.display = 'none';
    document.getElementById('choice2').style.display = 'none';
    document.getElementById('choice3').style.display = 'none';
    document.getElementById('choice4').style.display = 'none';
    document.getElementById('skip').style.display = 'none';

    var name = 'dummy_name';


  fetch('https://docker-pet-name-generator.herokuapp.com/getAllPets')
    .then(function(res){
      return(res.json());
    })
    .then(function(out){
      console.log(out)
    });


    document.getElementById('question').innerHTML = 'Your New Pet Name:';
    document.getElementById('answer').innerHTML = (name);
}









function generateRandomInt(maxValueRandom){
   return Math.floor(Math.random() * maxValueRandom);
}

function aquireRandomNameFromDatabase(){}

class newClient{
  constructor(petName, gender, nameLength, personality, nickname, oldName, typical, petType, foodRelate, petSize, color){
    this.petName = petName;
    this.gender = gender;
    this.nameLength = nameLength;
    this.personality = personality;
    this.nickname = nickname;
    this.oldName = oldName;
    this.typical = typical;
    this.petType = petType;
    this.foodRelate = foodRelate;
    this.petSize = petSize;
    this.color = color;
  }
}

var userClient =  new newClient();


function set_userClass_Attribute(){}


function fillClientArray(userClient){
  const generatedNames = [];

}
