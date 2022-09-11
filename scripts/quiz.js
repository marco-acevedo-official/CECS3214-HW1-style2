const determinedAnswers_array = new Array("a", "a", "c", "b", "c", "a", "b", "d", "d", "d");//Predetermined answers
const temporaryChoice_array = 	new Array();//temporary storage
const chosenAnswers_array =		new Array();

const quizDivCurrentScore_element = 			document.getElementById('quizDivCurrentScore');//DIV to display the live score
const quizDivCurrentQuestionDisplay_element = 	document.getElementById('quizDivCurrentQuestionDisplay');//DIV to display the question
const quizFormInputSubmit_element = 			document.getElementById('quizFormInputSubmit');
const quizForm_element = 						document.getElementById('quizForm');//The form element containing choice buttons and submit
const afterQuizDiv = 							document.getElementById('afterquiz');

var question_counter=0;//Counter to know which answer to display
var quiz_status = -1;//-1 is for before the quizz, 0 for during the quizz, 1 for after the quizz
var current_score = 0;//Score the user has accumulated

hideElementByID("duringquiz");//Executed on script load
hideElementByID("afterquiz");//Executed on script load


//Pre Quizz Button Calls this function
	function quizStart(){
		hideElementByID("prequiz");
		showElementByID("duringquiz");
		quiz_status=0;
		updateScore(0);
		nextQuestion();
	}

	function hideElementByID(elementID) {
		var x = document.getElementById(elementID);
		x.style.display = "none";
  	}

	function showElementByID(elementID) {
		document.getElementById(elementID).style.display = "block";
	}

	//Adds a fixed amount to the current_score
	function updateScore(amount){
		current_score += amount;
		quizDivCurrentScore_element.innerText = "Current Score: " + current_score;
	}

	function nextQuestion(){
		if(question_counter < 10){
			question_counter++;
			quizDivCurrentQuestionDisplay_element.innerText = "";
			displayImageOfQuestion();
		}else{
			//TODO: What happens when no more questions are left
			quizEnd();
		}
	}

	//Works with nextQuestion
	//Displays an image of the question on the DIV
	function displayImageOfQuestion() {
		let a = document.createElement("img");
		a.src = "../media/quiz/"+question_counter+".png";
		a.width = 600;//need to find a better way to display image
		quizDivCurrentQuestionDisplay_element
	.appendChild(a);
	}

	function getAns(choice){
			while(temporaryChoice_array.length>=1){
				temporaryChoice_array.pop();
			}
		temporaryChoice_array.push(choice);
	}

	function confirmAns(){
		if(temporaryChoice_array.length == 0){
			//No ans to submit
			return;
		}
		chosenAnswers_array.push(temporaryChoice_array[0])
		if(temporaryChoice_array[0] === determinedAnswers_array[question_counter-1]){
			updateScore(1);
		}else{
			//wrong answer
		}
		nextQuestion();
	}

	function quizEnd(){
		hideElementByID("duringquiz");
		afterQuizDiv.innerText = "";
		let content = "";
		for(let i =0;i<10;i++){
			if(chosenAnswers_array[i] === determinedAnswers_array[i]){
				content+="Correct - "
			}else{
				content+="Inorrect - "
			}
			content+=(i+1);
			content+=". You Chose: " + chosenAnswers_array[i];
			content+=", Answer: " + determinedAnswers_array[i];
			content+="\n";
		}
		showElementByID("afterquiz");
		afterQuizDiv.innerText = content;
	}

	