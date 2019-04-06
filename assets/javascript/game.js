//On page load show all player choicese in intial position with starting desc and health


$(document).ready(function(){
    $(".char-b").html("<div class='char'><div class='health'>AVG 0.358</div><img src='././assets/images/barry.jpg'><div class='desc'>Barry Bonds</div></div>");
    $(".char-a").html("<div class='char'><div class='health'>AVG 0.389</div><img src='././assets/images/arod.jpg'><div class='desc'>Arod</div></div>");
    $(".char-h").html("<div class='char'><div class='health'>AVG 0.365</div><img src='././assets/images/hank.jpg'><div class='desc'>Hank Aaron</div></div>");
    $(".char-t").html("<div class='char'><div class='health'>ERA 3.74</div><img src='././assets/images/tim.jpg'><div class='desc'>Tim Lincecum</div></div>");
    $(".char-m").html("<div class='char'><div class='health'>ERA 1.38</div><img src='././assets/images/mad.jpg'><div class='desc'>Mad Baumgarner</div></div>");
    $(".char-v").html("<div class='char'><div class='health'>ERA 4.48</div><img src='././assets/images/vog.jpg'><div class='desc'>Ryan Vogelsong</div></div>");
    updateScoreboard();
} );


var hits=0
var runs=0
var strikes =0
var balls=0
var outs=0
var play= "0"
// Move Batter Character when Selected 

function moveButton(elem){
    if( $(elem).parent().attr("class") == "choices" ){
        $(elem).detach().appendTo('#playfieldB');
        $(".choices").empty();
    }
    else{
        $(elem).detach().appendTo('.choices'); 
    }
}


// Move Pitcher Chaacter when selected 
function move(elem){
    if( $(elem).parent().attr("class") == "opponent" ){
        $(elem).detach().appendTo('#playfieldP');
        $(".opponent").empty ();
    }
    else{
        $(elem).detach().appendTo('.opponent'); 
    }
}

function myLog(myMessage) {

    console.log(myMessage)

}

//Update Score Board 

function updateScoreboard (){
    $("#runs").text(runs);
    $("#hits").text(hits);
    $("#strikes").text(strikes);
    $("#balls").text(balls);
    $("#outs").text(outs); 
}

// Start Match Up
function scoreUpdate(){

console.log("play="+play);

switch (play.toString()) {
    case "0":
        hits++;
        break
    case "1":
        runs++;
        break
    case "2":
        strikes++
        break
    case "3":
        balls++
        break 
    default:
        myLog("failed")
}


updateScoreboard();

}

$("#hit").on("click", function(){
    var stats =[Math.floor(Math.random()*4)];
    play = stats.toString();
    
    scoreUpdate();
})




