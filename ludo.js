    //For Player One
    var p1, p2;
    var diceWrapper1, diceWrapper2;
    var diceParent1, diceParent2;
    var play1, play2; 
    var winner ;
    var wins, winsIterator, i = 0, j = 0;  
    function myFun(){
        wins = document.getElementById('mainContainer');
        wins.insertAdjacentHTML('beforeend', '<div class="wins"><h1 id="playerOneWins"> Wins : <span id="iteratorOne"></span></h1><h1 id="playerTwoWins"> Wins : <span id="iteratorTwo"></span></h1></div>');
        p1 = document.createElement("div");
        p1.id = "player1Container";
        p1.className = "player1-container";
        var mainDiv = document.getElementById("mainTag");
        mainDiv.prepend(p1);
        var player1 = document.getElementById("player1");
        p1.append(player1);
        diceWrapper1 = document.createElement("div");
        diceWrapper1.id = "diceContainer1";
        p1.append(diceWrapper1);

        //player two
        p2 = document.createElement("div");
        p2.id = "player2Container";
        p2.className = "player2-container";
        var mainDiv = document.getElementById("mainTag");
        mainDiv.append(p2);
        var player2 = document.getElementById("player2");
        p2.append(player2);
        diceWrapper2 = document.createElement("div");
        diceWrapper2.id = "diceContainer2";
        p2.append(diceWrapper2);
    }

    function ludo(){
        diceParent1 = document.getElementById('diceContainer1');
        diceParent1.innerHTML = "" ;
        playerOne();
        if(play1 > play2){
            winner = document.getElementById('result');
            winner.innerText = "Player One is the Winner";
            winsIterator = document.getElementById('iteratorOne');
            i++ ;
            winsIterator = i;
            document.getElementById('iteratorOne').innerHTML = winsIterator;
        }
        else if( play1 < play2){
            winner = document.getElementById('result');
            winner.innerText = "Player Two is the Winner" ;
            winsIterator = document.getElementById('iteratorTwo');
            j++ ;
            winsIterator = j;
            document.getElementById('iteratorTwo').innerHTML = winsIterator;
        }
        else{
            winner = document.getElementById('result');
            winner.innerText = "Oh! \"snap\" This is Draw" ;
        }
    }

    //For Player One

    function playerOne(){
        play1 = Math.floor(Math.random()*6)+1;
        console.log(play1);
        for(let i = 0; i< play1; i++){ 
            var play1_dice = document.createElement("span");
            play1_dice.className = "circle";
            diceWrapper1.append(play1_dice);
        }
        diceParent2 = document.getElementById('diceContainer2');
        diceParent2.innerHTML = "" ;
        playerTwo();  
    }

     //For Player Two
        
     function playerTwo(){
        play2 = Math.floor(Math.random()*6)+1;
        console.log(play2);
        for(let i = 0; i< play2; i++){ 
            var play2_dice = document.createElement("span");
            play2_dice.className = "circle";
            diceWrapper2.append(play2_dice);
        }   
    }
