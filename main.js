function play(){
    hideElementById('home-Screen');
    hideElementById('final-Score');
    showElementById('play-Ground');
    console.log('Button CLicked');

    setTextElementValueById('current-Score' , 0);
    setTextElementValueById('current-Life' , 5);

    continueGame();
}

// function continueGame(){

// }

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

    if(targetAlphabet === playerPressed){
        console.log("You earned a point");
        const currentScore = getTextElementValueById('current-Score');
        const updatedScore = currentScore+1;
        setTextElementValueById('current-Score' , updatedScore);

        removeBGbyId(targetAlphabet);
        continueGame();
    }
    else{
        console.log("vul key chaap diyecho vaiya");
        const currentLife = getTextElementValueById('current-Life');
        const updatedLife = currentLife-1;
        setTextElementValueById('current-Life' , updatedLife);
        
        if(updatedLife === 0){
            console.log("Game over");

            gameOver();
        }
    }
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

function gameOver(){
    hideElementById('play-Ground');
    showElementById('final-Score');

    const lastScore = getTextElementValueById('current-Score');
    setTextElementValueById('last-Score' , lastScore);

    const currentAlphabet = getElementTextById('current-Alphabet');

    console.log(currentAlphabet);

    removeBGbyId(currentAlphabet);
}