let index=0;
let attemp=0;
let score=0;
let wrong=0;
let question=quiz.sort(function(){
	 return 0.5 -Math.random();
});
let totalQuestion=question.length;
$(function(){
	/*timer */
	let totalTime= 200;
	let min=0;
	let sec=0;
    let counter=0;
	let timer= setInterval(function(){
      counter++;
      min=Math.floor((totalTime - counter) / 60);
      sec=totalTime - min*60 -counter;
      // console.log("min "+min);
      // console.log("sec "+sec);
      $(".timerbox span").text(min+ ":" +sec)
      if (counter==totalTime) {
        alert("Time's Up press ok show the result");
        result();
      	clearInterval(timer)
      }
	},1000);//set timer
    
    printQuestions(index);
});

/*print question function*/
 function printQuestions(i){
 	console.log(question)
 	$(".questionbox").text(question[i].question)
 	$(".optionbox span").eq(0).text(question[i].option[0])
 	$(".optionbox span").eq(1).text(question[i].option[1])
 	$(".optionbox span").eq(2).text(question[i].option[2])
 	$(".optionbox span").eq(3).text(question[i].option[3])
 }

/*check answer*/
function checkAns(option){
  attemp++;
  let optionClick= $(option).data("opt");
  console.log(optionClick);
  if (optionClick==question[index].answer){
  	$(option).addClass("right");
  	score++;
  }else{
  	$(option).addClass("wrong");
  	wrong++;
  }
  $(".scorebox span").text(score);
  $("optionbox span").attr("onclick","")
} 
/*show next question*/
function nextQuestion(){
	// console.log("next");
	if (index>=(question.length -1)) {
		showResult(0);
		return;
	}
	index++;
	$(".optionbox span").removeClass();
	$(".optionbox span").attr("onclick" ,"checkAns(this)");
	printQuestions(index);

}
/*show result*/

function showResult(j){
	if (j == 1 && index < question.length-1 && !confirm("Quiz in not finished yet Press ok to skip quiz & get final result"))
    {
		return;
	}
	result();
}

function result(){
	
	$("#questionscreen").hide();
	$("#resultscreen").show();

	$("#totalquestion").text(totalQuestion);
	$("#attempquestion").text(attemp);
	$("#correctquestion").text(score);
	$("#wrongquestion").text(wrong);
}
