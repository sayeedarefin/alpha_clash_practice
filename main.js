function play(){
    hideElementById('home-Screen');
    hideElementById('final-Score');
    showElementById('play-Ground');
    console.log('Button CLicked');

    continueGame();
}

function continueGame(){

}

function getARandomAlphabet() {
    // Step 1: Define a string containing all the lowercase alphabets
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';

    // Step 2: Convert the string into an array where each element is a single alphabet
    const alphabets = alphabetString.split(''); // ['a', 'b', 'c', ..., 'z']
    
    // Debug: Log the array of alphabets to the console
    console.log(alphabets);

    // Step 3: Generate a random number between 0 and 25
    const random = Math.random() * 25;

    // Step 4: Round the random number to the nearest integer to get a valid index for the array
    const index = Math.round(random);

    // Debug: Log the random index to the console
    console.log(index);

    // Step 5: Use the random index to select a random alphabet from the array
    const alphabet = alphabets[index];

    // Debug: Log the selected random alphabet to the console
    console.log(alphabet);

    return alphabet; // Returns the selected alphabet , eta na korle 63 line e giye caught khaba

}

// Call the function to execute it and see the output in the console
getARandomAlphabet();


function keyBoardPress(event){
    const playerPressed = event.key;

    console.log("Vaiya tumi chaap diyecho: ", playerPressed);
    
    const currentAlphabetElement = document.getElementById('current-Alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const targetAlphabet = currentAlphabet.toLowerCase();

    console.log(targetAlphabet , playerPressed);
}
document.addEventListener('keyup' , keyBoardPress);

function continueGame(){
    const alphabet = getARandomAlphabet();

    console.log("your random alphabet is: ", alphabet);

    //set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-Alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    //set background color
    addBGbyId(alphabet);
}