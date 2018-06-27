//assigns random number user is trying to match

$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    console.log(Random)
    $('#number').text(Random);

//array of 4 random numbers, prints the wins & losses variables

var GeneratedNumbers = []
var total= 0;	
var wins= 0;
var losses = 0;
$('#numberWins').text(wins);
$('#numberLosses').text(losses);		


//assigns random numbers to each jewel image

function fourRandomNumbers(){
for (var i = 0; i < 4; i++) {
    var num = Math.floor(Math.random()*11+1);
    GeneratedNumbers.push(num);
}
console.log(GeneratedNumbers) 
}

fourRandomNumbers();


//resets game

function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#number').text(Random);
    GeneratedNumbers = [];
    fourRandomNumbers();
    total= 0;
    $('#Combined').text(total);
    } 

//prints the wins to the total
function yay(){
alert("You won!!!");
    wins++;	
    $('#numberWins').text(wins);
    reset();
}

//prints the losses to the total
function loser(){
alert ("You lose!!");
    losses++;
    $('#numberLosses').text(losses);
    reset();
}

    $('#one').on ('click', function(){
        total = total + GeneratedNumbers[0];
        console.log("New total= " + total);
        $('#Combined').text(total);	

         //sets win/lose conditions
         
                if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }		
    })	

    $('#two').on ('click', function(){
        total = total + GeneratedNumbers[1];
        console.log("New total= " + total);
        $('#Combined').text(total);	

                if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }	
    })	

    $('#three').on ('click', function(){
        total = total + GeneratedNumbers[2];
        console.log("New total= " + total);
        $('#Combined').text(total);


//sets win-lose conditions


                    if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }	
    })	

    $('#four').on ('click', function(){
        total = total + GeneratedNumbers[3];
        console.log("New total= " + total);
        $('#Combined').text(total);	

            
                    if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }
    });  	

});	