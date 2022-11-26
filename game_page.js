player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn : "+ player1_name;
document.getElementById("player_answer").innerHTML="Answer turn : "+player2_name;

function send(){
var word=document.getElementById("word").value;
word_toSmall=word.toLowerCase();
console.log("Lower Case : "+word_toSmall);

charat1=word_toSmall.charAt(1);
console.log("Char At : "+charat1);

length1=Math.floor(word_toSmall.length/2);
charat2=word_toSmall.charAt(length1);
console.log("Charat 2 : "+charat2);

length2=word_toSmall.length-1;
charat3=word_toSmall.charAt(length2);
console.log("Charat 3 : "+charat3);

remove1=word_toSmall.replace(charat1,"_");
remove2=remove1.replace(charat2,"_");
remove3=remove2.replace(charat3,"_");
console.log("Question : "+remove3);

question="<h4 id='word_display'> Q. "+remove3+"</h4>";
answer_box="<br> Ans : <input  type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

row=question+answer_box+check_button;
document.getElementById("output").innerHTML=row;

document.getElementById("word").value="";

}

question_turn="player1";
answer_turn="player2";

function check(){

ans=document.getElementById("input_check_box").value;
ans_toLower=ans.toLowerCase();
console.log(ans_toLower);

if(ans_toLower==word_toSmall){

    if(answer_turn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }

    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }

}

if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_question").innerHTML="Question turn : "+player2_name;
}

else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question turn :"+player1_name;
}




if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="Answer turn : "+player2_name;
}

else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="Answer turn :"+player1_name;
}

document.getElementById("output").innerHTML="";

}
