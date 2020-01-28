var y = Math.floor(Math.random()*100)+1; 
       
    var guess = 1; 
    
    let guessed;

    document.getElementById("submitguess").onclick = function(){ 
           
        var x = document.getElementById("guessField").value; 
 
        if(guess<=10){
            if(x > 100 || x < 1){
                document.querySelector('.result').textContent = "Please Enter Number Between 1 and 100"; 
            }else{
                document.querySelector('.turn').textContent = 10 - guess + " left";
                if(x == y){     
                    document.querySelector('.result').textContent = "AWESOME*_* you guessed it right in " + guess + " GUESS ";                   
                    guess = 12;
                }else if(x > y){     
                        guess++;
                        document.querySelector('.result').textContent = "Too High"; 
                    }else{ 
                        guess++; 
                        document.querySelector('.result').textContent = "Too Low"; 
                    } 
                    if(guess == 2){
                        guessed = x;
                    }else{
                        guessed += ", "+x;
                    }
                    document.querySelector('.Previousguessed').textContent = guessed; 
            }                
        }

        if(guess == 11){
                document.querySelector('.result').textContent = "YOU Noob! THE answer is " + y + "."; 
        }
    
    }
