/*
This document contains all the scripts for the user interaction with the question system.
It reads values from a JSON object to populate the HTML and adjust the boostrap card deck
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

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
  compareClients(client_2){
    const client_1_array = this.convert2Array();
    const client_2_array = client_2.convert2Array();
    var similarities = 0;
    for(let i=1; i < 10; i++){
      if(client_1_array[i] == client_2_array[i]){
        similarities++;
      }
      console.log(client_1_array[i] + " " + client_2_array[i]);

    }
    return similarities;
  }
  convert2Array(){
    return [this.petName,this.gender,this.nameLength,this.personality,this.nickname,this.oldName,this.typical,this.petType,this.foodRelate,this.petSize,this.color];
  }
}

var userClientResults =  new newClient();

function generateRandomInt(maxValueRandom){
   return Math.floor(Math.random() * maxValueRandom);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////



var questions = [
    {question: "Quiz",num_cards: 2, ans_1: "Start Quiz", ans_2: "Skip Quiz",},
    {question: "What is your pet's gender?",num_cards: 2, ans_1: "Male", ans_2: "Female", img_1: "resources/male.jpg", img_2: "resources/female.jpg"},
    {question: "Do you like longer names or shorter names?",num_cards: 2, ans_1: "Longer", ans_2: "Shorter", img_1: "resources/long.jpg", img_2: "resources/short.jpg"},
    {question: "What kind of personality does your pet have?",num_cards: 4, ans_1: "Crazy", ans_2: "Lazy", ans_3: "Sweet", ans_4: "Smart", img_1: "resources/crazy.jpg", img_2: "resources/lazy.jpg", img_3: "resources/sweet.jpg", img_4: "resources/smart.jpg"},
    {question: "Do you like nicknames?",num_cards: 2, ans_1: "Yes", ans_2: "No", img_1: "resources/yes1.jpg", img_2: "resources/no1.jpg"},
    {question: "Do you like older, more traditional pet names?",num_cards: 2, ans_1: "Yes", ans_2: "No", img_1: "resources/yes2.jpg", img_2: "resources/no2.jpg"},
    {question: "Do you like typical, more common pet names?",num_cards: 2, ans_1: "Yes", ans_2: "No", img_1: "resources/yes3.jpg", img_2: "resources/no3.jpg"},
    {question: "What species is your pet?",num_cards: 4, ans_1: "Dog", ans_2: "Cat", ans_3: "Rodent", ans_4: "Bird", img_1: "resources/dog.jpg", img_2: "resources/cat.jpg", img_3: "resources/hamster.jpg", img_4: "resources/bird.jpg"},
    {question: "Do you like food-related names?",num_cards: 2, ans_1: "Yes", ans_2: "No", img_1: "resources/yes4.jpg", img_2: "resources/no4.jpg"},
    {question: "What size is your pet?",num_cards: 3, ans_1: "Small", ans_2: "Average", ans_3: "Large", img_1: "resources/small.jpg", img_2: "resources/average.jpg", img_3: "resources/large.jpg"},
    {question: "Do you like names associated with colors?",num_cards: 2, ans_1: "Yes", ans_2: "No", img_1: "resources/yes5.jpg", img_2: "resources/no5.jpg"},
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
        answerlist = [null,null,null,null,null,null,null,null,null,null];
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




  fetch('https://docker-pet-name-generator.herokuapp.com/getAllPets')
    .then(function(res){
      return(res.json());
    })
    .then(function(out){
      var name = 'dummy_name';
      console.log(out)
      document.getElementById('question').innerHTML = 'Your New Pet Name:';


      if (COUNT == 0){
          var tempRow = out[generateRandomInt(out.length)];
          document.getElementById('answer').innerHTML = (tempRow.pet_name);
      }else{


      answerlist[3] = answerlist[3].toLowerCase();
      answerlist[7] = answerlist[7].toLowerCase();
      answerlist[9] = answerlist[9].toLowerCase();
      var userAnswers = new newClient(...answerlist);
      var totalSims = 0;
      out.forEach(row => {
        var rowAnswers = new newClient(row.pet_name, (row.gender == 0 ? "Female" : "Male"), (row.name_length >= 6 ? "Longer" : "Shorter"), row.pet_personality, (row.nickname == 'nickname' ? "Yes" : "No") , (row.old_name == 'new' ? "No" : "Yes"), (row.typ_name == 'unique' ? "No" : "Yes"), row.pet_type , (row.food_relate == 'food' ? "Yes" : "No"), row.pet_size, (row.color_ass == 'color' ? "Yes" : "No"));
        console.log(row.pet_name);

        totalSims += (rowAnswers.gender == userAnswers.gender ? Math.pow(userAnswers.compareClients(rowAnswers), 6) : 0);
        console.log(totalSims);

      });

      var pieLocation = generateRandomInt(totalSims);
      console.log(pieLocation);
      out.some(row => {
        var rowAnswers = new newClient(row.pet_name, (row.gender == 0 ? "Female" : "Male"), (row.name_length >= 6 ? "Longer" : "Shorter"), row.pet_personality, (row.nickname == 'nickname' ? "Yes" : "No") , (row.old_name == 'new' ? "No" : "Yes"), (row.typ_name == 'unique' ? "No" : "Yes"), row.pet_type , (row.food_relate == 'food' ? "Yes" : "No"), row.pet_size, (row.color_ass == 'color' ? "Yes" : "No"));

        pieLocation -= (rowAnswers.gender == userAnswers.gender ? Math.pow(userAnswers.compareClients(rowAnswers), 6) : 0);
         if(pieLocation <= 0){
           document.getElementById('answer').innerHTML = (row.pet_name);
           //replaced for Each with some    some requires return values to break out of loop, true to break
           return true;
         }else{return false;}
      });
}
    });
}



function insert_User_Message(){


  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;
  console.log(name);
  console.log(message);


  fetch("https://docker-pet-name-generator.herokuapp.com/create_UserMessage", {

    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({name: name , message: message}),

    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

// Converting to JSON
.then(response => response.text())

// Displaying results to console
.then(json => {
  console.log(json);
  location.reload();


});







}
