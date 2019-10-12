var gemTotal = 0;
var wins = 0;
var loss = 0;

// GEM'S RANDOM #
var min = 1;
var max = 12;
var orange = Math.floor(Math.random() * (max - min) + min);
var pink = Math.floor(Math.random() * (max - min) + min);
var blue = Math.floor(Math.random() * (max - min) + min);
var red = Math.floor(Math.random() * (max - min) + min);

// COMPUTER SETS RANDOM # 19 -120
var minC = 19;
var maxC = 120;
var compNumber = Math.floor(Math.random() * (maxC - minC) + minC);


document.getElementById("randomNumber").innerHTML = compNumber


// Resets for the Game
var reset = function(){
    gemTotal = 0;
    compNumber = document.getElementById("randomNumber").innerHTML =
    Math.floor(Math.random() * (maxC - minC) + minC);
    console.log(compNumber);
    orange = Math.floor(Math.random() * (max - min) + min);
    pink = Math.floor(Math.random() * (max - min) + min);
    blue = Math.floor(Math.random() * (max - min) + min);
    red = Math.floor(Math.random() * (max - min) + min);
}

// GAME OUTCOME
var result = function (){
    if (gemTotal === compNumber){
        reset();
        wins++;
        $("#winScore").text("Wins: " + wins);
        $("#userTotal").text(gemTotal);
        alert("You won!!!");
        console.log("winner!")
    }
    else if (gemTotal > compNumber){
        reset();
        loss++;
        $("#lossScore").text("Loss: " + loss);
        $("#userTotal").text(gemTotal);
        alert("Loser!!!");
        console.log("loser!")
};
}

// GEM CLICKS ADDS UP
$("#gemO").on("click", function(){
    gemTotal += orange;
    $("#userTotal").text(gemTotal);
    result();
    console.log("orange: " + orange);
});
$("#gemP").on("click", function(){
    gemTotal += pink;
    $("#userTotal").text(gemTotal);
    result();
    console.log("pink: " + pink);
});
$("#gemB").on("click", function(){
    gemTotal += blue;
    $("#userTotal").text(gemTotal);
    result();
    console.log("blue: " + blue);
});
$("#gemR").on("click", function(){
    gemTotal += red;
    $("#userTotal").text(gemTotal);
    result();
    console.log("red: " + red);
});

