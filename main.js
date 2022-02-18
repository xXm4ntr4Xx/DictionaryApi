//initialize variable 
let wordDefinition;
let word;
//create variable linked to the html elements input text and submit button
let inputText = document.querySelector("#wordChoose");
let clickButton = document.querySelector("#submit");
//little paragarph that will contain the definition of the word
 let paragraph = document.querySelector("#wordDefinition");
 



async function dictionaryApi(){ 
  word = inputText.value //assignt the text we wrote in the input button to a variable
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);//1-retrive the data
  const data = await response.json();//2-trasform the data into json file
  wordDefinition = data[0].meanings[0].definitions[0].definition ;//select the element we need in the nested array Api
  paragraph.innerHTML = wordDefinition;// assign the phrase to the paragraph
  inputText.value = "";//clean the input alue after the submit
}  


function buttonInput(e){   
  e.preventDefault();
  dictionaryApi();//call the api function when the button function is called
};

clickButton.addEventListener("click",buttonInput);

